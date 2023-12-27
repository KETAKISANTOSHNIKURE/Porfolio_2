// ThemeToggle.js
import React from 'react';
import { useTheme } from './ThemeContext';

const ThemeToggle = () => {
  const { toggleTheme } = typeof window !== 'undefined' ? useTheme() : { toggleTheme: () => {} };

  return (
    <button onClick={toggleTheme}>
      Toggle Theme
    </button>
  );
};

export default ThemeToggle;
