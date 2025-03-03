# QuizMaster - Interactive Quiz Application

A beautiful, interactive quiz application built with vanilla JavaScript, SASS, and Vite. This project demonstrates JavaScript bundling with multiple modules working together.

## Features

- **Multiple Quiz Categories**: Choose from various categories including General Knowledge, Science & Nature, History, Geography, and Entertainment.
- **Beautiful UI**: Modern and responsive design with smooth animations.
- **Theme Customization**: 6 different color themes to personalize your experience.
- **Score Tracking**: Keep track of your performance with detailed results.
- **Responsive Design**: Works on all devices from mobile to desktop.

## Technical Details

This project showcases:

- **JavaScript Module Bundling**: Using Vite to bundle multiple JavaScript files.
- **SASS Architecture**: Organized SASS structure with variables, mixins, and partials.
- **Theme System**: Dynamic theme switching with SASS maps.
- **Animations**: CSS animations and transitions for a polished user experience.
- **LocalStorage**: Saving user preferences between sessions.

## Project Structure

```
quiz-app/
├── public/
│   └── vite.svg
├── src/
│   ├── modules/
│   │   ├── animations.js    # Animation utilities
│   │   ├── data.js          # Quiz questions and categories
│   │   ├── events.js        # Event handlers
│   │   ├── quiz.js          # Quiz logic
│   │   ├── screens.js       # UI rendering
│   │   └── theme.js         # Theme management
│   ├── styles/
│   │   ├── _animations.scss # Animation styles
│   │   ├── _components.scss # UI component styles
│   │   ├── _layout.scss     # Layout styles
│   │   ├── _themes.scss     # Theme styles
│   │   └── main.scss        # Main stylesheet
│   └── main.js              # Application entry point
├── index.html
├── package.json
└── README.md
```

## Getting Started

1. Clone the repository
2. Install dependencies:
   ```
   npm install
   ```
3. Run the development server:
   ```
   npm run dev
   ```
4. Build for production:
   ```
   npm run build
   ```

## Customization

- Add new quiz categories and questions in `src/modules/data.js`
- Create new themes in `src/styles/main.scss`
- Modify animations in `src/styles/_animations.scss`

## License

MIT 