export const categories = [
  {
    id: 'general',
    name: 'General Knowledge',
    icon: '🧠'
  },
  {
    id: 'science',
    name: 'Science & Nature',
    icon: '🔬'
  },
  {
    id: 'history',
    name: 'History',
    icon: '📜'
  },
  {
    id: 'geography',
    name: 'Geography',
    icon: '🌍'
  },
  {
    id: 'entertainment',
    name: 'Entertainment',
    icon: '🎬'
  }
];

export const quizData = {
  general: [
    {
      question: "Which of these is NOT a programming language?",
      options: ["Java", "Python", "Ruby", "Jaguar", "JavaScript", "PHP"],
      correctAnswer: "Jaguar",
      explanation: "Jaguar is a car brand, not a programming language."
    },
    {
      question: "What is the capital of France?",
      options: ["London", "Berlin", "Madrid", "Paris", "Rome", "Amsterdam"],
      correctAnswer: "Paris",
      explanation: "Paris is the capital city of France."
    },
    {
      question: "Which planet is known as the Red Planet?",
      options: ["Earth", "Mars", "Jupiter", "Venus", "Saturn", "Mercury"],
      correctAnswer: "Mars",
      explanation: "Mars is called the Red Planet due to its reddish appearance."
    },
    {
      question: "Who painted the Mona Lisa?",
      options: ["Vincent van Gogh", "Pablo Picasso", "Leonardo da Vinci", "Michelangelo", "Claude Monet", "Salvador Dalí"],
      correctAnswer: "Leonardo da Vinci",
      explanation: "The Mona Lisa was painted by Leonardo da Vinci around 1503-1506."
    },
    {
      question: "What is the largest ocean on Earth?",
      options: ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean", "Southern Ocean", "Mediterranean Sea"],
      correctAnswer: "Pacific Ocean",
      explanation: "The Pacific Ocean is the largest and deepest ocean on Earth."
    }
  ],
  science: [
    {
      question: "What is the chemical symbol for gold?",
      options: ["Go", "Gd", "Au", "Ag", "Fe", "Cu"],
      correctAnswer: "Au",
      explanation: "Au is the chemical symbol for gold, from the Latin word 'aurum'."
    },
    {
      question: "Which of these is NOT a noble gas?",
      options: ["Helium", "Neon", "Argon", "Oxygen", "Krypton", "Xenon"],
      correctAnswer: "Oxygen",
      explanation: "Oxygen is not a noble gas; it's a reactive non-metal."
    },
    {
      question: "What is the hardest natural substance on Earth?",
      options: ["Platinum", "Titanium", "Quartz", "Diamond", "Graphite", "Steel"],
      correctAnswer: "Diamond",
      explanation: "Diamond is the hardest known natural material on Earth."
    },
    {
      question: "Which planet has the most moons?",
      options: ["Earth", "Mars", "Jupiter", "Saturn", "Uranus", "Neptune"],
      correctAnswer: "Saturn",
      explanation: "Saturn has the most confirmed moons, with over 80 moons."
    },
    {
      question: "What is the smallest unit of life?",
      options: ["Atom", "Molecule", "Cell", "Tissue", "Organ", "DNA"],
      correctAnswer: "Cell",
      explanation: "The cell is the smallest unit that can live on its own and is considered the building block of life."
    }
  ],
  history: [
    {
      question: "In which year did World War II end?",
      options: ["1943", "1944", "1945", "1946", "1947", "1948"],
      correctAnswer: "1945",
      explanation: "World War II ended in 1945 with the surrender of Germany in May and Japan in September."
    },
    {
      question: "Who was the first President of the United States?",
      options: ["Thomas Jefferson", "John Adams", "George Washington", "Abraham Lincoln", "Benjamin Franklin", "James Madison"],
      correctAnswer: "George Washington",
      explanation: "George Washington was the first President of the United States, serving from 1789 to 1797."
    },
    {
      question: "Which ancient civilization built the pyramids of Giza?",
      options: ["Romans", "Greeks", "Mayans", "Egyptians", "Persians", "Mesopotamians"],
      correctAnswer: "Egyptians",
      explanation: "The pyramids of Giza were built by the ancient Egyptians as tombs for their pharaohs."
    },
    {
      question: "In which year did the Titanic sink?",
      options: ["1910", "1912", "1914", "1916", "1918", "1920"],
      correctAnswer: "1912",
      explanation: "The Titanic sank on April 15, 1912, after hitting an iceberg during its maiden voyage."
    },
    {
      question: "Who wrote 'The Communist Manifesto'?",
      options: ["Vladimir Lenin", "Joseph Stalin", "Leon Trotsky", "Karl Marx and Friedrich Engels", "Mao Zedong", "Fidel Castro"],
      correctAnswer: "Karl Marx and Friedrich Engels",
      explanation: "The Communist Manifesto was written by Karl Marx and Friedrich Engels in 1848."
    }
  ],
  geography: [
    {
      question: "Which is the largest country by land area?",
      options: ["China", "United States", "Canada", "Russia", "Brazil", "Australia"],
      correctAnswer: "Russia",
      explanation: "Russia is the largest country by land area, covering over 17 million square kilometers."
    },
    {
      question: "Which desert is the largest in the world?",
      options: ["Gobi Desert", "Kalahari Desert", "Sahara Desert", "Arabian Desert", "Antarctic Desert", "Mojave Desert"],
      correctAnswer: "Antarctic Desert",
      explanation: "The Antarctic Desert is the largest desert in the world, covering the entire continent of Antarctica."
    },
    {
      question: "Which of these countries is NOT in Europe?",
      options: ["Portugal", "Greece", "Sweden", "Egypt", "Switzerland", "Austria"],
      correctAnswer: "Egypt",
      explanation: "Egypt is located in North Africa, not Europe."
    },
    {
      question: "What is the longest river in the world?",
      options: ["Amazon River", "Nile River", "Yangtze River", "Mississippi River", "Yellow River", "Congo River"],
      correctAnswer: "Nile River",
      explanation: "The Nile River is generally considered the longest river in the world, flowing for about 6,650 kilometers."
    },
    {
      question: "Which mountain range separates Europe and Asia?",
      options: ["Alps", "Himalayas", "Andes", "Ural Mountains", "Rocky Mountains", "Atlas Mountains"],
      correctAnswer: "Ural Mountains",
      explanation: "The Ural Mountains form a natural boundary between Europe and Asia."
    }
  ],
  entertainment: [
    {
      question: "Who played the character of Iron Man in the Marvel Cinematic Universe?",
      options: ["Chris Evans", "Chris Hemsworth", "Robert Downey Jr.", "Mark Ruffalo", "Tom Holland", "Chris Pratt"],
      correctAnswer: "Robert Downey Jr.",
      explanation: "Robert Downey Jr. played Tony Stark/Iron Man in the Marvel Cinematic Universe."
    },
    {
      question: "Which band performed the song 'Bohemian Rhapsody'?",
      options: ["The Beatles", "Led Zeppelin", "Queen", "Pink Floyd", "The Rolling Stones", "AC/DC"],
      correctAnswer: "Queen",
      explanation: "Bohemian Rhapsody was performed by the British rock band Queen, released in 1975."
    },
    {
      question: "Who wrote the Harry Potter book series?",
      options: ["J.R.R. Tolkien", "George R.R. Martin", "J.K. Rowling", "Stephen King", "C.S. Lewis", "Suzanne Collins"],
      correctAnswer: "J.K. Rowling",
      explanation: "The Harry Potter series was written by British author J.K. Rowling."
    },
    {
      question: "Which movie won the Academy Award for Best Picture in 2020?",
      options: ["1917", "Joker", "Parasite", "Once Upon a Time in Hollywood", "The Irishman", "Little Women"],
      correctAnswer: "Parasite",
      explanation: "Parasite, directed by Bong Joon-ho, won the Academy Award for Best Picture in 2020."
    },
    {
      question: "Who is known as the 'King of Pop'?",
      options: ["Elvis Presley", "Michael Jackson", "Prince", "David Bowie", "Elton John", "Freddie Mercury"],
      correctAnswer: "Michael Jackson",
      explanation: "Michael Jackson is widely known as the 'King of Pop' for his significant contributions to music and dance."
    }
  ]
};

export function getRandomQuestions(category, count = 5) {
  const questions = quizData[category];
  
  if (!questions || questions.length === 0) {
    return [];
  }
  
  return [...questions]
    .sort(() => Math.random() - 0.5)
    .slice(0, Math.min(count, questions.length));
} 