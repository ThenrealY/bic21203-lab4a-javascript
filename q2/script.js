"use strict";

const numberInput = document.getElementById("userInput");
const checkButton = document.getElementById("checkBtn");
const result = document.getElementById("result");

function checkInput() {
  const rawValue = numberInput.value.trim();

  if (rawValue === "") {
    result.textContent = "Please enter a valid number!";
    return;
  }

  const number = Number(rawValue);

  if (!Number.isFinite(number)) {
    result.textContent = "Please enter a valid number!";
  } else if (number < 10) {
    result.textContent = "The number is lower than 10";
  } else if (number > 10) {
    result.textContent = "The number is higher than 10";
  } else {
    result.textContent = "The number is equal to 10";
  }
}

checkButton.addEventListener("click", checkInput);

numberInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    checkInput();
  }
});
