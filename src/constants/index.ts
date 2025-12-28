import {
  TbBrandGithub,
  TbBrandLinkedin,
  TbBrandWhatsapp,
} from "react-icons/tb";

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
      "JavaScript",
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
    technologies: ["TypeScript", "NestJS", "PostgreSQL", "TypeORM"],
  },
];
