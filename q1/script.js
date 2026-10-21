"use strict";

const message = document.getElementById("message");
const changeButton = document.getElementById("changeBtn");

function changeMessage() {
  message.textContent = "Hello there!";
}

changeButton.addEventListener("click", changeMessage);
