# PRD - SEO do Portfolio (Preview de Link + Google)

Status: Parcialmente implementado — fundação técnica concluída; medição pendente
Data: 2026-03-14
Owner: Leonardo Nunes
Projeto: Portfolio Next.js (App Router)
Fonte base: Plano A em TODO.md

Implementação atual: metadata, canonical, Open Graph/Twitter, robots, sitemap e
JSON-LD já estão presentes no código. Permanecem pendentes as validações de
preview social, Lighthouse, Search Console, GA4 e acompanhamento de CTR.

## Contexto e Premissas

- O produto e um portfolio pessoal em pagina unica, com conteudo estatico.
- Stack atual: Next.js 16 + App Router + TypeScript.
- Objetivo principal de negocio: aumentar descoberta organica e melhorar CTR no Google e em compartilhamento social.
- Dependencias externas para medicao: Google Search Console e GA4.
- Restricoes conhecidas:
  - Nao introduzir backend novo.
  - Manter mudancas pequenas e consistentes com o design atual.
  - Configuracao de dominio canonico via variavel de ambiente (NEXT_PUBLIC_SITE_URL).

## 1. Executive Summary

### Problem Statement

O portfolio nao possui uma camada SEO tecnica completa no App Router, o que reduz qualidade de indexacao e prejudica preview do link em redes sociais e mensageria.

### Proposed Solution

Implementar SEO tecnico e on-page em cinco fases: metadata estruturada no Next.js, arquivos robots/sitemap, otimizacao de compartilhamento social, dados estruturados (JSON-LD), performance e monitoramento continuo.

### Success Criteria

- 100% das paginas indexaveis com title e meta description validos.
- Robots e sitemap disponiveis e validos em producao.
- Preview social consistente (titulo, descricao, imagem) em WhatsApp, LinkedIn e X.
- Score Lighthouse SEO >= 95 na home.
- Aumento de CTR organico da home em >= 15% em ate 8 semanas apos publicacao.

## 2. User Experience & Functionality

### User Personas

- Recrutador(a): avalia rapidamente perfil e projetos pelo resultado no Google e pelo preview do link.
- Cliente potencial: recebe link por WhatsApp/LinkedIn e decide clicar com base no preview.
- Dono do portfolio: precisa de base SEO simples, confiavel e facil de manter.

### User Stories

- Como recrutador(a), quero ver um titulo e descricao claros no Google para entender rapidamente o perfil profissional.
- Como cliente potencial, quero visualizar um card social com imagem e contexto do portfolio ao receber o link.
- Como dono do portfolio, quero garantir canonical, robots e sitemap corretos para evitar problemas de indexacao.
- Como dono do portfolio, quero medir impacto de SEO para iterar de forma orientada a dados.

### Acceptance Criteria

- Story 1:
  - Home possui title e description claros, unicos e em PT-BR.
  - Canonical da home aponta para dominio oficial.
- Story 2:
  - Open Graph e Twitter Card configurados com imagem 1200x630.
  - A mesma URL gera preview coerente nas principais plataformas.
- Story 3:
  - Endpoint robots.txt existe e referencia sitemap.
  - Endpoint sitemap.xml existe e lista URL canonica.
- Story 4:
  - Search Console conectado e sitemap enviado.
  - GA4 ativo com eventos basicos de page view.

### Non-Goals

- Criar blog, CMS ou multiplas paginas com SEO programatico.
- Link building externo nesta etapa.
- Criar backend para gerenciamento de SEO.

## 3. AI System Requirements (If Applicable)

Nao aplicavel para runtime do produto.
Uso de IA limitado a planejamento e documentacao de implementacao.

## 4. Technical Specifications

### Architecture Overview

- Camada de metadata centralizada no App Router via Metadata API do Next.js.
- Arquivos de convencao do Next.js para SEO tecnico:
  - src/app/layout.tsx com metadata global.
  - src/app/robots.ts para regras de rastreamento.
  - src/app/sitemap.ts para sitemap dinamico estatico.
- Conteudo principal permanece estatico; sem alteracao de arquitetura de dados.

### Integration Points

- Next.js Metadata API (title, description, openGraph, twitter, alternates/canonical, robots, metadataBase).
- Metadata Routes (robots.ts e sitemap.ts).
- Google Search Console (indexacao e CTR).
- Google Analytics 4 (analise de trafego organico).

### Security & Privacy

- Nenhum dado sensivel novo sera coletado para SEO tecnico.
- GA4 deve seguir politica de privacidade vigente e consentimento quando aplicavel.
- Evitar expor URLs de staging em canonical, robots e sitemap.

## 5. Risks & Roadmap

### Phased Rollout

- MVP (Fase 1 + Fase 2): fundação técnica implementada; validação dos previews sociais ainda pendente.
- v1.1 (Fase 3): ajustes on-page e conteúdo dos projetos; JSON-LD já implementado.
- v1.2 (Fase 4): performance, CWV e acessibilidade.
- v2.0 (Fase 5): operacao continua com medicao mensal e otimização por CTR.

### Technical Risks

- Dominio canonico incorreto por variavel de ambiente ausente.
- Inconsistencia de preview por cache de plataforma social.
- Queda de score por imagem OG pesada.
- Falta de baseline de metricas para provar ganho de SEO.

### Mitigacoes

- Validacao em ambiente de producao apos deploy com checklist.
- Uso de metadataBase e alternates canonical para URL absoluta consistente.
- Compressao e validacao manual da og-image.
- Definicao de baseline em Search Console e Lighthouse antes de alterar copy.

## Escopo Faseado (convertido do Plano A)

### Fase 1 - Fundacao tecnica (implementada)

- Metadata global em src/app/layout.tsx.
- Open Graph e Twitter Card no layout.
- src/app/robots.ts e src/app/sitemap.ts.
- Dominio canonico unico via NEXT_PUBLIC_SITE_URL.

### Fase 2 - Aparencia no compartilhamento (parcialmente implementada)

- Criar public/og-image.webp (1200x630).
- Revisar favicon/apple icon/manifest.
- Revisar title/description da home para CTR.
- Validar preview em LinkedIn, WhatsApp e X.

### Fase 3 - Relevancia para busca

- Revisar H1/H2 e copy com intencao de busca.
- Incluir JSON-LD de Person e WebSite (implementado).
- Melhorar textos de projetos em destaque.
- Melhorar alt text e nomes de imagens.

### Fase 4 - Performance e confiabilidade

- Rodar Lighthouse e corrigir principais gargalos.
- Otimizar imagens principais.
- Validar acessibilidade basica.
- Revalidar Core Web Vitals.

### Fase 5 - Medicao e iteracao

- Configurar Search Console e enviar sitemap.
- Configurar GA4.
- Monitorar indexacao e CTR por 2-4 semanas.
- Executar checklist mensal de SEO tecnico e conteudo.
