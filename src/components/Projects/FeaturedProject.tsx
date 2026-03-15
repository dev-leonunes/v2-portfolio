import Image from "next/image";
import { cn } from "@/lib/utils";
import { type Project } from "@/constants";
import { ImagePlaceholder } from "./ImagePlaceholder";
import { ProjectTypeBadge } from "./ProjectTypeBadge";
import { ProjectLinks } from "./ProjectLinks";

export const FeaturedProject = ({
  project,
  index,
}: {
  project: Project;
  index: number;
}) => {
  return (
    <div
      className={cn(
        "relative flex flex-col gap-6 items-stretch rounded-2xl border border-border/70 bg-muted/10 p-5 lg:p-8",
        "shadow-[0_28px_65px_-54px_color-mix(in_oklab,var(--accent)_55%,transparent)]",
        "lg:flex-row lg:gap-8 lg:items-center",
        index % 2 === 0 ? "" : "lg:flex-row-reverse",
      )}
    >
      {/* Imagem */}
      <div className="flex-1 relative group w-full">
        <div className="absolute -inset-2 -z-10 rounded-xl bg-accent/20 blur-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-65" />
        <div className="relative rounded-xl overflow-hidden border border-accent/40 aspect-video bg-background/40">
          {project.image ? (
            <Image
              src={project.image}
              alt={project.imageAlt ?? project.title}
              fill
              className="object-cover transition-all duration-500 group-hover:scale-103"
              sizes="(max-width: 1024px) calc(100vw - 3rem), (max-width: 1280px) 41vw, 34rem"
            />
          ) : (
            <div className="w-full h-full bg-linear-to-br from-muted to-muted/50 flex items-center justify-center transition-all duration-500 group-hover:scale-103">
              <ImagePlaceholder
                title={project.title}
                technologies={project.technologies}
              />
            </div>
          )}
        </div>
      </div>

      {/* Conteúdo */}
      <div className="flex-1">
        <p className="font-mono text-xs tracking-[0.16em] uppercase text-accent mb-3">
          Projeto em destaque
        </p>

        <div className="flex items-center gap-3 mb-4">
          <ProjectTypeBadge type={project.type} size="md" />
        </div>

        <h3 className="text-2xl lg:text-3xl font-bold mb-4 text-foreground leading-tight">
          {project.title}
        </h3>

        <div className="p-6 rounded-xl mb-4 bg-background/45 border border-border/60">
          <p className="leading-relaxed text-muted-foreground">
            {project.description}
          </p>
        </div>

        <div className="flex flex-wrap gap-2 mb-6">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="font-mono text-xs text-muted-foreground px-2.5 py-1 rounded-full border border-border/70 bg-background/35"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="pt-4 border-t border-border/60">
          <ProjectLinks
            githubUrl={project.githubUrl}
            liveUrl={project.liveUrl}
            size="md"
          />
        </div>
      </div>
    </div>
  );
};
