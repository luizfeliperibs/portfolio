<div align="center">

<h1>
  <img src="https://readme-typing-svg.demolab.com?font=Fira+Code&weight=700&size=30&duration=4000&pause=1000&color=6366F1&center=true&vCenter=true&width=600&lines=🚀+Portfólio+Profissional;React+19+%2B+Vite+%2B+CSS+Puro;Bilíngue+%7C+PT+%2F+EN" alt="Typing SVG" />
</h1>

<p>
  <strong>Site pessoal de portfólio — Single-Page Application com navegação suave, suporte bilíngue (PT/EN) e design responsivo.</strong>
</p>

<p>
  <a href="#-demo">Demo</a> •
  <a href="#-features">Features</a> •
  <a href="#%EF%B8%8F-tecnologias">Tecnologias</a> •
  <a href="#-estrutura-do-projeto">Estrutura</a> •
  <a href="#-como-rodar">Como Rodar</a> •
  <a href="#-roadmap">Roadmap</a>
</p>

<p>
  <img src="https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=white" alt="React 19" />
  <img src="https://img.shields.io/badge/Vite-8-646CFF?style=for-the-badge&logo=vite&logoColor=white" alt="Vite 8" />
  <img src="https://img.shields.io/badge/CSS-Puro-1572B6?style=for-the-badge&logo=css3&logoColor=white" alt="CSS Puro" />
  <img src="https://img.shields.io/badge/Deploy-Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white" alt="Vercel" />
  <img src="https://img.shields.io/badge/Licença-MIT-green?style=for-the-badge" alt="MIT License" />
</p>

<p>
  <img src="https://img.shields.io/badge/status-em%20desenvolvimento-yellow?style=flat-square" alt="Status" />
  <img src="https://img.shields.io/badge/PUC%20Minas-Projeto%20de%20Software-8B0000?style=flat-square" alt="PUC Minas" />
  <img src="https://img.shields.io/badge/2º%20Semestre-2026-blue?style=flat-square" alt="Semestre" />
</p>

</div>

---

## 🎯 Sobre o Projeto

Este é meu **portfólio pessoal**, desenvolvido como projeto prático para a disciplina de **Projeto de Software** da PUC Minas (2º semestre/2026).

O site funciona como uma **Single-Page Application (SPA)** — uma única página com scroll suave e âncoras entre seções. O menu fixo no topo detecta automaticamente qual seção está visível e destaca o link correspondente, proporcionando uma experiência de navegação fluida e moderna.

> 💡 **Inspiração de arquitetura:** [rhuanbello.com](https://rhuanbello.com)

---

## ✨ Features

- 🌐 **Bilíngue (PT / EN)** — alternância de idioma em tempo real via Context API
- 🧭 **Navegação inteligente** — menu fixo que detecta a seção ativa com `IntersectionObserver`
- 📋 **Timeline de projetos** — exibição cronológica dos projetos do mais antigo ao mais recente
- 💼 **Seção de Experiências** — histórico profissional e acadêmico
- 📬 **Contato direto** — links para E-mail, WhatsApp, LinkedIn e GitHub
- 📱 **Design responsivo** — funciona em desktop, tablet e mobile
- ⚡ **Performance** — build otimizado com Vite 8

---

## 🛠️ Tecnologias

| Categoria       | Tecnologia                                                          |
|-----------------|---------------------------------------------------------------------|
| **Framework**   | [React 19](https://react.dev/)                                      |
| **Build Tool**  | [Vite 8](https://vitejs.dev/)                                       |
| **Estilização** | CSS Puro (sem framework de UI)                                      |
| **Linting**     | [oxlint](https://oxc.rs/docs/guide/usage/linter.html)              |
| **Hospedagem**  | [Vercel](https://vercel.com/)                                       |
| **Linguagem**   | JavaScript (JSX)                                                    |

---

## 📁 Estrutura do Projeto

```
portifolio/
├── public/                   # Arquivos estáticos públicos
├── src/
│   ├── assets/               # Imagens, ícones e outros assets
│   ├── components/
│   │   └── Layout/           # Header (fixo) e Footer reutilizáveis
│   ├── context/
│   │   └── LanguageContext.jsx   # Gerencia o idioma ativo (PT/EN)
│   ├── data/                 # Dados desacoplados dos componentes
│   │   ├── sobreMim.js       # Conteúdo bilíngue da seção "Sobre Mim"
│   │   ├── projetos.js       # Lista de projetos com metadados
│   │   ├── experiencias.js   # Histórico profissional/acadêmico
│   │   └── contato.js        # Links de contato
│   ├── hooks/
│   │   └── useActiveSection.js   # Detecta a seção visível (IntersectionObserver)
│   ├── sections/
│   │   ├── SobreMim/         # Seção de apresentação pessoal
│   │   ├── Projetos/         # Timeline de projetos
│   │   ├── Experiencias/     # Experiências profissionais e acadêmicas
│   │   └── Contato/          # Links e formulário de contato
│   ├── App.jsx               # Componente raiz — empilha as seções
│   ├── App.css               # Estilos globais da aplicação
│   ├── index.css             # Reset e variáveis CSS
│   └── main.jsx              # Ponto de entrada da aplicação
├── index.html                # HTML raiz (Vite)
├── vite.config.js            # Configuração do Vite
├── package.json
└── .oxlintrc.json            # Configuração do linter
```

---

## 🚀 Como Rodar

### Pré-requisitos

- [Node.js](https://nodejs.org/) `>= 18`
- [npm](https://www.npmjs.com/) `>= 9`

### Instalação e execução

```bash
# 1. Clone o repositório
git clone https://github.com/luizfeliperibs/portifolio.git

# 2. Acesse a pasta do projeto
cd portifolio

# 3. Instale as dependências
npm install

# 4. Inicie o servidor de desenvolvimento
npm run dev
```

O projeto ficará disponível em **`http://localhost:5173`** 🎉

### Outros comandos

```bash
npm run build    # Gera o build de produção em /dist
npm run preview  # Pré-visualiza o build de produção localmente
npm run lint     # Roda o linter (oxlint)
```

---

## 🔗 Demo

> 🚧 Deploy em andamento — link será adicionado após o Lab01S03.

---

## 📸 Screenshots

> 🚧 Wireframes e screenshots serão adicionados em breve.

---

## 🗺️ Roadmap

- [x] **Lab01S01** — Estrutura base, navegação, seções e layout principal
- [ ] **Lab01S02** — Conteúdo real, formulário de contato funcional, responsividade total
- [ ] **Lab01S03** — Deploy na Vercel, SEO, ajustes finais e polimento visual

---

## 🤝 Contribuindo

Este é um projeto pessoal e acadêmico, mas sugestões são bem-vindas!

1. Faça um **fork** do projeto
2. Crie sua branch: `git checkout -b feat/minha-sugestao`
3. Commit suas mudanças: `git commit -m 'feat: minha sugestão'`
4. Push para a branch: `git push origin feat/minha-sugestao`
5. Abra um **Pull Request**

---

## 📄 Licença

Distribuído sob a licença **MIT**. Veja [`LICENSE`](LICENSE) para mais informações.

---

<div align="center">

Feito por **[Luiz Felipe Ribeiro Souza](https://github.com/luizfeliperibs)** — PUC Minas, 2026

<p>
  <a href="https://github.com/luizfeliperibs">
    <img src="https://img.shields.io/badge/GitHub-luizfeliperibs-181717?style=for-the-badge&logo=github" alt="GitHub" />
  </a>
</p>

⭐ Se este projeto foi útil para você, deixe uma estrela!

</div>
