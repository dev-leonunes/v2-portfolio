import {
  TbBrandGithub,
  TbBrandLinkedin,
  TbBrandWhatsapp,
} from "react-icons/tb";
import { FaDiscord } from "react-icons/fa";
import { MailIcon } from "lucide-react";

export const CONTACT = {
  Github: {
    url: "https://github.com/dev-leonunes/",
    icon: TbBrandGithub,
  },
  Linkedin: {
    url: "https://www.linkedin.com/in/leonardo-nunes-dev/",
    icon: TbBrandLinkedin,
  },
  Whatsapp: {
    url: "https://wa.me/557391225081",
    icon: TbBrandWhatsapp,
  },
  Email: {
    url: "mailto:leonunes07@outlook.com",
    icon: MailIcon,
  },
  Discord: {
    url: "https://discord.com/users/726271049209086094",
    icon: FaDiscord,
  },
};

export const WHATSAPP_CTA_MESSAGE =
  "Olá, Leonardo! Vi seu portfólio e gostaria de conversar sobre uma oportunidade ou projeto.";

export const HERO_DESCRIPTION =
  "Desenvolvo aplicações web, APIs e integrações entre sistemas para organizar dados e simplificar processos. Também crio sites e produtos digitais com foco em performance, responsividade e SEO. Se você tem um projeto em mente, vamos conversar.";

export const HERO_TECHS = [
  "React",
  "TypeScript",
  "Node.js",
  "PostgreSQL",
  "WebSockets",
  "IA",
];

export const ABOUT_TECHS = [
  "JavaScript (ES6+) / TypeScript",
  "React / Next.js",
  "Node.js",
  "NestJS / AdonisJS / Express",
  "PostgreSQL / MySQL",
  "MongoDB",
  "WebSockets / Modbus",
  "React Flow / ECharts / Recharts",
  "Tailwind CSS",
  "Jest / Vitest",
];

export const EXPERIENCES = [
  {
    id: "migracode",
    company: "Migracode",
    role: "Desenvolvedor Full Stack Jr",
    period: "Abr 2025 - Atualmente",
    description:
      "Atuação no desenvolvimento, manutenção e evolução de uma plataforma de monitoramento industrial em tempo real baseada em microsserviços, com foco em integrações, visualização de dados, performance e confiabilidade.",
    responsibilities: [
      "Desenvolvimento end-to-end de funcionalidades com React, TypeScript, Tailwind CSS, Node.js e AdonisJS",
      "Integração com dados industriais em tempo real via WebSockets e protocolo Modbus",
      "Criação de dashboards analíticos, diagramas de equipamentos e visualizações interativas com React Flow, ECharts e Recharts",
      "Otimização de consultas e modelagem de dados em MySQL e MongoDB para análise de grandes volumes de registros",
      "Desenvolvimento de agente de IA aplicado ao domínio industrial para apoiar diagnóstico técnico e geração de ocorrências",
      "Implementação e melhoria de notificações via Email, WhatsApp e Telegram, além de sustentação de aplicação legada em .NET/ASP.NET",
    ],
    technologies: [
      "React",
      "TypeScript",
      "Node.js",
      "AdonisJS",
      "MySQL",
      "MongoDB",
      "WebSockets",
      "Modbus",
      "React Flow",
      "ECharts",
      "Recharts",
      "Tailwind CSS",
      "Docker",
    ],
  },
  {
    id: "freelancer",
    company: "Freelancer",
    role: "Desenvolvedor Web",
    period: "Set 2024 - Atualmente",
    description:
      "Desenvolvimento de sites e aplicações web sob demanda, atuando desde o planejamento até a entrega final, com foco em performance, SEO e experiência do usuário.",
    responsibilities: [
      "Criação de sites com WordPress, Elementor e Nuvemshop",
      "Desenvolvimento de aplicações modernas com React e Vite",
      "Integração com APIs REST e WebSockets",
      "Configuração de hospedagem, domínios e DNS",
      "Otimização de desempenho, SEO e acessibilidade",
    ],
    technologies: [
      "React",
      "TypeScript",
      "JavaScript",
      "Node.js",
      "WordPress",
      "Elementor",
      "HTML",
      "CSS",
    ],
  },
  {
    id: "cubos-academy",
    company: "Cubos Academy",
    role: "Monitor Full Stack (Temporário)",
    period: "Fev 2024 - Jun 2024",
    description:
      "Atuação como monitor técnico, auxiliando alunos no desenvolvimento de aplicações web e na consolidação de fundamentos de programação.",
    responsibilities: [
      "Suporte a alunos em lógica de programação e desenvolvimento web",
      "Auxílio na criação de APIs REST com Node.js e TypeScript",
      "Correção de atividades e revisão de código",
      "Apoio na compreensão de bancos de dados e boas práticas",
      "Realização de atendimentos técnicos via Discord",
    ],
    technologies: ["JavaScript", "TypeScript", "Node.js", "PostgreSQL", "Git"],
  },
  {
    id: "soujunior",
    company: "SouJunior",
    role: "Desenvolvedor Back-end (Voluntário)",
    period: "Ago 2024 - Jul 2025",
    description:
      "Participação no desenvolvimento de aplicações web em ambiente colaborativo, atuando no back-end de um projeto real.",
    responsibilities: [
      "Desenvolvimento de APIs REST com NestJS",
      "Integração com banco de dados PostgreSQL via TypeORM",
      "Colaboração em equipe multidisciplinar",
      "Participação no ciclo completo de desenvolvimento",
    ],
    technologies: [
      "TypeScript",
      "NestJS",
      "Node.js",
      "PostgreSQL",
      "TypeORM",
      "Docker",
      "Git",
      "Git Flow",
    ],
  },
];

export type ProjectType = "personal" | "freelance";

export interface Project {
  id: string;
  title: string;
  description: string;
  image?: string;
  imageAlt?: string;
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
    image: "/dr-julio-cezar-site.webp",
    imageAlt:
      "Página inicial do site profissional do Dr. Júlio Cézar com seções de apresentação e especialidades",
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
    image: "/foco-em-noticias-homepage.webp",
    imageAlt:
      "Página inicial do portal Foco em Notícias com destaques editoriais e estrutura otimizada para SEO",
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
    image: "/sistema-gestao-estoque-dashboard.webp",
    imageAlt:
      "Dashboard do sistema de gestão de estoque com listagem de produtos e controles de movimentação",
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
    image: "/fibras-maravigirl-loja.webp",
    imageAlt:
      "Página da loja virtual Fibras Maravigirl com vitrine de produtos e identidade personalizada",
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
    image: "/vem-ver-noticias-homepage.webp",
    imageAlt:
      "Página inicial do portal Vem Ver Notícias com matérias em destaque e layout de portal de conteúdo",
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
    image: "/the-legend-of-zelda-game.webp",
    imageAlt:
      "Tela do mini-game The Legend of Zelda com cenário retrô e personagem em exploração",
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
    image: "/amigo-secreto-app.webp",
    imageAlt:
      "Interface do gerador de amigo secreto com lista de participantes e ação de sorteio",
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
    image: "/encrypt-text-app.webp",
    imageAlt:
      "Aplicação Encrypt Text com campos para criptografar e descriptografar mensagens de texto",
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
