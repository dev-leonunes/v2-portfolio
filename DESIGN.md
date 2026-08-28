---
name: Leonardo Nunes Portfolio
description: Sistema visual do portfólio pessoal de Leonardo Nunes.
colors:
  ink-slate: "#0f172a"
  paper-slate: "#f8fafc"
  signal-amber: "#f59e0b"
  quiet-slate: "#94a3b8"
  surface-slate: "#334155"
  cool-muted-dark: "#b5c2d7"
  light-surface: "#e3e9f2"
  signal-amber-light: "#b45309"
  light-on-signal: "#fff7ed"
  cool-ink-light: "#243244"
  light-border: "#8398b4"
  light-muted: "#ccd6e5"
  signal-ring-light: "#d97706"
  danger: "#ef4444"
  danger-light: "#dc2626"
  on-danger: "#f8fafc"
typography:
  display:
    fontFamily: "Space Grotesk, Avenir Next, Segoe UI, sans-serif"
    fontSize: "2.55rem"
    fontWeight: 600
    lineHeight: 0.98
    letterSpacing: "-0.02em"
  headline:
    fontFamily: "Space Grotesk, Avenir Next, Segoe UI, sans-serif"
    fontSize: "1.875rem"
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: "-0.02em"
  title:
    fontFamily: "Space Grotesk, Avenir Next, Segoe UI, sans-serif"
    fontSize: "1.5rem"
    fontWeight: 700
    lineHeight: 1.25
    letterSpacing: "-0.02em"
  body:
    fontFamily: "Source Sans 3, Segoe UI, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.625
  label:
    fontFamily: "IBM Plex Mono, SF Mono, monospace"
    fontSize: "0.75rem"
    fontWeight: 500
    lineHeight: 1
    letterSpacing: "0.16em"
rounded:
  sm: "0.125rem"
  md: "0.375rem"
  lg: "0.5rem"
  xl: "0.75rem"
  2xl: "1rem"
  pill: "9999px"
spacing:
  section: "clamp(4rem, 8vh, 6rem)"
  hero-top: "clamp(5rem, 10vh, 7.5rem)"
  hero-bottom: "clamp(3rem, 6vh, 4.5rem)"
  anchor-offset: "clamp(5rem, 10vh, 7rem)"
  container-x: "1.5rem (base), 3rem (lg)"
  content-gap: "3rem"
components:
  button-hero-outline:
    backgroundColor: "transparent"
    textColor: "{colors.signal-amber}"
    typography: "{typography.label}"
    rounded: "{rounded.md}"
    padding: "0.625rem 1.5rem"
  badge-technology:
    backgroundColor: "color-mix(in oklab, var(--accent) 20%, transparent)"
    textColor: "{colors.signal-amber}"
    typography: "{typography.label}"
    rounded: "{rounded.md}"
    padding: "0.5rem 1rem"
  badge-project-type:
    backgroundColor: "color-mix(in oklab, var(--accent) 15%, transparent)"
    textColor: "{colors.signal-amber}"
    typography: "{typography.label}"
    rounded: "{rounded.pill}"
    padding: "0.25rem 0.75rem"
  project-card:
    backgroundColor: "color-mix(in oklab, var(--muted) 10%, transparent)"
    rounded: "{rounded.2xl}"
    padding: "1.25rem (base), 2rem (lg)"
  filter-trigger:
    backgroundColor: "color-mix(in oklab, var(--background) 35%, transparent)"
    textColor: "{colors.signal-amber}"
    typography: "{typography.label}"
    rounded: "{rounded.lg}"
    padding: "0.5rem 1rem"
---

# Design System: Leonardo Nunes Portfolio

## 1. Overview

**Creative North Star: "A Bancada de Soluções"**

O portfólio deve parecer uma bancada de trabalho organizada: cada projeto,
experiência e tecnologia é uma evidência concreta deixada à vista, pronta para
ser examinada. A composição combina uma base slate profunda no tema escuro com
um modo claro azul-acinzentado, enquanto o âmbar funciona como marca de ação,
ênfase e descoberta. A página é técnica sem ser fria, e arrojada sem depender
de ruído visual.

Space Grotesk dá forma aos títulos e à presença do nome; Source Sans 3 mantém
os textos longos legíveis; IBM Plex Mono aparece apenas em navegação, metadados
e pequenos rótulos. A narrativa deve conduzir o visitante de apresentação para
contexto, experiência e projetos, com estados de interação que tornam a
exploração mais tátil sem competir com o trabalho apresentado.

O sistema rejeita uma estética genérica de template, efeitos decorativos que
competem com as evidências, comunicação vaga ou inflada e interações que
prejudicam leitura, teclado ou compreensão. Referências visuais externas ainda
estão em aberto e devem ser incorporadas aqui quando forem definidas.

**Key Characteristics:**

- Evidência antes de promessa: projetos, imagens, contexto e links têm primazia.
- Âmbar concentrado em ação, estado ativo, índice e destaque contextual.
- Hierarquia tipográfica clara, com títulos compactos e corpo confortável.
- Superfícies estruturadas por tonalidade, bordas discretas e profundidade
  controlada.
- Interações responsivas que parecem precisas e táteis, sem movimento ornamental.

## 2. Colors

A estratégia é uma base neutra fria e escura, acompanhada por um modo claro
azul-acinzentado, com um único sinal âmbar suficientemente saturado para guiar
o olhar. Os papéis semânticos permanecem estáveis entre os temas; apenas seus
valores mudam.

### Primary

- **Âmbar de Sinal** (#f59e0b no tema escuro; #b45309 no tema claro): CTA,
  links, foco, navegação ativa, marcadores de seção e trechos que precisam ser
  descobertos rapidamente.
- **Âmbar de Anel** (#f59e0b no tema escuro; #d97706 no tema claro): variação
  de contraste para anéis de foco e estados de interação no modo claro.

### Secondary

- **Slate de Apoio** (#94a3b8 no tema escuro; #334155 no tema claro): texto
  secundário, navegação inativa e informação de suporte. Deve permanecer
  distinguível do fundo, sem virar cinza decorativo.

### Neutral

- **Slate de Base** (#0f172a): fundo principal do tema escuro e texto escuro
  quando aplicado sobre o âmbar.
- **Slate de Leitura** (#f8fafc): texto principal no tema escuro e conteúdo
  claro em contextos de alto contraste.
- **Superfície Slate** (#334155): superfícies muted, bordas e campos no tema
  escuro.
- **Cinza Frio de Fundo** (#e3e9f2): fundo principal do tema claro.
- **Cinza Frio de Superfície** (#ccd6e5): superfícies muted no tema claro.
- **Borda Azul-acinzentada** (#8398b4): bordas e inputs no tema claro.
- **Texto Muted Escuro** (#b5c2d7) e **Texto Muted Claro** (#243244): texto
  secundário com contraste ajustado para cada tema.
- **Sobreposição Clara do Âmbar** (#fff7ed): texto sobre o âmbar no tema
  claro.

### Named Rules

**The Amber Signal Rule.** O âmbar deve marcar ação, estado ou evidência; não
deve ser usado como preenchimento indiscriminado de longos blocos de texto.

**The Two-Theme Continuity Rule.** Os temas claro e escuro compartilham os
mesmos papéis semânticos. Não introduza uma paleta paralela só porque um
componente mudou de fundo.

## 3. Typography

**Display Font:** Space Grotesk (com Avenir Next, Segoe UI e sans-serif como
fallbacks)

**Body Font:** Source Sans 3 (com Segoe UI e sans-serif como fallbacks)

**Label/Mono Font:** IBM Plex Mono (com SF Mono e monospace como fallbacks)

**Character:** Space Grotesk dá aos títulos um desenho técnico e firme, enquanto
Source Sans 3 abre espaço para leitura e proximidade. IBM Plex Mono é um
instrumento de sinalização para labels, navegação e metadados; não substitui o
texto corrido.

### Hierarchy

- **Display** (600, 2.55rem base / 3.75rem em `sm` / 6rem em `lg`, line-height
  0.98, letter-spacing -0.02em): nome e ideia dominante do hero.
- **Headline** (700, 1.875rem base / 2.25rem em `lg`, line-height 1.2): títulos
  das seções e divisões principais da narrativa.
- **Title** (700, 1.5rem para conteúdo destacado / 1.125rem para cards,
  line-height aproximado de 1.25): projeto, função e títulos de conteúdo.
- **Body** (400, 1rem base / 1.125rem em `sm`, line-height 1.625): explicações,
  descrições e narrativa; mantenha parágrafos longos próximos de 65–75ch.
- **Label** (500, 0.75rem, letter-spacing 0.16–0.2em, uppercase apenas em
  rótulos curtos): navegação, índices, metadados, tipos de projeto e sinais de
  sistema.

### Named Rules

**The Type Ladder Rule.** Cada nível tipográfico deve ter uma função perceptível:
o display apresenta, o headline organiza, o title identifica, o body explica
e o mono sinaliza. Não use tracking amplo ou caixa alta em prosa.

## 4. Elevation

O sistema usa uma combinação de camadas tonais e sombras ambientais discretas.
As superfícies são definidas primeiro por `background`, borda e contraste; a
profundidade aparece como resposta ao scroll, hover ou foco. O brilho âmbar é
atmosférico e localizado, não um substituto para hierarquia. Blur é reservado
ao header em scroll e ao drawer mobile, onde ajuda a separar navegação do
conteúdo.

### Shadow Vocabulary

- **Header em scroll** (`0 8px 30px -24px rgba(0,0,0,0.85)`): separa o header
  fixo do conteúdo depois que a página começa a rolar.
- **Offset de ação** (`4px 4px 0 0` com o âmbar): resposta tátil do CTA do hero
  e do download do currículo.
- **Ambiente de destaque** (`0 28px 65px -54px color-mix(in oklab, var(--accent) 55%, transparent)`):
  elevação muito suave dos projetos em destaque.
- **Hover de projeto** (`0 24px 45px -36px color-mix(in oklab, var(--accent) 65%, transparent)`):
  reforço curto da interação nos cards de projetos menores.
- **Ambiente de experiência** (`0 26px 60px -52px color-mix(in oklab, var(--accent) 60%, transparent)`):
  separação sutil do painel de experiência.

### Named Rules

**The Useful Depth Rule.** Profundidade deve explicar uma relação — fixação,
seleção, hover ou destaque — e nunca transformar cada superfície em um objeto
flutuante.

## 5. Components

### Buttons

- **Shape:** `rounded-md` (0.375rem), com altura base de 2.5rem.
- **Primary / Hero CTA:** o CTA principal atual é um botão outline transparente
  com borda de 2px e texto âmbar; usa padding horizontal de 1.5rem, ampliado
  para 2rem em telas maiores, e label em mono.
- **Hover / Focus:** hover desloca o botão levemente para cima e para a
  esquerda e aplica offset âmbar de 4px; foco usa anel âmbar visível. Os
  reveals da página respeitam movimento reduzido; transforms de hover novos
  devem receber a mesma alternativa.
- **Ghost / Icon:** o toggle de tema usa uma área de ícone compacta, texto
  âmbar e hover de escala discreto, sem preenchimento permanente.

### Chips

- **Technology badge:** `bg-accent/20`, texto âmbar, `rounded-md`, padding
  `0.5rem 1rem` e IBM Plex Mono em 0.875rem.
- **Project type:** pill com `bg-accent/15`, borda `accent/30`, texto âmbar e
  padding compacto; diferencia `Projeto Pessoal` de `Freela`.
- **Technology metadata:** dentro dos cards, usa pills mais discretas com
  fundo de background, borda muted e texto secundário para não competir com o
  título.

### Cards / Containers

- **Featured project:** `rounded-2xl` (1rem), borda muted, `bg-muted/10`,
  padding `1.25rem` base / `2rem` em telas grandes; imagem em proporção 16:9 e
  layout lado a lado no desktop.
- **Other project:** `rounded-xl` (0.75rem), borda muted, imagem de 12rem de
  altura e conteúdo com padding de 1.5rem; a grade passa de uma para duas e
  três colunas conforme o viewport.
- **Experience panel:** `rounded-2xl`, `bg-muted/10`, padding de 1.5rem base /
  2rem em telas grandes; abas viram faixa horizontal rolável no mobile e
  coluna no desktop.
- **Image frame:** `rounded-xl`, overflow oculto, borda âmbar ou muted e
  transformação de escala curta apenas em hover.

### Navigation

- **Desktop:** header fixo de 4rem base / 6rem em telas grandes; transparente no
  topo e com background semitransparente + blur após scroll. Links em mono,
  índice âmbar e sublinhado âmbar no estado ativo.
- **Mobile:** drawer lateral à direita com fundo de background e blur; itens
  mantêm índice, label mono, área de toque confortável e estado ativo com
  background âmbar translúcido.
- **Focus:** links e controles devem manter anel âmbar visível e não depender
  apenas de cor para comunicar foco ou seleção.

### Project Filter

O filtro é um trigger compacto com ícone, borda âmbar translúcida, `rounded-lg`,
label mono e menu Radix alinhado ao final. A opção ativa recebe texto âmbar e
um fundo âmbar muito sutil; o menu deve escapar de containers com overflow.

### Reveal Motion

As revelações usam os wrappers compartilhados de `src/components/animations`.
Entradas usam `opacity` e `transform` com easing de saída, enquanto a seleção de
experiência usa uma transição curta de conteúdo. O conteúdo permanece legível
sem depender da animação e toda nova animação deve respeitar
`prefers-reduced-motion`.

## 6. Do's and Don'ts

### Do:

- **Do** tratar screenshots, experiências e links como a principal prova de
  valor da página.
- **Do** usar os tokens semânticos `background`, `foreground`, `accent`,
  `secondary`, `muted`, `border` e `ring` para preservar os dois temas.
- **Do** reservar IBM Plex Mono para navegação, labels e metadados curtos.
- **Do** manter o âmbar concentrado em ação, estado ativo e destaque
  contextual.
- **Do** manter foco visível, contraste legível, navegação por teclado, textos
  alternativos e uma alternativa para movimento.
- **Do** usar bordas e camadas tonais antes de adicionar sombras; quando houver
  sombra, mantê-la funcional e curta.

### Don't:

- **Don't** criar uma estética genérica de template que poderia representar
  qualquer desenvolvedor.
- **Don't** adicionar efeitos decorativos que competem com os projetos e as
  evidências de trabalho.
- **Don't** usar comunicação vaga, inflada ou baseada apenas em listas de
  tecnologias.
- **Don't** criar interações que dificultem leitura, navegação por teclado ou
  compreensão do conteúdo.
- **Don't** usar texto com gradiente, listras decorativas, grid ornamental ou
  glassmorphism como decoração padrão.
- **Don't** usar uma faixa colorida lateral acima de 1px em cards, alertas ou
  callouts; prefira bordas completas, mudança tonal ou um indicador semântico.
- **Don't** ultrapassar `rounded-2xl` (1rem) em cards e seções; pills ficam
  reservadas para tags e estados compactos.
- **Don't** transformar IBM Plex Mono em fonte de corpo ou usar caixa alta em
  parágrafos.
