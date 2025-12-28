"use client";

import { CONTACT } from "@/constants";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full py-8 border-t border-border">
      <div className="container mx-auto px-6 lg:px-12 max-w-7xl">
        <div className="flex flex-col items-center gap-6">
          <div className="flex items-center gap-6 text-secondary">
            <a
              href={CONTACT.Github.url}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent transition-colors"
              aria-label="GitHub"
            >
              <CONTACT.Github.icon size={20} />
            </a>

            <a
              href={CONTACT.Linkedin.url}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent transition-colors"
              aria-label="LinkedIn"
            >
              <CONTACT.Linkedin.icon size={20} />
            </a>

            <a
              href={CONTACT.Whatsapp.url}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent transition-colors"
              aria-label="WhatsApp"
            >
              <CONTACT.Whatsapp.icon size={20} />
            </a>

            <a
              href={CONTACT.Email.url}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent transition-colors"
              aria-label="Email"
            >
              <CONTACT.Email.icon size={20} />
            </a>

            <a
              href={CONTACT.Discord.url}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent transition-colors"
              aria-label="Discord"
            >
              <CONTACT.Discord.icon size={20} />
            </a>
          </div>

          <div className="text-center">
            <p className="text-secondary text-sm font-mono">
              © {currentYear} Leonardo Nunes. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
