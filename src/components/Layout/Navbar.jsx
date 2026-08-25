import { useActiveSection } from '../../hooks/useActiveSection';
import { useLanguage } from '../../context/LanguageContext';
import './Navbar.css';

export function Navbar() {
  const { language } = useLanguage();

  const NAV_LINKS = [
    { id: 'inicio',       label: language === 'pt' ? 'Início'     : 'Home'       },
    { id: 'sobre',        label: language === 'pt' ? 'Sobre'      : 'About'      },
    { id: 'projetos',     label: language === 'pt' ? 'Projetos'   : 'Projects'   },
    { id: 'experiencias', label: language === 'pt' ? 'Experiência': 'Experience' },
    { id: 'contato',      label: language === 'pt' ? 'Contato'    : 'Contact'    },
  ];

  const activeId = useActiveSection(NAV_LINKS.map((l) => l.id));

  function handleClick(event, id) {
    event.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  }

  return (
    <nav className="navbar">
      <ul className="navbar__list">
        {NAV_LINKS.map((link) => (
          <li key={link.id}>
            <a
              href={`#${link.id}`}
              onClick={(e) => handleClick(e, link.id)}
              className={activeId === link.id ? 'navbar__link navbar__link--active' : 'navbar__link'}
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
