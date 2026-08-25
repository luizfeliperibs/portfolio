import './ExperienciaItem.css';

export function ExperienciaItem({ experiencia, language = 'pt' }) {
  const cargo   = typeof experiencia.cargo   === 'object' ? experiencia.cargo[language]   || experiencia.cargo.pt   : experiencia.cargo;
  const periodo = typeof experiencia.periodo === 'object' ? experiencia.periodo[language] || experiencia.periodo.pt : experiencia.periodo;
  const descricao=typeof experiencia.descricao==='object'? experiencia.descricao[language]||experiencia.descricao.pt: experiencia.descricao;

  return (
    <div className="exp-item">
      <div className="exp-item__head">
        <span className="exp-item__role">{cargo}</span>
        <span className="exp-item__period">{periodo}</span>
      </div>
      <p className="exp-item__company">{experiencia.instituicao}</p>
      <p className="exp-item__desc">{descricao}</p>
    </div>
  );
}
