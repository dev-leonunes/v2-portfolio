# AGENTS.md

Guia operacional para agentes LLM neste repositório.
Objetivo: permitir entendimento rápido da arquitetura, padrões e forma correta de evoluir o projeto sem quebrar consistência visual/comportamental.

---

## 1) Visão geral do projeto

- **Tipo**: Portfólio pessoal em página única (SPA-like) usando Next.js App Router.
- **Stack principal**: Next.js 16, React 19, TypeScript, Tailwind CSS v4, Radix UI, Framer Motion.
- **Idioma do conteúdo**: majoritariamente PT-BR.
- **Dados**: estáticos em `src/constants/index.ts` (sem backend).
- **Roteamento**: página principal em `src/app/page.tsx`; 404 em `src/app/not-found.tsx`.

Fluxo de renderização atual:

1. `src/app/layout.tsx` envolve toda a aplicação com `Header`, `Footer` e `ScrollToTop`.
2. `src/app/page.tsx` monta as seções na ordem: Hero → About → Experience → Projects.
3. Cada seção consome dados de `src/constants/index.ts` e componentes utilitários.

---

## 2) Como rodar e validar

- Instalar deps: `pnpm install`
- Desenvolvimento: `pnpm run dev`
- Build produção: `pnpm run build`
- Rodar produção local: `pnpm run start`
- Lint: `pnpm run lint`

Observação: não há suíte de testes configurada no momento.

---

## 3) Estrutura de pastas (o que existe e para que serve)

### `src/app`

- `layout.tsx`: layout raiz global.
- `page.tsx`: composição da home.
- `globals.css`: tokens de tema, estilos base, scrollbar, fontes e mapeamento de variáveis Tailwind.
- `not-found.tsx`: fallback 404.

### `src/components`

- `Header.tsx`: navegação desktop/mobile + toggle de tema.
- `Hero.tsx`: bloco de apresentação e CTA.
- `About.tsx`: seção sobre + vídeo com autoplay por interseção.
- `Experience.tsx`: histórico profissional com abas internas.
- `Footer.tsx`: links de contato.
- `ScrollToTop.tsx`: botão flutuante após rolagem.
- `nav-items.tsx`, `theme-toggle.tsx`: elementos reutilizados do cabeçalho.
- `animations/index.tsx`: wrappers com Framer Motion (`FadeUp`, `FadeIn`, `StaggerContainer`, `StaggerItem`).

### `src/components/Projects`

- `Projects.tsx`: seção de projetos com filtro.
- `FeaturedProject.tsx`: card horizontal para destaques.
- `OtherProject.tsx`: card em grid para demais projetos.
- `ProjectFilter.tsx`: dropdown de filtro por tipo.
- `ProjectTypeBadge.tsx`, `ProjectLinks.tsx`, `ImagePlaceholder.tsx`: peças auxiliares.

### `src/components/ui`

Componentes base estilizados (Radix + Tailwind): `button`, `badge`, `dropdown-menu`, `sheet`.

### `src/constants`

- `index.ts`: fonte única de conteúdo (contatos, tecnologias, experiências, projetos).

### `src/lib`

- `utils.ts`: helper `cn()` (`clsx` + `tailwind-merge`).

---

## 4) Contratos de dados importantes

Definidos em `src/constants/index.ts`:

- `ProjectType = "personal" | "freelance"`
- `Project`:
  - `id`, `title`, `description`, `technologies[]`, `type`, `featured`
  - opcionais: `image`, `githubUrl`, `liveUrl`

Coleções consumidas pelas seções:

- `CONTACT` (ícone + URL)
- `HERO_TECHS` (hero)
- `ABOUT_TECHS` (about)
- `EXPERIENCES` (experience)
- `PROJECTS` (projects)

Regra prática: qualquer atualização de conteúdo deve começar por `constants` antes de alterar UI.

---

## 5) Padrões de UI e estilo

1. **Tema**
   - Tema claro/escuro baseado em classes no `<html>`: `light` e `dark`.
   - Persistência em `localStorage` (`theme-toggle.tsx`).
   - Tokens CSS em `globals.css` (`--background`, `--foreground`, `--accent`, etc).

2. **Layout e espaçamento**
   - Container padrão: `container mx-auto px-6 lg:px-12 max-w-7xl`.
   - Seções principais usam altura mínima da viewport (`min-h-screen` ou similar).

3. **Motion**
   - Sempre preferir wrappers de `src/components/animations/index.tsx` antes de criar animações novas.
   - Curva de easing padrão já centralizada nesses wrappers.

4. **Classes utilitárias**
   - Para composição condicional, usar `cn()` de `src/lib/utils.ts`.

5. **Componentes base**
   - Reutilizar `ui/button`, `ui/dropdown-menu`, `ui/sheet`, `ui/badge`.
   - Evitar criar variações paralelas sem necessidade.

---

## 6) Regras de edição para agentes (muito importante)

- Fazer mudanças **mínimas e cirúrgicas**.
- Não mover arquivos sem necessidade explícita.
- Preservar texto em PT-BR ao adicionar novo conteúdo.
- Manter consistência visual com tokens existentes; evitar hardcode de cores fora das variáveis já usadas.
- Se alterar estrutura de dados em `constants`, atualizar todos os consumidores.
- Em componentes client-side, manter `"use client"` quando houver hooks/eventos APIs do browser.
- Não introduzir novas dependências se o problema puder ser resolvido com o que já existe.

---

## 7) Playbooks rápidos (tarefas comuns)

### A) Adicionar novo projeto

1. Inserir objeto em `PROJECTS` em `src/constants/index.ts`.
2. Garantir `type` (`personal` ou `freelance`) e `featured` corretos.
3. Se houver imagem, adicionar arquivo correspondente em `public/` e referenciar em `image`.
4. Validar render nos blocos “destaque” e “outros”.

### B) Adicionar item de experiência

1. Inserir novo item em `EXPERIENCES`.
2. Verificar legibilidade de `responsibilities` e `technologies`.
3. Testar seleção da aba em `ExperienceSection`.

### C) Criar nova seção na home

1. Criar componente em `src/components`.
2. Inserir no fluxo de `src/app/page.tsx` na posição desejada.
3. Se houver navegação por âncora, adicionar item no `NAV_ITEMS` de `Header.tsx` e `id` no `<section>`.

### D) Ajustar tema

1. Alterar tokens em `src/app/globals.css` (`:root`, `:root.light`, `:root.dark`).
2. Evitar alterar dezenas de classes manualmente se token resolve o problema.

---

## 8) Pontos de atenção atuais

- `README.md` está genérico de template do Next.js (não descreve este portfólio).
- Existe `todo.md` com próximos itens de produto/UX.
- `next.config.ts` usa `output: "standalone"` (atenção em mudanças de deploy).

---

## 9) Checklist de qualidade antes de encerrar qualquer mudança

1. Rodar `pnpm run lint`.
2. Verificar se não quebrou tema claro/escuro.
3. Validar responsividade básica (mobile + desktop) nas seções alteradas.
4. Confirmar que links externos continuam com `target="_blank"` + `rel="noopener noreferrer"`.
5. Garantir que a mudança respeita o padrão visual e textual existente.

---

## 10) Resumo mental para onboard rápido

- Este repo é um portfólio Next.js com conteúdo estático centralizado em `constants`.
- A home é composta por seções independentes e fortemente orientadas por Tailwind + animações Framer Motion.
- A maioria das evoluções é: **atualizar dados** → **ajustar componente de seção** → **validar layout/tema**.
