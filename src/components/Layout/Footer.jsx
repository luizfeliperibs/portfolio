import './Footer.css';

export function Footer() {
  const ano = new Date().getFullYear();
  return (
    <footer className="footer">
      <p>© {ano} Luiz Felipe Ribeiro Souza — Belo Horizonte, MG</p>
    </footer>
  );
}
