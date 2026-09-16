import Image from "next/image";
import { Maximize2 } from "lucide-react";

import { type Project, type ProjectImage as ProjectImageData } from "@/constants";
import { cn } from "@/lib/utils";
import { ImagePlaceholder } from "./ImagePlaceholder";

interface ProjectImageProps {
  project: Pick<Project, "title" | "technologies" | "images">;
  onOpen: (imageIndex: number, trigger: HTMLButtonElement) => void;
  className?: string;
  compact?: boolean;
  sizes: string;
}

export const ProjectImage = ({
  project,
  onOpen,
  className,
  compact = false,
  sizes,
}: ProjectImageProps) => {
  const previewImage: ProjectImageData | undefined = project.images?.[0];
  const frameClassName = cn(
    "relative h-full w-full overflow-hidden",
    className,
  );

  if (!previewImage) {
    return (
      <div className={frameClassName}>
        <div className="flex h-full w-full items-center justify-center bg-linear-to-br from-muted to-muted/50 transition-transform duration-500 group-hover:scale-103">
          <ImagePlaceholder
            title={project.title}
            technologies={project.technologies}
            compact={compact}
          />
        </div>
      </div>
    );
  }

  return (
    <button
      type="button"
      className={cn(
        frameClassName,
        "group/image project-image-trigger block cursor-pointer border-0 bg-transparent p-0 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/80 focus-visible:ring-offset-2 focus-visible:ring-offset-background",
      )}
      onClick={(event) => onOpen(0, event.currentTarget)}
      aria-label={`Abrir galeria de imagens de ${project.title}`}
    >
      <Image
        src={previewImage.src}
        alt={previewImage.alt}
        fill
        className="object-cover transition-transform duration-500 group-hover:scale-103"
        sizes={sizes}
      />
      <span
        aria-hidden="true"
        className="project-image-action pointer-events-none absolute bottom-3 right-3 flex size-10 items-center justify-center rounded-full border border-accent/80 bg-background/90 text-accent opacity-100 shadow-sm transition-opacity duration-200 motion-reduce:transition-none"
      >
        <Maximize2 className="size-4" />
      </span>
    </button>
  );
};
