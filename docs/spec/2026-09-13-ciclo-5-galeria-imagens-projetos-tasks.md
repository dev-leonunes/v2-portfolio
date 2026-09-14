# Ciclo 5 — plano de implementação da galeria de imagens

**Design:** [Ciclo 5 — galeria imersiva das imagens dos projetos](./2026-09-13-ciclo-5-galeria-imagens-projetos-design.md)
**Status:** complete — implementação e validação concluídas; sem commit/merge
**Data:** 2026-09-13
**Branch:** `feat/portfolio-ux-improvements`

Este plano transforma a spec aprovada em tarefas atômicas. Todas as tarefas foram executadas e validadas nesta branch; nenhum commit ou merge foi realizado.

## Premissas de execução

- A implementação será feita uma tarefa por vez, com verificação antes de avançar.
- A migração de `image`/`imageAlt` para `images[]` terá uma etapa transitória de compatibilidade para evitar quebrar o build entre tarefas; os campos legados serão removidos no final.
- Nenhuma nova dependência será instalada.
- A implementação usará `apply_patch` para alterações locais.
- Nenhum projeto receberá novas capturas de tela nesta etapa; a validação de múltiplas imagens usará uma entrada temporária local, removida antes da conclusão.
- Os commits abaixo são apenas sugestões. Só serão criados mediante autorização explícita do usuário; quando solicitados, as mensagens devem ser refinadas com `$commit-maker`.

## Plano de execução

### Fase 1 — fundação

```text
T1 ──→ T3 ──→ T4 ──┐
                    ├──→ T7 ──→ T8 ──→ T9
T2 ────────────────┘
             T3 ──→ T5 ──┘
T2 ──→ T6 ──────────┘
```

T1 e T2 podem ser executadas em paralelo. T3 depende do contrato de dados; T4 e T5 dependem do componente de imagem; T6 depende do wrapper de diálogo e do contrato; T7 integra cards e galeria; T8 completa a navegação; T9 remove a compatibilidade transitória.

### Fase 2 — validação e documentação

```text
T9 ──→ T10 ──→ T11 ──→ T12
```

## Tarefas atômicas

### T1 — Preparar coleção extensível de imagens

**O que:** adicionar `ProjectImage`, adicionar `images?: ProjectImage[]` e migrar os dados atuais para coleções com uma imagem, mantendo temporariamente `image` e `imageAlt` como campos legados.

**Onde:** `src/constants/index.ts`

**Depende de:** nenhuma.

**Requisito:** IMG-01.

**Ferramentas:**

- MCP: nenhum;
- Skills na execução: `coding-guidelines`, `vercel-react-best-practices`.

**Concluído quando:**

- [x] `ProjectImage` exporta `src` e `alt` como strings;
- [x] todos os projetos com imagem têm `images` com o arquivo e texto alternativo equivalentes aos atuais;
- [x] projetos sem imagem continuam sem `images`;
- [x] os campos antigos foram mantidos apenas durante a migração e removidos ao final, sem mudança de URL ou conteúdo;
- [x] `pnpm run lint` continua passando.

**Commit sugerido:** `refactor(projects): add extensible project image collections`

### T2 — Criar primitives de diálogo acessível

**O que:** criar o wrapper local de Radix Dialog seguindo o padrão de `src/components/ui/sheet.tsx`.

**Onde:** `src/components/ui/dialog.tsx`

**Depende de:** nenhuma.

**Requisito:** IMG-05.

**Ferramentas:**

- MCP: nenhum; a documentação do Radix já foi consultada durante o planejamento;
- Skills na execução: `coding-guidelines`, `vercel-react-best-practices`.

**Concluído quando:**

- [x] Root, trigger, portal, overlay, content, title, description e close são exportados conforme a necessidade da galeria;
- [x] overlay, conteúdo e fechamento usam `cn()` e tokens existentes;
- [x] o wrapper não introduz nova dependência;
- [x] `pnpm run lint` passa.

**Commit sugerido:** `feat(ui): add accessible dialog primitives`

### T3 — Criar imagem de projeto acionável

**O que:** centralizar a renderização de imagem/placeholder e o botão de abertura, com indicador de ampliação responsivo.

**Onde:** `src/components/Projects/ProjectImage.tsx`

**Depende de:** T1.

**Requisitos:** IMG-01, IMG-02.

**Ferramentas:**

- MCP: nenhum;
- Skills na execução: `coding-guidelines`, `vercel-react-best-practices`, `impeccable`.

**Concluído quando:**

- [x] a primeira imagem da coleção é usada como prévia do card;
- [x] a ausência de `images` mantém `ImagePlaceholder` sem botão acionável;
- [x] o botão usa `type="button"` e nome acessível específico do projeto;
- [x] o ícone aparece em `hover`/foco no desktop e permanece visível no mobile;
- [x] imagem, overlay e foco não alteram a estrutura dos links externos;
- [x] `pnpm run lint` passa.

**Commit sugerido:** `feat(projects): add interactive project image trigger`

### T4 — Integrar imagem acionável aos projetos em destaque

**O que:** substituir a renderização duplicada de imagem em `FeaturedProject` pelo componente `ProjectImage` e expor o callback de abertura.

**Onde:** `src/components/Projects/FeaturedProject.tsx`

**Depende de:** T3.

**Requisitos:** IMG-02, IMG-05.

**Ferramentas:**

- MCP: nenhum;
- Skills na execução: `coding-guidelines`, `vercel-react-best-practices`, `impeccable`.

**Concluído quando:**

- [x] o destaque mantém dimensões, alternância de layout, borda e hover atuais;
- [x] imagens reais abrem pelo novo callback na posição correta;
- [x] placeholders permanecem informativos;
- [x] `ProjectLinks` continua fora do botão da imagem;
- [x] `pnpm run lint` passa.

**Commit sugerido:** `refactor(projects): reuse image trigger in featured cards`

### T5 — Integrar imagem acionável aos projetos secundários

**O que:** substituir a renderização duplicada de imagem em `OtherProject` pelo componente `ProjectImage` e expor o callback de abertura.

**Onde:** `src/components/Projects/OtherProject.tsx`

**Depende de:** T3.

**Requisitos:** IMG-02, IMG-05.

**Ferramentas:**

- MCP: nenhum;
- Skills na execução: `coding-guidelines`, `vercel-react-best-practices`, `impeccable`.

**Concluído quando:**

- [x] a grade, o tamanho compacto, a descrição e as tecnologias permanecem inalterados;
- [x] imagens reais abrem pelo novo callback na primeira imagem;
- [x] cards sem imagem continuam usando o placeholder;
- [x] `ProjectLinks` continua separado e funcional;
- [x] `pnpm run lint` passa.

**Commit sugerido:** `refactor(projects): reuse image trigger in secondary cards`

### T6 — Criar shell da galeria imersiva

**O que:** criar o componente controlado que abre o diálogo, exibe título/contadores/imagem inteira e fecha com comportamento modal.

**Onde:** `src/components/Projects/ProjectGallery.tsx`

**Depende de:** T1 e T2.

**Requisitos:** IMG-02, IMG-05, IMG-07.

**Ferramentas:**

- MCP: nenhum;
- Skills na execução: `coding-guidelines`, `vercel-react-best-practices`, `impeccable`.

**Concluído quando:**

- [x] o componente aceita a lista de projetos com imagens e o estado inicial de projeto/imagem;
- [x] o modal usa overlay imersivo e a imagem usa `contain`;
- [x] título, contador e fechamento têm nomes acessíveis;
- [x] `Esc`, botão e clique no overlay fecham o modal;
- [x] o foco entra no diálogo, fica contido e retorna ao gatilho;
- [x] o bloqueio de rolagem do Radix permanece ativo;
- [x] os temas claro/escuro mantêm contraste;
- [x] `pnpm run lint` passa.

**Commit sugerido:** `feat(projects): add immersive gallery shell`

### T7 — Conectar a galeria à lista visível da home

**O que:** derivar a lista de projetos com imagens a partir dos projetos exibidos, controlar abertura e renderizar uma única instância de `ProjectGallery`.

**Onde:** `src/components/Projects/Projects.tsx`

**Depende de:** T4, T5 e T6.

**Requisitos:** IMG-02, IMG-04.

**Ferramentas:**

- MCP: nenhum;
- Skills na execução: `coding-guidelines`, `vercel-react-best-practices`.

**Concluído quando:**

- [x] a lista da galeria segue a ordem da home;
- [x] “Todos” usa apenas os projetos exibidos na home;
- [x] filtros por tipo limitam a galeria ao resultado ativo;
- [x] projetos sem imagem não entram na lista navegável;
- [x] cada card recebe um callback com projeto e índice de imagem;
- [x] abrir uma imagem não altera o filtro nem a ordem da seção;
- [x] `pnpm run lint` passa.

**Commit sugerido:** `feat(projects): connect gallery to visible project list`

### T8 — Implementar navegação nos dois eixos e gesto mobile

**O que:** completar `ProjectGallery` com navegação horizontal entre imagens, vertical entre projetos, teclado, limites sem loop e gesto horizontal mobile.

**Onde:** `src/components/Projects/ProjectGallery.tsx`

**Depende de:** T7.

**Requisitos:** IMG-03, IMG-04, IMG-06, IMG-07.

**Ferramentas:**

- MCP: nenhum;
- Skills na execução: `coding-guidelines`, `vercel-react-best-practices`, `impeccable`.

**Concluído quando:**

- [x] `← →` alteram somente a imagem do projeto atual;
- [x] `↑ ↓` alteram somente o projeto visível atual;
- [x] a troca de projeto reinicia na primeira imagem;
- [x] os controles ficam indisponíveis nos limites e não fazem loop;
- [x] uma imagem única não exibe navegação horizontal;
- [x] setas do teclado reproduzem os controles visuais;
- [x] gesto horizontal funciona no mobile sem capturar a rolagem vertical da página;
- [x] `prefers-reduced-motion` reduz ou remove transições não essenciais;
- [x] falha de carregamento exibe estado compreensível sem impedir o fechamento.

**Commit sugerido:** `feat(projects): add two-axis gallery navigation`

### T9 — Remover campos legados do contrato

**O que:** remover `image` e `imageAlt` depois que todos os consumidores estiverem usando `images[]`.

**Onde:** `src/constants/index.ts`

**Depende de:** T4, T5, T7 e T8.

**Requisito:** IMG-01.

**Ferramentas:**

- MCP: nenhum;
- Skills na execução: `coding-guidelines`, `vercel-react-best-practices`.

**Concluído quando:**

- [x] `Project` contém somente o contrato final `images?: ProjectImage[]` para mídia;
- [x] não existem referências a `project.image` ou `project.imageAlt` nos consumidores;
- [x] todas as imagens atuais e textos alternativos continuam preservados;
- [x] `pnpm run lint` e `pnpm run build` passam.

**Commit sugerido:** `refactor(projects): remove legacy project image fields`

### T10 — Validar a experiência completa

**O que:** executar a validação técnica, visual e comportamental da galeria, incluindo um cenário local temporário com duas imagens.

**Onde:** sem alteração permanente de arquivo.

**Depende de:** T9.

**Requisitos:** IMG-01 a IMG-07.

**Ferramentas:**

- MCP: nenhum;
- Skills na execução: `playwright`, `impeccable`.

**Concluído quando:**

- [x] `pnpm run lint`, `pnpm run build` e `git diff --check` passam;
- [x] desktop claro/escuro confirma gatilho, modal, navegação e links separados;
- [x] mobile claro/escuro confirma ícone fixo, gesto horizontal e controles verticais;
- [x] teclado confirma foco, `Esc`, setas e retorno ao gatilho;
- [x] filtros e limites não permitem projetos fora da lista visível;
- [x] imagem inteira permanece sem recorte;
- [x] não há overflow horizontal nem erro de runtime relevante;
- [x] a entrada temporária de duas imagens é removida após o teste.

**Commit:** não se aplica; esta tarefa produz evidências de validação.

### T11 — Atualizar a documentação do ciclo

**O que:** registrar o resultado da implementação e as validações na spec do Ciclo 5.

**Onde:** `docs/spec/2026-09-13-ciclo-5-galeria-imagens-projetos-design.md`

**Depende de:** T10.

**Requisito:** todos.

**Ferramentas:**

- MCP: nenhum;
- Skill na execução: `docs-writer`.

**Concluído quando:**

- [x] status, sequência e critérios de saída refletem o resultado real;
- [x] rastreabilidade marca os requisitos verificados;
- [x] a documentação não afirma validações que não foram executadas;
- [x] `git diff --check` passa.

**Commit sugerido:** `docs(projects): record cycle 5 gallery implementation`

### T12 — Atualizar o roadmap local

**O que:** marcar no `TODO.md` a melhoria de interação com as fotos como concluída e apontar para a spec do ciclo.

**Onde:** `TODO.md`

**Depende de:** T11.

**Requisito:** todos.

**Ferramentas:**

- MCP: nenhum;
- Skill na execução: `docs-writer`.

**Concluído quando:**

- [x] somente o item correspondente ao Ciclo 5 é atualizado;
- [x] o link para a spec funciona;
- [x] demais itens permanecem inalterados;
- [x] `git diff --check` passa.

**Commit sugerido:** `docs(roadmap): mark project gallery interaction complete`

## Rastreabilidade

| Requisito | Tarefas |
| --- | --- |
| IMG-01 | T1, T9, T10 |
| IMG-02 | T3, T4, T5, T6, T7, T10 |
| IMG-03 | T8, T10 |
| IMG-04 | T7, T8, T10 |
| IMG-05 | T2, T3, T4, T5, T6, T10 |
| IMG-06 | T8, T10 |
| IMG-07 | T6, T8, T10 |

**Cobertura:** 7 requisitos totais, 7 mapeados, 0 sem tarefa associada.

## Validação de granularidade

| Tarefa | Escopo | Avaliação |
| --- | --- | --- |
| T1 | Um contrato e sua migração de dados | Atômica |
| T2 | Um wrapper de UI | Atômica |
| T3 | Um componente reutilizável | Atômica |
| T4 | Um card de destaque | Atômica |
| T5 | Um card secundário | Atômica |
| T6 | Um componente de galeria | Atômica |
| T7 | Uma integração na seção | Atômica |
| T8 | Um componente de galeria, comportamento de navegação | Atômica e coesa |
| T9 | Remoção do contrato transitório | Atômica |
| T10 | Validação transversal sem alteração permanente | Atômica |
| T11 | Uma spec | Atômica |
| T12 | Um roadmap | Atômica |

## Resultado da execução

T1 a T12 foram executadas e verificadas nesta branch. A fixture temporária de duas imagens foi removida, os artefatos temporários de QA foram limpos e nenhum commit ou merge foi realizado.
