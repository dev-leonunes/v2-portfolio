# Ciclo 6 — curadoria de projetos e acessibilidade crítica

**Status:** C6-T01, C6-T02, C6-T03 e C6-T04 implementadas e validadas; C6-T05 pendente
**Data:** 2026-09-13
**Última atualização:** 2026-09-14
**Branch de implementação:** `feat/portfolio-ux-improvements`
**Superfície:** seção `Projects` e interação de experiências da home
**Direção:** preservar o padrão atual refinado e corrigir os pontos de maior impacto

Este documento consolida o planejamento do Ciclo 6 após a nova crítica do
`src/app/page.tsx`. A execução será dividida em duas etapas, nesta ordem:

1. curadoria e limite dos projetos exibidos na home;
2. acessibilidade crítica, começando por contraste e tabs.

A implementação da C6-T01 foi autorizada e aplicada. `pnpm run lint` e
`git diff --check` passaram, e a validação manual e automatizada confirmou os
três filtros. A C6-T02 também foi validada no navegador, com a galeria limitada
à lista filtrada de projetos que possuem imagem. A C6-T03 ajustou os tokens
claros de `primary`, `accent` e `ring`, com validação de contraste no navegador
e preservação dos valores do tema escuro. A C6-T04 completou a navegação das
tabs com roving `tabIndex`, orientação responsiva, teclas de eixo, `Home`/`End`,
foco e rolagem acompanhando a seleção. A C6-T05 continua pendente para validar
o ciclo integrado. Nenhum commit ou merge foi realizado.

## 1. Contexto

Os ciclos anteriores melhoraram a conversão do hero, a hierarquia dos projetos,
a acessibilidade básica e a inspeção das imagens por galeria. A crítica mais
recente confirmou que a base visual está consistente, mas identificou dois
grupos de trabalho prioritários:

- o limite de seis projetos secundários não é aplicado quando um filtro de tipo
  está ativo;
- o tema claro possui textos pequenos em âmbar com contraste de 4.1:1, e a
  experiência declarada como tablist ainda não implementa todo o comportamento
  de teclado esperado.

A seção de Contato e a futura página “Mais Projetos” continuam sendo trabalhos
independentes. Este ciclo apenas define como a home deve se comportar enquanto
essas evoluções não existem.

## 2. Objetivos

- Tornar previsível a quantidade de projetos secundários exibidos na home.
- Preservar os projetos restantes nos dados sem antecipar uma rota que ainda não
  existe.
- Corrigir o contraste do tema claro nos textos e estados afetados.
- Tornar a interação de experiências coerente para teclado, leitor de tela,
  desktop e mobile.
- Validar as mudanças nos dois temas, em diferentes larguras e com movimento
  reduzido.

## 3. Fora do escopo

| Item | Tratamento neste ciclo |
| --- | --- |
| Criar a página “Mais Projetos” | Continua registrada como melhoria futura no `TODO.md`; nenhuma rota será criada. |
| Adicionar link “Mais Projetos” na home | Não será feito enquanto a rota não existir. |
| Criar ou implementar a seção de Contato | Fora desta branch/ciclo. |
| Fazer planejamento profundo de Contato | Fora do escopo; permanece apenas como direção futura. |
| Migrar o CTA do hero para `#contact` | Não será feito; o CTA continuará apontando diretamente para o WhatsApp. |
| Adoção formal completa de WCAG 2.2 AA | Continua como meta posterior; este ciclo trata somente os problemas críticos identificados. |
| Redesign visual da home | Não será feito; a composição atual, a paleta e a hierarquia permanecem. |
| Alterar a galeria do Ciclo 5 | Não faz parte deste ciclo. |

## 4. Decisões aprovadas

- A prioridade de execução será **Projetos**, depois **Acessibilidade**.
- A home continuará mostrando três projetos em destaque quando o filtro permitir
  e no máximo seis projetos secundários elegíveis.
- O limite de seis secundários será aplicado também aos filtros por tipo.
- A ordem de “Todos” continuará sendo a definida por
  `HOME_SECONDARY_PROJECT_IDS`.
- Os projetos fora da seleção da home permanecerão em `PROJECTS` para uso
  futuro, mas não aparecerão nesta seção enquanto não forem incluídos na
  curadoria da home.
- Nenhum link para “Mais Projetos” será adicionado antes da criação da rota.
- O contraste será corrigido por tokens do tema claro sempre que possível, sem
  trocar a identidade navy/âmbar nem alterar o tema escuro sem necessidade.
- A experiência continuará usando a interação atual de seleção e seu painel;
  a implementação deverá completar a semântica de tabs existente, em vez de
  criar uma segunda navegação paralela.
- A direção futura de Contato será registrada somente como dependência: quando
  a seção existir, será avaliada a migração do CTA direto para uma âncora
  `#contact`, mantendo o WhatsApp como canal principal.

## 5. Etapa 1 — curadoria e limite dos projetos

### 5.1 Comportamento esperado

`ProjectsSection` deverá aplicar a mesma regra de curadoria à lista de projetos
secundários independentemente do filtro selecionado:

1. filtrar `PROJECTS` por tipo quando necessário;
2. separar destaques e secundários;
3. selecionar os secundários presentes na curadoria da home;
4. preservar a ordem de `HOME_SECONDARY_PROJECT_IDS`;
5. limitar o resultado a `MAX_HOME_SECONDARY_PROJECTS` (6).

Quando um filtro resultar em menos de seis projetos elegíveis, a home exibirá
somente os disponíveis. Não haverá preenchimento artificial nem mensagem
indicando uma página futura.

### 5.2 Experiência visual

- O layout de três colunas em telas grandes será preservado.
- O grid continuará se reorganizando para duas colunas e uma coluna conforme as
  larguras atuais.
- O título “Outros Projetos” e o filtro permanecerão no mesmo lugar.
- A contagem acessível do filtro deverá refletir somente os projetos realmente
  exibidos.
- Nenhum botão, link ou placeholder para “Mais Projetos” será renderizado nesta
  etapa.

### 5.3 Contrato de dados

`HOME_SECONDARY_PROJECT_IDS` continuará sendo a fonte explícita da curadoria da
home. Os demais itens de `PROJECTS` não serão apagados nem terão seu conteúdo
alterado apenas para satisfazer o limite.

## 6. Etapa 2 — acessibilidade crítica

### 6.1 Contraste do tema claro

O token de accent/primary utilizado no tema claro deverá ser ajustado para que
os rótulos pequenos atualmente detectados passem a atingir pelo menos 4.5:1
sobre os fundos correspondentes.

A validação deverá cobrir:

- cumprimento do hero;
- rótulo “Trajetória e foco”;
- vínculo da empresa na experiência;
- rótulos “Projeto em destaque”;
- links, badges, bordas e indicadores de foco afetados pelo mesmo token;
- estados normal, hover, focus e selecionado nos temas claro e escuro.

O objetivo é corrigir o problema identificado sem transformar esta etapa na
adoção formal e completa de WCAG 2.2 AA.

### 6.2 Tabs de experiências

A estrutura existente em `Experience.tsx` será preservada, incluindo o painel
único, a rolagem horizontal no mobile e o indicador de overflow. A interação
deverá ser completada para que:

- a tab selecionada seja a única no fluxo de Tab quando o padrão roving estiver
  ativo;
- setas alterem a tab conforme o eixo visual atual;
- Home e End levem à primeira e à última experiência;
- a mudança de tab atualize `aria-selected`, `aria-controls` e o painel associado;
- o foco permaneça visível e acompanhe a tab selecionada;
- a rolagem automática leve a tab focada para a área visível no mobile;
- a navegação não altere o conteúdo dos projetos nem outros estados da home.

Se a implementação responsiva do eixo tornar o padrão ARIA excessivamente
frágil, a alternativa aprovada é remover `role="tablist"`/`role="tab"` e
manter uma coleção de botões acessíveis com `aria-pressed`, desde que a relação
entre opção selecionada e painel continue clara para tecnologia assistiva. A
decisão deverá ser tomada durante a implementação com base no comportamento
validado, sem manter semântica ARIA incompleta.

## 7. Requisitos verificáveis

### C6-PROJ-01 — Limite uniforme da home ⭐ MVP

**História:** como visitante, quero uma quantidade previsível de projetos na
home para explorar o portfólio sem uma lista crescer inesperadamente ao aplicar
um filtro.

**Critérios de aceitação:**

1. WHEN o filtro “Todos” estiver ativo THEN o sistema SHALL exibir no máximo
   seis projetos secundários curados.
2. WHEN “Projetos Pessoais” ou “Freelas” estiver ativo THEN o sistema SHALL
   aplicar o mesmo limite de seis secundários.
3. WHEN houver menos de seis projetos elegíveis no filtro THEN o sistema SHALL
   exibir somente os disponíveis.
4. WHEN o filtro mudar THEN a contagem acessível SHALL corresponder ao total
   realmente exibido na home.

**Teste independente:** selecionar “Todos”, “Projetos Pessoais” e “Freelas” e
contar os cards secundários renderizados em cada estado.

### C6-PROJ-02 — Curadoria e ordem estáveis

**História:** como mantenedor, quero que a home use uma seleção explícita para
que projetos reservados à futura página não apareçam por acidente.

**Critérios de aceitação:**

1. WHEN a home renderizar secundários THEN a ordem SHALL respeitar
   `HOME_SECONDARY_PROJECT_IDS`.
2. WHEN um projeto não estiver na curadoria da home THEN ele SHALL permanecer
   disponível nos dados sem ser renderizado nesta seção.
3. WHEN a futura página “Mais Projetos” for criada THEN os dados existentes
   SHALL continuar utilizáveis sem depender de um link provisório da home.

**Teste independente:** comparar os títulos renderizados com a constante de
curadoria e confirmar que itens fora dela não aparecem na home.

### C6-A11Y-01 — Contraste mínimo do tema claro ⭐ MVP

**História:** como pessoa com baixa visão, quero ler os rótulos e estados do
tema claro sem depender apenas de percepção de cor.

**Critérios de aceitação:**

1. WHEN o tema claro estiver ativo THEN textos normais em accent SHALL atingir
   pelo menos 4.5:1 contra seus fundos.
2. WHEN o tema escuro estiver ativo THEN os contrastes existentes SHALL ser
   preservados ou melhorados.
3. WHEN links, badges ou tabs estiverem em hover, focus ou selecionados THEN o
   texto e o indicador SHALL continuar distinguíveis.

**Teste independente:** executar o detector de contraste no tema claro e escuro
e verificar manualmente os estados interativos principais.

### C6-A11Y-02 — Tabs navegáveis por teclado ⭐ MVP

**História:** como pessoa que navega por teclado ou leitor de tela, quero
percorrer as experiências sem precisar tabular por todas as opções.

**Critérios de aceitação:**

1. WHEN uma tab receber foco THEN o foco SHALL permanecer visível em ambos os
   temas.
2. WHEN o usuário pressionar a seta correspondente ao eixo da lista THEN o
   sistema SHALL selecionar a experiência adjacente.
3. WHEN o usuário pressionar Home ou End THEN o sistema SHALL selecionar a
   primeira ou a última experiência.
4. WHEN a experiência mudar THEN `aria-selected` e o painel associado SHALL
   refletir a nova seleção.
5. WHEN a lista estiver em viewport mobile THEN a tab selecionada/focada SHALL
   ser rolada para a área visível sem criar overflow adicional.

**Teste independente:** navegar pelas quatro experiências usando somente
teclado em desktop e mobile, confirmar anúncios/estados com inspeção de DOM e
verificar o painel correspondente.

### C6-A11Y-03 — Movimento e temas preservados

**História:** como pessoa com preferência por menos movimento ou usando outro
tema, quero que as correções não removam previsibilidade nem legibilidade.

**Critérios de aceitação:**

1. WHEN `prefers-reduced-motion: reduce` estiver ativo THEN as mudanças de
   seleção SHALL evitar animações não essenciais.
2. WHEN o tema for alternado THEN a seleção atual e o painel SHALL permanecer
   intactos.
3. WHEN a largura mudar entre desktop e mobile THEN nenhuma correção SHALL
   criar overflow horizontal acidental.

**Teste independente:** alternar temas, reduzir movimento e testar larguras
desktop/mobile nas duas etapas.

## 8. Tarefas atômicas de implementação

As tarefas abaixo serão executadas em ordem de etapa. As C6-T01, C6-T02 e C6-T03
já foram aplicadas; as demais continuam pendentes conforme os status registrados
em cada tarefa.

### Etapa 1 — Projetos

#### C6-T01 — Centralizar a seleção limitada de secundários

**Onde:** `src/components/Projects/Projects.tsx`

**Entrega:** ajustar o cálculo de `displayedOtherProjects` para aplicar a
curadoria e o limite também quando houver filtro por tipo.

**Status:** implementação e validação concluídas.

**Depende de:** nenhuma.

**Requisito:** C6-PROJ-01, C6-PROJ-02.

**Concluída quando:**

- [x] Os três estados de filtro exibem no máximo seis secundários.
- [x] A ordem de `HOME_SECONDARY_PROJECT_IDS` é preservada.
- [x] A contagem acessível corresponde aos cards visíveis.
- [x] Nenhum link ou placeholder para “Mais Projetos” é renderizado.

**Verificação:** `pnpm run lint` e inspeção visual dos três filtros em desktop e
mobile.

**Registro de execução:**

- [x] Curadoria e limite de seis aplicados independentemente do filtro.
- [x] Ordem de `HOME_SECONDARY_PROJECT_IDS` preservada pelo cálculo renderizado.
- [x] Contagem acessível derivada da lista exibida.
- [x] Nenhum link ou placeholder para “Mais Projetos” foi adicionado.
- [x] `pnpm run lint` e `git diff --check` passaram.
- [x] Interação manual dos filtros validada em desktop e mobile.

#### C6-T02 — Validar regressão da galeria com a lista curada

**Onde:** `src/components/Projects/Projects.tsx` e
`src/components/Projects/ProjectGallery.tsx` somente se necessário.

**Entrega:** confirmar que a galeria navega apenas pelos projetos curados e
visíveis após cada filtro, sem incluir itens fora da home.

**Status:** validação concluída; nenhuma alteração adicional de código foi
necessária.

**Depende de:** C6-T01.

**Requisito:** C6-PROJ-02.

**Concluída quando:**

- [x] A galeria respeita a lista filtrada em “Todos”, “Projetos Pessoais” e
      “Freelas”.
- [x] Projetos sem imagem continuam fora da navegação da galeria.
- [x] Os limites vertical/horizontal permanecem corretos.

**Verificação:** abrir a primeira imagem de cada filtro e percorrer os projetos
com teclado e controles visuais.

**Registro de execução:**

- [x] “Todos” exibiu 7 projetos navegáveis na galeria.
- [x] “Projetos Pessoais” exibiu BackScan, Gestão de Estoque e Zelda, total de
      3 projetos navegáveis.
- [x] “Freelas” exibiu 4 projetos navegáveis.
- [x] A navegação por projetos avançou e recuou respeitando os limites, sem
      incluir projetos sem imagem.
- [x] No viewport mobile de 390×844, a galeria permaneceu contida e sem
      overflow horizontal.

### Etapa 2 — Acessibilidade

#### C6-T03 — Ajustar tokens de contraste do tema claro

**Onde:** `src/app/globals.css`.

**Entrega:** ajustar os tokens claros necessários e revisar estados derivados
sem alterar a direção visual do tema.

**Status:** implementação e validação concluídas.

**Depende de:** C6-T01 e C6-T02 concluídas ou isoladas sem conflito.

**Requisito:** C6-A11Y-01, C6-A11Y-03.

**Concluída quando:**

- [x] Os seis achados de 4.1:1 deixam de ocorrer.
- [x] Texto normal em accent atinge 4.5:1 no tema claro.
- [x] Tema escuro, badges, links e focos continuam legíveis.

**Verificação:** executar detector do Impeccable na superfície renderizada e
inspecionar os dois temas.

**Registro de execução:**

- [x] `--primary`, `--accent` e `--ring` do tema claro foram ajustados para
      `#7c2d12`, mantendo a família âmbar e centralizando a correção nos tokens.
- [x] O tema claro apresentou 7,68:1 contra o fundo principal e 5,46:1 no
      fundo translúcido dos badges; texto claro sobre o âmbar apresentou 8,83:1.
- [x] O tema escuro permaneceu com `#f59e0b` e apresentou 8,31:1 no texto de
      acento e no texto claro sobre o primário.
- [x] O detector estático do Impeccable não registrou novos antipadrões.
- [x] `pnpm run lint` e `git diff --check` passaram.

#### C6-T04 — Implementar teclado completo das tabs

**Onde:** `src/components/Experience.tsx`.

**Entrega:** completar o modelo de tabs existente ou aplicar a alternativa de
botões acessíveis definida na seção 6.2.

**Depende de:** nenhuma; pode ser desenvolvido em paralelo com C6-T03.

**Requisito:** C6-A11Y-02, C6-A11Y-03.

**Concluída quando:**

- [x] Tab, setas, Home e End têm comportamento previsível.
- [x] O painel e os estados ARIA permanecem relacionados.
- [x] Foco e rolagem funcionam no desktop e no mobile.
- [x] Não há semântica ARIA declarada sem comportamento correspondente.

**Verificação:** teste manual somente com teclado, inspeção de DOM e
`pnpm run lint`.

**Registro de execução:**

- [x] A tab selecionada é a única com `tabIndex=0`; as demais usam `tabIndex=-1`.
- [x] A orientação é refletida em `aria-orientation`: vertical no desktop e
      horizontal no mobile, acompanhando o eixo visual da lista.
- [x] Setas do eixo, `Home` e `End` ativam a experiência correspondente,
      atualizam `aria-selected`/`aria-labelledby` e mantêm o foco na tab ativa.
- [x] A tab focada usa `scrollIntoView` com alinhamento mínimo; no mobile, a
      última tab foi levada à área visível sem criar overflow na página.
- [x] A validação no navegador confirmou o painel associado após a troca e o
      avanço de `Tab` da tab ativa para o `tabpanel`.
- [x] O detector estático do Impeccable não registrou novos antipadrões.
- [x] `pnpm run lint` e `git diff --check` passaram.

#### C6-T05 — Validação integrada do ciclo

**Onde:** superfície completa da home; sem alteração obrigatória de arquivo.

**Entrega:** validar as duas etapas juntas e registrar eventuais achados sem
expandir o escopo.

**Depende de:** C6-T01, C6-T02, C6-T03 e C6-T04.

**Requisito:** C6-PROJ-01, C6-PROJ-02, C6-A11Y-01, C6-A11Y-02,
C6-A11Y-03.

**Concluída quando:**

- [ ] `pnpm run lint` passa.
- [ ] `pnpm run build` passa.
- [ ] A home é verificada em desktop/mobile e nos dois temas.
- [ ] Movimento reduzido é verificado.
- [ ] A galeria, filtros, CTA e links externos continuam funcionando.
- [ ] Nenhuma rota ou link futuro foi adicionado por engano.

**Verificação:** checklist técnico, visual e comportamental documentado antes
de solicitar commits atômicos.

## 9. Sequência e dependências

```text
Etapa 1: C6-T01 → C6-T02

Etapa 2: C6-T03 ─┐
                 ├→ C6-T05
          C6-T04 ─┘
```

C6-T03 e C6-T04 podem ser implementadas em paralelo depois que a Etapa 1 for
validada, desde que não sejam misturadas no mesmo commit. C6-T05 é uma
validação integrada e não deve iniciar antes das duas frentes passarem por suas
verificações individuais.

## 10. Rastreabilidade

| Requisito | Tarefa(s) | Critério de saída |
| --- | --- | --- |
| C6-PROJ-01 | C6-T01, C6-T05 | Limite uniforme de seis secundários por filtro. |
| C6-PROJ-02 | C6-T01, C6-T02, C6-T05 | Curadoria e galeria alinhadas à home. |
| C6-A11Y-01 | C6-T03, C6-T05 | Contraste mínimo validado no tema claro. |
| C6-A11Y-02 | C6-T04, C6-T05 | Tabs navegáveis e semanticamente honestas. |
| C6-A11Y-03 | C6-T03, C6-T04, C6-T05 | Temas, responsividade e movimento preservados. |

**Cobertura:** 5 requisitos, 5 mapeados a tarefas, 0 não mapeados.

## 11. Direção futura — Contato

Esta seção não é um planejamento de implementação. Ela apenas registra a
dependência para evitar decisões conflitantes:

- a seção de Contato permanece fora desta branch;
- o CTA do hero continuará abrindo o WhatsApp diretamente;
- quando a seção existir, será avaliado se o CTA deve apontar para `#contact`
  ou continuar direto para o WhatsApp;
- copy, canais, formulário, dados e validação visual serão definidos em um
  planejamento próprio.

## 12. Critério de saída do planejamento

- [x] Prioridade definida: Projetos → Acessibilidade → Contato futuro.
- [x] Limite uniforme de seis projetos secundários definido.
- [x] Página “Mais Projetos” registrada como evolução futura, sem link
      provisório.
- [x] Contraste e tabs definidos como escopo da segunda etapa.
- [x] Contato explicitamente mantido fora desta branch.
- [x] Tarefas e critérios de validação definidos para implementação posterior.
- [x] Implementação da C6-T01 autorizada e iniciada.
- [x] Etapa 1 de Projetos (C6-T01 e C6-T02) implementada e validada.
- [x] C6-T03 e C6-T04 implementadas e validadas; C6-T05 permanece pendente.
- [ ] Validação concluída.
- [ ] Commits atômicos solicitados e criados.
- [ ] Merge solicitado e realizado.
