const themes = ['blue', 'purple', 'green', 'orange', 'red', 'dark'];

export function initThemeSelector() {
  const themeSelector = document.querySelector('.theme-selector');
  
  if (!themeSelector) return;
  
  themes.forEach(theme => {
    const themeOption = document.createElement('div');
    themeOption.classList.add('theme-selector-option', theme);
    themeOption.dataset.theme = theme;
    
    if (document.body.classList.contains(`theme-${theme}`)) {
      themeOption.classList.add('active');
    }
    
    themeOption.addEventListener('click', () => {
      setTheme(theme);
      
      document.querySelectorAll('.theme-selector-option').forEach(option => {
        option.classList.remove('active');
      });
      themeOption.classList.add('active');
    });
    
    themeSelector.appendChild(themeOption);
  });
}

export function setTheme(theme) {
  themes.forEach(t => {
    document.body.classList.remove(`theme-${t}`);
  });
  
  document.body.classList.add(`theme-${theme}`);
  
  localStorage.setItem('quizmaster-theme', theme);
}

export function loadSavedTheme() {
  const savedTheme = localStorage.getItem('quizmaster-theme');
  
  if (savedTheme && themes.includes(savedTheme)) {
    setTheme(savedTheme);
    
    const activeOption = document.querySelector(`.theme-selector-option[data-theme="${savedTheme}"]`);
    if (activeOption) {
      document.querySelectorAll('.theme-selector-option').forEach(option => {
        option.classList.remove('active');
      });
      activeOption.classList.add('active');
    }
  }
} 