---
target: src/app/page.tsx
total_score: 28
p0_count: 0
p1_count: 3
timestamp: 2026-09-14T00-21-28Z
slug: src-app-page-tsx
---
⚠️ DEGRADED: single-context (spawn_agent unavailable in this session)

## Design Health Score

| # | Heurística | Nota | Principal observação |
|---|---|---:|---|
| 1 | Visibilidade do estado do sistema | 3/4 | O filtro anuncia a contagem para leitores de tela, a navegação marca a seção ativa e a galeria mostra projeto/imagem atuais; alguns estados de mídia e hidratação não têm feedback visível. |
| 2 | Correspondência com o mundo real | 3/4 | A proposta e o CTA falam de serviços reais e acionáveis; termos como APIs, microsserviços, WebSockets e “IA” ainda pressupõem conhecimento técnico. |
| 3 | Controle e liberdade do usuário | 3/4 | CTA direto, filtro e galeria com Esc, backdrop, limites e restauração de foco; ainda falta um caminho de contato próprio e há navegação de galeria com muitos eixos para uma interação simples. |
| 4 | Consistência e padrões | 3/4 | Tokens, links, focos e cards seguem um sistema coerente; marcadores numéricos, setas e rótulos em mono repetem uma convenção visual muito rígida. |
| 5 | Prevenção de erros | 2/4 | A galeria bloqueia índices inválidos e o filtro valida valores, mas o limite de seis projetos só vale para “Todos”, criando uma regra inesperada entre filtros. |
| 6 | Reconhecimento em vez de memorização | 3/4 | Hero, CTA, badges, títulos e alt texts orientam bem; o significado das setas verticais da galeria e alguns termos técnicos não é explicado visualmente. |
| 7 | Flexibilidade e eficiência | 3/4 | Há filtro, abas, navegação por teclado na galeria e swipe no mobile; a experiência por abas não implementa o modelo de teclado esperado para `role="tab"`. |
| 8 | Estética e design minimalista | 3/4 | Paleta navy/âmbar, tipografia e screenshots dão identidade; glows, bordas, cantos arredondados e camadas de cards aparecem com frequência suficiente para pesar. |
| 9 | Ajuda para reconhecer e recuperar erros | 3/4 | A galeria possui estado explícito para imagem quebrada; vídeo e links externos não oferecem um feedback equivalente caso falhem. |
| 10 | Ajuda e documentação | 2/4 | Para uma home de portfólio a necessidade é baixa, mas instruções da galeria ficam apenas para leitores de tela e não há orientação visível para termos ou filtros. |
| **Total** |  | **28/40** | **Bom, com pendências claras de acessibilidade, densidade e arquitetura da home.** |

## Anti-Patterns Verdict

**Avaliação LLM:** a interface não parece imediatamente gerada por IA. O uso de navy/âmbar, imagens reais dos projetos, copy específica e CTA para WhatsApp dá uma direção própria. Ainda há sinais de um vocabulário de template: marcadores `01./02./03.`, pequenos rótulos uppercase com tracking em várias áreas, grids de cards com borda/canto arredondado e glows/hover scale decorativos. A recomendação é uma limpeza seletiva, não um redesign.

**Varredura determinística:** `node /home/leo/.agents/skills/impeccable/scripts/detect.mjs --json src/app/page.tsx` retornou `[]`. Isso é esperado porque `page.tsx` apenas compõe as seções e não contém a maior parte do markup visual.

Na página renderizada, o detector de navegador encontrou 11 grupos, totalizando:

- 6 ocorrências de baixo contraste no tema claro: `#b45309` sobre `#e3e9f2`, proporção 4.1:1, abaixo dos 4.5:1 exigidos para texto normal. Elas estão no cumprimento do hero, no kicker do About, no vínculo da experiência e nos três rótulos “Projeto em destaque”.
- 1 linha longa no painel de experiência, com aproximadamente 104 caracteres por linha.
- 1 combinação de borda de 1px com sombra de 60px no painel de experiência.
- 1 estrutura de card dentro de card no frame de imagem de projeto em destaque.
- 1 alerta de texto todo em caixa alta no rodapé, que é um falso positivo aceitável por se tratar de uma frase curta de encerramento, não de prosa longa.
- 7 ocorrências agrupadas de `image-hover-transform`, correspondentes ao zoom intencional das imagens clicáveis da galeria; também são falsos positivos ou, no máximo, um ponto de refinamento.

A injeção do detector funcionou numa sessão temporária marcada como `[Human]`, e os overlays confirmaram visualmente os achados do tema claro. Não deixei uma aba persistente aberta para o usuário.

## Overall Impression

A home está mais clara, específica e convincente após os ciclos anteriores. O hero conduz para uma ação real e os projetos agora têm prova visual. A maior oportunidade é transformar essa boa base em uma experiência mais robusta: corrigir o contraste do tema claro, completar a semântica de abas e tornar explícita a regra de quais projetos pertencem à home.

## What's Working

- O hero comunica serviços em linguagem direta e conecta o CTA primário ao WhatsApp, enquanto “Ver projetos” mantém uma segunda rota de descoberta sem competir com a conversão.
- A hierarquia entre projetos em destaque e seis projetos secundários funciona bem no desktop e no mobile; screenshots reais, alt text e a galeria aumentam a credibilidade do trabalho.
- A base de acessibilidade evoluiu: skip link, landmarks principais, focos visíveis, `aria-live` para contagens da galeria/filtro e estado de erro para imagem já estão presentes.

## Priority Issues

### [P1] Contraste do tema claro abaixo de WCAG AA

**Por que importa:** seis rótulos pequenos em âmbar ficam em 4.1:1 no tema claro. Pessoas com baixa visão terão dificuldade, e isso impede que a interface alcance a meta futura de WCAG 2.2 AA.

**Correção:** ajustar o token `--accent`/`--primary` do tema claro para um âmbar mais escuro, preservando a identidade e validando texto, links, badges, bordas e estados de foco nos dois temas. O tema escuro não deve ser alterado sem necessidade.

**Comando sugerido:** `$impeccable audit`

### [P1] Modelo de teclado das abas incompleto

**Por que importa:** `Experience.tsx` declara `role="tablist"` e `role="tab"`, mas não define `tabIndex` roving, `aria-orientation` nem navegação por setas/Home/End. Sam precisa usar Tab em cada empresa e não recebe o comportamento esperado de uma tablist ARIA.

**Correção:** implementar o padrão de tabs do WAI-ARIA com foco roving e setas no eixo correto, mantendo a rolagem horizontal no mobile; ou remover os papéis ARIA e tratar as opções como botões/links comuns se esse modelo for considerado mais simples.

**Comando sugerido:** `$impeccable audit`

### [P1] Filtro quebra o limite de seis projetos da home

**Por que importa:** a regra em `Projects.tsx` limita a lista quando o filtro é “Todos”, mas `Projetos Pessoais` e `Freelas` exibem todos os itens daquele tipo. Isso torna o contrato da home imprevisível e antecipa projetos que deveriam ser reunidos pela futura página “Mais Projetos”.

**Correção:** decidir explicitamente se a home sempre mostra no máximo seis secundários ou se os filtros são uma exceção intencional. Pela arquitetura já aprovada, a recomendação é manter o limite na home e deixar a listagem completa para a página futura.

**Comando sugerido:** `$impeccable shape`

### [P2] Painel de experiências exige leitura em bloco largo

**Por que importa:** o detector mediu aproximadamente 104 caracteres por linha na descrição da experiência, e o painel reúne descrição, seis responsabilidades e tecnologias. Em desktop isso reduz o ritmo de leitura e faz a seção parecer mais pesada que o restante.

**Correção:** limitar o texto corrido a aproximadamente 65–75ch, ajustar o espaçamento do painel e revisar se cada responsabilidade precisa aparecer no primeiro estado sem reduzir a prova de senioridade.

**Comando sugerido:** `$impeccable layout`

### [P2] Gramática visual repetida demais

**Por que importa:** a combinação de números de seção, kickers uppercase, mono, bordas arredondadas, glows e zoom em imagens aparece em várias partes. Isoladamente funciona; repetida, faz a página parecer mais próxima de um template e reduz a força dos momentos realmente importantes.

**Correção:** manter o marcador ou kicker onde ele tiver função de orientação, mas retirar pelo menos uma camada decorativa de cada seção; deixar a imagem do projeto estável ou reservar o movimento para o botão de abrir a galeria quando a intenção for conversão/credibilidade.

**Comando sugerido:** `$impeccable quieter`

## Persona Red Flags

### Jordan — visitante de primeira vez

- O CTA e a frase de serviços são claros nos primeiros segundos.
- “APIs”, “microsserviços”, “WebSockets”, “IA” e a lista extensa de tecnologias podem fazer uma pessoa não técnica entender o que Leonardo entrega, mas não para quem é a solução nem qual problema será resolvido.
- O caminho de contato funciona, porém depende exclusivamente de abrir o WhatsApp; ainda não existe a seção de contato planejada para oferecer contexto e alternativas.

### Sam — usuário dependente de acessibilidade

- O skip link, headings, nomes acessíveis e focos visíveis são bons pontos de partida.
- A tablist de experiências usa papéis ARIA sem o teclado de tabs correspondente; a navegação por empresas fica mais trabalhosa.
- No tema claro, os seis textos âmbar detectados ficam abaixo de 4.5:1. O zoom das imagens é intencional e possui botão acessível, mas a orientação dos eixos da galeria fica apenas em texto para leitor de tela.

### Casey — usuário distraído no celular

- O CTA do WhatsApp tem área de toque adequada e aparece cedo; a galeria usa contain e não corta screenshots.
- O hero e os cards preservam boa legibilidade, mas a página fica longa quando um filtro mostra todos os projetos do tipo. Isso empurra os links importantes para baixo e aumenta a carga de rolagem.
- O filtro e os controles verticais da galeria exigem que Casey interprete ícones; rótulos visíveis ou uma pista curta ajudariam sem adicionar uma nova seção.

## Minor Observations

- O `main` focável e os JSON-LD de `Person`/`WebSite` em `page.tsx` são bons fundamentos para navegação e SEO.
- A contagem de resultados do filtro existe para tecnologia assistiva, mas não é visível; pode ser útil mostrar uma confirmação curta quando o filtro muda, caso a decisão de manter filtros fora do limite seja tomada.
- O fallback da URL canônica ainda aponta para `dev-leonunes-portfolio.vercel.app`; confirme que `NEXT_PUBLIC_SITE_URL` está configurada no deploy oficial para evitar sinalizar o domínio de staging.
- A inspeção visual pelo `next dev` em Chrome headless não conseguiu hidratar componentes interativos por causa do HMR da sessão; a captura SSR e a injeção do detector funcionaram. Isso não foi tratado como defeito do produto sem reprodução em um navegador normal.

## Questions to Consider

- E se a home mantivesse sempre seis projetos secundários e o filtro mostrasse apenas uma seleção dentro desses seis, reservando a descoberta completa para “Mais Projetos”?
- O tema claro precisa carregar o mesmo âmbar dos rótulos ou pode usar uma variação mais escura, mantendo o âmbar vivo como destaque do tema escuro?
- A tablist de experiências realmente precisa dos papéis ARIA, ou uma navegação de botões simples seria mais honesta e fácil de manter?
