Lista de tarefas / Proximas implementações

[x] Criar efeitos de movimento no site;
[x] Criar logo e mudar icone do site;
[x] colocar animação em "outros projetos" por linha e não na seção inteira;
[x] Bug do indicador de seção não funcionar em projetos;
[x] Criar design de placeholder para projetos sem imagem;
[x] Melhorar visual de cores da light mode;
[x] Melhorar SEO e detalhes que aparecem quando o link é enviado;
[x] Ajustar dimensão da og-image para 1200x630 e atualizar metadados sociais;
[x] Investigar e redefinir a mídia da seção Sobre no mobile: no Android há travamento e cor distorcida no primeiro paint; no iOS aparece primeiro só a camada colorida/overlay e o vídeo demora 1-2s para surgir. Avaliar trocar `devleo-about.mp4` por imagem estática, GIF ou formato mais otimizado, além de revisar overlay e estratégia de carregamento.
[x] Refatorar links em OtherProject para reutilizar ProjectLinks e reduzir duplicação;
[x] Melhorar posição do botão de subir a tela no final da página;
[x] Otimizar imagens do projeto, tinyfy + conversão para '.webp';
[x] Planejamento funcional e visual documentado em docs/plan-secao-contato.md;
[x] Implementar melhorias incrementais da home: CTA para WhatsApp, acessibilidade/interações e hierarquia dos projetos;
[x] Melhorar a interação com as fotos dos projetos (Ciclo 5 concluído; ver `docs/spec/2026-09-13-ciclo-5-galeria-imagens-projetos-design.md`);
[x] Revisar a proposta de valor do hero para explicitar contratação, freelance e próximo passo (Fase 1 concluída; ver `docs/spec/2026-08-28-refinamento-hero-e-projetos-design.md`);
[x] Selecionar os três projetos de maior valor e registrar problema, papel, resultado e escala antes de revisar suas descrições (Fase 2 concluída; ver `docs/spec/2026-08-28-refinamento-hero-e-projetos-design.md`);
[x] Revisar as descrições dos projetos secundários e adicionar a prévia visual composta do BackScan;
[x] Executar o Ciclo 3 de acessibilidade na home: skip link, landmarks, pista visual das abas mobile, revisão de rótulos acessíveis (sem rótulos visíveis no footer) e tema claro;
[x] Avaliar os achados visuais P2 remanescentes sem alterar a direção "padrão atual refinado" (Ciclo 4 concluído; ver `docs/spec/2026-09-13-ciclo-4-limpeza-visual-seletiva-design.md`);
[] Concluir o Ciclo 6 de curadoria dos projetos e acessibilidade crítica (C6-T01, C6-T02 e C6-T03 implementadas e validadas; ver `docs/spec/2026-09-13-ciclo-6-projetos-acessibilidade-design.md`);
[] Criar seção de Contato e migrar o CTA do hero para essa seção;
[] Criar página "Mais Projetos" para reunir todos os projetos fora da home;
[] Adotar WCAG 2.2 nível AA como meta formal em uma etapa posterior;
[] Definir copy final da seção de Contato (titulo, subtitulo, CTA principal e microcopy);
[] Definir fontes de dados (reuso de CONTACT e campos adicionais necessarios);
[] Validar prototipo em mobile e desktop antes da implementacao;
[] Implementar secao e incluir ancora no menu de navegacao;

---

Plano de contexto visual

[x] Inicializar o contexto estrategico do portfolio com `$impeccable init`, criando `PRODUCT.md` e a configuracao do live mode;
[x] Executar `$impeccable document` para gerar `DESIGN.md` e `.impeccable/design.json` a partir dos tokens e componentes existentes;
[] Definir e registrar as referencias visuais da marca no `PRODUCT.md`;

---

Plano SEO

Fase 1 - Validacao e mensuracao
[] Revalidar Core Web Vitals da home apos ajustes;
[] Configurar Google Search Console e enviar sitemap.xml;
[] Monitorar indexacao por 2-4 semanas e ajustar title/description por CTR;

Fase 2 - CTR e relevancia
[] Revisar title e description da home para aumentar CTR no Google;
[] Revisar H1/H2 e copy da home com palavras-chave alvo (desenvolvedor full stack, freelancer, React/Node);
[] Revisar textos dos projetos em destaque com foco em intencao de busca;

Fase 3 - Marca e operacao continua
[] Garantir favicon, apple-touch-icon e manifest consistentes para marca;
[] Configurar GA4 para acompanhar paginas mais acessadas e origem organica;
[] Criar checklist mensal de SEO tecnico e conteudo;
