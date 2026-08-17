import { createContext, useContext, useState } from 'react';

const LanguageContext = createContext(null);

const AVAILABLE_LANGUAGES = {
  PT: 'pt',
  EN: 'en',
};

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState(AVAILABLE_LANGUAGES.PT);

  function toggleLanguage() {
    setLanguage((current) =>
      current === AVAILABLE_LANGUAGES.PT
        ? AVAILABLE_LANGUAGES.EN
        : AVAILABLE_LANGUAGES.PT
    );
  }

  const value = { language, toggleLanguage, AVAILABLE_LANGUAGES };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

// Hook customizado: isola o acesso ao contexto e garante uso correto
export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage deve ser usado dentro de um LanguageProvider');
  }
  return context;
}
