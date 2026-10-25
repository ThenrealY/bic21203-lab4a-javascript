"use strict";

const output = document.getElementById("bookOutput");

function addFact(container, labelText, valueText) {
  const fact = document.createElement("div");
  fact.className = "fact";

  const label = document.createElement("span");
  label.className = "label";
  label.textContent = labelText;

  const value = document.createElement("p");
  value.className = "value";
  value.textContent = valueText;

  fact.append(label, value);
  container.appendChild(fact);
}

async function loadBooks() {
  try {
    const response = await fetch("books.json");
    if (!response.ok) {
      throw new Error(`Request failed with status ${response.status}`);
    }

    const data = await response.json();
    if (!data.books || !Array.isArray(data.books) || data.books.length < 2) {
      throw new Error("The JSON file does not contain two books.");
    }

    const [firstBook, secondBook] = data.books;
    const factList = document.createElement("div");
    factList.className = "fact-list";

    addFact(factList, "First book title", firstBook.title);
    addFact(factList, "Second book author", secondBook.author);
    addFact(factList, firstBook.title, firstBook.genres.join(", "));
    addFact(factList, secondBook.title, secondBook.genres.join(", "));

    output.replaceChildren(factList);
  } catch (error) {
    const errorMessage = document.createElement("p");
    errorMessage.className = "error";
    errorMessage.textContent = "Sorry, the book data could not be loaded. Run this page through a local server and try again.";
    output.replaceChildren(errorMessage);
    console.error(error);
  }
}

loadBooks();
