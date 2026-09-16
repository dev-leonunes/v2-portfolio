export type ProjectType = "personal" | "freelance";

export interface ProjectImage {
  src: string;
  alt: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  images?: ProjectImage[];
  technologies: string[];
  type: ProjectType;
  featured: boolean;
  githubUrl?: string;
  liveUrl?: string;
}

export const HOME_SECONDARY_PROJECT_IDS = [
  "backscan",
  "gestao-estoque-app",
  "fibras-maravigirl",
  "vem-ver-noticias",
  "the-legend-of-zelda",
  "sistema-dindin",
] as const;

export const PROJECTS: Project[] = [
  {
    id: "site-dr-julio",
    title: "Dr. Júlio Cézar",
    description:
      "Landing page criada para ampliar a presença local de um psiquiatra no Google, facilitar o agendamento e reunir seus links em uma página de bio. Desenvolvi sozinho o design, frontend, SEO, deploy e manutenção; os dados compartilhados do Search Console registraram 2,06 mil impressões e 65 cliques no período analisado.",
    images: [
      {
        src: "/dr-julio-cezar-site.webp",
        alt: "Página inicial do site profissional do Dr. Júlio Cézar com seções de apresentação e especialidades",
      },
    ],
    technologies: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Shadcn UI",
      "Vite",
      "SEO",
    ],
    type: "freelance",
    featured: true,
    liveUrl: "https://drjuliocezar.com.br",
  },
  {
    id: "foco-em-noticias",
    title: "Foco em Notícias",
    description:
      "Portal de notícias entregue de ponta a ponta em WordPress, incluindo domínio, DNS, hospedagem, conteúdo inicial e banners de publicidade. Também cuidei da estrutura de SEO, segurança, backups, cache e otimização de imagens, com foco em melhorar o carregamento do portal.",
    images: [
      {
        src: "/foco-em-noticias-homepage.webp",
        alt: "Página inicial do portal Foco em Notícias com destaques editoriais e estrutura otimizada para SEO",
      },
    ],
    technologies: ["WordPress", "Elementor", "SEO"],
    type: "freelance",
    featured: true,
    liveUrl: "https://focoemnoticias.online/",
  },
  {
    id: "gestao-estoque-app",
    title: "Sistema de Gestão de Estoque",
    description:
      "Projeto acadêmico desenvolvido individualmente: aplicação web para cadastro de produtos e controle de entradas e saídas do estoque, com acompanhamento de estoque mínimo e filtros.",
    images: [
      {
        src: "/sistema-gestao-estoque-dashboard.webp",
        alt: "Dashboard do sistema de gestão de estoque com listagem de produtos e controles de movimentação",
      },
    ],
    technologies: [
      "React",
      "TypeScript",
      "Vite",
      "NestJS",
      "TypeORM",
      "PostgreSQL",
      "Tailwind CSS",
      "shadcn/ui",
      "TanStack Query",
      "Axios",
    ],
    type: "personal",
    featured: false,
    githubUrl: "https://github.com/dev-leonunes/gestao-estoque-app",
    liveUrl: "https://gestao-estoque-app-frontend.vercel.app/",
  },
  {
    id: "backscan",
    title: "BackScan",
    description:
      "Experimento de segurança desenvolvido a partir de um fork e ampliado com geração de comprovantes configuráveis, links compartilháveis, validação explícita de geolocalização e integração serverless com Telegram.",
    images: [
      {
        src: "/backscan-screens.webp",
        alt: "Telas de configuração e comprovante gerado pelo BackScan com dados fictícios",
      },
    ],
    technologies: [
      "JavaScript",
      "Vercel Serverless",
      "Telegram Bot API",
      "Geolocation API",
      "HTML",
      "CSS",
    ],
    type: "personal",
    featured: false,
    githubUrl: "https://github.com/dev-leonunes/backscan",
  },
  {
    id: "fibras-maravigirl",
    title: "Fibras Maravigirl",
    description:
      "E-commerce desenvolvido e personalizado na Nuvemshop, com ajustes de layout em HTML e CSS para adaptar a loja à identidade e às necessidades do cliente.",
    images: [
      {
        src: "/fibras-maravigirl-loja.webp",
        alt: "Página da loja virtual Fibras Maravigirl com vitrine de produtos e identidade personalizada",
      },
    ],
    technologies: ["Nuvemshop", "HTML", "CSS"],
    type: "freelance",
    featured: false,
    liveUrl: "https://fibrasmaravigirl2.lojavirtualnuvem.com.br/",
  },
  {
    id: "vem-ver-noticias",
    title: "Vem Ver Notícias",
    description:
      "Portal de notícias desenvolvido em WordPress para um projeto freelancer, com personalização em Elementor e otimizações de SEO.",
    images: [
      {
        src: "/vem-ver-noticias-homepage.webp",
        alt: "Página inicial do portal Vem Ver Notícias com matérias em destaque e layout de portal de conteúdo",
      },
    ],
    technologies: ["WordPress", "Elementor", "SEO"],
    type: "freelance",
    featured: false,
    liveUrl: "https://vemvernoticias.online/",
  },
  {
    id: "the-legend-of-zelda",
    title: "The Legend of Zelda",
    description:
      "Jogo interativo inspirado no The Legend of Zelda original, com exploração, coleta de três itens e progressão até o confronto com o chefão.",
    images: [
      {
        src: "/the-legend-of-zelda-game.webp",
        alt: "Tela do mini-game The Legend of Zelda com cenário retrô e personagem em exploração",
      },
    ],
    technologies: ["JavaScript", "p5.js"],
    type: "personal",
    featured: false,
    githubUrl: "https://github.com/dev-leonunes/the-legend-of-zelda-p5.js",
    liveUrl: "https://dev-leonunes.github.io/the-legend-of-zelda-p5.js/",
  },
  {
    id: "amigo-secreto",
    title: "Amigo Secreto",
    description:
      "Aplicação web para cadastrar participantes, realizar o sorteio e visualizar o resultado de cada pessoa.",
    images: [
      {
        src: "/amigo-secreto-app.webp",
        alt: "Interface do gerador de amigo secreto com lista de participantes e ação de sorteio",
      },
    ],
    technologies: ["HTML", "CSS", "JavaScript"],
    type: "personal",
    featured: false,
    githubUrl: "https://github.com/dev-leonunes/challenge-amigo-secreto",
    liveUrl: "https://dev-leonunes.github.io/challenge-amigo-secreto/",
  },
  {
    id: "encrypt-text",
    title: "Encrypt Text",
    description:
      "Aplicação web para criptografar e descriptografar mensagens usando um algoritmo de substituição.",
    images: [
      {
        src: "/encrypt-text-app.webp",
        alt: "Aplicação Encrypt Text com campos para criptografar e descriptografar mensagens de texto",
      },
    ],
    technologies: ["HTML", "CSS", "JavaScript"],
    type: "personal",
    featured: false,
    githubUrl: "https://github.com/dev-leonunes/encrypt-text-alura",
    liveUrl: "https://dev-leonunes.github.io/encrypt-text-alura/",
  },
  {
    id: "raizes-do-nordeste-api",
    title: "Raízes do Nordeste API",
    description:
      "Projeto de conclusão de curso desenvolvido individualmente: um MVP de API REST para simular a operação de uma rede de lanchonetes nordestinas em expansão. Implementei autenticação, perfis de acesso, pedidos multicanal, estoque por unidade, pagamento simulado, auditoria, documentação Swagger e testes automatizados.",
    technologies: [
      "NestJS",
      "TypeScript",
      "Prisma",
      "PostgreSQL",
      "JWT",
      "Swagger/OpenAPI",
      "Vitest",
    ],
    type: "personal",
    featured: true,
    githubUrl: "https://github.com/dev-leonunes/raizes-do-nordeste-api",
  },
  {
    id: "sistema-dindin",
    title: "Sistema DinDin",
    description:
      "API para gerenciamento de finanças pessoais, com autenticação, categorias, transações e consulta de extrato.",
    technologies: ["Node.js", "Express.js", "PostgreSQL", "JWT"],
    type: "personal",
    featured: false,
    githubUrl: "https://github.com/dev-leonunes/sistema-dindin-API",
  },
  {
    id: "sistema-pdv",
    title: "Sistema PDV",
    description:
      "API para simular um sistema de ponto de venda, com cadastro de produtos, clientes e pedidos.",
    technologies: ["Node.js", "Express.js", "PostgreSQL", "Knex", "JWT", "AWS"],
    type: "personal",
    featured: false,
    githubUrl: "https://github.com/dev-leonunes/sistema-pdv-API",
  },
  {
    id: "sistema-bancario",
    title: "Sistema Bancario",
    description:
      "API que simula contas bancárias e operações como depósitos, saques e transferências.",
    technologies: ["TypeScript", "Node.js", "Express.js", "MongoDB", "Vitest"],
    type: "personal",
    featured: false,
    githubUrl: "https://github.com/dev-leonunes/sistema-bancario-API",
  },
];
