# BIC21203 Lab 4b JSON and jQuery

## Student details

- Name: Muhammad Danial Bin Mohd Yatim
- Student ID: DI230045
- GitHub repository: https://github.com/ThenrealY/bic21203-lab4a-javascript/tree/main/lab4b-json-jquery

## Overview

This repository contains a valid JSON dataset, a native JavaScript page that retrieves the dataset with `fetch()`, and a jQuery page that demonstrates DOM text replacement, class addition, and click-event handling.

## Files

- `books.json` - top-level `books` array with two correctly typed book objects.
- `books.html` and `books.js` - fetch and display the required book data with error handling.
- `jquery-dom.html` and `jquery-dom.js` - jQuery 4.0.0 full-build CDN integration and the three required operations.
- `styles.css` - shared page presentation.
- `screenshots/` - browser evidence used in the report.

## How to run

Question 2 must run through a local development server because browsers restrict `fetch()` from local `file://` pages.

### VS Code Live Server

1. Open this folder in VS Code.
2. Right-click `books.html`.
3. Choose **Open with Live Server**.
4. Open `jquery-dom.html` from the same server.

### Python alternative

From this folder, run:

```text
python -m http.server 8000
```

Then visit:

- `http://localhost:8000/books.html`
- `http://localhost:8000/jquery-dom.html`

## Expected output

The book page displays:

- First book title: The Great Gatsby
- Second book author: Harper Lee
- The Great Gatsby: Fiction, Classics
- To Kill a Mockingbird: Fiction, Coming-of-Age

The jQuery page changes `Original Text` to `Modified Text`, applies the coral `myStyle` class to `#myDIV`, and shows `Button clicked!` when the button is selected.

## Short comparison

Native JavaScript has no external dependency and provides modern browser APIs for direct DOM and event work. An existing project may still use jQuery when its established plugins and codebase depend on jQuery conventions, making a full rewrite unnecessary or risky.
