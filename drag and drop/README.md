# Simple Kanban Board

A minimal drag-and-drop Kanban board built with vanilla HTML, CSS, and JavaScript — no libraries or frameworks required.

## Demo

Live Demo: [Drag and Drop](https://wonderful-beijinho-91d5f0.netlify.app)

## Features

- Three columns: **To Do**, **In Progress**, and **Done**
- Drag cards between columns using the native HTML5 Drag and Drop API
- Visual highlight on the drop target column while dragging
- Responsive layout — columns stack vertically on screens under 768px

## Project Structure

```
drag and drop/
├── index.html   # Board markup with draggable cards
├── style.css    # Layout and visual styles
└── script.js    # Drag-and-drop event logic
```

## How It Works

The HTML5 Drag and Drop API is used entirely without external dependencies:

- `dragstart` — stores the dragged card's `id` in `dataTransfer`
- `dragover` / `dragenter` — prevent default browser behavior to allow dropping; adds `.over` highlight to the target column
- `dragleave` — removes the highlight when the cursor leaves a column
- `drop` — retrieves the card `id` from `dataTransfer` and appends the card to the target column

## Usage

1. Clone or download the repo
2. Open `index.html` in your browser
3. Drag any card to a different column

No build step or dependencies needed.
