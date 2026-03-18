# Quiz Master!

A clean, beginner-friendly quiz web app built with vanilla HTML, CSS, and JavaScript — no frameworks or libraries required.

**Live Demo:** [Quiz Master](https://scintillating-genie-3c03a0.netlify.app)

---

## Features

- 3-screen flow: Start → Quiz → Results
- 5 general knowledge questions with 4 multiple-choice answers each
- Instant visual feedback — correct answers highlight green, wrong answers highlight red
- Live score tracker updated after each question
- Animated progress bar that fills as you advance
- Result screen with a personalised message based on your final score
- Fully responsive layout for mobile and desktop

---

## Project Structure

```
1. Quiz/
├── index.html   # App structure and screen layout
├── style.css    # Styling, theming, and responsive design
├── script.js    # Quiz logic, state management, and DOM interactions
└── README.md
```

---

## How It Works

1. The **Start Screen** welcomes the user and offers a button to begin.
2. The **Quiz Screen** displays one question at a time with four answer options.
   - Clicking an answer locks further input and reveals which answer was correct.
   - The score and progress bar update automatically.
3. The **Result Screen** shows the final score and a message based on performance.
   - The user can restart and play again from here.

### Score Messages

| Score       | Message                            |
|-------------|------------------------------------|
| 100%        | Perfect! You're a genius!          |
| 80% – 99%   | Great job! You know your stuff!    |
| 60% – 79%   | Good effort! Keep learning!        |
| 40% – 59%   | Not bad! Try again to improve!     |
| Below 40%   | Keep studying! You'll get better!  |

---

## Getting Started

No build tools or dependencies needed. Just open the project in a browser:

```bash
# Clone the repo
git clone https://github.com/your-username/quiz-app.git

# Open in browser
open index.html
```

Or drag `index.html` directly into any browser window.

---

## Tech Stack

| Technology | Purpose              |
|------------|----------------------|
| HTML5      | Structure and markup |
| CSS3       | Styling and layout   |
| JavaScript | Logic and interactivity |

---

## Customising Questions

Questions are stored as a plain array in `script.js`. To add, remove, or edit questions, update the `quizQuestions` array:

```js
{
  question: "Your question here?",
  answers: [
    { text: "Option A", correct: false },
    { text: "Option B", correct: true  },
    { text: "Option C", correct: false },
    { text: "Option D", correct: false }
  ]
}
```

Each question needs exactly one answer with `correct: true`.

---

## License

This project is open source and available under the [MIT License](LICENSE).
