import { useLanguage } from '../../context/LanguageContext';
import { projetos } from '../../data/projetos';
import { ProjetoCard } from './ProjetoCard';
import './Projetos.css';

export function Projetos() {
  const { language } = useLanguage();
  const sorted = [...projetos].sort((a, b) => new Date(a.data) - new Date(b.data));

  return (
    <section id="projetos" className="section">
      <div className="container">
        <h2 className="section__title">
          {language === 'pt' ? 'Projetos' : 'Projects'}
        </h2>
        <div className="projetos-lista">
          {sorted.map((p) => <ProjetoCard key={p.id} projeto={p} />)}
        </div>
      </div>
    </section>
  );
}
