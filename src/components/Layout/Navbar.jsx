import { useActiveSection } from '../../hooks/useActiveSection';
import './Navbar.css';

const NAV_LINKS = [
  { id: 'sobre', label: 'Sobre Mim' },
  { id: 'projetos', label: 'Projetos' },
  { id: 'experiencias', label: 'Experiências' },
  { id: 'contato', label: 'Contato' },
];

const SECTION_IDS = NAV_LINKS.map((link) => link.id);

export function Navbar() {
  const activeId = useActiveSection(SECTION_IDS);

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
              onClick={(event) => handleClick(event, link.id)}
              className={
                activeId === link.id
                  ? 'navbar__link navbar__link--active'
                  : 'navbar__link'
              }
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
