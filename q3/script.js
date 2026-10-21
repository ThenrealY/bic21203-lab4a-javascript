"use strict";

const generateButton = document.getElementById("generateBtn");
const numberList = document.getElementById("numberList");

function generateNumbers() {
  numberList.replaceChildren();

  for (let number = 1; number <= 5; number += 1) {
    const listItem = document.createElement("li");
    listItem.textContent = `The number is ${number}`;
    numberList.appendChild(listItem);
  }
}

generateButton.addEventListener("click", generateNumbers);
