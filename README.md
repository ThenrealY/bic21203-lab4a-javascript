# BIC21203 Lab 4a JavaScript

## Student details

- Name: Complete before submission
- Student ID: Complete before submission
- GitHub repository: Add after publishing

## Overview

This repository contains three independent browser exercises demonstrating JavaScript functions, event listeners, conditions, input validation, loops, and safe DOM updates.

## Files

- `q1/index.html` and `q1/script.js` - changes a paragraph after a button click.
- `q2/index.html` and `q2/script.js` - validates input and compares a finite number with 10.
- `q3/index.html` and `q3/script.js` - generates five list items and clears old items before each run.
- `assets/styles.css` - shared presentation and accessibility styles.
- `screenshots/` - browser evidence used in the report.
- `lab4a-report.pdf` - concise submission report.

## How to run

Open each `index.html` file in a current desktop browser. A local server is optional for this lab. With VS Code Live Server, right-click an `index.html` file and choose **Open with Live Server**.

## Test cases

### Question 1

1. Open `q1/index.html`.
2. Confirm the starting text is `Welcome to my website!`.
3. Select **Change Message**.
4. Confirm the text becomes `Hello there!`.

### Question 2

Test `5`, `10`, `15`, `abc`, an empty value, and `10.5`. The page should show the matching lower, equal, higher, or invalid message.

### Question 3

Select **Generate Numbers** twice. After both clicks, the ordered list should contain exactly five items, from `The number is 1` to `The number is 5`.

## Implementation notes

The scripts use `addEventListener()` instead of inline event attributes. User-facing text is assigned with `textContent`, and list items are created with `document.createElement()`. Question 3 uses `replaceChildren()` before the loop to prevent duplicates.
