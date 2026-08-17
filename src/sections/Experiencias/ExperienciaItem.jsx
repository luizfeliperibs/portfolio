import './ExperienciaItem.css';

export function ExperienciaItem({ experiencia }) {
  return (
    <article className="experiencia-item">
      <div className="experiencia-item__cabecalho">
        <h3>{experiencia.cargo}</h3>
        <span className="experiencia-item__periodo">{experiencia.periodo}</span>
      </div>
      <p className="experiencia-item__instituicao">{experiencia.instituicao}</p>
      <p>{experiencia.descricao}</p>
    </article>
  );
}
