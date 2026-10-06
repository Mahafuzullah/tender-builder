# Tender Document Package Builder

A client-side web application built for the AI DevFest contest to manage, validate, and bundle tender documents into a single professional PDF package.

## Student Information
- **Name**: Md Mahafuzullah Uday
- **Registration Number**: 251-15-673

## Live Demo Link
- https://mahfuzullah.github.io/tender-builder/

## How to Run the App
1. Open the live demo link in any modern web browser (Google Chrome recommended).
2. Alternatively, clone the repository and open `index.html` directly in the browser.

## Main Features Done
- **JSON Ingestion**: Automatically reads tender details and requirements.
- **PDF Upload & Validation**: Validates document types and expiry dates against submission deadlines.
- **Auto-Matching**: Automatically maps uploaded PDF files based on naming conventions.
- **Dynamic PDF Generation**: Generates a unified package complete with a cover page, included document list, and page-numbered footers using `pdf-lib`.
- **Bilingual Support**: Toggle interface between English and Bengali.

## Bonus Features
- Clean status badge UI and automatic date safety offset calculations.

## Known Problems
- None.

## AI Tools Used
- Gemini / ChatGPT for code generation and workflow structure.

## Most Useful Prompt
"Create an auto-matching logic for tender PDF files and JSON requirements, verifying expiry dates against the submission deadline and generating a bundled PDF with a cover page and footer."
