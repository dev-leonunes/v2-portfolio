import { TechsBadge } from "./techs-badge";
import { Button } from "./button";
import { HiArrowNarrowRight } from "react-icons/hi";
import {
  TbBrandGithub,
  TbBrandLinkedin,
  TbBrandWhatsapp,
} from "react-icons/tb";
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
    <section className="w-full lg:h-[655px] flex flex-col justify-end pb-10 sm:pb-32 py-32 lg:pb-[110px]">
      <div className="mx-auto w-full max-w-[1000px] px-6 flex items-start justify-between flex-col-reverse lg:flex-row">
        <div className="w-full lg:max-w-[1000px]">
          <p className="text-[#22d4fd] text-base font-normal mb-[10px] ml-1 font-mono">
            Olá, meu nome é
          </p>

          <div className="text-[70px] font-semibold leading-[1.1] m-0 font-display">
            <h1 className="text-[#ccd6f6] m-0">Leonardo Nunes.</h1>

            <h2 className="text-[#a8b2d1] m-0">Desenvolvedor de software.</h2>
          </div>

          <div className="mt-5 mb-[10px] mr-[380px]">
            <p className="text-[#8892b0] text-lg font-normal leading-[1.3] font-display">
              Sou um Desenvolvedor de Software apaixonado por tecnologia e
              inovação e especializado em construir experiências digitais.
              Atualmente trabalho com tecnologias como:
            </p>
          </div>

          <div className="flex flex-wrap gap-x-2 gap-y-3">
            {TECHS.map((tech, i) => (
              <TechsBadge tech={tech} key={`tech-${i}`} />
            ))}
          </div>

          <div className="flex items-center flex-col sm:flex-row gap-4 mt-10">
            <Button
              className={cn(
                "text-[#22d4fd] bg-transparent text-base font-normal leading-none",
                "py-5 px-7 border border-[#22d4fd] rounded-[5px] mt-10",
                "transition-all duration-[250ms] ease-[cubic-bezier(0.645,0.045,0.355,1)]",
                "hover:shadow-[4px_4px_0_0_#22d4fd] hover:-translate-x-[5px] hover:-translate-y-[5px]",
                "w-max font-mono"
              )}
            >
              Vamos conversar?
              <HiArrowNarrowRight size={18} />
            </Button>

            <div className="flex items-center text-2xl gap-4 mt-[2.4rem] ml-6 text-[#8892b0]">
              <a
                href={CONTACT.Github.url}
                target="_blank"
                rel="noreferrer"
                className={cn(
                  "transition-all duration-[250ms] ease-[cubic-bezier(0.645,0.045,0.355,1)]",
                  "hover:-translate-y-[5px] hover:text-[#ccd6f6]"
                )}
              >
                {CONTACT.Github.icon}
              </a>

              <a
                href={CONTACT.Linkedin.url}
                target="_blank"
                rel="noreferrer"
                className={cn(
                  "transition-all duration-[250ms] ease-[cubic-bezier(0.645,0.045,0.355,1)]",
                  "hover:-translate-y-[5px] hover:text-[#ccd6f6]"
                )}
              >
                {CONTACT.Linkedin.icon}
              </a>

              <a
                href={CONTACT.Whatsapp.url}
                target="_blank"
                rel="noreferrer"
                className={cn(
                  "transition-all duration-[250ms] ease-[cubic-bezier(0.645,0.045,0.355,1)]",
                  "hover:-translate-y-[5px] hover:text-[#ccd6f6]"
                )}
              >
                {CONTACT.Whatsapp.icon}
              </a>
            </div>
          </div>
        </div>

        {/* <Image
                    width={420}
                    height={400}
                    src="/public/hero.png"
                    alt="Foto de perfil do dev Leonardo Nunes"
                /> */}
      </div>
    </section>
  );
};
