import React from 'react';
import { ThemeProvider } from './theme/ThemeContext.jsx';
import Header from './components/Header.jsx';
import Card from './components/Card.jsx';

export default function App() {
  return (
    <ThemeProvider>
      <div>
        <Header />
        <main>
          <Card />
        </main>
      </div>
    </ThemeProvider>
  );
}
