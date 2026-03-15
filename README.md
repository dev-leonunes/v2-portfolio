# Portfólio

Portfólio pessoal em página única, construído com **Next.js (App Router)**. O conteúdo é **estático** (sem backend) e fica centralizado em `src/constants/index.ts`.

**Deploy:** https://dev-leonunes-portfolio.vercel.app/

## O que você encontra aqui

- Seção de apresentação (Hero)
- Sobre (About)
- Experiência profissional (Experience)
- Projetos com destaques e listagem (Projects)

## Stack

- Next.js 16 (App Router)
- React 19 + TypeScript
- Tailwind CSS v4
- Radix UI
- Framer Motion

## Onde editar conteúdo

Regra prática: **comece por `src/constants/index.ts`**.

- `CONTACT`: links e ícones de contato
- `TECHS` e `ABOUT_TECHS`: tecnologias exibidas
- `EXPERIENCES`: histórico profissional
- `PROJECTS`: projetos (com `type` e `featured`)

Imagens de projetos ficam em `public/` e são referenciadas no campo `image` (ex.: `/dr-julio-cezar-site.png`).

## Como rodar localmente

Pré-requisitos: Node.js + Yarn.

```bash
yarn install
yarn dev
```

Abra `http://localhost:3000`.

## Scripts

- `yarn dev`: desenvolvimento
- `yarn build`: build de produção
- `yarn start`: servidor de produção local
- `yarn lint`: lint

## Git hooks

O projeto possui um hook versionado em `.githooks/pre-push` que executa `yarn lint` e `yarn build` antes de cada `git push`.

Após clonar o repositório, ative os hooks locais com:

```bash
git config core.hooksPath .githooks
```

## Notas

- Tema claro/escuro via classes no `<html>` (`light`/`dark`) com persistência em `localStorage`.
- `next.config.ts` está com `output: "standalone"`.
