import { useLanguage } from '../../context/LanguageContext';
import { sobreMimContent } from '../../data/sobreMim';
import './SobreMim.css';

export function SobreMim() {
  const { language } = useLanguage();
  const content = sobreMimContent[language];

  return (
    <section id="sobre" className="section sobre-mim">
      <h1>{content.saudacao}</h1>
      <p className="sobre-mim__resumo">{content.resumo}</p>

      <div className="sobre-mim__bloco">
        <h2>{language === 'pt' ? 'Formação' : 'Education'}</h2>
        <p>{content.formacao}</p>
      </div>

      <div className="sobre-mim__bloco">
        <h2>{language === 'pt' ? 'Interesses' : 'Interests'}</h2>
        <ul>
          {content.interesses.map((interesse, index) => (
            <li key={index}>{interesse}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
