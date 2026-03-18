// ─── DOM References ───────────────────────────────────────────────────────────

const startScreen        = document.getElementById('start-screen');
const quizScreen         = document.getElementById('quiz-screen');
const resultScreen       = document.getElementById('result-screen');
const startBtn           = document.getElementById('start-btn');
const questionText       = document.getElementById('question-text');
const answersContainer   = document.getElementById('answers-container');
const currentQuestionSpan = document.getElementById('current-question');
const totalQuestionsSpan = document.getElementById('total-questions');
const scoreSpan          = document.getElementById('score');
const finalScoreSpan     = document.getElementById('final-score');
const maxScoreSpan       = document.getElementById('max-score');
const resultMessage      = document.getElementById('result-message');
const restartBtn         = document.getElementById('restart-btn');
const progressBar        = document.getElementById('progress');

// ─── Quiz Data ────────────────────────────────────────────────────────────────

const quizQuestions = [
  {
    question: "What is the capital city of France?",
    answers: [
      { text: "Berlin",  correct: false },
      { text: "Madrid",  correct: false },
      { text: "Paris",   correct: true  },
      { text: "Lisbon",  correct: false }
    ]
  },
  {
    question: "Which planet is known as the Red Planet?",
    answers: [
      { text: "Venus",   correct: false },
      { text: "Mars",    correct: true  },
      { text: "Jupiter", correct: false },
      { text: "Saturn",  correct: false }
    ]
  },
  {
    question: "What is the largest ocean on Earth?",
    answers: [
      { text: "Atlantic Ocean", correct: false },
      { text: "Indian Ocean",   correct: false },
      { text: "Arctic Ocean",   correct: false },
      { text: "Pacific Ocean",  correct: true  }
    ]
  },
  {
    question: "Who wrote the play 'Romeo and Juliet'?",
    answers: [
      { text: "Charles Dickens",    correct: false },
      { text: "William Shakespeare", correct: true  },
      { text: "Jane Austen",        correct: false },
      { text: "Mark Twain",         correct: false }
    ]
  },
  {
    question: "How many sides does a hexagon have?",
    answers: [
      { text: "5", correct: false },
      { text: "7", correct: false },
      { text: "8", correct: false },
      { text: "6", correct: true  }
    ]
  }
];

// ─── State Variables ──────────────────────────────────────────────────────────

let currentQuestionIndex = 0;
let score                = 0;
let answersDisabled      = false;

// ─── Initial Setup ────────────────────────────────────────────────────────────

// Show the total number of questions on both quiz and result screens
totalQuestionsSpan.textContent = quizQuestions.length;
maxScoreSpan.textContent       = quizQuestions.length;

// ─── Event Listeners ──────────────────────────────────────────────────────────

startBtn.addEventListener('click', startQuiz);
restartBtn.addEventListener('click', restartQuiz);

// ─── Functions ────────────────────────────────────────────────────────────────

function startQuiz() {
  // Reset state for a fresh run
  currentQuestionIndex = 0;
  score                = 0;
  scoreSpan.textContent = 0;

  // Switch screens
  startScreen.classList.remove('active');
  quizScreen.classList.add('active');

  showQuestion();
}

function showQuestion() {
  // Allow the user to click answers again
  answersDisabled = false;

  // Get the current question object
  const current = quizQuestions[currentQuestionIndex];

  // Update the question counter display
  currentQuestionSpan.textContent = currentQuestionIndex + 1;

  // Update progress bar width as a percentage of questions answered
  const progressPercent = (currentQuestionIndex / quizQuestions.length) * 100;
  progressBar.style.width = progressPercent + '%';

  // Display the question text
  questionText.textContent = current.question;

  // Clear any buttons left over from the previous question
  answersContainer.innerHTML = '';

  // Create one button per answer and add it to the container
  current.answers.forEach(function(answer) {
    const button = document.createElement('button');
    button.textContent    = answer.text;
    button.classList.add('answer-btn');

    // Store whether this answer is correct as a data attribute
    button.dataset.correct = answer.correct;

    button.addEventListener('click', selectAnswer);
    answersContainer.appendChild(button);
  });
}

function selectAnswer(event) {
  // Ignore clicks if an answer has already been selected
  if (answersDisabled) return;

  // Lock out further clicks immediately
  answersDisabled = true;

  const selectedButton = event.target;
  const isCorrect      = selectedButton.dataset.correct === 'true';

  // Highlight all buttons: green for correct, red for the chosen wrong answer
  const allButtons = answersContainer.querySelectorAll('.answer-btn');

  allButtons.forEach(function(button) {
    if (button.dataset.correct === 'true') {
      button.classList.add('correct');
    } else if (button === selectedButton) {
      button.classList.add('incorrect');
    }
  });

  // Award a point if the answer was correct
  if (isCorrect) {
    score++;
    scoreSpan.textContent = score;
  }

  // Wait 1 second so the user can see the result, then move on
  setTimeout(function() {
    currentQuestionIndex++;

    if (currentQuestionIndex < quizQuestions.length) {
      showQuestion();
    } else {
      showResults();
    }
  }, 1000);
}

function showResults() {
  // Switch from quiz screen to result screen
  quizScreen.classList.remove('active');
  resultScreen.classList.add('active');

  // Show the final score
  finalScoreSpan.textContent = score;

  // Calculate percentage and pick an appropriate message
  const percentage = (score / quizQuestions.length) * 100;

  if (percentage === 100) {
    resultMessage.textContent = "Perfect! You're a genius!";
  } else if (percentage >= 80) {
    resultMessage.textContent = "Great job! You know your stuff!";
  } else if (percentage >= 60) {
    resultMessage.textContent = "Good effort! Keep learning!";
  } else if (percentage >= 40) {
    resultMessage.textContent = "Not bad! Try again to improve!";
  } else {
    resultMessage.textContent = "Keep studying! You'll get better!";
  }
}

function restartQuiz() {
  // Go back to the beginning
  resultScreen.classList.remove('active');
  startQuiz();
}
