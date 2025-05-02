export const keysProject = [
  {
    title: 'Interactive Piano App with React and TypeScript',
    overview:
      'For this project, I wanted to explore how to build a musical instrument in the browser, focusing on responsiveness, interaction, and sound. The result is a lightweight React-based virtual piano app that lets users play notes and view common chords visually and audibly. It was a fun way to blend frontend development with real-time audio playback and UI design.',

    title2: 'Tech Stack',
    description2:
      'The app is built entirely in React with TypeScript, using Vite for fast development and build tooling. Styling is handled with plain CSS modules (App.css), and I kept dependencies minimal to focus on learning and interaction. The only external audio used is a preloaded set of .mp3 samples for each note, stored locally under the public directory. This keeps load times fast and lets me avoid depending on third-party audio libraries.',

    title3: 'How It Works',
    description3:
      "At its core, the app is a responsive piano keyboard. Each key is rendered via the <Key /> component, which takes props like the note name (C4, D#4, etc.), its type (white or black), and the corresponding audio file. When clicked or tapped, the app plays the sound using the browser's Audio API and highlights the key with a brief animation. The keyboard layout is handled by the <Keyboard /> component, which maps over an array of notes to render each key in the correct position.",

    title4: 'Chords View',
    description4:
      'To help users go beyond individual notes, I added a <Chords /> component that displays a set of basic triads (like C major, D minor, etc.). Clicking on a chord highlights the corresponding keys on the keyboard and plays the notes in sequence. This was a fun way to explore combining state and timing logic: the app loops through the notes of the chord and plays each with a short delay using setTimeout.',

    title5: 'Interactivity & Sound',
    description5:
      'Sound playback is powered by simple HTML5 Audio. Each key is mapped to a local .mp3 file (e.g., C4.mp3), which plays on click. Keys flash a highlight briefly using a CSS transition, giving the user visual feedback when a note is played. The Key.tsx component is responsible for this interaction—detecting clicks, triggering sound, and applying animation classes.',

    title6: 'Mobile Friendly & Lightweight',
    description6:
      'The app is designed to work on both desktop and mobile. Touch events are supported natively via click handlers, and the layout adapts with flexbox to keep the keyboard accessible on smaller screens. Because everything is static and local—including sound files—it loads quickly and doesn’t rely on external APIs.',

    title7: 'Lessons & Next Steps',
    description7:
      'This project was a great introduction to combining user input with real-time sound in React. It showed me how timing, visual feedback, and audio can be coordinated in a lightweight frontend. Future enhancements could include keyboard shortcuts, sustain control, or even user-recorded melodies. Adding more advanced chord types or scales could also be useful for learners.',
  },
];
