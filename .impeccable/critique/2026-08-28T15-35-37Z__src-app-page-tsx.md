---
target: src/app/page.tsx
total_score: 24
p0_count: 0
p1_count: 3
status: post-implementation-review
timestamp: 2026-08-28T15-35-37Z
slug: src-app-page-tsx
---
Method: dual-agent (A: Galileo · B: Ptolemy)

## Atualização pós-implementação

Esta revisão foi feita após os commits `3a82d98`, `83685ef`, `28f9ed8` e `3bb47b9`, que implementaram o escopo aprovado da branch `feat/portfolio-ux-improvements`. A pontuação 24/40 continua sendo a linha de base da crítica original; o P0 foi zerado porque o CTA foi resolvido e três frentes P1 permanecem no backlog. Não foi recalculada uma nova pontuação em execução dual-agent.

| Achado original | Situação atual | Evidência e encaminhamento |
|---|---|---|
| P0 — CTA principal inerte | **Resolvido** | `Hero.tsx` usa `CONTACT.Whatsapp`, mensagem pré-preenchida, `target="_blank"`, `rel="noopener noreferrer"` e `Button asChild`. A migração futura para a seção de Contato permanece no `TODO.md`. |
| P1 — proposta de valor depois das tecnologias | **Parcialmente resolvido** | A copy agora comunica aplicações orientadas a dados, sistemas industriais em tempo real, sites e produtos digitais; o hero foi reduzido para seis sinais técnicos. Ainda falta explicitar contratação/freelance e fechar a microcopy do próximo passo. |
| P1 — projetos achatam a hierarquia | **Parcialmente resolvido** | Os três destaques e os cards menores foram preservados, com imagens secundárias, tecnologias e hover compactados. Ainda faltam evidências de problema, papel, resultado e escala; a página “Mais Projetos” continua fora do escopo. |
| P1 — estados de interação e acessibilidade visuais | **Majoritariamente resolvido no escopo** | Abas, filtro, links de projeto, CV e vídeo receberam semântica, foco, nomes acessíveis, anúncio de resultados, poster e suporte a movimento reduzido. Permanecem skip link, landmark desktop, pista de overflow das abas, decisão sobre rótulos visíveis no footer e auditoria formal WCAG. |
| P2 — scaffolding visual | **Parcialmente resolvido e deliberadamente adiado** | Foram removidos o card aninhado dos destaques e excessos de sombra/hover nos projetos. Permanecem numeração, faixa lateral dos tabs, grid decorativo do placeholder, kickers repetidos e algumas combinações de borda/sombra; a direção aprovada foi manter o padrão atual refinado. |

### Evidência da verificação

- A varredura CLI atual do detector sobre `src/components` e os arquivos da home retornou `[]`.
- Lint, build e validações manuais de responsividade, CTA, foco, filtros, abas e movimento reduzido foram concluídos após a implementação.
- A inspeção visual desta atualização é documental; portanto, não há uma nova nota ou uma nova contagem de overlay para substituir a linha de base.

## Design Health Score

As notas abaixo representam a situação **antes** da implementação e servem para comparar a evolução. As afirmações sobre CTA inerte, dez badges no hero, controles sem semântica e cards aninhados foram atualizadas nas seções seguintes.

| # | Heurística | Nota | Principal achado |
|---|---|---:|---|
| 1 | Visibilidade do estado do sistema | 2/4 | Linha de base: tema, filtro e experiência ativa apareciam visualmente, mas o filtro não anunciava resultados e o CTA não produzia resposta. |
| 2 | Correspondência com o mundo real | 3/4 | O PT-BR e a narrativa são claros, mas termos como Modbus, React Flow e agentes de IA não são traduzidos em valor para todos os públicos. |
| 3 | Controle e liberdade do usuário | 3/4 | Linha de base: havia navegação por âncora, filtros, abas, tema e retorno ao topo, mas o CTA inerte quebrava o controle no ponto de conversão. |
| 4 | Consistência e padrões | 3/4 | Linha de base: tokens, tipografia e links externos eram consistentes, mas abas/filtros não compartilhavam estados de foco explícitos e os rótulos variavam. |
| 5 | Prevenção de erros | 3/4 | Linha de base: não havia formulários ou ações destrutivas, mas uma ação visualmente clicável sem destino e estados apenas visuais eram falhas evitáveis. |
| 6 | Reconhecimento em vez de memorização | 3/4 | Linha de base: seções, tecnologias e filtros eram reconhecíveis, mas havia dependência de ícones e metadados demais. |
| 7 | Flexibilidade e eficiência | 2/4 | Linha de base: âncoras, abas, filtros e CV ajudavam, mas faltavam contato direto no primeiro viewport, skip link e priorização de evidências. |
| 8 | Design estético e minimalista | 2/4 | A hierarquia existe, mas glows, pills, numeração, superfícies aninhadas e cards repetidos geram ruído. |
| 9 | Reconhecer, diagnosticar e recuperar de erros | 2/4 | Linha de base: o estado vazio era compreensível, mas não havia recuperação para CTA inerte, vídeo sem reprodução ou contexto de projeto ausente. |
| 10 | Ajuda e documentação | 1/4 | Falta explicar escopo de serviços, processo de contratação, resultados, contexto dos projetos e quando entrar em contato. |
| **Total** |  | **24/40** | **Faixa aceitável, mas ainda precisa de melhorias significativas para ficar fluida e pronta para conversão.** |

## Anti-Patterns Verdict

**LLM assessment:** risco médio-alto de aparência gerada por IA na linha de base; veredito ainda parcial. O conteúdo específico — monitoramento industrial, Modbus, WebSockets, dashboards, IA, imagens reais e setup pessoal — dá autenticidade. Os commits reduziram a repetição do hero, removeram o card aninhado dos destaques e deram mais contraste entre projetos grandes e pequenos. Ainda permanecem marcadores “01/02/03”, labels mono em caixa alta, badges em pills, glows, cards alternados e grid repetitivo.

Os conflitos mais relevantes com o Impeccable são:

- marcadores numerados usados como estrutura padrão em About, Experience e Projects;
- grid repetitivo de projetos secundários;
- faixa lateral colorida de 2px nos seletores de experiência;
- grid decorativo de dois eixos em `ImagePlaceholder.tsx`;
- combinação de borda com sombra ampla ainda presente em Experience e nos links do footer;
- descrição com borda dentro de outro card com borda nos projetos em destaque (**resolvido**);
- labels em caixa alta e espaçados repetidos como kickers de seção.

Não foram encontrados texto com gradiente, raios de borda acima de 32px ou o padrão de hero-métrica.

**Deterministic scan:** a varredura atual sobre `src/components` e os arquivos da home retornou exit status 0 e JSON vazio (`[]`). A leitura do código atual confirma que os achados históricos abaixo tiveram resultados mistos:

| Regra histórica | Situação atual |
|---|---|
| `gpt-thin-border-wide-shadow` | As sombras amplas dos destaques e cards secundários foram removidas; ainda há uma superfície ampla em `Experience.tsx` e uma sombra menor nos links do footer, ambas para avaliação futura. |
| `line-length` | A varredura CLI atual não reproduziu o achado; manter revisão de legibilidade quando a próxima alteração tocar `Experience.tsx`. |
| `all-caps-body` | O kicker do `Footer.tsx` permanece; o achado continua contextual e de baixa prioridade. |
| `overused-font` | Continua inconclusivo: o relatório histórico observou fallback de fonte, não uma declaração literal isolada. |
| `image-hover-transform` | O hover dos cards secundários foi reduzido; os transforms restantes são deliberados e não essenciais para compreender o conteúdo. |
| `nested-cards` | Resolvido em `FeaturedProject.tsx`; a descrição deixou de ser uma superfície com borda própria. |

A contagem de overlay de 10 grupos no desktop e 9 no mobile pertence à execução original. Não foi recalculada nesta atualização. A análise automática de contraste original retornou `[]`; a validação formal do tema claro e da meta WCAG 2.2 AA continua pendente.

O overlay original foi injetado com sucesso e renderizado na aba de inspeção [Human], em 1440×1000 e 390×844, somente no tema escuro. As validações posteriores confirmaram responsividade básica, CTA, foco, filtros, abas e movimento reduzido; a revisão visual formal do tema claro continua pendente.

## Overall Impression

A home tem uma base técnica e visual coerente, e ficou mais convincente com o CTA funcional e uma proposta de valor mais específica. O próximo ganho não exige redesenhar a página: é tornar explícito o contexto de contratação, transformar os três destaques em evidência de resultado e fechar as pequenas lacunas de acessibilidade que ainda dependem de decisões de estrutura.

## What's Working

- **Especificidade de domínio:** monitoramento industrial, Modbus, dados em tempo real, dashboards e diagnóstico por IA dão material que um template genérico não teria.
- **Sistema visual consistente:** paleta, papéis tipográficos, espaçamento, temas, alt text e alternativas de movimento reduzido mostram decisões deliberadas.
- **Exploração funcional:** âncoras, troca de experiências, filtro de projetos, download do CV, links reais, fallback de imagens e drawer mobile ajudam a descobrir o trabalho.

## Priority Issues

### [P0 — RESOLVIDO] O CTA principal “Vamos conversar?” não fazia nada

**Por que importava:** `Hero.tsx` renderizava um botão sem `href`, `onClick` ou destino, bloqueando diretamente o objetivo de iniciar conversas qualificadas.

**Resultado:** o CTA agora abre o WhatsApp em nova aba com mensagem pré-preenchida, mantém “Ver projetos” como ação secundária e usa `Button asChild` com um único elemento interativo. A futura migração para uma seção de Contato está registrada, mas não é bloqueadora nesta branch.

**Comando sugerido:** concluído; reavaliar apenas quando a seção de Contato for implementada.

### [P1 — PARCIAL] A proposta de valor ainda precisa orientar melhor a conversão

**Por que ainda importa:** `Hero.tsx:60-73` agora começa por uma afirmação específica e seis badges, uma melhora objetiva. Ainda assim, o visitante não identifica de forma explícita se a próxima conversa é sobre contratação, freelance ou ambos, e os badges continuam funcionando mais como inventário do que como prova.

**Próxima correção planejada:** fechar a copy final, decidir se seis sinais continuam adequados ou se devem ser reduzidos para três a cinco, e explicitar os caminhos de contratação e projeto freelance sem criar uma nova seção nesta etapa.

**Comando sugerido:** `$impeccable clarify src/components/Hero.tsx`; usar `$impeccable typeset src/components/Hero.tsx` somente se a alteração de copy exigir ajuste de ritmo.

### [P1 — PARCIAL] O arquivo de projetos ainda repete cards e achata parte da evidência

**Por que ainda importa:** a escala agora diferencia os três destaques de `OtherProject`, e os cards menores exibem menos informação. Porém, a seção ainda reúne todos os projetos na home e as descrições continuam privilegiando implementação e tecnologias, com pouca evidência de problema, papel, resultado ou escala.

**Próxima correção planejada:** selecionar os três destaques mais relevantes, levantar dados reais de problema, responsabilidade, resultado e escala e só então revisar `PROJECTS`. A página “Mais Projetos” continua sendo uma tarefa separada, já registrada no `TODO.md`.

**Comando sugerido:** `$impeccable clarify src/constants/index.ts` para a etapa de conteúdo; depois `$impeccable distill src/components/Projects` se a nova evidência exigir reorganização.

### [P1 — MAJORITARIAMENTE RESOLVIDO] Estados de interação e acessibilidade eram principalmente visuais

**O que foi resolvido:** `Experience.tsx` agora usa `tablist`, `tab`, `aria-selected`, `aria-controls` e `tabpanel`; `ProjectFilter.tsx` usa opções de rádio e anuncia contagem; `ProjectLinks.tsx` inclui o título do projeto; o CV mantém um único controle; e os links sociais adicionados ao About têm texto e nomes acessíveis.

O vídeo de `About.tsx` agora tem poster, fallback estático, guarda para `prefers-reduced-motion` e tratamento de falha de reprodução. O conteúdo não depende do hover para ser compreendido.

**Pendências planejadas:** adicionar skip link, transformar a navegação desktop em landmark `nav`, fornecer pista visual para as abas horizontais no mobile, decidir sobre rótulos visíveis no footer e executar uma auditoria direcionada com tema claro e zoom de 200%. A meta formal WCAG 2.2 AA continua fora desta etapa.

**Comando sugerido:** `$impeccable audit src/components` para o próximo ciclo; depois `$impeccable harden src/components/Header.tsx` e os landmarks da página.

### [P2 — PARCIAL / ADIADO] A decoração de scaffolding compete com a personalidade real

**Por que ainda importa:** os ajustes reduziram sombras largas, hover e superfícies aninhadas nos projetos, mas a numeração, a faixa lateral dos tabs, o grid do placeholder e os kickers mono continuam contribuindo para a leitura de template.

**Próxima correção planejada:** avaliar cada elemento individualmente apenas depois de resolver proposta de valor, evidência e acessibilidade. A manutenção da numeração e da identidade slate/âmbar continua sendo a decisão atual, não um defeito a corrigir automaticamente.

**Comando sugerido:** `$impeccable quieter src/components` quando houver uma decisão visual específica; não iniciar uma limpeza ampla por reflexo.

## Cognitive Load

- **Parcial — foco único:** o hero agora combina uma promessa mais específica, seis sinais técnicos, um CTA e um link secundário; ainda falta explicitar os públicos de contratação.
- **Falha — agrupamento:** About e experiência ainda expõem muitas tecnologias e responsabilidades ao mesmo tempo.
- **Passa — agrupamento estrutural:** seções, projetos em destaque, metadados e experiência estão separados de forma compreensível.
- **Passa — hierarquia estrutural:** nome e títulos são claros, embora a proposta de valor seja menos clara que a tipografia.
- **Parcial — uma coisa por vez:** o CTA e “Ver projetos” estão reduzidos a duas ações no hero, mas a home ainda apresenta identidade, stack, experiência e muitos projetos na mesma sequência.
- **Falha — escolhas mínimas:** o hero melhorou para duas ações; o footer ainda tem cinco destinos icon-only e o arquivo contém muitos links repetidos.
- **Passa — memória de trabalho:** não há fluxo de múltiplas etapas que exija lembrar dados entre telas.
- **Falha — divulgação progressiva:** detalhes de experiência, stacks e projetos são expostos de uma vez; animação de entrada não reduz complexidade conceitual.

As mudanças reduziram a carga do primeiro viewport, mas a carga geral continua moderada/alta por causa da extensão dos projetos, do inventário técnico e da falta de divulgação progressiva.

Decision points visíveis:

- header desktop: Sobre, Experiências, Projetos e tema — 4 controles;
- hero: CTA principal + “Ver projetos” — 2 ações, além de seis badges não interativos;
- experiência: Migracode, Freelancer, Cubos Academy e SouJunior — 4 abas;
- filtro: Todos, Projetos Pessoais e Freelas — 3 opções;
- arquivo de projetos: 3 destaques + 9 outros quando “Todos” está selecionado;
- footer: GitHub, LinkedIn, WhatsApp, e-mail e Discord — 5 destinos.

## Emotional Journey

- **Chegada:** nome, slate escuro e âmbar estabelecem presença. A copy agora aponta para aplicações orientadas a dados e sistemas em tempo real; os seis chips ainda podem ser reduzidos ou melhor contextualizados.
- **Exploração inicial:** imagem/vídeo pessoal e a narrativa de monitoramento industrial geram curiosidade e autenticidade. Quatro parágrafos e outra lista de tecnologias atrasam a prova concreta.
- **Experiência:** o trabalho industrial é o pico de credibilidade, mas ainda é descrito como inventário de responsabilidades; faltam escala, impacto e resultados.
- **Projetos:** imagens e links reais podem ser um segundo pico. Os nove cards repetidos diluem a diferença entre evidência estratégica e exercícios.
- **Final:** a frase de encerramento é acolhedora, mas cinco ícones ainda não dizem visualmente qual é o próximo passo nem o que esperar da conversa.

## Persona Red Flags

### Recrutador ou hiring manager

- O primeiro viewport mostra “Desenvolvedor de software” e uma proposta mais específica, mas ainda não explicita se a prioridade é contratação, freelance ou ambos.
- O CTA de conversa agora funciona e abre o WhatsApp com mensagem pré-preenchida.
- As melhores evidências aparecem tarde e misturadas a nove projetos repetitivos.
- A experiência lista tarefas e ferramentas, sem impacto mensurável, escala, ownership ou resultados.
- O download do CV só aparece na seção de experiência.

### Potencial cliente freelance

- Não há oferta explícita de serviços, escopo, modelo de trabalho, expectativa de prazo ou explicação do próximo passo.
- Termos como microsserviços, APIs, Modbus e React Flow não são convertidos em benefício de negócio.
- O CTA principal agora funciona, mas os cinco destinos do footer continuam visualmente representados apenas por ícones.
- As descrições falam de implementação, mas raramente do problema do cliente e do resultado entregue.
- A página não ajuda a decidir se Leonardo é adequado para um tipo específico de projeto web.

### Visitante mobile de primeira viagem

- O menu fica escondido enquanto o hero usa espaço vertical com seis badges não interativos.
- O CTA principal agora funciona diretamente; a rolagem longa ainda pesa porque todos os projetos permanecem na home.
- As abas de experiência agora têm estado semântico, mas continuam sem uma pista visual explícita de overflow horizontal.
- O footer oferece cinco destinos apenas por ícone.
- O arquivo completo é longo e repetitivo, dificultando reter as provas mais fortes.

## Minor Observations

- O header desktop usa um `div` ao redor dos links em vez de um landmark `nav`.
- Não existe skip link para o conteúdo principal.
- Os nomes acessíveis em `ProjectLinks.tsx` agora incluem o título do projeto.
- O alt do logo é apenas “Logo”; o rótulo do menu mobile e o fechamento do sheet têm pequenas inconsistências de texto/idioma.
- O vídeo desktop agora tem poster e guarda explícita para movimento reduzido; `preload="auto"` continua carregando um asset de aproximadamente 484 KB antes de a interação ser necessária.
- `background-attachment: fixed` é um risco de desempenho em mobile.
- A aplicação do tema ocorre em um effect e pode produzir um flash inicial de tema; isso não foi verificado em runtime.
- O overflow observado foi intencional, com exceção da aba horizontal de experiências que precisa de uma pista visual.
- O contraste não apresentou achados no detector, mas o tema claro não foi testado.
- A tipografia respeita alguns limites: letter-spacing de display em -0.02em, raios de card até 1rem e alternativas de movimento reduzido para os reveals.

## Questions to Consider

- Quais três projetos provam melhor a próxima oportunidade desejada e quais resultados reais cada um pode mostrar?
- A copy do hero deve falar explicitamente com contratação e freelance no mesmo bloco ou priorizar um desses caminhos?
- O footer deve permanecer compacto com nomes acessíveis ou ganhar rótulos visíveis para reduzir a dependência de ícones?
- “01”, “02”, “03” e os kickers mono são voz de marca deliberada ou scaffolding que merece uma limpeza P2?

## Plano pós-crítica (sem implementação)

1. **Proposta de valor:** fechar copy, públicos e quantidade de sinais técnicos do hero.
2. **Evidência dos projetos:** coletar dados reais e atualizar os três destaques antes de qualquer nova mudança estrutural.
3. **Acessibilidade da home:** adicionar skip link e landmarks, sinalizar as abas no mobile, revisar rótulos e validar o tema claro, teclado, zoom e movimento reduzido.
4. **Visual P2:** decidir individualmente sobre numeração, grid decorativo, faixa lateral, kickers e sombras remanescentes.

As etapas devem ser implementadas uma por vez, com validação própria e commit atômico. A seção de Contato, a página “Mais Projetos” e a meta WCAG 2.2 AA continuam fora deste plano imediato e permanecem no `TODO.md`.
