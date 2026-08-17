import { Navbar } from './Navbar';
import { useLanguage } from '../../context/LanguageContext';
import './Header.css';

export function Header() {
  const { language, toggleLanguage } = useLanguage();

  return (
    <header className="header">
      <div className="header__brand">
        {/* TODO: substituir pelo seu nome/marca pessoal */}
        <span className="header__name">[SEU NOME]</span>
      </div>

      <Navbar />

      <button
        type="button"
        className="header__lang-toggle"
        onClick={toggleLanguage}
        aria-label="Alternar idioma"
      >
        {language === 'pt' ? '🇧🇷 PT' : '🇺🇸 EN'}
      </button>
    </header>
  );
}
