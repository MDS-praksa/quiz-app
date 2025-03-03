export function animateElements() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animated');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1
  });

  document.querySelectorAll('.card, .quiz-option, .btn').forEach(element => {
    observer.observe(element);
  });
}

export function animateProgressBar(percentage) {
  const progressBar = document.querySelector('.progress-bar-fill');

  if (progressBar) {
    progressBar.style.width = `${percentage}%`;
  }
}

export function addEntranceAnimations() {
  setTimeout(() => {
    const lists = document.querySelectorAll('.quiz-options, .category-selection');

    lists.forEach(list => {
      const items = list.children;

      Array.from(items).forEach((item, index) => {
        item.style.animationDelay = `${index * 0.1}s`;
        item.classList.add('fade-in');
      });
    });
  }, 100);
}

export function pulseElement(selector) {
  const element = document.querySelector(selector);

  if (element) {
    element.classList.add('pulse');

    setTimeout(() => {
      element.classList.remove('pulse');
    }, 1500);
  }
}

export function shakeElement(selector) {
  const element = document.querySelector(selector);

  if (element) {
    element.classList.add('shake');

    setTimeout(() => {
      element.classList.remove('shake');
    }, 500);
  }
}

export function bounceElement(selector) {
  const element = document.querySelector(selector);

  if (element) {
    element.classList.add('bounce');

    setTimeout(() => {
      element.classList.remove('bounce');
    }, 800);
  }
} 