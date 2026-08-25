import { Header } from './components/Layout/Header';
import { Footer } from './components/Layout/Footer';
import { Hero } from './sections/Hero/Hero';
import { SobreMim } from './sections/SobreMim/SobreMim';
import { Projetos } from './sections/Projetos/Projetos';
import { Experiencias } from './sections/Experiencias/Experiencias';
import { Contato } from './sections/Contato/Contato';
import './App.css';

export function App() {
  return (
    <div className="app">
      <Header />

      <main>
        {/* Hero é full-width, usa .container interno */}
        <Hero />

        {/* Demais seções também usam .container internamente */}
        <SobreMim />
        <Projetos />
        <Experiencias />
        <Contato />
      </main>

      <Footer />
    </div>
  );
}
