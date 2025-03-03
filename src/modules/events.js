import { renderWelcomeScreen } from './screens.js';
import { loadSavedTheme } from './theme.js';

export function setupEventListeners() {
  document.addEventListener('click', (e) => {
    if (e.target.closest('.logo')) {
      e.preventDefault();
      renderWelcomeScreen();
    }
  });
  
  window.addEventListener('load', () => {
    loadSavedTheme();
  });
  
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      renderWelcomeScreen();
    }
  });
  
  window.addEventListener('resize', () => {
    adjustLayoutForScreenSize();
  });
  
  adjustLayoutForScreenSize();
}

function adjustLayoutForScreenSize() {
  const isMobile = window.innerWidth < 768;
  const categoryCards = document.querySelectorAll('.category-card');
  
  if (categoryCards.length > 0) {
    categoryCards.forEach(card => {
      if (isMobile) {
        card.classList.add('mobile-view');
      } else {
        card.classList.remove('mobile-view');
      }
    });
  }
} 