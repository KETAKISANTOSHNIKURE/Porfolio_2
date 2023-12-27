// ThemeToggle.js
import React from 'react';
import { useTheme } from '../path-to/ThemeContext';

const ThemeToggle = () => {
  const { toggleTheme } = useTheme();

  return (
    <button onClick={toggleTheme}>
      Toggle Theme
    </button>
  );
};

export default ThemeToggle;
