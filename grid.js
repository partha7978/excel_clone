let rows = 100;
let cols = 26;

let addressColContainer = document.querySelector(".address__column-container");
let addressRowContainer = document.querySelector(".address__row-container");
let cellsContainer = document.querySelector(".cells__container");

let addressBarPlaceholder = document.querySelector(".address-bar");

//todo: creating rows
for (let i = 0; i < rows; i++) {

    let addressCol = document.createElement("div");
    addressCol.innerText = i + 1;
    addressCol.classList.add("address-row");
    addressColContainer.appendChild(addressCol);
}

//todo: creating cols
for (let i = 0; i < cols; i++) {
    let addressRow = document.createElement("div");
    addressRow.innerText = String.fromCharCode(65 + i);
    addressRow.classList.add("address-col");
    addressRowContainer.appendChild(addressRow);
}

//todo: creating cells
for (let i = 0; i < rows; i++) {
    let cellRow = document.createElement("div");
    cellRow.classList.add("cells__row-container");

    for (let j = 0; j < cols; j++) {
        let cell = document.createElement("div");
        cell.classList.add("cell");
        cellRow.appendChild(cell);
        cell.setAttribute('contenteditable', 'true');
        updateAddressBarPlaceholder(cell, i, j);
    }
    cellsContainer.appendChild(cellRow);
}

//todo: updating address bar placeholder with column and row positions
function updateAddressBarPlaceholder(cell, i, j) {
    cell.addEventListener("click", () => {
        addressBarPlaceholder.value = String.fromCharCode(65 + j) + (i + 1);
    })
}