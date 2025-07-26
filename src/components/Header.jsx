import React from 'react';
import ThemeToggle from './ThemeToggle.jsx';

export default function Header() {
  return (
    <header className="header">
      <h1>Admin Dashboard</h1>
      <ThemeToggle />
    </header>
  );
}
