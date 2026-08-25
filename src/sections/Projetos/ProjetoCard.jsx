import { useLanguage } from '../../context/LanguageContext';
import './ProjetoCard.css';

export function ProjetoCard({ projeto }) {
  const { language } = useLanguage();

  const nome      = typeof projeto.nome     === 'object' ? projeto.nome[language]     || projeto.nome.pt     : projeto.nome;
  const descricao = typeof projeto.descricao === 'object' ? projeto.descricao[language] || projeto.descricao.pt : projeto.descricao;
  const year      = projeto.data ? projeto.data.slice(0, 7) : '';
  const linkLabel = language === 'pt' ? 'GitHub →' : 'GitHub →';
  const demoLabel = language === 'pt' ? 'Ver demo →' : 'Live demo →';

  return (
    <article className="projeto-card">
      <div className="projeto-card__header">
        <h3 className="projeto-card__title">{nome}</h3>
        {year && <span className="projeto-card__date">{year}</span>}
      </div>

      <p className="projeto-card__desc">{descricao}</p>

      <ul className="projeto-card__techs">
        {projeto.tecnologias.map((tech, i) => <li key={i}>{tech}</li>)}
      </ul>

      <div className="projeto-card__links">
        <a
          href={projeto.linkRepositorio}
          target="_blank"
          rel="noreferrer"
          className="projeto-card__link"
        >
          {linkLabel}
        </a>

        {projeto.linkDemo && (
          <a
            href={projeto.linkDemo}
            target="_blank"
            rel="noreferrer"
            className="projeto-card__link projeto-card__link--demo"
          >
            {demoLabel}
          </a>
        )}
      </div>
    </article>
  );
}
