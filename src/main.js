import { addEntranceAnimations, animateElements } from './modules/animations.js';
import { setupEventListeners } from './modules/events.js';
import { renderWelcomeScreen } from './modules/screens.js';
import { initThemeSelector, loadSavedTheme } from './modules/theme.js';
import './styles/main.scss';

document.addEventListener('DOMContentLoaded', () => {
  const app = document.getElementById('app');
  
  document.body.classList.add('theme-blue');
  
  app.innerHTML = `
    <header class="header">
      <div class="container">
        <div class="header-content">
          <a href="#" class="logo">Quiz<span>Master</span></a>
          <div class="theme-selector"></div>
        </div>
      </div>
    </header>
    
    <main class="main">
      <div class="container">
        <div class="main-content" id="main-content"></div>
      </div>
    </main>
    
    <footer class="footer">
      <div class="container">
        <p>© ${new Date().getFullYear()} QuizMaster. All rights reserved.</p>
      </div>
    </footer>
  `;
  
  initThemeSelector();
  
  loadSavedTheme();
  
  renderWelcomeScreen();
  
  setupEventListeners();
  
  animateElements();
  addEntranceAnimations();
});
