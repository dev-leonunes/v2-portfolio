# Ciclo 5 — galeria imersiva das imagens dos projetos

**Status:** implemented — validação concluída; aguardando commit/merge
**Data:** 2026-09-13
**Última atualização:** 2026-09-13
**Branch de implementação:** `feat/portfolio-ux-improvements`
**Superfície:** cards e imagens da seção `Projects`
**Direção visual:** galeria imersiva, preservando o padrão atual refinado

**Plano de implementação:** [tarefas atômicas do Ciclo 5](./2026-09-13-ciclo-5-galeria-imagens-projetos-tasks.md)

Este documento registra o desenho aprovado e o resultado da implementação do Ciclo 5. A implementação foi concluída nesta branch; nenhum commit ou merge foi realizado.

## 1. Contexto e problema

As imagens dos projetos atualmente funcionam apenas como prévias estáticas. Em cards secundários, especialmente, a área disponível é pequena e não permite examinar detalhes das telas. Os links para GitHub e para o projeto publicado devem continuar separados, mas as imagens precisam oferecer uma forma própria de inspeção.

O projeto já possui imagens locais e textos alternativos centralizados nos dados de `PROJECTS`. O contrato atual aceita somente uma imagem por projeto, embora alguns projetos possam se beneficiar de várias capturas no futuro.

## 2. Objetivo

Criar uma galeria imersiva e acessível que permita:

- ampliar a imagem sem abandonar a home;
- preservar capturas inteiras, sem recorte;
- navegar entre várias imagens do mesmo projeto;
- mudar para outros projetos visíveis usando navegação vertical;
- manter o filtro e a ordem atuais da seção;
- preparar o contrato de dados para novas capturas sem exigir nova refatoração.

## 3. Decisões aprovadas

- A interação será uma galeria navegável, não apenas uma prévia simples.
- A galeria será imersiva e ocupará quase toda a tela.
- A imagem usará `contain`, preservando todos os detalhes e proporções.
- Cada projeto poderá ter várias imagens com `src` e `alt` próprios.
- Os dados atuais serão migrados para coleções com uma imagem cada; nenhuma captura nova será inventada nesta etapa.
- O BackScan continuará usando a colagem atual como uma única imagem.
- `← →` percorrerão as imagens do projeto atual.
- `↑ ↓` percorrerão os projetos atualmente exibidos na home, respeitando o filtro ativo.
- A troca de projeto sempre abrirá a primeira imagem do projeto novo.
- A navegação não será circular; os controles ficarão indisponíveis nos limites.
- Projetos com uma imagem não exibirão controles horizontais sem função.
- O ícone de ampliação aparecerá em `hover` e foco no desktop e permanecerá visível no mobile.
- Abertura, fechamento, foco e rolagem usarão o comportamento modal acessível de Radix Dialog, já disponível no projeto.
- O gesto horizontal no mobile trocará imagens; a troca de projetos continuará nos botões verticais.
- A galeria não substituirá os links de GitHub ou projeto publicado.

## 4. Experiência funcional e visual

### 4.1 Entrada da galeria

Cada imagem real será apresentada dentro de um botão independente. O botão terá nome acessível equivalente a `Ampliar imagens de [nome do projeto]` e abrirá a galeria na imagem clicada.

Placeholders sem imagem permanecerão apenas informativos e não serão acionáveis.

No desktop, o estado interativo será indicado por uma combinação discreta de:

- ícone de ampliação sobre a imagem durante `hover`;
- o mesmo ícone durante foco de teclado;
- contraste/borda de foco visível.

No mobile, o ícone de ampliação ficará fixo sobre a imagem, pois não existe `hover` confiável nesse contexto.

O botão da imagem não envolverá o card inteiro nem os links existentes, evitando elementos interativos aninhados.

### 4.2 Galeria imersiva

Ao abrir, a galeria exibirá:

- fundo escurecido cobrindo a viewport;
- imagem centralizada ocupando o maior espaço possível sem ser cortada;
- título do projeto;
- contador de projeto e contador de imagem;
- botão de fechar;
- controles de navegação quando houver conteúdo naquela direção.

A imagem continuará legível em temas claro e escuro, com contraste suficiente entre o fundo, os controles e a captura.

### 4.3 Navegação por imagens

As setas horizontais alterarão somente a imagem do projeto atual. A posição inicial será a imagem acionada no card; ao mudar de projeto, a posição será reiniciada para a primeira imagem.

Quando o projeto tiver uma única imagem, as setas horizontais não aparecerão. Quando houver várias imagens, os controles e as setas esquerda/direita do teclado serão habilitados apenas enquanto existir uma imagem naquela direção.

No mobile, o gesto de deslizar horizontalmente terá o mesmo efeito das setas esquerda/direita. O gesto não deverá capturar a rolagem vertical da página fora do modal.

### 4.4 Navegação por projetos

As setas verticais percorrerão a lista efetivamente exibida pela home:

1. projetos em destaque filtrados;
2. projetos secundários exibidos na sequência atual;
3. somente projetos que possuem pelo menos uma imagem.

Com o filtro “Todos”, a galeria seguirá exatamente os projetos que aparecem na home. Com um filtro por tipo, seguirá somente os projetos daquele resultado. Projetos reservados para a futura página “Mais Projetos” não entrarão nesta navegação enquanto não estiverem visíveis na home.

Ao mudar de projeto, a galeria manterá o modal aberto e abrirá sempre a primeira imagem do novo projeto.

## 5. Dados e arquitetura

### 5.1 Contrato de imagem

O contrato de projeto será ajustado para substituir `image` e `imageAlt` por:

```ts
export interface ProjectImage {
  src: string;
  alt: string;
}
```

A interface `Project` continuará contendo os demais campos atuais e passará a usar `images?: ProjectImage[]` no lugar de `image?: string` e `imageAlt?: string`. Todos os projetos que possuem imagem receberão uma coleção com um item. Projetos sem imagem continuarão sem `images` e continuarão usando `ImagePlaceholder`.

### 5.2 Estado da galeria

A `ProjectsSection` continuará calculando a lista filtrada e será a fonte da lista navegável. O estado aberto poderá ser representado por:

```ts
type GalleryState = {
  projectIndex: number;
  imageIndex: number;
} | null;
```

O índice de projeto será relativo à lista visível com imagens, não ao array completo de `PROJECTS`. Isso mantém a navegação alinhada com o filtro e com a ordem apresentada.

### 5.3 Componentes

#### `ProjectImage`

- **Local:** `src/components/Projects/ProjectImage.tsx`
- **Responsabilidade:** renderizar imagem ou placeholder e fornecer o botão de abertura quando houver imagem.
- **Reutilização:** substituir a duplicação de renderização visual presente em `FeaturedProject` e `OtherProject`.
- **Dependências:** `next/image`, `ImagePlaceholder`, dados de `ProjectImage` e callback de abertura.

#### `ProjectGallery`

- **Local:** `src/components/Projects/ProjectGallery.tsx`
- **Responsabilidade:** controlar a galeria aberta, a imagem atual, o projeto atual, fechamento, navegação e interação mobile.
- **Dependências:** lista visível de projetos com imagens e estado controlado pela `ProjectsSection`.
- **Semântica:** utilizar o primitive modal de Radix Dialog com título acessível, foco preso e retorno ao gatilho.

#### `Dialog`

- **Local:** `src/components/ui/dialog.tsx`
- **Responsabilidade:** encapsular os primitives necessários do `@radix-ui/react-dialog`, seguindo o padrão existente de `sheet.tsx`.
- **Reutilização:** deixar overlay, conteúdo, título, descrição, portal e fechamento consistentes caso outro modal seja necessário no futuro.

#### Cards de projeto

- **Locais:** `src/components/Projects/FeaturedProject.tsx` e `src/components/Projects/OtherProject.tsx`
- **Responsabilidade:** manter layout, conteúdo e links; delegar a renderização da imagem ao componente compartilhado e disparar a abertura com o índice correto.

#### `ProjectsSection`

- **Local:** `src/components/Projects/Projects.tsx`
- **Responsabilidade:** preservar filtros e limite da home, derivar a lista navegável e renderizar uma única instância da galeria.

## 6. Requisitos verificáveis

### IMG-01 — Coleção de imagens por projeto ⭐ MVP

**História:** como mantenedor do portfólio, quero cadastrar várias imagens por projeto para ampliar a apresentação no futuro sem alterar novamente o contrato principal.

**Critérios:**

1. WHEN um projeto possuir imagens THEN o sistema SHALL armazenar cada imagem com `src` e `alt` próprios.
2. WHEN os dados atuais forem migrados THEN cada imagem existente SHALL continuar apontando para o mesmo arquivo e texto alternativo equivalente.
3. WHEN um projeto não possuir imagem THEN o sistema SHALL continuar usando o placeholder existente.

**Teste independente:** inspecionar `PROJECTS` e confirmar que projetos com imagem usam `images[]`, enquanto projetos sem imagem continuam renderizando o placeholder.

### IMG-02 — Abertura da galeria ⭐ MVP

**História:** como visitante, quero ampliar a captura de um projeto sem sair da home para entender melhor o trabalho apresentado.

**Critérios:**

1. WHEN o visitante ativar uma imagem real THEN o sistema SHALL abrir a galeria imersiva na imagem acionada.
2. WHEN a galeria estiver aberta THEN o sistema SHALL mostrar título, contadores e botão de fechar.
3. WHEN a imagem tiver proporção diferente da área disponível THEN o sistema SHALL preservá-la inteira sem recorte.
4. WHEN a imagem receber foco no desktop ou for exibida no mobile THEN o sistema SHALL comunicar visualmente que pode ser ampliada.

**Teste independente:** abrir uma imagem de destaque e uma imagem secundária em desktop e mobile, confirmar a prévia imersiva e verificar que nenhum detalhe é cortado.

### IMG-03 — Navegação entre imagens ⭐ MVP

**História:** como visitante, quero examinar todas as capturas de um projeto sem fechar a galeria.

**Critérios:**

1. WHEN o projeto possuir mais de uma imagem THEN `← →` SHALL trocar somente a imagem do projeto atual.
2. WHEN o visitante usar as setas esquerda/direita do teclado THEN o sistema SHALL produzir a mesma troca das setas visuais.
3. WHEN o projeto possuir uma única imagem THEN o sistema SHALL ocultar os controles horizontais.
4. WHEN o visitante alcançar a primeira ou a última imagem THEN o controle correspondente SHALL ficar indisponível e a galeria SHALL não fazer loop.

**Teste independente:** usar um projeto com uma coleção de teste de duas imagens, percorrer as duas direções e verificar os limites.

### IMG-04 — Navegação entre projetos ⭐ MVP

**História:** como visitante, quero conhecer outros projetos sem fechar a imagem atual e retornar à grade.

**Critérios:**

1. WHEN a galeria estiver aberta THEN `↑ ↓` SHALL trocar entre projetos visíveis que possuam imagens.
2. WHEN um filtro estiver ativo THEN a navegação SHALL respeitar somente os projetos presentes naquele resultado.
3. WHEN o projeto mudar THEN o sistema SHALL abrir a primeira imagem do novo projeto.
4. WHEN o visitante alcançar o primeiro ou o último projeto elegível THEN o controle vertical correspondente SHALL ficar indisponível.

**Teste independente:** abrir a galeria com “Todos”, navegar entre projetos, aplicar cada filtro e confirmar que nenhum projeto fora do resultado é alcançado.

### IMG-05 — Fechamento e foco acessíveis ⭐ MVP

**História:** como visitante que usa teclado ou tecnologia assistiva, quero controlar e sair da galeria sem perder minha posição na página.

**Critérios:**

1. WHEN a galeria abrir THEN o sistema SHALL expor um diálogo modal com nome acessível e foco dentro do conteúdo.
2. WHEN o visitante pressionar `Esc`, clicar no fundo ou ativar fechar THEN o sistema SHALL fechar a galeria.
3. WHEN o diálogo fechar THEN o foco SHALL retornar ao botão da imagem que iniciou a abertura.
4. WHEN a galeria estiver aberta THEN controles e conteúdo fora dela SHALL não receber interação acidental.
5. WHEN a galeria estiver aberta THEN a rolagem do documento ao fundo SHALL permanecer bloqueada.

**Teste independente:** abrir e fechar usando mouse e teclado, percorrer os controles por `Tab` e confirmar o retorno do foco ao card de origem.

### IMG-06 — Experiência mobile ⭐ MVP

**História:** como visitante mobile, quero ampliar e percorrer capturas sem depender de hover ou perder a rolagem da página.

**Critérios:**

1. WHEN uma imagem real for exibida em viewport mobile THEN o ícone de ampliação SHALL permanecer visível.
2. WHEN o visitante deslizar horizontalmente dentro da galeria THEN o sistema SHALL trocar a imagem do projeto atual.
3. WHEN o visitante deslizar verticalmente fora da galeria THEN a rolagem da página SHALL continuar normal.
4. WHEN o visitante usar os controles verticais no modal THEN o sistema SHALL trocar de projeto sem fechar a galeria.

**Teste independente:** testar em viewport estreita, abrir uma imagem, trocar por gesto horizontal, navegar por botão vertical e confirmar ausência de overflow horizontal.

### IMG-07 — Temas, movimento e falha de imagem

**História:** como visitante em diferentes dispositivos e preferências, quero uma galeria legível mesmo quando uma imagem não carrega ou quando prefiro menos movimento.

**Critérios:**

1. WHEN o tema claro ou escuro estiver ativo THEN fundo, controles, título e contadores SHALL manter contraste e legibilidade.
2. WHEN `prefers-reduced-motion: reduce` estiver ativo THEN a galeria SHALL evitar transições não essenciais.
3. WHEN uma imagem falhar no carregamento THEN o modal SHALL continuar fechável e exibir um estado de falha compreensível.
4. WHEN não houver conteúdo válido para uma direção THEN o sistema SHALL manter o controle indisponível sem gerar erro de runtime.

**Teste independente:** alternar temas, ativar movimento reduzido, simular uma imagem inválida e verificar que o modal continua recuperável.

## 7. Rastreabilidade dos requisitos

| Requirement ID | História | Fase | Status |
| --- | --- | --- | --- |
| IMG-01 | Coleção de imagens por projeto | Tasks | Verified |
| IMG-02 | Abertura da galeria | Tasks | Verified |
| IMG-03 | Navegação entre imagens | Tasks | Verified |
| IMG-04 | Navegação entre projetos | Tasks | Verified |
| IMG-05 | Fechamento e foco acessíveis | Tasks | Verified |
| IMG-06 | Experiência mobile | Tasks | Verified |
| IMG-07 | Temas, movimento e falha de imagem | Tasks | Verified |

**Cobertura:** 7 requisitos totais, 7 mapeados para tarefas, 0 sem tarefa associada.

## 8. Tratamento de estados e erros

| Cenário | Comportamento esperado |
| --- | --- |
| Projeto sem `images` ou com coleção vazia | Renderizar `ImagePlaceholder` sem botão de galeria. |
| Projeto com uma imagem | Abrir a galeria sem setas horizontais. |
| Projeto com várias imagens | Exibir contador e setas horizontais dentro dos limites. |
| Primeiro/último item da coleção | Desabilitar o controle correspondente; não fazer loop. |
| Primeiro/último projeto visível | Desabilitar a seta vertical correspondente. |
| Imagem com erro de carregamento | Exibir estado de falha dentro do modal, mantendo fechar e navegação disponível quando aplicável. |
| Filtro ativo | Usar somente projetos visíveis e com imagens como fonte de navegação. |
| Movimento reduzido | Remover ou reduzir transições; preservar todas as ações. |
| Fechamento | Desbloquear a rolagem e devolver foco ao gatilho de origem. |

## 9. Decisões técnicas

| Decisão | Escolha | Motivo |
| --- | --- | --- |
| Modal | `@radix-ui/react-dialog` já instalado | Reutiliza o ecossistema existente e oferece foco modal, fechamento por `Esc`, interação externa controlada e retorno de foco. |
| Modelo de mídia | `images: { src, alt }[]` | Prepara múltiplas capturas e mantém texto alternativo específico por imagem. |
| Ajuste da imagem | `contain` | Capturas de tela e colagens precisam permanecer completas para serem compreendidas. |
| Navegação | Dois eixos | Separa imagens do projeto (`← →`) de projetos da home (`↑ ↓`). |
| Fonte da galeria | Lista visível filtrada | Evita levar o visitante a projetos que não fazem parte do contexto atual. |
| Limites | Sem loop | Comunica início/fim e evita navegação inesperada. |
| Dependências | Nenhuma nova | Radix, `next/image`, Tailwind e padrões existentes são suficientes. |

## 10. Arquivos previstos

| Arquivo | Responsabilidade |
| --- | --- |
| `src/constants/index.ts` | Adicionar `ProjectImage`, atualizar `Project` e migrar os dados de imagem. |
| `src/components/Projects/ProjectImage.tsx` | Centralizar imagem/placeholder, botão e indicador de ampliação. |
| `src/components/Projects/ProjectGallery.tsx` | Implementar estado, modal, navegação, teclado e gesto mobile. |
| `src/components/ui/dialog.tsx` | Encapsular os primitives Radix usados pelo modal. |
| `src/components/Projects/FeaturedProject.tsx` | Reutilizar `ProjectImage` sem alterar a hierarquia do destaque. |
| `src/components/Projects/OtherProject.tsx` | Reutilizar `ProjectImage` sem alterar a grade secundária. |
| `src/components/Projects/Projects.tsx` | Derivar a lista visível, controlar abertura e renderizar a galeria. |

`ImagePlaceholder.tsx`, `ProjectLinks.tsx`, filtros, limites e ordem dos projetos serão preservados, salvo ajustes de integração estritamente necessários.

## 11. Sequência de implementação executada

1. Atualizar o contrato e migrar os dados de imagens.
2. Criar o wrapper de `Dialog` seguindo o padrão de `Sheet`.
3. Criar o componente compartilhado de imagem acionável.
4. Adicionar a galeria controlada à seção de projetos.
5. Integrar os cards de destaque e secundários.
6. Adicionar navegação de imagens, projetos, teclado e gesto horizontal.
7. Validar temas, responsividade, foco, filtros, limites e falha de imagem.

Esta sequência foi detalhada no plano de tarefas atômicas e executada nesta branch, mantendo a migração transitória do contrato até a remoção dos campos legados.

## 12. Validação e critérios de saída

### Validação técnica

- `pnpm run lint` sem erros;
- `pnpm run build` concluído;
- `git diff --check` sem problemas;
- nenhum link de projeto alterado ou aninhado dentro do botão de imagem;
- nenhum erro de runtime ao abrir, navegar ou fechar a galeria.

### Validação visual e comportamental

- desktop claro e escuro: destaque, cards secundários e modal imersivo;
- mobile claro e escuro: ícone fixo, gesto horizontal e controles verticais;
- projeto com uma imagem e projeto com coleção de teste de duas imagens;
- navegação em ambos os eixos e limites sem loop;
- filtro “Todos” e filtros por tipo;
- foco visível, `Esc`, clique no fundo e retorno ao gatilho;
- `prefers-reduced-motion`;
- preservação da imagem inteira sem corte;
- ausência de overflow horizontal.

### Critérios de saída

- [x] Todas as imagens atuais continuam sendo exibidas com seus textos alternativos.
- [x] Qualquer imagem real da home abre a galeria imersiva.
- [x] Uma coleção com várias imagens pode ser percorrida sem fechar o modal.
- [x] Projetos visíveis podem ser percorridos verticalmente e sempre começam pela primeira imagem.
- [x] A experiência funciona por mouse, teclado e no mobile.
- [x] Os links externos e a hierarquia atual dos projetos permanecem intactos.
- [x] Lint, build, revisão visual e checagens de acessibilidade passam.

## 13. Fora do escopo

- criar novas capturas de tela para os projetos;
- transformar a colagem do BackScan em imagens individuais nesta etapa;
- upload ou gerenciamento dinâmico de mídia;
- zoom com pinça, pan ou edição da imagem;
- vídeos dentro da galeria;
- abrir GitHub ou projeto publicado ao clicar na imagem;
- alterar limite, ordem ou hierarquia dos projetos da home;
- criar a página “Mais Projetos”;
- criar a seção de Contato;
- adotar formalmente WCAG 2.2 AA;
- alterar o design geral da home ou introduzir novo padrão visual.

## 14. Relação com o roadmap

Este ciclo atende ao item existente no `TODO.md` sobre melhorar a interação com as fotos dos projetos. Ele prepara a apresentação para futuras coleções de imagens sem antecipar a página “Mais Projetos”. A seção de Contato e a página completa de projetos continuam sendo ciclos independentes.

## 15. Resultado da implementação

### Entregas

- O contrato `ProjectImage` e `images?: ProjectImage[]` substituiu os campos legados `image` e `imageAlt` sem alterar os arquivos ou textos alternativos existentes.
- `ProjectImage` centraliza a prévia dos cards, o placeholder e o gatilho acessível de ampliação; o ícone fica fixo no mobile e aparece em hover/foco no desktop.
- `ProjectGallery` usa Radix Dialog, preserva a imagem inteira com `contain`, exibe título e contadores e mantém os links dos cards fora do botão da imagem.
- A navegação horizontal entre imagens, vertical entre projetos, por teclado e por swipe horizontal foi implementada sem loop; a separação visual dos controles evita sobreposição entre os dois eixos.
- Projetos sem imagem continuam informativos e não entram na lista navegável.

### Validação executada

- `pnpm run lint` passou.
- `pnpm run build` passou com TypeScript e geração estática concluídos.
- `git diff --check` passou.
- QA no navegador confirmou desktop e mobile, abertura em destaque e card secundário, filtros, navegação vertical, foco de retorno, `Esc`, botão de fechar, clique no backdrop, bloqueio de rolagem, tema escuro, movimento reduzido, falha de imagem, limites e swipe horizontal.
- A navegação com duas imagens usou uma entrada temporária local, removida ao final da validação; nenhum projeto recebeu uma captura nova.
- O navegador registrou apenas o erro preexistente de `/favicon.ico`, fora do escopo desta implementação.
