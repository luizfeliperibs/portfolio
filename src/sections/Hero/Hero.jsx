import { useEffect, useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import './Hero.css';

const ROLES = {
  pt: ['Desenvolvedor Backend', 'Estudante de Eng. de Software', 'Aprendendo todos os dias'],
  en: ['Backend Developer', 'Software Engineering Student', 'Learning every day'],
};

const STACK = ['Java', 'Spring Boot', 'Vue.js', 'React', 'PostgreSQL', 'TypeScript', 'Git'];

export function Hero() {
  const { language } = useLanguage();
  const roles = ROLES[language];

  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [typing, setTyping] = useState(true);

  useEffect(() => {
    setDisplayed('');
    setTyping(true);
  }, [language]);

  useEffect(() => {
    const current = roles[roleIndex];
    if (typing) {
      if (displayed.length < current.length) {
        const t = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 65);
        return () => clearTimeout(t);
      } else {
        const t = setTimeout(() => setTyping(false), 1800);
        return () => clearTimeout(t);
      }
    } else {
      if (displayed.length > 0) {
        const t = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 30);
        return () => clearTimeout(t);
      } else {
        setRoleIndex((i) => (i + 1) % roles.length);
        setTyping(true);
      }
    }
  }, [displayed, typing, roleIndex, roles]);

  const t = {
    greeting: language === 'pt' ? 'Olá, eu sou' : "Hi, I'm",
    desc: language === 'pt'
      ? 'Estudante de Engenharia de Software na PUC Minas. Gosto de construir backends com Java & Spring Boot e estou sempre aprendendo algo novo. Em busca de oportunidade de estágio.'
      : `Software Engineering student at PUC Minas. I enjoy building backends with Java & Spring Boot and I\'m always learning something new. Looking for an internship opportunity.`,
    btn1: language === 'pt' ? 'Ver projetos' : 'View projects',
    btn2: language === 'pt' ? 'Contato' : 'Contact',
  };

  return (
    <section id="inicio" className="hero">
      <div className="container">
        <div className="hero__inner">
          {/* Text */}
          <div className="hero__text">
            <p className="hero__greeting">{t.greeting}</p>
            <h1 className="hero__name">Luiz Felipe<br />Ribeiro Souza</h1>

            <div className="hero__role">
              <strong>{displayed}</strong>
              <span className="hero__cursor" aria-hidden="true" />
            </div>

            <p className="hero__description">{t.desc}</p>

            <div className="hero__actions">
              <a href="#projetos" className="hero__btn hero__btn--primary">{t.btn1}</a>
              <a href="#contato"  className="hero__btn hero__btn--ghost">{t.btn2}</a>
            </div>

            <div className="hero__stack">
              {STACK.map((s) => <span key={s} className="hero__chip">{s}</span>)}
            </div>
          </div>

          {/* Avatar */}
          <div className="hero__avatar-wrap">
            <div className="hero__avatar">
              <img src="/avatar.png" alt="Luiz Felipe Ribeiro Souza" loading="eager" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
