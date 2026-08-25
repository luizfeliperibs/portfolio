import { useLanguage } from '../../context/LanguageContext';
import { experiencias } from '../../data/experiencias';
import { ExperienciaItem } from './ExperienciaItem';

export function Experiencias() {
  const { language } = useLanguage();

  return (
    <section id="experiencias" className="section">
      <div className="container">
        <h2 className="section__title">
          {language === 'pt' ? 'Experiência' : 'Experience'}
        </h2>
        <div className="exp-lista">
          {experiencias.map((exp) => (
            <ExperienciaItem key={exp.id} experiencia={exp} language={language} />
          ))}
        </div>
      </div>
    </section>
  );
}
