import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { CONTACT, TECHS } from "@/constants";
import { FadeUp } from "@/components/animations";

export const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative isolate overflow-hidden w-full flex items-center hero-shell"
    >
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-20 left-1/2 h-105 w-105 -translate-x-1/2 rounded-full bg-accent/15 blur-[120px]" />
        <div className="absolute top-28 -left-16 h-60 w-60 rounded-full bg-primary/20 blur-[90px]" />
        <div className="absolute bottom-10 right-0 h-52 w-52 rounded-full bg-accent/20 blur-[100px]" />
      </div>

      <div className="container mx-auto px-6 lg:px-12 max-w-7xl">
        <div className="w-full max-w-4xl px-0 py-10 sm:py-12 lg:py-14">
          <FadeUp delay={0.1} disableOnMobile>
            <p className="font-mono text-xs sm:text-sm tracking-[0.2em] uppercase mb-4 text-accent">
              Olá, meu nome é
            </p>
          </FadeUp>

          <FadeUp delay={0.2} disableOnMobile>
            <h1 className="font-display text-[2.55rem] leading-[0.98] sm:text-6xl lg:text-8xl font-semibold mb-3 text-balance text-foreground">
              Leonardo Nunes.
            </h1>
          </FadeUp>

          <FadeUp delay={0.3} disableOnMobile>
            <h2 className="font-display text-2xl sm:text-4xl lg:text-5xl font-medium mb-7 text-balance text-secondary">
              Desenvolvedor de software.
            </h2>
          </FadeUp>

          <FadeUp delay={0.4} disableOnMobile>
            <p className="text-base sm:text-lg leading-relaxed mb-7 max-w-2xl text-secondary">
              Sou um Desenvolvedor de Software apaixonado por tecnologia e
              inovação e especializado em construir experiências digitais.
              Atualmente trabalho com tecnologias como:
            </p>
          </FadeUp>

          <FadeUp delay={0.5} disableOnMobile>
            <div className="flex flex-wrap gap-3 mb-9">
              {TECHS.map((tech, i) => (
                <Badge key={`tech-${i}`}>{tech}</Badge>
              ))}
            </div>
          </FadeUp>

          <FadeUp delay={0.6} disableOnMobile>
            <div className="flex flex-wrap items-center gap-6">
              <Button
                className={cn(
                  "font-mono px-6 sm:px-8 border-2 border-accent text-accent bg-transparent hover:bg-transparent",
                  "transition-all duration-250 ease-[cubic-bezier(0.645,0.045,0.355,1)] focus-visible:ring-2 focus-visible:ring-accent/50",
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
                  className="hover:text-accent transition-colors duration-200"
                  aria-label="Abrir perfil de Leonardo Nunes no GitHub"
                >
                  <CONTACT.Github.icon size={24} />
                </a>

                <a
                  href={CONTACT.Linkedin.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-accent transition-colors duration-200"
                  aria-label="Abrir perfil de Leonardo Nunes no LinkedIn"
                >
                  <CONTACT.Linkedin.icon size={24} />
                </a>

                <a
                  href={CONTACT.Whatsapp.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-accent transition-colors duration-200"
                  aria-label="Conversar com Leonardo Nunes no WhatsApp"
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
