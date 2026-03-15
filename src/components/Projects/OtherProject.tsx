import Image from "next/image";
import { TbBrandGithub } from "react-icons/tb";
import { type Project } from "@/constants";
import { ImagePlaceholder } from "./ImagePlaceholder";
import { ProjectTypeBadge } from "./ProjectTypeBadge";

export const OtherProject = ({ project }: { project: Project }) => {
  const MAX_VISIBLE_TECHS = 6;
  const visibleTechs = project.technologies.slice(0, MAX_VISIBLE_TECHS);
  const hiddenTechCount = Math.max(
    0,
    project.technologies.length - MAX_VISIBLE_TECHS,
  );

  return (
    <div className="h-full group flex flex-col rounded-xl border border-border/70 overflow-hidden bg-muted/10 hover:border-accent/55 hover:-translate-y-1.5 transition-all duration-300 hover:shadow-[0_24px_45px_-36px_color-mix(in_oklab,var(--accent)_65%,transparent)]">
      {/* Imagem */}
      <div className="relative w-full h-48 overflow-hidden bg-muted">
        <div className="absolute inset-0 z-10 bg-linear-to-t from-background/55 via-transparent to-transparent pointer-events-none" />
        {project.image ? (
          <Image
            src={project.image}
            alt={project.imageAlt ?? project.title}
            fill
            className="object-cover transition-all duration-500 group-hover:scale-108"
            sizes="(max-width: 768px) calc(100vw - 3rem), (max-width: 1200px) calc(50vw - 2rem), 24rem"
          />
        ) : (
          <div className="w-full h-full bg-linear-to-br from-muted to-muted/50 flex items-center justify-center transition-all duration-500 group-hover:scale-108">
            <ImagePlaceholder
              title={project.title}
              technologies={project.technologies}
              compact
            />
          </div>
        )}
      </div>

      {/* Conteúdo */}
      <div className="p-6 bg-background/30 flex flex-col flex-1 min-h-64">
        <div className="flex-1 flex flex-col">
          <div className="flex items-center gap-3 mb-4">
            <ProjectTypeBadge type={project.type} size="sm" />
          </div>

          <h4 className="text-lg font-bold text-foreground mb-3">
            {project.title}
          </h4>

          <p className="text-sm leading-relaxed mb-5 text-muted-foreground line-clamp-3">
            {project.description}
          </p>

          {/* Tecnologias */}
          <div className="flex flex-wrap gap-2 mb-5 pt-4 border-t border-border/60">
            {visibleTechs.map((tech) => (
              <span
                key={tech}
                className="font-mono text-xs text-muted-foreground px-2 py-1 rounded-full border border-border/70 bg-muted/10"
              >
                {tech}
              </span>
            ))}
            {hiddenTechCount > 0 && (
              <span className="font-mono text-xs text-muted-foreground">
                +{hiddenTechCount}
              </span>
            )}
          </div>
        </div>

        <div className="mt-4 pt-4 border-t border-border/60 min-h-9 flex items-end">
          <div className="relative z-10 flex items-center gap-4 flex-wrap">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-sm font-mono text-sm font-semibold text-accent underline decoration-accent/35 underline-offset-4 transition-all duration-250 hover:-translate-y-0.5 hover:opacity-85 hover:decoration-accent/70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/70"
                aria-label="Abrir repositório no GitHub"
              >
                <TbBrandGithub size={16} />
                GitHub
              </a>
            )}

            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-sm font-semibold text-accent underline decoration-accent/35 underline-offset-4 transition-all duration-250 hover:-translate-y-0.5 hover:opacity-85 hover:decoration-accent/70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/70 rounded-sm"
              >
                {"Ver ->"}
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
