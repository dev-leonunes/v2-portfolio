# Plano - Secao de Contato (Portfolio)

Status: Planejamento futuro — implementação pendente
Data: 2026-03-31
Owner: Leonardo Nunes
Escopo: Planejamento (sem implementacao)

## 1. Objetivo

Criar uma secao de Contato clara, rapida e confiavel para transformar visitantes em conversas reais (freela, vagas e networking), mantendo consistencia visual com o portfolio atual.

## 2. Contexto Atual

- A home atual possui: Hero, Sobre, Experiencias e Projetos.
- O rodape ja exibe icones sociais com dados vindos de CONTACT em src/constants/index.ts.
- O menu de navegacao atual nao possui ancora para contato.
- O projeto usa Next.js App Router, Tailwind v4, animações CSS-first e componentes UI internos.

## 3. Escopo e Nao Escopo

### Escopo

- Adicionar uma nova secao de Contato na home.
- Reutilizar dados existentes de CONTACT como fonte primaria.
- Incluir CTA principal para WhatsApp e alternativa por Email.
- Exibir canais secundarios (LinkedIn, GitHub, Discord).
- Garantir acessibilidade, responsividade e consistencia de tema light/dark.

### Nao Escopo

- Nao criar backend de formulario.
- Nao implementar envio por API/SMTP nesta fase.
- Nao alterar arquitetura global de layout.

## 4. Direcao de UX/UI

### Intencao da secao

- Reduzir friccao para iniciar contato em 1 clique.
- Deixar claro o tipo de demanda esperada (freelas, projetos, oportunidades).
- Reforcar confianca com microcopy objetiva e visual consistente com o portfolio.

### Direcao visual exploratoria (referencia concreta pendente)

A referência visual específica da marca ainda não foi definida; os itens abaixo
representam uma direção exploratória para a futura seção.

- Estrutura em dois paineis (split layout): bloco esquerdo institucional + bloco direito de acao.
- Container principal com visual de vidro escuro (glass-like), borda suave e cantos arredondados.
- Fundo com atmosfera de gradiente difuso (aurora), reforcando profundidade sem poluir leitura.
- Contraste alto no painel de formulario: campos minimalistas com foco em legibilidade.
- CTA com cor de destaque (aqua/ciano na referencia), funcionando como ponto focal unico.
- Tipografia direta: titulo forte, texto curto de apoio e formulario com rotulos simples.

### Traducao da referencia para a identidade atual do portfolio

- Manter o layout em dois blocos no desktop e empilhar no mobile.
- Reaproveitar tokens de cor ja existentes (accent, background, border), sem introduzir paleta paralela.
- Preservar clima visual com camada de brilho/gradiente sutil, porem alinhada ao tema atual light/dark.
- Priorizar CTA principal unico e CTA secundario discreto para nao competir visualmente.
- Usar o mesmo padrao de raio, sombra e transicoes ja adotado nas demais secoes.
- Evitar formulario completo nesta fase inicial: foco em contato rapido por canais existentes.

### Hierarquia visual proposta

1. Titulo da secao (ex.: Vamos conversar)
2. Subtitulo curto com proposta de valor
3. CTA primario (WhatsApp)
4. CTA secundario (Email)
5. Lista de canais secundarios com icones
6. Mensagem de tempo medio de resposta

### Diretrizes de interacao

- Estados claros: hover, focus-visible, active e disabled visualmente distintos.
- Alvos de toque com area minima confortavel (>= 44px).
- Animacoes curtas (150-300ms), sem animar propriedades que causem reflow.
- Respeitar prefers-reduced-motion.

### Diretrizes de acessibilidade

- Contraste minimo AA para textos e CTAs.
- Labels acessiveis para botoes icon-only.
- Ordem de tab logica e feedback de foco visivel.
- Texto dos links de contato explicito para leitores de tela.

## 5. Estrategia de Conteudo

### Copy base (rascunho)

- Titulo: Vamos conversar
- Subtitulo: Aberto para projetos freelance, colaboracoes e oportunidades em desenvolvimento web.
- CTA primario: Falar no WhatsApp
- CTA secundario: Enviar email
- Apoio: Resposta media em ate 24h em dias uteis.

### Tom de voz

- Direto, profissional e humano.
- Curto e orientado a acao.
- PT-BR, consistente com as demais secoes.

## 6. Estrategia Tecnica (para implementacao futura)

### Fontes de dados

- Reaproveitar CONTACT de src/constants/index.ts para URLs e icones.
- Opcional: adicionar metadados de exibicao (ex.: label amigavel e prioridade do canal) em constants.

### Componentizacao sugerida

- src/components/Contact.tsx (secao principal)
- Reuso do wrapper `Reveal` existente em src/components/animations/index.tsx
- Reuso de ui/button para CTAs

### Integracoes de navegacao

- Inserir ancora #contact na secao.
- Adicionar item Contato no NAV_ITEMS do Header.
- Inserir a secao no fluxo da home apos Projetos (ou antes do Footer, conforme validacao visual).

## 7. Plano de Execucao por Fases

### Fase 1 - Definicao

- Validar copy final da secao.
- Definir ordem dos canais e CTA primario.
- Definir posicao final da secao na home.

### Fase 2 - Prototipo visual

- Estruturar layout mobile-first.
- Validar espacos, contraste e estados interativos.
- Revisar consistencia light/dark.
- Validar versao split (desktop) e versao empilhada (mobile) com base na referencia.
- Testar variacao de fundo atmosferico sutil sem comprometer performance/leitura.

### Fase 3 - Implementacao

- Criar componente da secao.
- Integrar ao page.tsx e ao Header (ancora).
- Reusar dados de constants sem duplicacao.

### Fase 4 - QA

- Teste de responsividade (mobile + desktop).
- Teste de acessibilidade basica via teclado.
- Validar links externos com target e rel seguros.
- Revisar comportamento com reduced motion.

## 8. Criterios de Aceite

- Secao de contato visivel e coerente com design system atual.
- CTA principal abre canal correto com 1 clique.
- Todos os links de contato funcionam e sao acessiveis por teclado.
- Menu navega para #contact corretamente.
- Sem regressao visual nas secoes existentes.
- Composicao visual final preserva os principios da referencia: split layout, destaque claro de CTA e contraste elevado no bloco de acao.

## 9. Riscos e Mitigacoes

- Risco: secao competir com o Footer e gerar redundancia.
  - Mitigacao: diferenciar papel da secao (acao direta) e do footer (links institucionais).

- Risco: excesso de CTAs reduzir clareza.
  - Mitigacao: 1 CTA primario, 1 secundario e demais como suporte.

- Risco: inconsistencias no tema light/dark.
  - Mitigacao: usar tokens existentes em globals.css, sem hardcode de cores.

## 10. Checklist de Prontidao para iniciar implementacao

- Copy final aprovada.
- Prioridade de canais definida.
- Posicao da secao na home definida.
- Regras de animacao/acessibilidade aprovadas.
- Criterios de aceite alinhados.
