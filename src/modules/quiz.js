import { getRandomQuestions } from './data.js';
import { renderQuizQuestion, renderResults } from './screens.js';

let currentQuiz = {
  questions: [],
  currentQuestionIndex: 0,
  score: 0,
  answers: [],
  category: null,
  startTime: null,
  endTime: null
};

export function initQuiz(category) {
  currentQuiz = {
    questions: getRandomQuestions(category, 5),
    currentQuestionIndex: 0,
    score: 0,
    answers: [],
    category,
    startTime: new Date(),
    endTime: null
  };
  
  renderCurrentQuestion();
}

export function renderCurrentQuestion() {
  const { questions, currentQuestionIndex } = currentQuiz;
  
  if (currentQuestionIndex < questions.length) {
    const question = questions[currentQuestionIndex];
    const progress = {
      current: currentQuestionIndex + 1,
      total: questions.length
    };
    
    renderQuizQuestion(question, progress, handleAnswerSelection);
  } else {
    finishQuiz();
  }
}

export function handleAnswerSelection(selectedOption) {
  const { questions, currentQuestionIndex } = currentQuiz;
  const currentQuestion = questions[currentQuestionIndex];
  
  const isCorrect = selectedOption === currentQuestion.correctAnswer;
  currentQuiz.answers.push({
    question: currentQuestion.question,
    selectedAnswer: selectedOption,
    correctAnswer: currentQuestion.correctAnswer,
    isCorrect
  });
  
  if (isCorrect) {
    currentQuiz.score += 1;
  }
  
  showAnswerFeedback(selectedOption, currentQuestion.correctAnswer, currentQuestion.explanation);
  
  setTimeout(() => {
    currentQuiz.currentQuestionIndex += 1;
    renderCurrentQuestion();
  }, 2000);
}

function showAnswerFeedback(selectedOption, correctAnswer, explanation) {
  const selectedElement = document.querySelector(`.quiz-option[data-option="${selectedOption}"]`);
  const correctElement = document.querySelector(`.quiz-option[data-option="${correctAnswer}"]`);
  
  if (selectedElement) {
    if (selectedOption === correctAnswer) {
      selectedElement.classList.add('correct');
      selectedElement.classList.add('bounce');
    } else {
      selectedElement.classList.add('incorrect');
      selectedElement.classList.add('shake');
      
      if (correctElement) {
        correctElement.classList.add('correct');
      }
    }
  }
  
  const feedbackElement = document.createElement('div');
  feedbackElement.classList.add('answer-feedback', 'fade-in');
  feedbackElement.innerHTML = `
    <p class="explanation">${explanation}</p>
  `;
  
  const quizContent = document.querySelector('.quiz-content');
  if (quizContent) {
    quizContent.appendChild(feedbackElement);
  }
}

function finishQuiz() {
  currentQuiz.endTime = new Date();
  const timeTaken = Math.floor((currentQuiz.endTime - currentQuiz.startTime) / 1000);
  
  const results = {
    score: currentQuiz.score,
    total: currentQuiz.questions.length,
    percentage: Math.round((currentQuiz.score / currentQuiz.questions.length) * 100),
    timeTaken,
    answers: currentQuiz.answers
  };
  
  renderResults(results);
}

export function getCurrentQuiz() {
  return currentQuiz;
} 