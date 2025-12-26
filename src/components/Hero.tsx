import { TechsBadge } from "./techs-badge";
import { Button } from "./button";
import {
  TbBrandGithub,
  TbBrandLinkedin,
  TbBrandWhatsapp,
} from "react-icons/tb";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

const CONTACT = {
  Github: {
    url: "https://github.com/dev-leonunes/",
    icon: <TbBrandGithub size={24} />,
  },
  Linkedin: {
    url: "https://www.linkedin.com/in/leonardo-nunes-dev/",
    icon: <TbBrandLinkedin size={24} />,
  },
  Whatsapp: {
    url: "https://wa.me/557391225081",
    icon: <TbBrandWhatsapp size={24} />,
  },
};

const TECHS = [
  "Node.js",
  "JavaScript",
  "TypeScript",
  "HTML",
  "CSS",
  "PostgreSQL",
  "WordPress",
];

export const HeroSection = () => {
  return (
    <section className="w-full min-h-[70vh] flex items-center pt-32">
      <div className="container mx-auto px-6 lg:px-12 max-w-7xl">
        <div className="w-full max-w-4xl">
          <p className="font-mono text-sm mb-4 text-accent">Olá, meu nome é</p>

          <h1 className="text-4xl lg:text-6xl font-bold mb-3 text-balance text-text">
            Leonardo Nunes.
          </h1>

          <h2 className="text-3xl lg:text-5xl font-bold mb-6 text-balance text-secondary">
            Desenvolvedor de software.
          </h2>

          <p className="text-lg leading-relaxed mb-6 max-w-2xl text-secondary">
            Sou um Desenvolvedor de Software apaixonado por tecnologia e
            inovação e especializado em construir experiências digitais.
            Atualmente trabalho com tecnologias como:
          </p>

          <div className="flex flex-wrap gap-3 mb-8">
            {TECHS.map((tech, i) => (
              <TechsBadge tech={tech} key={`tech-${i}`} />
            ))}
          </div>

          <div className="flex flex-wrap items-center gap-6">
            <Button
              className={cn(
                "font-mono px-8 border-2 border-accent text-accent bg-transparent",
                "transition-all duration-[250ms] ease-[cubic-bezier(0.645,0.045,0.355,1)]",
                "hover:shadow-[4px_4px_0_0] hover:shadow-accent hover:-translate-x-[5px] hover:-translate-y-[5px]"
              )}
            >
              Vamos conversar? <ArrowRight size={12} />
            </Button>

            <div className="flex items-center gap-4 text-secondary">
              <a
                href={CONTACT.Github.url}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-70 transition-opacity"
              >
                {CONTACT.Github.icon}
              </a>

              <a
                href={CONTACT.Linkedin.url}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-70 transition-opacity"
              >
                {CONTACT.Linkedin.icon}
              </a>

              <a
                href={CONTACT.Whatsapp.url}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-70 transition-opacity"
              >
                {CONTACT.Whatsapp.icon}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
