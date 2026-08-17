import { useState } from 'react';
import { contatoLinks } from '../../data/contato';
import './Contato.css';

const CAMPOS_INICIAIS = { nome: '', email: '', mensagem: '' };

export function Contato() {
  const [formulario, setFormulario] = useState(CAMPOS_INICIAIS);

  function handleChange(event) {
    const { name, value } = event.target;
    setFormulario((atual) => ({ ...atual, [name]: value }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    // TODO (Lab01S02): integrar envio de e-mail sem back-end,
    // ex. via EmailJS ou Formspree, já que o projeto não usará servidor próprio.
    console.log('Formulário pronto para envio:', formulario);
  }

  return (
    <section id="contato" className="section contato">
      <h1>Contato</h1>

      <ul className="contato__icones">
        {contatoLinks.map((link) => (
          <li key={link.id}>
            <a href={link.href} target="_blank" rel="noreferrer">
              {link.label}
            </a>
          </li>
        ))}
      </ul>

      <form className="contato__form" onSubmit={handleSubmit}>
        <label htmlFor="nome">Nome</label>
        <input
          id="nome"
          name="nome"
          type="text"
          value={formulario.nome}
          onChange={handleChange}
          required
        />

        <label htmlFor="email">E-mail</label>
        <input
          id="email"
          name="email"
          type="email"
          value={formulario.email}
          onChange={handleChange}
          required
        />

        <label htmlFor="mensagem">Mensagem</label>
        <textarea
          id="mensagem"
          name="mensagem"
          rows={5}
          value={formulario.mensagem}
          onChange={handleChange}
          required
        />

        <button type="submit">Enviar</button>
      </form>
    </section>
  );
}
