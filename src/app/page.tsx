import { HeroSection } from "@/components/Hero";
import { AboutSection } from "@/components/About";
import { ExperienceSection } from "@/components/Experience";
import { ProjectsSection } from "@/components/Projects/Projects";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <ExperienceSection />
      <ProjectsSection />
    </main>
  );
}
