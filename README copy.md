# Portfólio Profissional — [SEU NOME]

Website de portfólio profissional desenvolvido para a disciplina de Projeto de Software (PUC Minas — 2º semestre/2026).

> Status atual: **Lab01S01 — Planejamento e Prototipação**

## 📋 Descrição

Site pessoal com quatro seções principais: Sobre Mim (PT/EN), Projetos (timeline), Experiências e Contato.

## 🛠️ Tecnologias previstas

- [React](https://react.dev/) 19
- [Vite](https://vitejs.dev/) — build tool
- CSS puro (sem framework de UI)
- Hospedagem: [Vercel](https://vercel.com/)

## 📁 Estrutura do projeto

Site em **single-page com scroll e âncoras** (menu fixo que rola até cada seção), inspirado na estrutura de [rhuanbello.com](https://rhuanbello.com).

```
src/
├── components/
│   └── Layout/         # Header (fixo) e Footer, reutilizados no topo/rodapé da página
├── context/
│   └── LanguageContext.jsx   # gerencia o idioma ativo (PT/EN)
├── data/                # dados desacoplados dos componentes (projetos, experiências, contato, etc.)
├── hooks/
│   └── useActiveSection.js   # detecta qual seção está visível para destacar o link ativo no menu
├── sections/
│   ├── SobreMim/
│   ├── Projetos/
│   ├── Experiencias/
│   └── Contato/
├── App.jsx              # empilha as seções na página única
└── main.jsx             # ponto de entrada da aplicação
```

## 🚧 Protótipos (wireframes)

_TODO: adicionar aqui as imagens dos wireframes feitos no Figma._

## ▶️ Como rodar localmente

```bash
npm install
npm run dev
```

O projeto ficará disponível em `http://localhost:5173`.

## 🔗 Site publicado

_TODO: adicionar link do deploy na Vercel (Lab01S03)._

## 📌 Roadmap

- [x] Lab01S01 — Estrutura, navegação e layout principal
- [ ] Lab01S02 — Conteúdo real, formulário funcional, responsividade
- [ ] Lab01S03 — Deploy na Vercel e ajustes finais
