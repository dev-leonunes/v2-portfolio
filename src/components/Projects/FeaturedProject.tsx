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
        "flex flex-col gap-8 items-center",
        index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
      )}
    >
      {/* Imagem */}
      <div className="flex-1 relative group">
        <div className="relative rounded-lg overflow-hidden border-2 border-accent aspect-video">
          <div className="absolute inset-0 z-10 bg-accent/20 mix-blend-multiply transition-all duration-300 group-hover:bg-transparent" />

          {project.image ? (
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover grayscale group-hover:grayscale-0 transition-all duration-300"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          ) : (
            <div className="w-full h-full bg-linear-to-br from-muted to-muted/50 flex items-center justify-center grayscale group-hover:grayscale-0 transition-all duration-300">
              <ImagePlaceholder size={64} />
            </div>
          )}
        </div>
      </div>

      {/* Conteúdo */}
      <div className="flex-1">
        <div className="flex items-center gap-3 mb-3">
          <ProjectTypeBadge type={project.type} size="md" />
        </div>

        <h3 className="text-2xl font-bold mb-4 text-foreground">
          {project.title}
        </h3>

        <div className="p-6 rounded-lg mb-4 bg-muted/30">
          <p className="leading-relaxed text-secondary">
            {project.description}
          </p>
        </div>

        <div className="flex flex-wrap gap-3 mb-6">
          {project.technologies.map((tech) => (
            <span key={tech} className="font-mono text-sm text-secondary">
              {tech}
            </span>
          ))}
        </div>

        <ProjectLinks
          githubUrl={project.githubUrl}
          liveUrl={project.liveUrl}
          size="md"
        />
      </div>
    </div>
  );
};
