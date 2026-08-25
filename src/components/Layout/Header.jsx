import { useState, useEffect } from 'react';
import { Navbar } from './Navbar';
import { useLanguage } from '../../context/LanguageContext';
import './Header.css';

export function Header() {
  const { language, toggleLanguage } = useLanguage();

  return (
    <header className="header">
      <div className="header__brand">
        luizfelipe<span>.dev</span>
      </div>

      <Navbar />

      <button
        type="button"
        className="header__lang-toggle"
        onClick={toggleLanguage}
        aria-label="Alternar idioma"
      >
        {language === 'pt' ? 'EN' : 'PT'}
      </button>
    </header>
  );
}
