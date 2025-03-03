import { categories } from './data.js';
import { initQuiz } from './quiz.js';

const mainContent = () => document.getElementById('main-content');

export function renderWelcomeScreen() {
  const content = mainContent();
  
  if (!content) return;
  
  content.innerHTML = `
    <div class="welcome-screen fade-in">
      <h1>Welcome to <span class="logo">Quiz<span>Master</span></span></h1>
      <p>Test your knowledge with our interactive quiz! Choose a category below to get started.</p>
      
      <div class="category-selection">
        ${categories.map(category => `
          <div class="card category-card" data-category="${category.id}">
            <div class="card-header">
              <h2 data-icon="${category.icon}">${category.name}</h2>
            </div>
            <div class="card-body">
              <p>Test your knowledge in ${category.name.toLowerCase()}.</p>
            </div>
            <div class="card-footer">
              <button class="btn btn-primary start-quiz" data-category="${category.id}">Start Quiz</button>
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  `;
  
  document.querySelectorAll('.start-quiz').forEach(button => {
    button.addEventListener('click', (e) => {
      const category = e.target.dataset.category;
      initQuiz(category);
    });
  });
}

export function renderQuizQuestion(question, progress, onAnswerSelected) {
  const content = mainContent();
  
  if (!content) return;
  
  const shuffledOptions = [...question.options].sort(() => Math.random() - 0.5);
  
  content.innerHTML = `
    <div class="quiz-container fade-in">
      <div class="quiz-header">
        <h1>Question ${progress.current} of ${progress.total}</h1>
        <div class="progress-bar">
          <div class="progress-bar-fill" style="width: ${(progress.current / progress.total) * 100}%"></div>
        </div>
      </div>
      
      <div class="quiz-content">
        <div class="quiz-question">${question.question}</div>
        
        <div class="quiz-options">
          ${shuffledOptions.map((option, index) => `
            <div class="quiz-option slide-in-right stagger-${index + 1}" data-option="${option}">
              ${option}
            </div>
          `).join('')}
        </div>
      </div>
    </div>
  `;
  
  document.querySelectorAll('.quiz-option').forEach(option => {
    option.addEventListener('click', (e) => {
      if (document.querySelector('.quiz-option.selected')) {
        return;
      }
      
      const selectedOption = e.target.dataset.option;
      e.target.classList.add('selected');
      
      if (onAnswerSelected) {
        onAnswerSelected(selectedOption);
      }
    });
  });
}

export function renderResults(results) {
  const content = mainContent();
  
  if (!content) return;
  
  let message = '';
  if (results.percentage >= 80) {
    message = 'Excellent! You\'re a quiz master!';
  } else if (results.percentage >= 60) {
    message = 'Good job! You know your stuff!';
  } else if (results.percentage >= 40) {
    message = 'Not bad! Keep learning!';
  } else {
    message = 'Keep practicing! You\'ll get better!';
  }
  
  const minutes = Math.floor(results.timeTaken / 60);
  const seconds = results.timeTaken % 60;
  const timeString = minutes > 0 ? `${minutes}m ${seconds}s` : `${seconds} seconds`;
  
  content.innerHTML = `
    <div class="results-screen fade-in">
      <h2>Quiz Results</h2>
      
      <div class="score">${results.score}/${results.total} (${results.percentage}%)</div>
      
      <div class="message">${message}</div>
      
      <div class="stats">
        <div class="stat">
          <span class="stat-label">Time taken:</span>
          <span class="stat-value">${timeString}</span>
        </div>
      </div>
      
      <div class="answer-review">
        <h3>Your Answers</h3>
        
        ${results.answers.map((answer, index) => `
          <div class="answer-item card ${answer.isCorrect ? 'correct' : 'incorrect'}">
            <div class="card-header">
              <h4>Question ${index + 1}: ${answer.isCorrect ? '✓' : '✗'}</h4>
            </div>
            <div class="card-body">
              <p class="question">${answer.question}</p>
              <p class="your-answer">Your answer: <strong>${answer.selectedAnswer}</strong></p>
              ${!answer.isCorrect ? `<p class="correct-answer">Correct answer: <strong>${answer.correctAnswer}</strong></p>` : ''}
            </div>
          </div>
        `).join('')}
      </div>
      
      <div class="actions">
        <button class="btn btn-primary restart-quiz">Try Again</button>
        <button class="btn btn-secondary back-to-home">Back to Home</button>
      </div>
    </div>
  `;
  
  document.querySelector('.restart-quiz')?.addEventListener('click', () => {
    initQuiz(results.category);
  });
  
  document.querySelector('.back-to-home')?.addEventListener('click', () => {
    renderWelcomeScreen();
  });
} 