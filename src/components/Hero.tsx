import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { CONTACT, TECHS } from "@/constants";
import { FadeUp } from "@/components/animations";

export const HeroSection = () => {
  return (
    <section className="w-full min-h-[70vh] flex items-center pt-24 lg:pt-36 pb-12 lg:pb-20">
      <div className="container mx-auto px-6 lg:px-12 max-w-7xl">
        <div className="w-full max-w-4xl">
          <FadeUp delay={0.1}>
            <p className="font-mono text-sm mb-4 text-accent">
              Olá, meu nome é
            </p>
          </FadeUp>

          <FadeUp delay={0.2}>
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-3 text-balance text-foreground">
              Leonardo Nunes.
            </h1>
          </FadeUp>

          <FadeUp delay={0.3}>
            <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold mb-6 text-balance text-secondary">
              Desenvolvedor de software.
            </h2>
          </FadeUp>

          <FadeUp delay={0.4}>
            <p className="text-base sm:text-lg leading-relaxed mb-6 max-w-2xl text-secondary">
              Sou um Desenvolvedor de Software apaixonado por tecnologia e
              inovação e especializado em construir experiências digitais.
              Atualmente trabalho com tecnologias como:
            </p>
          </FadeUp>

          <FadeUp delay={0.5}>
            <div className="flex flex-wrap gap-3 mb-8">
              {TECHS.map((tech, i) => (
                <Badge key={`tech-${i}`}>{tech}</Badge>
              ))}
            </div>
          </FadeUp>

          <FadeUp delay={0.6}>
            <div className="flex flex-wrap items-center gap-6">
              <Button
                className={cn(
                  "font-mono px-6 sm:px-8 border-2 border-accent text-accent bg-transparent hover:bg-transparent",
                  "transition-all duration-250 ease-[cubic-bezier(0.645,0.045,0.355,1)]",
                  "hover:shadow-[4px_4px_0_0] hover:shadow-accent hover:-translate-x-1.25 hover:-translate-y-1.25",
                )}
              >
                Vamos conversar? →
              </Button>

              <div className="flex items-center gap-4 text-secondary">
                <a
                  href={CONTACT.Github.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:opacity-70 transition-opacity"
                >
                  <CONTACT.Github.icon size={24} />
                </a>

                <a
                  href={CONTACT.Linkedin.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:opacity-70 transition-opacity"
                >
                  <CONTACT.Linkedin.icon size={24} />
                </a>

                <a
                  href={CONTACT.Whatsapp.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:opacity-70 transition-opacity"
                >
                  <CONTACT.Whatsapp.icon size={24} />
                </a>
              </div>
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  );
};
