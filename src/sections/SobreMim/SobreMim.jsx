import { useLanguage } from '../../context/LanguageContext';
import { sobreMimContent } from '../../data/sobreMim';
import './SobreMim.css';

const BACKEND  = ['Java', 'Spring Boot', 'Node.js', 'TypeScript', 'Python', 'C'];
const FRONTEND = ['Vue.js', 'React.js', 'JavaScript', 'HTML5', 'CSS3'];
const DB       = ['PostgreSQL', 'MySQL', 'H2', 'PrismaDB'];
const TOOLS    = ['Git', 'GitHub', 'REST APIs'];

export function SobreMim() {
  const { language } = useLanguage();
  const c = sobreMimContent[language];

  const l = {
    title:  language === 'pt' ? 'Sobre mim' : 'About me',
    bio:    language === 'pt' ? 'Bio' : 'Bio',
    edu:    language === 'pt' ? 'Formação' : 'Education',
    lang:   language === 'pt' ? 'Idiomas' : 'Languages',
    back:   'Backend',
    front:  'Frontend',
    db:     language === 'pt' ? 'Banco de Dados' : 'Databases',
    tools:  'Tools',
    course: language === 'pt' ? 'Cursos em andamento' : 'Ongoing courses',
  };

  return (
    <section id="sobre" className="section">
      <div className="container">
        <h2 className="section__title">{l.title}</h2>

        <div className="sobre-grid">
          {/* Bio */}
          <div className="card card--full">
            <div className="card__label">{l.bio}</div>
            <p className="card__text">{c.resumo}</p>
          </div>

          {/* Formação */}
          <div className="card">
            <div className="card__label">{l.edu}</div>
            <div className="card__strong">PUC Minas</div>
            <div className="card__sub">
              {language === 'pt' ? 'Engenharia de Software · 2025 – 2028' : 'Software Engineering · 2025 – 2028'}
            </div>
          </div>

          {/* Idiomas */}
          <div className="card">
            <div className="card__label">{l.lang}</div>
            <div className="badges">
              <span className="badge badge--green">
                {language === 'pt' ? '🇧🇷 Português — Nativo' : '🇧🇷 Portuguese — Native'}
              </span>
              <span className="badge badge--green">
                {language === 'pt' ? '🇺🇸 Inglês — C1' : '🇺🇸 English — C1'}
              </span>
            </div>
          </div>

          {/* Backend */}
          <div className="card">
            <div className="card__label">{l.back}</div>
            <div className="badges">
              {BACKEND.map((s) => <span key={s} className="badge badge--blue">{s}</span>)}
            </div>
          </div>

          {/* Frontend */}
          <div className="card">
            <div className="card__label">{l.front}</div>
            <div className="badges">
              {FRONTEND.map((s) => <span key={s} className="badge badge--blue">{s}</span>)}
            </div>
          </div>

          {/* DB */}
          <div className="card">
            <div className="card__label">{l.db}</div>
            <div className="badges">
              {DB.map((s) => <span key={s} className="badge">{s}</span>)}
            </div>
          </div>

          {/* Tools */}
          <div className="card">
            <div className="card__label">{l.tools}</div>
            <div className="badges">
              {TOOLS.map((s) => <span key={s} className="badge">{s}</span>)}
            </div>
          </div>

          {/* Cursos */}
          <div className="card card--full">
            <div className="card__label">{l.course}</div>
            <div className="badges" style={{ marginTop: '0.5rem' }}>
              {c.cursos.map((curso, i) => (
                <span key={i} className="badge">{curso}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
