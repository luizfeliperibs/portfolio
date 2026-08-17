import { experiencias } from '../../data/experiencias';
import { ExperienciaItem } from './ExperienciaItem';

export function Experiencias() {
  return (
    <section id="experiencias" className="section experiencias">
      <h1>Experiências</h1>
      <div className="experiencias__lista">
        {experiencias.map((experiencia) => (
          <ExperienciaItem key={experiencia.id} experiencia={experiencia} />
        ))}
      </div>
    </section>
  );
}
