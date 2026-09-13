# Ciclo 4 — limpeza visual seletiva da home

**Status:** implementação concluída; sem commit ou merge nesta etapa
**Data:** 2026-09-13
**Última atualização:** 2026-09-13
**Branch:** `feat/portfolio-ux-improvements`
**Superfície:** `src/components/Projects/ImagePlaceholder.tsx` e `src/components/Experience.tsx`
**Direção visual:** padrão atual refinado

Este documento registra o escopo aprovado e o resultado do Ciclo 4 das melhorias incrementais da home. A spec foi elaborada após a revisão visual da interface atual em desktop e mobile, nos temas claro e escuro. A implementação foi concluída sem commit ou merge nesta etapa.

## 1. Contexto

Os ciclos anteriores trataram conversão, evidência dos projetos e acessibilidade crítica. A revisão seguinte identificou alguns achados visuais P2 que poderiam ser avaliados individualmente, sem justificar um redesign da home.

Na inspeção atual, dois pontos ainda geram ruído perceptível:

1. o grid decorativo do placeholder de projetos de back-end cria uma aparência genérica de scaffolding;
2. a faixa lateral de 2px dos seletores de experiência pesa mais do que o conteúdo que ela organiza.

Os demais pontos avaliados — numeração das seções, kickers, sombras remanescentes e densidade dos projetos secundários — foram mantidos fora deste ciclo porque continuam coerentes com a direção visual aprovada ou não apresentam impacto suficiente para justificar uma alteração.

## 2. Objetivo

Reduzir dois elementos decorativos que competem com o conteúdo, preservando:

- a identidade slate/âmbar;
- a arquitetura atual da home;
- as dimensões e a composição dos projetos;
- a semântica e o comportamento das abas;
- a leitura em desktop, mobile e nos dois temas.

## 3. Decisões aprovadas

- A abordagem será conservadora e localizada.
- O grid será removido apenas do placeholder de back-end.
- O gradiente, o rótulo “Back-end”, a indicação “API + Dados” e as tecnologias resumidas permanecerão.
- As bordas de 2px das abas serão substituídas por uma borda uniforme de 1px.
- A aba selecionada será diferenciada por borda fina, fundo sutil e texto em `accent`.
- A pista de overflow horizontal no mobile continuará funcionando sem alterações de comportamento.
- A semântica `tablist`, `tab` e `tabpanel` será preservada.
- Numeração, kickers, sombras, grade e quantidade de projetos não serão alterados.
- Não haverá nova dependência, alteração de dados ou mudança no contrato `Project`.

## 4. Escopo funcional e visual

### 4.1 Placeholder de back-end

O elemento absoluto que desenha a malha de linhas horizontais e verticais será removido do ramo de placeholder usado por projetos de back-end.

O placeholder continuará apresentando:

- a categoria “Back-end”;
- o título do projeto quando não estiver em modo compacto;
- os ícones e o texto “API + Dados”;
- até duas tecnologias no modo compacto ou três no modo completo;
- o fundo baseado nos tokens e gradientes já existentes.

O placeholder genérico para projetos que não são de back-end não será redesenhado neste ciclo.

### 4.2 Abas de experiência

Os botões continuarão em uma lista vertical no desktop e em uma faixa horizontal rolável no mobile.

Todos os botões reservarão uma borda de 1px para evitar deslocamento quando o estado mudar. O estado selecionado usará:

- borda fina em `accent`;
- fundo sutil derivado de `accent`;
- texto em `accent`.

O estado não selecionado manterá o texto neutro e o hover já existente, com borda transparente. Não será usado um indicador lateral ou inferior de 2px.

O foco visível, `aria-selected`, `aria-controls`, `role="tab"`, `role="tabpanel"` e a pista visual de conteúdo oculto à direita permanecerão intactos.

## 5. Arquivos e responsabilidades

| Arquivo | Alteração | Não alterar |
| --- | --- | --- |
| `src/components/Projects/ImagePlaceholder.tsx` | Remover a camada de grid decorativo do placeholder de back-end. | Conteúdo, gradientes base, modo compacto e contrato de props. |
| `src/components/Experience.tsx` | Ajustar somente as classes visuais dos botões de aba. | Estado, semântica ARIA, rolagem, `ResizeObserver` e pista mobile. |

Não será necessário alterar `src/app/globals.css`, `src/constants/index.ts`, `src/components/Projects/Projects.tsx` ou os dados dos projetos.

## 6. Requisitos verificáveis

### VIS-01 — Placeholder sem grid

Quando um projeto de back-end não tiver imagem, o placeholder não deve exibir uma malha decorativa de linhas. A informação do projeto e o tratamento de fundo devem continuar presentes.

### VIS-02 — Preservação do placeholder

Quando o placeholder estiver em modo compacto ou completo, seus rótulos, ícones e tecnologias devem continuar legíveis e sem alteração de proporção.

### VIS-03 — Estado selecionado das abas

Quando uma experiência estiver selecionada, a aba correspondente deve ser distinguível por borda fina, fundo sutil e texto em `accent`, sem faixa lateral ou inferior de 2px.

### VIS-04 — Estado não selecionado e estabilidade

Quando a seleção mudar, os botões não devem deslocar sua posição ou alterar sua largura por causa da borda. O hover e a leitura dos estados não selecionados devem continuar funcionando.

### VIS-05 — Preservação de interação

A troca de experiência por clique e teclado, o foco visível, a relação entre aba e painel e a rolagem horizontal no mobile devem continuar funcionando sem mudança comportamental.

### VIS-06 — Preservação responsiva e temática

As alterações devem funcionar em desktop e mobile, sem overflow horizontal acidental, e permanecer distinguíveis nos temas claro e escuro.

## 7. Sequência de implementação

1. [x] Remover a camada de grid do placeholder de back-end.
2. [x] Ajustar as classes dos botões de experiência para o novo estado visual.
3. [x] Rodar validação estática e visual.
4. [x] Atualizar o status deste documento e o item correspondente no `TODO.md` após a implementação passar pelos critérios.

A criação de commit não faz parte desta autorização atual. Caso seja solicitada depois da validação, as alterações devem ser organizadas em commits atômicos por escopo.

## 8. Validação

### Validação técnica

- `git diff --check`;
- `pnpm run lint`;
- `pnpm run build`;
- detector do Impeccable nos arquivos alterados.

### Validação visual e comportamental

- desktop em tema claro: verificar placeholder de Raízes do Nordeste API e estado selecionado da experiência;
- desktop em tema escuro: repetir a inspeção e confirmar contraste e hierarquia;
- mobile em tema claro e escuro: verificar abas roláveis, pista de overflow e ausência de cortes;
- navegar pelas abas com teclado e confirmar foco visível e painel correspondente;
- alternar entre pelo menos duas experiências e verificar que nenhuma aba muda de posição;
- verificar que os projetos com imagem continuam sem alteração visual.

## 9. Fora do escopo

- remoção ou reformulação da numeração `01`, `02` e `03`;
- remoção ou reformulação dos kickers;
- revisão global de sombras e bordas;
- mudança na grade, limite ou ordem dos projetos secundários;
- criação da seção de Contato;
- criação da página “Mais Projetos”;
- adoção formal do WCAG 2.2 nível AA;
- alteração da crítica original ou criação de nova pontuação formal.

## 10. Critério de saída

O Ciclo 4 foi concluído: os dois elementos visuais aprovados foram ajustados, a interação e a semântica das abas permaneceram intactas, os placeholders continuaram informativos e as validações técnicas e visuais foram aprovadas. O resultado reduz o ruído visual sem mudar a direção ou a arquitetura da home.

## 11. Resultado da implementação

- [x] Removida a malha decorativa do placeholder de back-end em `ImagePlaceholder.tsx`.
- [x] Substituídas as bordas de 2px das abas por uma borda uniforme de 1px e um estado selecionado com borda, fundo e texto em `accent`.
- [x] Preservados estado, semântica ARIA, foco, rolagem mobile e pista de overflow.
- [x] Confirmada a estabilidade das dimensões das abas durante a troca de experiência.
- [x] Validado o comportamento em desktop e mobile nos temas claro e escuro.
- [x] Executados `git diff --check`, `pnpm run lint`, `pnpm run build` e o detector do Impeccable.
