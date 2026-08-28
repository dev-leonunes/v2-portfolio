# Melhorias incrementais de UX da home do portfólio

**Status:** design aprovado, aguardando especificação formal e implementação
**Data:** 2026-08-28
**Branch de implementação:** `feat/portfolio-ux-improvements`
**Superfície:** `src/app/page.tsx` e componentes da home
**Base da decisão:** crítica do Impeccable com pontuação 24/40
**Implementação nesta etapa:** nenhuma

Este documento registra o desenho aprovado para uma evolução incremental da home. Ele será usado como base para a especificação formal, a quebra em tarefas e a implementação posterior.

## 1. Contexto e problema

A home apresenta conteúdo técnico autêntico, mas a crítica identificou três problemas prioritários:

1. o CTA principal do hero é visualmente acionável, porém não possui destino;
2. abas, filtros, links e mídia têm estados de interação e acessibilidade principalmente visuais;
3. a seção de projetos tem uma hierarquia válida, mas os cards secundários repetem metadados e competem com os destaques.

O objetivo não é redesenhar o portfólio inteiro. A intenção é preservar a estrutura que já funciona, reduzir atrito e melhorar a clareza em pequenas etapas verificáveis.

## 2. Decisões confirmadas

- A primeira ação de conversão será o WhatsApp.
- O CTA abrirá o WhatsApp em uma nova aba.
- A mensagem será pré-preenchida com:

  > Olá, Leonardo! Vi seu portfólio e gostaria de conversar sobre uma oportunidade ou projeto.

- A futura seção de Contato não será implementada nesta branch.
- Quando a seção de Contato existir, o CTA poderá migrar para ela; essa migração é trabalho futuro.
- A futura seção de Contato será estática, reutilizará `CONTACT` e terá WhatsApp em destaque, com e-mail e LinkedIn como alternativas.
- A home continuará exibindo todos os projetos.
- A seção continuará com três projetos em destaque e os demais em cards menores.
- A página “Mais Projetos” ficará fora do escopo atual e será registrada no `TODO.md`.
- A etapa atual corrigirá os pontos críticos de acessibilidade, mas não buscará conformidade formal WCAG 2.2 AA.
- A meta formal WCAG 2.2 AA será registrada como trabalho futuro.
- A implementação ocorrerá em uma branch com commits atômicos por prioridade.
- Nenhuma nova dependência ou backend será introduzido.
- As alterações atuais de `yarn.lock`, `.yarnrc.yml` e do snapshot da crítica não fazem parte dos commits funcionais desta feature.

## 3. Escopo

### 3.1 Incluído

- CTA do hero funcional para WhatsApp;
- mensagem pré-preenchida e URL codificada;
- nova aba com `target="_blank"` e `rel="noopener noreferrer"`;
- estados semânticos e foco dos controles de experiência e projetos;
- nomes acessíveis dos links;
- remoção de elementos interativos aninhados;
- respeito a `prefers-reduced-motion` no vídeo;
- anúncio do filtro e da quantidade de resultados;
- refinamento conservador dos cards de projetos;
- redução de imagens e metadados nos projetos secundários;
- validação incremental em temas claro/escuro e tamanhos mobile/desktop.

### 3.2 Fora do escopo

| Item | Motivo |
| --- | --- |
| Seção de Contato | É uma funcionalidade futura já planejada; não deve aumentar o escopo desta branch. |
| Migração do CTA para `#contact` | Só faz sentido depois que a seção existir. |
| Página “Mais Projetos” | Será uma nova rota e ficará para uma tarefa própria. |
| Formulário, backend ou serviço externo | O portfólio permanece estático nesta etapa. |
| Meta formal WCAG 2.2 AA | Será adotada em uma etapa posterior; agora serão corrigidos os riscos mais críticos. |
| Redesign completo da home | A estrutura atual foi considerada adequada; o ajuste será incremental. |
| Novas referências visuais de marca | Continuam em aberto em `PRODUCT.md`. |
| Novos campos obrigatórios em `Project` | Não há dados de resultados/métricas aprovados para preencher. |
| Refatoração global do sistema visual | Sombras, numeração e decoração só serão tocadas quando afetarem diretamente as três prioridades. |

## 4. Usuários e resultado esperado

### Recrutador ou gestor

Deve conseguir acionar uma conversa rapidamente, navegar pela experiência com teclado e reconhecer os projetos mais relevantes sem percorrer uma grade visualmente uniforme.

### Potencial cliente freelance

Deve entender que pode iniciar uma conversa sobre uma oportunidade ou projeto, identificar o tipo de trabalho demonstrado e acessar os links sem depender de interpretação de ícones ou hover.

### Visitante mobile

Deve conseguir usar o CTA, as abas, o filtro e os links em uma tela estreita, sem overflow acidental, estados invisíveis ou dependência exclusiva de hover.

## 5. Requisitos para a especificação futura

Todos os requisitos abaixo são independentes e verificáveis.

### CTA-01 — CTA de WhatsApp

**Prioridade:** P1

**História:** como recrutador ou potencial cliente, quero iniciar uma conversa pelo CTA do hero para reduzir o caminho até o contato.

**Critérios:**

1. WHEN o visitante ativar o CTA do hero THEN o sistema SHALL abrir a URL oficial de WhatsApp em uma nova aba.
2. WHEN a URL for aberta THEN o sistema SHALL incluir a mensagem pré-preenchida definida neste documento, devidamente codificada.
3. WHEN o link for renderizado THEN o sistema SHALL usar `target="_blank"` e `rel="noopener noreferrer"`.
4. WHEN o link receber foco THEN o sistema SHALL manter um indicador de foco visível.

**Teste independente:** clicar no CTA em desktop e mobile, confirmar a abertura de uma nova aba e verificar a mensagem no campo de conversa sem enviar a mensagem.

### CTA-02 — Fonte única do CTA

**Prioridade:** P1

**História:** como mantenedor do portfólio, quero que o CTA reutilize o contato existente para evitar divergência de telefone ou URL.

**Critérios:**

1. WHEN a URL do WhatsApp for alterada em `CONTACT` THEN o CTA SHALL usar o novo valor sem duplicar o número no componente.
2. WHEN a mensagem for atualizada nos dados da aplicação THEN o CTA SHALL refletir o novo texto após a codificação da URL.

**Teste independente:** alterar temporariamente o valor centralizado em ambiente local, renderizar a home e confirmar que o CTA usa a fonte única.

### A11Y-01 — Abas de experiência

**Prioridade:** P1

**História:** como visitante que navega por teclado ou tecnologia assistiva, quero saber qual experiência está selecionada e qual painel está aberto.

**Critérios:**

1. WHEN uma aba receber foco THEN o sistema SHALL exibir foco visível.
2. WHEN uma experiência for selecionada THEN o sistema SHALL expor o estado selecionado por semântica ARIA.
3. WHEN o painel mudar THEN o sistema SHALL manter relação explícita entre a aba e o painel.
4. WHEN o usuário usar teclado THEN o sistema SHALL conseguir alcançar e ativar todas as experiências.

**Teste independente:** navegar pela experiência apenas com teclado e inspecionar a aba e o painel com uma ferramenta de acessibilidade.

### A11Y-02 — Filtro de projetos

**Prioridade:** P1

**História:** como visitante que filtra projetos, quero saber qual filtro está ativo e quantos resultados foram encontrados.

**Critérios:**

1. WHEN o filtro for aberto THEN o trigger SHALL ter foco visível e nome compreensível.
2. WHEN uma opção for selecionada THEN o sistema SHALL expor a opção ativa sem depender somente de cor.
3. WHEN a lista mudar THEN o sistema SHALL anunciar o filtro atual e a quantidade de projetos.
4. WHEN o filtro não retornar projetos THEN o estado vazio atual SHALL continuar compreensível e permitir recuperação pelo próprio controle de filtro.

**Teste independente:** operar o filtro por teclado, selecionar cada opção e confirmar a leitura do estado e da quantidade.

### A11Y-03 — Links e controles únicos

**Prioridade:** P1

**História:** como visitante que usa teclado ou leitor de tela, quero que cada ação tenha um único controle e um nome específico.

**Critérios:**

1. WHEN um link de projeto for renderizado THEN seu nome acessível SHALL identificar o projeto e o destino.
2. WHEN o download do CV for renderizado THEN SHALL existir apenas um elemento interativo para a ação.
3. WHEN qualquer controle receber foco THEN o indicador SHALL ser visível contra os dois temas.
4. WHEN links externos forem ativados THEN SHALL permanecer com `target="_blank"` e `rel="noopener noreferrer"`.

**Teste independente:** percorrer a sequência de foco da home e verificar que não existem controles duplicados, aninhados ou sem nome.

### A11Y-04 — Movimento reduzido e vídeo

**Prioridade:** P1

**História:** como visitante que prefere movimento reduzido, quero acessar a seção Sobre sem autoplay ou loops decorativos.

**Critérios:**

1. WHEN `prefers-reduced-motion: reduce` estiver ativo THEN o vídeo SHALL permanecer em apresentação estática.
2. WHEN a preferência de movimento reduzido estiver ativa THEN hover, autoplay e loop SHALL não iniciar o vídeo.
3. WHEN a reprodução automática falhar THEN a seção SHALL continuar legível e não exibir erro bloqueante.
4. WHEN a preferência não estiver ativa THEN o comportamento atual poderá permanecer, desde que não dependa de conteúdo oculto para ser compreendido.

**Teste independente:** ativar a preferência de movimento reduzido no navegador, visitar a seção Sobre e confirmar que a leitura e a imagem estática continuam disponíveis.

### PROJ-01 — Hierarquia dos destaques

**Prioridade:** P1

**História:** como recrutador ou potencial cliente, quero identificar rapidamente os projetos mais representativos.

**Critérios:**

1. WHEN todos os projetos forem exibidos THEN o sistema SHALL manter três projetos em destaque e os demais em uma subseção própria.
2. WHEN um filtro for aplicado THEN a separação SHALL continuar usando o campo `featured`, sem duplicar a fonte de dados.
3. WHEN a tela for mobile THEN os destaques SHALL empilhar sem cortar conteúdo ou links.
4. WHEN a tela for desktop THEN a diferença de escala entre destaques e demais projetos SHALL permanecer perceptível.

**Teste independente:** abrir a home com o filtro “Todos” e confirmar a ordem e a diferenciação visual nos dois tamanhos.

### PROJ-02 — Cards secundários compactos

**Prioridade:** P1

**História:** como visitante que percorre vários projetos, quero escanear os cards secundários sem competir com os três destaques.

**Critérios:**

1. WHEN um projeto secundário for renderizado THEN sua imagem SHALL ser menor que a imagem de um destaque.
2. WHEN tecnologias forem exibidas THEN o card SHALL mostrar apenas um conjunto compacto, preservando a indicação de itens ocultos quando necessário.
3. WHEN o card for exibido THEN SHALL manter título, tipo, descrição curta e links.
4. WHEN o visitante passar o mouse ou focar a imagem THEN a resposta SHALL ser sutil e não essencial para compreender o conteúdo.

**Teste independente:** comparar um destaque e um card secundário em desktop e mobile, verificando escala, leitura e acesso aos links.

### PROJ-03 — Preservação de contratos

**Prioridade:** P1

**História:** como mantenedor do portfólio, quero melhorar a apresentação sem quebrar os dados e links existentes.

**Critérios:**

1. WHEN a seção for refatorada THEN a interface `Project` SHALL continuar compatível com os dados atuais.
2. WHEN uma imagem estiver ausente THEN `ImagePlaceholder` SHALL continuar sendo usado.
3. WHEN um projeto tiver apenas GitHub ou apenas URL publicada THEN o link disponível SHALL continuar sendo exibido corretamente.
4. WHEN os filtros forem usados THEN nenhum projeto atual SHALL desaparecer por erro de apresentação.

**Teste independente:** verificar todos os itens de `PROJECTS`, os dois tipos de filtro, placeholders e combinações de links.

## 6. Direção visual aprovada

A direção é **padrão atual refinado**:

- manter três cards de destaque maiores, com a composição horizontal no desktop e empilhada no mobile;
- manter a alternância atual entre imagem e conteúdo dos destaques;
- manter o label “Projeto em destaque” e a separação “Outros Projetos”;
- reduzir a área de imagem dos cards secundários, partindo de uma referência compacta próxima de `h-36`;
- reduzir os metadados secundários para aproximadamente três ou quatro tecnologias visíveis;
- reduzir o transform de hover das imagens secundárias para uma resposta discreta;
- simplificar a descrição interna dos destaques para reduzir a sensação de card dentro de card;
- manter o estilo de seção, a numeração existente e a identidade slate/âmbar nesta branch;
- evitar novas grades, bento layouts, páginas ou mudanças mirabolantes;
- preservar contraste, comportamento dos temas e links atuais.

A alteração visual deve comunicar prioridade por escala, espaçamento e quantidade de informação, não por uma nova arquitetura de navegação.

## 7. Arquitetura e fluxo

O fluxo continuará estático e baseado nos contratos atuais:

`CONTACT` + mensagem centralizada → `Hero` → link WhatsApp externo

`PROJECTS` → `ProjectsSection` → filtro local → grupos `featured` e não-`featured` → cards existentes

Estado de experiência → `Experience` → aba semântica + painel correspondente

Estado de filtro → `ProjectFilter` → anúncio de seleção/quantidade → lista filtrada

Preferência de movimento → `About` → reprodução automática permitida ou apresentação estática

Nenhum fluxo exigirá API, banco, formulário ou dependência nova.

## 8. Pontos de integração e reuso

| Arquivo | Papel no plano | Reuso |
| --- | --- | --- |
| `src/constants/index.ts` | Centralizar a mensagem do CTA e preservar `CONTACT.Whatsapp`. | Contrato `CONTACT` e interface `Project`. |
| `src/components/Hero.tsx` | Transformar o botão inerte em link de WhatsApp. | `Button`, tokens e estilos existentes. |
| `src/components/Experience.tsx` | Expor semântica de tabs, foco e relação com painel. | Estado local e lista `EXPERIENCES`. |
| `src/components/Projects/ProjectFilter.tsx` | Expor seleção e foco do dropdown. | Radix Dropdown Menu e `cn()`. |
| `src/components/Projects/Projects.tsx` | Anunciar filtro/quantidade sem mudar a origem dos dados. | `PROJECTS`, `Reveal` e divisão atual. |
| `src/components/Projects/ProjectLinks.tsx` | Tornar nomes acessíveis específicos por projeto. | Links externos e convenções atuais. |
| `src/components/About.tsx` | Respeitar preferência de movimento na reprodução do vídeo. | `IntersectionObserver`, vídeo e estado local existentes. |
| `src/components/Projects/FeaturedProject.tsx` | Preservar destaque e simplificar superfície interna. | `Image`, `ImagePlaceholder`, badge e links. |
| `src/components/Projects/OtherProject.tsx` | Compactar imagem, metadados e hover. | `ProjectTypeBadge`, `ProjectLinks` e placeholder. |
| `TODO.md` | Registrar trabalho futuro fora da branch funcional. | Lista existente de próximos passos. |

O header global, o footer e os tokens globais não serão reformulados nesta etapa, exceto se uma correção crítica exigir ajuste localizado.

## 9. Divisão de implementação

### Commit 1 — CTA/conversão

**Escopo:** `src/constants/index.ts` e `src/components/Hero.tsx`.

**Resultado:** CTA funcional, mensagem codificada, nova aba, foco visível e sem elementos interativos aninhados.

**Validação:** clique em desktop/mobile, inspeção da URL, lint e revisão do diff.

### Commit 2 — Acessibilidade/interações

**Escopo:** `Experience.tsx`, `ProjectFilter.tsx`, `Projects.tsx`, `ProjectLinks.tsx` e `About.tsx`.

**Resultado:** estados semânticos, foco visível, anúncio do filtro, nomes acessíveis, controles únicos e movimento reduzido.

**Validação:** teclado, ferramenta de acessibilidade, tema claro/escuro, preferência de movimento, lint e revisão do diff.

### Commit 3 — Hierarquia dos projetos

**Escopo:** `FeaturedProject.tsx` e `OtherProject.tsx`, com ajustes localizados adicionais apenas se necessários.

**Resultado:** mesma arquitetura visual, destaques preservados, cards secundários compactos e menor ruído de metadados/hover.

**Validação:** desktop/mobile, filtro “Todos”, filtros por tipo, imagens ausentes, links e temas claro/escuro.

### Validação final

Depois dos três commits:

- executar `npm run lint`;
- executar `npm run build`;
- revisar a home completa;
- verificar o CTA sem enviar mensagem;
- verificar foco e teclado;
- revisar os dois temas;
- registrar pendências restantes no `TODO.md`.

Não há suíte de testes automatizados configurada; a validação combinará lint, build, inspeção manual e revisão incremental dos diffs.

## 10. Casos-limite e estratégia de erro

| Cenário | Comportamento esperado |
| --- | --- |
| URL do WhatsApp alterada | O CTA usa o valor centralizado em `CONTACT`. |
| Mensagem com acentos ou caracteres especiais | A mensagem é codificada antes de ser anexada à URL. |
| Nova aba bloqueada pelo navegador | O link continua sendo uma navegação externa comum; não haverá lógica de formulário ou fallback complexo. |
| Filtro sem resultados | O estado vazio atual permanece compreensível e permite escolher outro filtro. |
| Projeto sem imagem | O placeholder existente continua sendo renderizado. |
| Projeto sem GitHub ou sem live URL | Apenas os links disponíveis aparecem. |
| Reprodução do vídeo rejeitada | A seção permanece utilizável com a apresentação estática. |
| Movimento reduzido ativo | Autoplay, loop e transform decorativo não são iniciados. |
| Tema claro ou escuro | Foco e estados selecionados permanecem distinguíveis nos dois temas. |
| Viewport estreito | Conteúdo, títulos, links e cards não podem ultrapassar ou cortar o container. |

## 11. Riscos e mitigação

- **CTA direcionar para um canal errado:** reutilizar `CONTACT.Whatsapp` e validar a URL final antes do commit.
- **Semântica de tabs alterar o comportamento atual:** preservar o estado local e testar ativação, foco e troca de painel antes de revisar a aparência.
- **Redução de metadados esconder informação útil:** manter `+N` e preservar a descrição, o tipo e os links.
- **Correções de acessibilidade virarem redesign:** limitar a etapa aos pontos identificados e não alterar a estrutura global.
- **Alterações não relacionadas entrarem nos commits:** selecionar arquivos por etapa e revisar `git diff` antes de cada commit.
- **Plano futuro de Contato conflitar com este:** manter `docs/plan-secao-contato.md` como planejamento independente e não implementar nada dele nesta branch.

## 12. Trabalho futuro registrado

O `TODO.md` deverá manter ou receber os seguintes itens fora do escopo atual:

- criar a seção de Contato;
- migrar o CTA provisório do hero para a seção de Contato;
- criar a página “Mais Projetos”;
- adotar WCAG 2.2 nível AA como meta formal;
- definir e registrar referências visuais específicas da marca.

## 13. Critério de conclusão do planejamento

O planejamento será considerado pronto quando:

- este documento estiver revisado e sem ambiguidades;
- o `TODO.md` registrar claramente os itens futuros;
- a branch `feat/portfolio-ux-improvements` existir;
- nenhuma correção da interface tiver sido aplicada;
- a próxima etapa puder transformar os requisitos deste documento em uma especificação formal e tarefas executáveis.
