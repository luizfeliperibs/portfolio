import { projetos } from '../../data/projetos';
import { ProjetoCard } from './ProjetoCard';
import './Projetos.css';

export function Projetos() {
  // Ordena do mais antigo para o mais recente, conforme exigido no enunciado
  const projetosOrdenados = [...projetos].sort(
    (a, b) => new Date(a.data) - new Date(b.data)
  );

  return (
    <section id="projetos" className="section projetos">
      <h1>Projetos</h1>
      <div className="projetos__timeline">
        {projetosOrdenados.map((projeto) => (
          <ProjetoCard key={projeto.id} projeto={projeto} />
        ))}
      </div>
    </section>
  );
}
