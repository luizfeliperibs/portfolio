import './Footer.css';

export function Footer() {
  const anoAtual = new Date().getFullYear();

  return (
    <footer className="footer">
      {/* TODO: substituir pelo seu nome */}
      <p>&copy; {anoAtual} [SEU NOME]. Todos os direitos reservados.</p>
    </footer>
  );
}
