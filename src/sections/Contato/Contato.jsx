import { useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { contatoLinks } from '../../data/contato';
import './Contato.css';

const ICONS = { email: '✉️', whatsapp: '💬', linkedin: '💼', github: '🐙' };

const CAMPOS = { nome: '', email: '', mensagem: '' };

export function Contato() {
  const { language } = useLanguage();
  const [form, setForm] = useState(CAMPOS);
  const [sent, setSent] = useState(false);

  function handleChange(e) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log('Envio:', form);
    setSent(true);
    setForm(CAMPOS);
    setTimeout(() => setSent(false), 4000);
  }

  const t = {
    title:       language === 'pt' ? 'Contato'          : 'Contact',
    desc:        language === 'pt'
      ? 'Pode me mandar mensagem por qualquer canal ou preencher o formulário abaixo.'
      : 'Feel free to reach me through any channel or fill in the form below.',
    nome:        language === 'pt' ? 'Nome'              : 'Name',
    nomePH:      language === 'pt' ? 'Seu nome'          : 'Your name',
    emailPH:     language === 'pt' ? 'seu@email.com'     : 'your@email.com',
    msg:         language === 'pt' ? 'Mensagem'          : 'Message',
    msgPH:       language === 'pt' ? 'Olá, gostaria de...' : "Hi, I'd like to…",
    send:        language === 'pt' ? 'Enviar'            : 'Send',
    success:     language === 'pt' ? 'Mensagem enviada!' : 'Message sent!',
  };

  return (
    <section id="contato" className="section">
      <div className="container">
        <h2 className="section__title">{t.title}</h2>

        <div className="contato-layout">
          {/* Links */}
          <div>
            <p className="contato__desc">{t.desc}</p>
            <ul className="contato__links">
              {contatoLinks.map((link) => (
                <li key={link.id}>
                  <a href={link.href} target="_blank" rel="noreferrer">
                    <span className="icon">{ICONS[link.id] || '🔗'}</span>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Formulário */}
          <form className="contato__form" onSubmit={handleSubmit}>
            <div className="form-field">
              <label htmlFor="nome">{t.nome}</label>
              <input id="nome" name="nome" type="text" placeholder={t.nomePH}
                value={form.nome} onChange={handleChange} required />
            </div>

            <div className="form-field">
              <label htmlFor="email">E-mail</label>
              <input id="email" name="email" type="email" placeholder={t.emailPH}
                value={form.email} onChange={handleChange} required />
            </div>

            <div className="form-field">
              <label htmlFor="mensagem">{t.msg}</label>
              <textarea id="mensagem" name="mensagem" rows={5} placeholder={t.msgPH}
                value={form.mensagem} onChange={handleChange} required />
            </div>

            <button type="submit" className="contato__submit">{t.send}</button>
            {sent && <p className="contato__success">✓ {t.success}</p>}
          </form>
        </div>
      </div>
    </section>
  );
}
