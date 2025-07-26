import React from 'react';
import { useTheme } from '../theme/ThemeContext.jsx';

export default function ThemeToggle() {
  // No implementation
  return (
    <button
      className="theme-toggle"
      aria-label="Toggle theme"
      aria-pressed="false"
    >
      Toggle Theme
    </button>
  );
}
