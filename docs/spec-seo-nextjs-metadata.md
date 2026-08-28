# SPEC - Implementacao SEO com Next.js Metadata API

Status: Núcleo técnico implementado — validação operacional pendente
Data: 2026-03-14
Baseado em: docs/prd-seo-portfolio.md
Biblioteca principal: Next.js Metadata API + Metadata Routes (App Router)

O núcleo desta especificação foi implementado em `src/app/layout.tsx`,
`src/app/page.tsx`, `src/app/robots.ts`, `src/app/sitemap.ts` e
`src/lib/site-url.ts`. A validação de previews sociais, Lighthouse e serviços
externos de medição ainda está pendente.

## 1. Objetivo da Implementacao

Implementar a camada SEO tecnica do portfolio para melhorar:
- Aparencia do link ao compartilhar.
- Qualidade dos snippets em pesquisa Google.
- Consistencia de rastreamento e indexacao.

## 2. Biblioteca correta e justificativa

### Biblioteca escolhida

- Next.js Metadata API (objeto metadata no App Router).
- Metadata Routes do Next.js (robots.ts e sitemap.ts).

### Por que esta e a opcao correta

- E nativa do Next.js App Router (sem dependencia externa).
- Gera tags SEO de forma tipada e centralizada.
- Reduz risco de inconsistencias entre title/og/twitter/canonical.
- Suporta convencoes de arquivo para robots e sitemap no proprio framework.

## 3. Referencias tecnicas (fonte oficial)

- Definicao de metadata no App Router.
- Uso de metadataBase para resolver URLs absolutas.
- Uso de alternates canonical.
- Estrutura de robots via MetadataRoute.Robots.
- Estrutura de sitemap via MetadataRoute.Sitemap.

Observacao: esta spec segue as convencoes atuais do Next.js 16 em App Router.

## 4. Escopo tecnico

### Em escopo

- Configurar metadata global no layout raiz.
- Definir title/description/keywords/robots/canonical.
- Definir openGraph e twitter card com imagem OG.
- Criar src/app/robots.ts.
- Criar src/app/sitemap.ts.
- Criar JSON-LD de Person e WebSite na home.
- Definir origem canonica por variavel de ambiente.

### Fora de escopo

- SEO programatico para multiplas paginas.
- Integracao de CMS.
- Automacao de imagem OG dinamica nesta iteracao.

## 5. Requisitos funcionais (RF)

- RF-001: O sistema deve expor metadata global valida para a home.
- RF-002: O sistema deve gerar canonical absoluto para a URL oficial.
- RF-003: O sistema deve expor openGraph e twitter metadata com imagem valida.
- RF-004: O sistema deve expor robots.txt com regra allow e referencia ao sitemap.
- RF-005: O sistema deve expor sitemap.xml com URL da home e metadados basicos.
- RF-006: O sistema deve incluir JSON-LD de Person e WebSite na home.
- RF-007: O sistema deve permitir troca de dominio canonico via NEXT_PUBLIC_SITE_URL.

## 6. Requisitos nao funcionais (RNF)

- RNF-001: Nao adicionar novas dependencias para SEO tecnico.
- RNF-002: Build deve continuar sem erros de TypeScript e lint.
- RNF-003: Conteudo SEO deve estar em PT-BR e alinhado ao posicionamento profissional.
- RNF-004: Mudancas devem preservar tema e layout existentes.

## 7. Design tecnico por arquivo

### 7.1 src/app/layout.tsx

Adicionar export de metadata tipado:
- metadataBase usando NEXT_PUBLIC_SITE_URL com fallback seguro.
- title com template (ex.: %s | Leonardo Nunes).
- description principal.
- keywords.
- alternates.canonical = '/'.
- robots index/follow.
- openGraph com title, description, url, siteName, locale, type, images.
- twitter com card summary_large_image, title, description, images.

### 7.2 src/app/robots.ts

Criar rota de metadata:
- Export default function robots(): MetadataRoute.Robots.
- rules com allow '/'.
- sitemap apontando para {siteUrl}/sitemap.xml.
- host apontando para siteUrl.

### 7.3 src/app/sitemap.ts

Criar rota de metadata:
- Export default function sitemap(): MetadataRoute.Sitemap.
- Entrada da home com:
  - url: siteUrl
  - changeFrequency: weekly
  - priority: 1.0
  - lastModified: new Date()

### 7.4 src/app/page.tsx

Adicionar metadata especifica da home (opcional se necessario para CTR) e JSON-LD:
- Person: nome, url, sameAs (GitHub/LinkedIn), jobTitle.
- WebSite: nome, url, inLanguage.

Implementacao sugerida:
- Inserir script JSON-LD com type application/ld+json no componente da pagina.

### 7.5 public/

- Adicionar ou validar public/og-image.webp em 1200x630.
- Validar favicon e icones ja existentes.

## 8. Plano de implementacao (ordem)

1. Criar util local de siteUrl (no layout e rotas metadata).
2. Implementar metadata global em layout.
3. Implementar src/app/robots.ts.
4. Implementar src/app/sitemap.ts.
5. Implementar JSON-LD na home.
6. Validar image OG e referencias.
7. Rodar lint e build.
8. Validar preview social e robots/sitemap em producao.

## 9. Criterios de aceitacao (testes)

- CA-001: View source da home contem title e meta description esperados.
- CA-002: View source contem tags og:title, og:description e og:image absolutas.
- CA-003: View source contem tags twitter card correspondentes.
- CA-004: /robots.txt responde 200 e inclui sitemap.
- CA-005: /sitemap.xml responde 200 e inclui URL canonica.
- CA-006: JSON-LD valida no Rich Results Test sem erro critico.
- CA-007: Lighthouse SEO >= 95 apos deploy.

## 10. Estrategia de validacao

- Local:
  - pnpm run lint
  - pnpm run build
  - Verificar HTML renderizado da home
- Producao:
  - Testar preview em LinkedIn Post Inspector
  - Testar preview em X Card Validator
  - Teste pratico via WhatsApp
  - Enviar sitemap no Search Console

## 11. Riscos e mitigacoes

- Risco: NEXT_PUBLIC_SITE_URL ausente ou invalida.
  - Mitigacao: fallback para dominio oficial e log de validacao.
- Risco: imagem OG pesada causando lentidao.
  - Mitigacao: compressao e limite de tamanho.
- Risco: cache de scrapers sociais mantendo preview antigo.
  - Mitigacao: re-scrape apos deploy.

## 12. Entregaveis

- src/app/layout.tsx atualizado com metadata.
- novo src/app/robots.ts.
- novo src/app/sitemap.ts.
- home com JSON-LD.
- public/og-image.webp dimensionada em 1200x630.
- evidencias de validacao (Lighthouse + preview + Search Console).
