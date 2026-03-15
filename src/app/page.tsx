import type { Metadata } from "next";
import { HeroSection } from "@/components/Hero";
import { AboutSection } from "@/components/About";
import { ExperienceSection } from "@/components/Experience";
import { ProjectsSection } from "@/components/Projects/Projects";
import { CONTACT } from "@/constants";
import { getSiteUrl } from "@/lib/site-url";

const siteUrl = getSiteUrl();

export const metadata: Metadata = {
  title: "Portfólio",
  description:
    "Portfólio de Leonardo Nunes com projetos, experiências e tecnologias em desenvolvimento web moderno.",
};

export default function Home() {
  const personJsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Leonardo Nunes",
    jobTitle: "Desenvolvedor de Software",
    url: siteUrl,
    sameAs: [CONTACT.Github.url, CONTACT.Linkedin.url],
  };

  const websiteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Leonardo Nunes",
    url: siteUrl,
    inLanguage: "pt-BR",
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
      />
      <HeroSection />
      <AboutSection />
      <ExperienceSection />
      <ProjectsSection />
    </main>
  );
}
