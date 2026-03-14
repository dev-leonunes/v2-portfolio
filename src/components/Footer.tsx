"use client";

import { FadeIn, StaggerContainer, StaggerItem } from "@/components/animations";
import { CONTACT } from "@/constants";

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  const socialLinks = [
    { key: "Github", label: "GitHub" },
    { key: "Linkedin", label: "LinkedIn" },
    { key: "Whatsapp", label: "WhatsApp" },
    { key: "Email", label: "Email" },
    { key: "Discord", label: "Discord" },
  ] as const;

  return (
    <footer className="relative w-full overflow-hidden border-t border-border/75 py-10 lg:py-12">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-accent/40 to-transparent" />
        <div className="absolute -top-28 left-1/2 h-56 w-96 -translate-x-1/2 rounded-full bg-accent/14 blur-3xl" />
      </div>

      <div className="container mx-auto px-6 lg:px-12 max-w-7xl">
        <FadeIn>
          <div className="flex flex-col items-center gap-7 text-center">
            <p className="text-[0.7rem] sm:text-xs tracking-[0.2em] uppercase text-accent/90 font-mono">
              Encerrando por aqui, mas a conversa continua
            </p>

            <StaggerContainer staggerDelay={0.11}>
              <div className="flex flex-wrap items-center justify-center gap-3 text-secondary">
                {socialLinks.map(({ key, label }) => {
                  const social = CONTACT[key];

                  return (
                    <StaggerItem key={key}>
                      <a
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group inline-flex h-10 w-10 items-center justify-center rounded-full border border-border/70 bg-background/45 text-secondary transition-all duration-250 hover:-translate-y-0.5 hover:border-accent/55 hover:text-accent hover:shadow-[0_10px_24px_-16px_color-mix(in_oklab,var(--accent)_70%,transparent)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/60"
                        aria-label={label}
                      >
                        <social.icon
                          size={18}
                          className="transition-transform duration-250 group-hover:scale-110"
                        />
                      </a>
                    </StaggerItem>
                  );
                })}
              </div>
            </StaggerContainer>

            <p className="text-secondary text-sm font-mono">
              © {currentYear} Leonardo Nunes. Todos os direitos reservados.
            </p>
          </div>
        </FadeIn>
      </div>
    </footer>
  );
};
