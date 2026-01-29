import Image from "next/image";
import { type Project } from "@/constants";
import { ImagePlaceholder } from "./ImagePlaceholder";
import { ProjectTypeBadge } from "./ProjectTypeBadge";
import { ProjectLinks } from "./ProjectLinks";

export const OtherProject = ({ project }: { project: Project }) => {
  return (
    <div className="group rounded-lg border-2 border-border overflow-hidden hover:border-accent hover:-translate-y-1 transition-all duration-300">
      {/* Imagem */}
      <div className="relative w-full h-48 overflow-hidden bg-muted">
        {project.image ? (
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover transition-all duration-500 group-hover:scale-110"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        ) : (
          <div className="w-full h-full bg-linear-to-br from-muted to-muted/50 flex items-center justify-center transition-all duration-500 group-hover:scale-110">
            <ImagePlaceholder size={48} />
          </div>
        )}
      </div>

      {/* Conteúdo */}
      <div className="p-6 bg-muted/20 flex flex-col min-h-65">
        <div className="flex-1 flex flex-col">
          <div className="flex items-center gap-3 mb-3">
            <ProjectTypeBadge type={project.type} size="sm" />
          </div>

          <h4 className="text-lg font-bold text-foreground mb-3">
            {project.title}
          </h4>

          <p className="text-sm leading-relaxed mb-4 text-secondary line-clamp-3">
            {project.description}
          </p>

          {/* Tecnologias */}
          <div className="flex flex-wrap gap-2 mb-4">
            {project.technologies.slice(0, 3).map((tech) => (
              <span key={tech} className="font-mono text-xs text-secondary">
                {tech}
              </span>
            ))}
            {project.technologies.length > 3 && (
              <span className="font-mono text-xs text-secondary">
                +{project.technologies.length - 3}
              </span>
            )}
          </div>
        </div>
        <ProjectLinks
          githubUrl={project.githubUrl}
          liveUrl={project.liveUrl}
          size="sm"
        />
      </div>
    </div>
  );
};
