import React from 'react';
import ThemeSwitch from './ThemeSwitch';

const Header = () => {
  return (
    <header>
      <nav className="main-nav" aria-label="main navigation">
        <a href="#main" className="skip-link">Skip to main content</a>
        <div className="container">
          <a href="/">
            <img src="/images/logotype.svg" alt="Silicon Logotype" />
          </a>
          <div className="darkmode-toggle">
            <p>Dark Mode</p>
            <ThemeSwitch />
          </div>
          <button className="menu-toggle" aria-label="Open Menu">
            <i className="fas fa-bars"></i>
          </button>
        </div>
      </nav>
      <h1>Min Hemsida</h1>
    </header>
  );
};



// src/Header.jsx
import { useState } from 'react';

function Header() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
    document.body.className = darkMode ? 'light' : 'dark';
  };

  return (
    <header>
      <h1>My React App</h1>
      <button onClick={toggleTheme}>
        Switch to {darkMode ? 'Light' : 'Dark'} Mode
      </button>
    </header>
  );
}

export default Header;

