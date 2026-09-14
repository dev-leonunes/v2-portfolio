import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  CONTACT,
  HERO_DESCRIPTION,
  HERO_TECHS,
  WHATSAPP_CTA_MESSAGE,
} from "@/constants";
import type { CSSProperties, ReactNode } from "react";

const whatsappCtaUrl = `${CONTACT.Whatsapp.url}?text=${encodeURIComponent(
  WHATSAPP_CTA_MESSAGE,
)}`;

const HeroFadeUp = ({
  children,
  delay = 0,
}: {
  children: ReactNode;
  delay?: number;
}) => {
  return (
    <div
      className="hero-fade-up"
      style={{ "--hero-animation-delay": `${delay}s` } as CSSProperties}
    >
      {children}
    </div>
  );
};

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
          <HeroFadeUp delay={0.1}>
            <p className="font-mono text-xs sm:text-sm tracking-[0.2em] uppercase mb-4 text-accent">
              Olá, meu nome é
            </p>
          </HeroFadeUp>

          <HeroFadeUp delay={0.2}>
            <h1 className="font-display text-[2.55rem] leading-[0.98] sm:text-6xl lg:text-8xl font-semibold mb-3 text-balance text-foreground">
              Leonardo Nunes.
            </h1>
          </HeroFadeUp>

          <HeroFadeUp delay={0.3}>
            <h2 className="font-display text-2xl sm:text-4xl lg:text-5xl font-medium mb-7 text-balance text-secondary">
              Desenvolvedor de software.
            </h2>
          </HeroFadeUp>

          <HeroFadeUp delay={0.4}>
            <p className="text-base sm:text-lg leading-relaxed mb-7 max-w-2xl text-secondary">
              {HERO_DESCRIPTION}
            </p>
          </HeroFadeUp>

          <HeroFadeUp delay={0.5}>
            <div className="flex flex-wrap items-center gap-5 sm:gap-6">
              <Button
                asChild
                className={cn(
                  "font-mono min-h-11 px-6 sm:px-8 border-2 border-accent text-accent bg-transparent hover:bg-transparent",
                  "transition-[transform,box-shadow] duration-250 ease-[cubic-bezier(0.645,0.045,0.355,1)] focus-visible:ring-2 focus-visible:ring-accent/50",
                  "hover:shadow-[4px_4px_0_0] hover:shadow-accent hover:-translate-x-1.25 hover:-translate-y-1.25",
                )}
              >
                <a
                  href={whatsappCtaUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Conversar com Leonardo Nunes pelo WhatsApp"
                >
                  <CONTACT.Whatsapp.icon size={20} aria-hidden="true" />
                  Falar no WhatsApp
                </a>
              </Button>

              <a
                href="#projects"
                className="inline-flex min-h-11 items-center px-1 font-mono text-sm text-secondary underline decoration-accent/35 underline-offset-4 transition-[transform,color,text-decoration-color] duration-200 hover:-translate-y-0.5 hover:text-accent hover:decoration-accent/70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/70 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              >
                Ver projetos
              </a>
            </div>
          </HeroFadeUp>

          <HeroFadeUp delay={0.6}>
            <div className="mt-8">
              <p className="mb-3 text-sm text-secondary">
                Tecnologias que uso no dia a dia
              </p>
              <div className="flex flex-wrap gap-3">
                {HERO_TECHS.map((tech) => (
                  <Badge key={tech}>{tech}</Badge>
                ))}
              </div>
            </div>
          </HeroFadeUp>
        </div>
      </div>
    </section>
  );
};
