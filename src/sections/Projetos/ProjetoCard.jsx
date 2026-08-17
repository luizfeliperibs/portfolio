import './ProjetoCard.css';

export function ProjetoCard({ projeto }) {
  return (
    <article className="projeto-card">
      {/* TODO: substituir por <img src={projeto.imagem} ... /> quando a imagem/GIF estiver disponível */}
      <div className="projeto-card__imagem-placeholder">
        {projeto.imagem}
      </div>

      <div className="projeto-card__conteudo">
        <h3>{projeto.nome}</h3>
        <p>{projeto.descricao}</p>

        <ul className="projeto-card__tecnologias">
          {projeto.tecnologias.map((tech, index) => (
            <li key={index}>{tech}</li>
          ))}
        </ul>

        <a
          href={projeto.linkRepositorio}
          target="_blank"
          rel="noreferrer"
          className="projeto-card__link"
        >
          Ver repositório →
        </a>
      </div>
    </article>
  );
}
