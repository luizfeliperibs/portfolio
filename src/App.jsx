import { Header } from './components/Layout/Header';
import { Footer } from './components/Layout/Footer';
import { SobreMim } from './sections/SobreMim/SobreMim';
import { Projetos } from './sections/Projetos/Projetos';
import { Experiencias } from './sections/Experiencias/Experiencias';
import { Contato } from './sections/Contato/Contato';
import './App.css';

export function App() {
  return (
    <div className="app">
      <Header />

      <main className="app__content">
        <SobreMim />
        <Projetos />
        <Experiencias />
        <Contato />
      </main>

      <Footer />
    </div>
  );
}
