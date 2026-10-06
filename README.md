# Tender Document Package Builder

A client-side web application built for the AI DevFest contest to manage, validate, and bundle tender documents into a single professional PDF package.

## Features
- **JSON Ingestion**: Automatically reads tender details and requirements.
- **PDF Upload & Validation**: Validates document types and expiry dates against submission deadlines.
- **Auto-Matching**: Automatically maps uploaded PDF files based on naming conventions.
- **Dynamic PDF Generation**: Generates a unified package complete with a cover page, included document list, and page-numbered footers using `pdf-lib`.
- **Bilingual Support**: Toggle interface between English and Bengali.

## Tech Stack
- HTML5 & Vanilla JavaScript
- PDF-Lib & PDF.js
