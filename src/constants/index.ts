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

export const TECHS = [
  "Node.js",
  "React",
  "JavaScript",
  "TypeScript",
  "HTML",
  "CSS",
  "PostgreSQL",
  "MongoDB",
  "WordPress",
];

export const ABOUT_TECHS = [
  "JavaScript (ES6+) / TypeScript",
  "React",
  "Node.js",
  "AdonisJS / Express",
  "PostgreSQL / MySQL",
  "MongoDB",
  "Tailwind CSS",
  "WordPress",
];

export const EXPERIENCES = [
  {
    id: "migracode",
    company: "Migracode",
    role: "Desenvolvedor Full Stack Jr",
    period: "Abr 2025 - Atualmente",
    description:
      "Atuação no desenvolvimento e manutenção de uma plataforma de monitoramento industrial baseada em microsserviços, com foco em performance, escalabilidade e confiabilidade.",
    responsibilities: [
      "Desenvolvimento de interfaces com React, TypeScript, Tailwind CSS e Vite",
      "Implementação de funcionalidades no back-end com Node.js e AdonisJS",
      "Integração com equipamentos industriais via protocolo Modbus",
      "Modelagem e manipulação de dados com MySQL e MongoDB",
      "Correção de bugs, melhorias contínuas e colaboração em ambiente ágil (Scrum)",
    ],
    technologies: [
      "React",
      "TypeScript",
      "Node.js",
      "AdonisJS",
      "MySQL",
      "MongoDB",
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
  technologies: string[];
  type: ProjectType;
  featured: boolean;
  githubUrl?: string;
  liveUrl?: string;
}

export const PROJECTS: Project[] = [
  {
    id: "site-dr-julio",
    title: "Dr. Júlio Cézar",
    description:
      "Site profissional com seção 'Sobre Mim', especialidades, agendamento direto via WhatsApp e integração com redes sociais. Estrutura otimizada para SEO e performance.",
    image: "/drjulio.png",
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
      "Portal Foco em Notícias, um projeto que se destaca pelo uso estratégico de técnicas de SEO.",
    image: "/news-portal-2.png",
    technologies: ["WordPress", "Elementor", "SEO"],
    type: "freelance",
    featured: true,
    liveUrl: "https://focoemnoticias.online/",
  },
  {
    id: "fibras-maravigirl",
    title: "Fibras Maravigirl",
    description:
      "E-commerce desenvolvido na plataforma Nuvemshop, com personalização de layout via CSS e HTML para adaptar às necessidades do cliente.",
    image: "/e-commerce.png",
    technologies: ["Nuvemshop", "HTML", "CSS"],
    type: "freelance",
    featured: false,
    liveUrl: "https://fibrasmaravigirl2.lojavirtualnuvem.com.br/",
  },
  {
    id: "vem-ver-noticias",
    title: "Vem Ver Notícias",
    description:
      "Portal desenvolvido como projeto freelancer em WordPress, usando Elementor e estratégias de SEO.",
    image: "/news-portal.png",
    technologies: ["WordPress", "Elementor", "SEO"],
    type: "freelance",
    featured: false,
    liveUrl: "https://vemvernoticias.online/",
  },
  {
    id: "the-legend-of-zelda",
    title: "The Legend of Zelda",
    description:
      "Mini-game tributo ao jogo original onde o objetivo é coletar 3 itens e abrir uma porta para enfrentar o chefão.",
    image: "/legend-of-zelda.png",
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
      "Gerador de amigo secreto que sorteia os participantes e informa quem é o amigo secreto de cada um.",
    image: "/secret-friend.png",
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
      "Encriptador de texto simples que utiliza um algoritmo de substituição para criptografar e descriptografar mensagens.",
    image: "/encrypt-text.png",
    technologies: ["HTML", "CSS", "JavaScript"],
    type: "personal",
    featured: false,
    githubUrl: "https://github.com/dev-leonunes/encrypt-text-alura",
    liveUrl: "https://dev-leonunes.github.io/encrypt-text-alura/",
  },
  {
    id: "sistema-dindin",
    title: "Sistema DinDin",
    description:
      "RESTful API desenvolvida para gerenciamento de finanças pessoais.",
    technologies: ["Node.js", "Express.js", "PostgreSQL", "JWT"],
    type: "personal",
    featured: false,
    githubUrl: "https://github.com/dev-leonunes/sistema-dindin-API",
  },
  {
    id: "sistema-pdv",
    title: "Sistema PDV",
    description: "Aplicação Back-end para sistema frente de caixa.",
    technologies: ["Node.js", "Express.js", "PostgreSQL", "Knex", "JWT", "AWS"],
    type: "personal",
    featured: false,
    githubUrl: "https://github.com/dev-leonunes/sistema-pdv-API",
  },
  {
    id: "sistema-bancario",
    title: "Sistema Bancario",
    description: "Aplicação Back-end que simula um sistema bancário simples.",
    technologies: ["TypeScript", "Node.js", "Express.js", "MongoDB", "Vitest"],
    type: "personal",
    featured: false,
    githubUrl: "https://github.com/dev-leonunes/sistema-bancario-API",
  },
];
