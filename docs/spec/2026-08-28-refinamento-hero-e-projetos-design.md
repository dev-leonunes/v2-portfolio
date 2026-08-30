# Refinamento da proposta de valor e evidência dos projetos

**Status:** design aprovado em conversa; documento aguardando revisão final
**Data:** 2026-08-28
**Origem:** crítica pós-implementação do Impeccable
**Superfície:** Hero e projetos em destaque da home
**Escopo:** duas fases sequenciais dentro de uma única especificação

Este documento define o próximo ciclo de evolução da home depois da implementação de CTA, acessibilidade/interações e hierarquia visual. Ele não autoriza implementação por si só: qualquer alteração de código dependerá de autorização explícita após a revisão desta spec.

## 1. Decisão do ciclo

O próximo ciclo será dividido em duas fases:

1. **Fase 1 — proposta de valor do Hero:** revisar a mensagem, o contexto de contratação/freelance e a densidade de tecnologias.
2. **Fase 2 — evidência dos projetos:** selecionar e reescrever os três projetos em destaque com base em fatos verificáveis.

As fases pertencem à mesma spec, mas serão executadas, validadas e commitadas separadamente. A Fase 2 só começa depois da validação da Fase 1.

## 2. Contexto e problema

A crítica original registrou 24/40 antes da implementação. Desde então:

- o CTA do Hero passou a abrir o WhatsApp com mensagem pré-preenchida;
- a navegação por abas, o filtro, os links de projetos, o CV e o vídeo receberam melhorias de interação e acessibilidade;
- os três destaques foram preservados e os cards secundários ficaram mais compactos.

Restam dois problemas de maior impacto para conversão:

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
- revisão de `description` e, se necessário, curadoria de `technologies` em `PROJECTS`;
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

Se a Fase 2 não puder expressar uma evidência real com os campos atuais, a implementação deverá parar e registrar uma decisão adicional antes de alterar o contrato `Project`.

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

### 7.1 Candidatos atuais

Os três projetos que atualmente possuem `featured: true` são os candidatos iniciais:

- Dr. Júlio Cézar;
- Foco em Notícias;
- Sistema de Gestão de Estoque.

Eles só serão substituídos se a coleta de evidências mostrar que outro projeto representa melhor a oportunidade desejada. A home continuará com exatamente três destaques.

### 7.2 Critérios de seleção

Cada candidato será avaliado por:

1. relevância para contratação ou freelance;
2. clareza sobre a participação de Leonardo;
3. diferenciação em relação aos outros casos;
4. existência de site, repositório, imagem ou outra evidência verificável;
5. capacidade de demonstrar resultado ou benefício;
6. variedade suficiente para não apresentar três casos tecnicamente equivalentes.

A seleção será confirmada antes da edição dos dados. O valor de `featured` não será alterado apenas para equilibrar visualmente a grade.

### 7.3 Conteúdo a levantar

Antes da implementação, cada projeto selecionado deverá ter respostas para:

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
4. Cards secundários SHALL permanecer inalterados, salvo correção mínima diretamente causada por uma descrição mais longa.

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

**Commit sugerido:** `feat(hero): clarify portfolio value proposition`

**Verificação:** revisar copy, quantidade de badges, CTA, âncora de projetos, temas e mobile; executar `pnpm lint` e `pnpm build`.

### Entrega 2 — Fase 2

**Escopo:** `src/constants/index.ts` e, somente se necessário, `src/components/Projects/FeaturedProject.tsx`.

**Commit sugerido:** `content(projects): strengthen featured project evidence`

**Verificação:** revisar os três casos, confirmar fatos, testar filtros, links, imagens, temas e mobile/desktop; executar `pnpm lint` e `pnpm build`.

Os commits são apenas uma divisão planejada. Nenhum commit será criado enquanto a implementação não for autorizada.

## 10. Validação e critérios de aceite

### Fase 1 — aceite

- [ ] A copy principal comunica valor sem depender dos badges.
- [ ] Contratação e freelance aparecem na mesma narrativa.
- [ ] O Hero exibe entre quatro e seis tecnologias relevantes.
- [ ] O CTA do WhatsApp mantém URL, mensagem, nova aba e segurança atuais.
- [ ] “Ver projetos” continua funcionando.
- [ ] Desktop, mobile, tema claro e tema escuro permanecem legíveis.
- [ ] `pnpm lint` e `pnpm build` passam.

### Fase 2 — aceite

- [ ] Os três destaques foram escolhidos por relevância, evidência e diferenciação.
- [ ] Cada descrição comunica contexto, contribuição e resultado/benefício confirmado.
- [ ] Nenhum dado ou métrica foi inventado.
- [ ] O contrato `Project` e a estrutura visual atual permanecem compatíveis.
- [ ] Filtros, links, placeholders e imagens continuam funcionando.
- [ ] Cards secundários não foram alterados sem necessidade.
- [ ] Desktop, mobile, tema claro e tema escuro permanecem legíveis.
- [ ] `pnpm lint` e `pnpm build` passam.

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
| Hero ainda não explicita contratação/freelance | HERO-01, HERO-02 | Resolver na Fase 1 |
| Badges ainda funcionam como inventário | HERO-04 | Resolver na Fase 1 |
| Projetos têm pouca evidência de problema, atuação e resultado | PROJ-01, PROJ-02 | Resolver na Fase 2 |
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

## 14. Próximo passo

Após a revisão deste documento, a execução deverá começar pela Fase 1. A Fase 2 só deverá ser planejada em tarefas executáveis depois que a Fase 1 estiver validada e as evidências dos três projetos tiverem sido confirmadas.
