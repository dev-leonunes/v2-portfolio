# Refinamento da proposta de valor e evidência dos projetos

**Status:** Fases 1 e 2 implementadas e validadas; ciclo encerrado
**Data:** 2026-08-28
**Última atualização:** 2026-09-12
**Origem:** crítica pós-implementação do Impeccable
**Superfície:** Hero e projetos em destaque da home
**Escopo:** duas fases sequenciais dentro de uma única especificação

Este documento define o ciclo de evolução da home depois da implementação de CTA, acessibilidade/interações e hierarquia visual. As Fases 1 e 2 foram autorizadas, implementadas e validadas; esta especificação registra o encerramento do ciclo.

## 1. Decisão do ciclo

O ciclo foi dividido em duas fases:

1. **Fase 1 — proposta de valor do Hero:** revisar a mensagem, o contexto de contratação/freelance e a densidade de tecnologias.
2. **Fase 2 — evidência dos projetos:** selecionar e reescrever os três projetos em destaque com base em fatos verificáveis.

As fases pertencem à mesma spec e foram executadas, validadas e registradas separadamente. A Fase 2 foi iniciada após a validação da Fase 1.

## 2. Contexto e problema

A crítica original registrou 24/40 antes da implementação. Desde então:

- o CTA do Hero passou a abrir o WhatsApp com mensagem pré-preenchida;
- a navegação por abas, o filtro, os links de projetos, o CV e o vídeo receberam melhorias de interação e acessibilidade;
- os três destaques foram selecionados e passaram a comunicar melhor contexto, contribuição e evidências;
- os cards secundários ficaram mais compactos, receberam descrições revisadas e o BackScan passou a contar com uma prévia visual das suas duas telas.

O ciclo foi iniciado com dois problemas de maior impacto para conversão, agora tratados:

1. a home ainda não explicita, no primeiro viewport, se a conversa é sobre contratação, freelance ou ambos;
2. os projetos mostram principalmente tecnologias e implementação, mas pouco contexto, contribuição e resultado.

O objetivo é resolver esses pontos sem criar uma nova arquitetura visual, uma seção de Contato ou uma página “Mais Projetos”.

## 3. Objetivo e resultado esperado

Ao chegar à home, o visitante deve conseguir:

- entender que tipo de aplicação ou problema Leonardo resolve;
- reconhecer que pode falar sobre uma oportunidade profissional ou um projeto freelance;
- acionar o WhatsApp sem procurar outro canal;
- identificar rapidamente por que os três projetos em destaque são relevantes;
- diferenciar contribuição e resultado de uma simples lista de tecnologias.

O resultado será considerado bom quando a página continuar visualmente familiar, mas a mensagem e as provas forem mais específicas e úteis para uma decisão de contato.

## 4. Usuários prioritários

### Recrutador ou gestor

Precisa reconhecer especialidade, nível de atuação e evidências de trabalho sem percorrer toda a lista de projetos.

### Potencial cliente freelance

Precisa entender que tipos de sites, aplicações ou integrações podem ser discutidos e qual é o próximo passo para iniciar a conversa.

Ambos serão atendidos no mesmo Hero, sem criar uma bifurcação de CTAs.

## 5. Escopo e restrições

### Incluído

- revisão de copy do Hero;
- explicitação dos contextos de contratação e projeto freelance;
- revisão da quantidade e da seleção de tecnologias exibidas no Hero;
- centralização da copy alterada em `src/constants/index.ts`;
- seleção dos três projetos em destaque com critérios de relevância e evidência;
- revisão de `description` e, se necessário, curadoria de `technologies` em `PROJECTS`, incluindo os projetos secundários quando aplicável;
- validação independente de cada fase;
- commits atômicos separados por fase.

### Não incluído

- seção de Contato e migração futura do CTA para ela;
- página “Mais Projetos”;
- novo formulário, backend ou serviço externo;
- redesign do Hero ou dos cards;
- novo componente visual apenas para exibir métricas;
- expansão automática da interface `Project`;
- limpeza dos achados visuais P2, como numeração, grid decorativo e faixa lateral;
- auditoria formal de conformidade WCAG 2.2 nível AA.

Durante o planejamento, foi definido que, se a Fase 2 não pudesse expressar uma evidência real com os campos atuais, a implementação deveria parar e registrar uma decisão adicional antes de alterar o contrato `Project`. A execução confirmou que os campos atuais eram suficientes.

## 6. Fase 1 — proposta de valor do Hero

### 6.1 Direção de conteúdo

A copy deve responder, em uma leitura curta:

1. quem é Leonardo;
2. que tipo de solução desenvolve;
3. em quais contextos atua;
4. como o visitante pode iniciar uma conversa.

A mensagem deve contemplar contratação e freelance no mesmo bloco, sem transformar o Hero em uma descrição de currículo. O texto deve priorizar aplicações web orientadas a dados, sistemas industriais em tempo real, sites e produtos digitais de alta performance.

Termos técnicos podem aparecer quando ajudarem a provar a especialidade, mas não devem ser a única forma de explicar valor. A copy final será escrita em PT-BR, com no máximo duas frases no parágrafo principal e leitura confortável em telas estreitas.

### 6.2 Requisitos

#### HERO-01 — Mensagem orientada a valor

**Prioridade:** P1

**História:** como visitante da home, quero entender rapidamente que tipo de problema Leonardo resolve antes de ler a lista de tecnologias.

**Critérios:**

1. WHEN o Hero for exibido THEN a mensagem principal SHALL comunicar aplicações web orientadas a dados e pelo menos um dos contextos de atuação já presentes no portfólio.
2. WHEN a copy for lida sem os badges THEN ela SHALL continuar comunicando uma especialidade compreensível.
3. A copy SHALL evitar clichês genéricos como “apaixonado por tecnologia e inovação” sem uma afirmação concreta de valor.
4. O texto SHALL permanecer em PT-BR e não SHALL exigir conhecimento prévio de ferramentas para entender a proposta.

#### HERO-02 — Contextos de contratação e freelance

**Prioridade:** P1

**História:** como recrutador ou potencial cliente, quero saber se o portfólio é relevante para minha intenção de contato.

**Critérios:**

1. WHEN o visitante ler o Hero THEN SHALL encontrar uma indicação natural de que Leonardo considera oportunidades profissionais e projetos freelance.
2. A indicação SHALL permanecer em uma única narrativa, sem criar dois CTAs concorrentes.
3. O texto SHALL manter o WhatsApp como próximo passo principal para os dois contextos.

#### HERO-03 — Fonte única da copy

**Prioridade:** P2

**História:** como mantenedor, quero alterar o conteúdo do Hero em uma fonte centralizada.

**Critérios:**

1. WHEN uma string da proposta de valor for alterada THEN `Hero.tsx` SHALL consumir o valor centralizado em `src/constants/index.ts`.
2. `HERO_TECHS` SHALL continuar sendo a fonte dos sinais técnicos exibidos no Hero.
3. Nenhum telefone, URL ou mensagem do WhatsApp SHALL ser duplicado no componente.

#### HERO-04 — Densidade de sinais técnicos

**Prioridade:** P2

**História:** como visitante, quero usar as tecnologias como confirmação da especialidade, sem receber um inventário antes da proposta de valor.

**Critérios:**

1. O Hero SHALL exibir entre quatro e seis tecnologias selecionadas por relevância para a mensagem final.
2. A lista completa de tecnologias SHALL continuar no About, quando já existir fonte para isso.
3. A ordem das tecnologias SHALL reforçar os contextos apresentados, sem aproximar visualmente ferramentas que representem áreas distintas de forma confusa.
4. Os badges SHALL permanecer não interativos e não SHALL substituir a descrição principal.

#### HERO-05 — Preservação das ações

**Prioridade:** P1

**História:** como visitante que decidiu entrar em contato ou conhecer o trabalho, quero continuar usando os caminhos já validados.

**Critérios:**

1. O CTA SHALL continuar usando o contato `CONTACT.Whatsapp` e a mensagem pré-preenchida atual.
2. O CTA SHALL continuar abrindo o WhatsApp em nova aba com `target="_blank"` e `rel="noopener noreferrer"`.
3. “Ver projetos” SHALL continuar apontando para `#projects`.
4. A Fase 1 não SHALL criar CTA adicional nem alterar a futura decisão sobre a seção de Contato.

#### HERO-06 — Responsividade e legibilidade

**Prioridade:** P1

**Critérios:**

1. WHEN o viewport for mobile THEN títulos, copy, badges e ações SHALL permanecer dentro do container sem overflow acidental.
2. WHEN o tema claro ou escuro estiver ativo THEN texto, foco e CTA SHALL permanecer distinguíveis.
3. A alteração SHALL preservar o ritmo e a hierarquia visual atuais, com ajustes de espaçamento apenas se a nova copy exigir.

### 6.3 Limites de implementação

Os arquivos previstos são `src/constants/index.ts` e `src/components/Hero.tsx`. Não haverá alteração estrutural em `page.tsx`, `Header`, `Footer`, `About` ou `Projects` durante a Fase 1.

## 7. Fase 2 — evidência dos projetos em destaque

### 7.1 Seleção concluída

Os três projetos que possuem `featured: true` na home são:

- Dr. Júlio Cézar;
- Foco em Notícias;
- Raízes do Nordeste API.

Raízes do Nordeste API foi escolhido no lugar do Sistema de Gestão de Estoque por representar um projeto de conclusão de curso mais robusto e com maior escopo. A home continua com exatamente três destaques.

### 7.2 Critérios de seleção

Cada candidato será avaliado por:

1. relevância para contratação ou freelance;
2. clareza sobre a participação de Leonardo;
3. diferenciação em relação aos outros casos;
4. existência de site, repositório, imagem ou outra evidência verificável;
5. capacidade de demonstrar resultado ou benefício;
6. variedade suficiente para não apresentar três casos tecnicamente equivalentes.

A seleção foi confirmada antes da edição dos dados. O valor de `featured` foi alterado com base na relevância e na evidência dos projetos, não apenas para equilibrar visualmente a grade.

### 7.3 Conteúdo a levantar

Antes da implementação, cada projeto selecionado teve respostas para:

| Informação | Pergunta de verificação | Uso na interface |
|---|---|---|
| Contexto | Para quem ou para qual situação o projeto foi feito? | Início da descrição |
| Problema | Que necessidade, limitação ou oportunidade motivou o trabalho? | Justificativa do caso |
| Atuação | O que Leonardo projetou, desenvolveu ou integrou? | Contribuição individual |
| Resultado | Que melhoria ou entrega foi alcançada? | Fechamento da descrição |
| Escala/complexidade | Que volume, integração, restrição ou domínio torna o caso relevante? | Diferenciação |
| Evidência | Qual URL, repositório, imagem ou fato pode ser conferido? | Validação editorial e links existentes |

Nenhuma métrica, cliente, responsabilidade ou resultado será inventado para preencher a tabela. Quando não existir número, será usado apenas um benefício qualitativo confirmado.

### 7.4 Requisitos

#### PROJ-01 — Três destaques representativos

**Prioridade:** P1

**História:** como recrutador ou cliente, quero encontrar três provas relevantes sem percorrer todos os projetos.

**Critérios:**

1. A home SHALL continuar exibindo exatamente três projetos em destaque.
2. A seleção SHALL ser justificada pelos critérios de relevância, evidência e diferenciação.
3. Os demais projetos SHALL continuar na seção “Outros Projetos”, sem criação de nova rota nesta fase.

#### PROJ-02 — Descrição orientada a evidência

**Prioridade:** P1

**História:** como visitante, quero entender por que cada projeto importa e qual foi a contribuição de Leonardo.

**Critérios:**

1. Cada destaque SHALL comunicar contexto, contribuição e resultado ou benefício confirmado.
2. A descrição SHALL priorizar narrativa natural em vez de uma sequência de ferramentas.
3. A descrição SHALL permanecer curta o suficiente para preservar a leitura do card atual.
4. Quando não houver resultado quantitativo, a descrição SHALL usar somente resultado qualitativo verificável.

#### PROJ-03 — Tecnologias como suporte

**Prioridade:** P2

**História:** como visitante técnico, quero reconhecer as ferramentas relevantes sem confundir stack com impacto.

**Critérios:**

1. `technologies` SHALL conter apenas tecnologias relevantes para a evidência apresentada, quando a curadoria for necessária.
2. A lista de tecnologias não SHALL introduzir uma nova superfície visual nem substituir contexto e resultado.
3. O contrato atual de `Project` SHALL ser preservado nesta fase.

#### PROJ-04 — Preservação da experiência existente

**Prioridade:** P1

**Critérios:**

1. A composição atual dos destaques SHALL permanecer horizontal no desktop e empilhada no mobile.
2. O label “Projeto em destaque”, as imagens, os placeholders e os links SHALL continuar disponíveis.
3. Filtros, links externos e estados sem imagem SHALL continuar funcionando.
4. A estrutura visual e os comportamentos dos cards secundários SHALL ser preservados; revisões editoriais e uma prévia visual do BackScan podem ser incluídas sem criar uma nova superfície ou alterar a hierarquia da home.

### 7.5 Limites de implementação

O arquivo previsto para a maior parte da Fase 2 é `src/constants/index.ts`. `FeaturedProject.tsx` só poderá ser alterado se a copy aprovada não couber com legibilidade na composição atual. Não será criado estudo de caso expandido, novo componente ou novo campo obrigatório sem uma decisão adicional aprovada.

## 8. Fluxo e dependências

```text
Definir copy do Hero
        ↓
Implementar Fase 1
        ↓
Validar mensagem, densidade e ações
        ↓
Selecionar os três projetos e coletar evidências
        ↓
Implementar Fase 2 nos dados existentes
        ↓
Validar narrativa, links e composição atual
```

Dependências:

- a Fase 1 depende apenas da copy aprovada e dos dados existentes em `CONTACT` e `HERO_TECHS`;
- a Fase 2 depende da validação da Fase 1 e de informações reais sobre os projetos;
- nenhuma fase depende de backend, nova biblioteca ou seção de Contato.

## 9. Plano de implementação atômica

### Entrega 1 — Fase 1

**Escopo:** `src/constants/index.ts` e `src/components/Hero.tsx`.

**Status:** implementada, validada e registrada.

**Commit:** `ad84f6d feat(hero): clarify value proposition and reprioritize technical signals`

**Verificação:** revisar copy, quantidade de badges, CTA, âncora de projetos, temas e mobile; executar `pnpm lint` e `pnpm build`.

### Entrega 2 — Fase 2

**Escopo:** `src/constants/index.ts` e, somente se necessário, `src/components/Projects/FeaturedProject.tsx`.

**Status:** implementada, validada e registrada.

**Commit principal:** `9074b27 feat(projects): strengthen featured project evidence`

**Verificação:** revisar os três casos, confirmar fatos, testar filtros, links, imagens, temas e mobile/desktop; executar `pnpm lint` e `pnpm build`.

Os commits funcionais foram criados após autorização explícita e permanecem separados por intenção.

### Complementos concluídos após as entregas principais

Após a implementação das duas fases, foram concluídos ajustes editoriais e de apresentação diretamente relacionados à seção de projetos:

- inclusão do BackScan como projeto secundário e curadoria dos seis projetos exibidos na home (`29a0afe`);
- revisão das descrições dos projetos secundários (`fcf3cd2` e `5533ad0`);
- adição da composição visual das telas de configuração e comprovante do BackScan em `public/backscan-screens.webp` (`94fc8c2`).

Esses complementos preservaram o contrato `Project`, os três destaques, a hierarquia existente e os links disponíveis.

## 10. Validação e critérios de aceite

### Fase 1 — aceite

- [x] A copy principal comunica valor sem depender dos badges.
- [x] Contratação e freelance aparecem na mesma narrativa.
- [x] O Hero exibe entre quatro e seis tecnologias relevantes.
- [x] O CTA do WhatsApp mantém URL, mensagem, nova aba e segurança atuais.
- [x] “Ver projetos” continua funcionando.
- [x] Desktop e mobile foram verificados sem overflow; tema claro e tema escuro continuam usando os tokens existentes.
- [x] `pnpm lint` e `pnpm build` passam.

### Fase 2 — aceite

- [x] Os três destaques foram escolhidos por relevância, evidência e diferenciação.
- [x] Cada descrição comunica contexto, contribuição e resultado/benefício confirmado.
- [x] Nenhum dado ou métrica foi inventado.
- [x] O contrato `Project` e a estrutura visual atual permanecem compatíveis.
- [x] Filtros, links, placeholders e imagens continuam funcionando.
- [x] A estrutura visual e os comportamentos dos cards secundários foram preservados; as descrições receberam revisão editorial e o BackScan passou a ter uma prévia visual.
- [x] Desktop, mobile, tema claro e tema escuro permanecem legíveis.
- [x] `pnpm lint` e `pnpm build` passam.

## 11. Riscos e mitigação

- **Copy ainda genérica:** escrever a mensagem a partir dos problemas e contextos reais do portfólio, não de adjetivos profissionais.
- **Hero sobrecarregado:** manter a narrativa curta e limitar os sinais técnicos a quatro–seis.
- **Promessas sem comprovação:** revisar cada afirmação com o usuário antes de editar `PROJECTS`.
- **Descrição longa quebrar o card:** começar pelo conteúdo e usar a composição existente; alterar espaçamento apenas se a validação mostrar necessidade.
- **Mistura de objetivos:** manter Fase 1 e Fase 2 em commits e validações independentes.
- **Expansão acidental de escopo:** não implementar Contato, “Mais Projetos”, WCAG formal ou limpeza P2 nesta spec.

## 12. Rastreabilidade

| Achado da crítica atualizada | Requisito ou fase | Tratamento |
|---|---|---|
| Hero ainda não explicita contratação/freelance | HERO-01, HERO-02 | Resolvido na Fase 1 |
| Badges ainda funcionam como inventário | HERO-04 | Resolvido na Fase 1 |
| Projetos têm pouca evidência de problema, atuação e resultado | PROJ-01, PROJ-02 | Resolvido na Fase 2 |
| Cards secundários têm descrições genéricas e o BackScan não apresenta sua interface | Complemento editorial e visual pós-Fase 2 | Resolvido com revisão de copy e prévia visual |
| Nova página “Mais Projetos” | Fora do escopo | Permanecer no `TODO.md` |
| Skip link, landmarks, abas mobile e auditoria WCAG | Próximo ciclo de acessibilidade | Não misturar nesta spec |
| Numeração, grid decorativo e faixa lateral | P2 visual | Avaliar depois das duas fases |

## 13. Decisões futuras preservadas

Continuam fora deste ciclo:

- seção de Contato com WhatsApp em destaque e alternativas de e-mail/LinkedIn;
- migração futura do CTA para a seção de Contato;
- página “Mais Projetos”;
- meta formal WCAG 2.2 nível AA;
- referências visuais específicas da marca;
- limpeza ampla dos padrões visuais P2.

## 14. Encerramento e próximo ciclo

As Fases 1 e 2 foram implementadas, validadas e registradas em commits atômicos. Os critérios de aceite desta especificação estão concluídos, e os complementos editoriais e visuais posteriores também foram documentados.

O próximo passo recomendado é encerrar esta branch e, após uma nova linha de base com crítica e auditoria direcionadas, iniciar o ciclo de endurecimento de acessibilidade da home. Esse ciclo está descrito na seção “Ciclo 3 — endurecimento de acessibilidade da home” da [spec de melhorias incrementais da home](./2026-08-28-portfolio-ux-improvements-design.md#ciclo-3--endurecimento-de-acessibilidade-da-home).
