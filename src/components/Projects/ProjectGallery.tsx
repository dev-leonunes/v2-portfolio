"use client";

import Image from "next/image";
import {
  AlertCircle,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  ChevronUp,
  ImageOff,
} from "lucide-react";
import {
  type KeyboardEvent,
  type RefObject,
  type TouchEvent,
  useEffect,
  useRef,
  useState,
} from "react";
import { type Project } from "@/constants";
import { cn } from "@/lib/utils";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from "@/components/ui/dialog";

export type GalleryState = {
  projectIndex: number;
  imageIndex: number;
} | null;

interface ProjectGalleryProps {
  projects: Project[];
  state: GalleryState;
  onStateChange: (state: Exclude<GalleryState, null>) => void;
  onClose: () => void;
  originRef: RefObject<HTMLButtonElement | null>;
}

const navigationButtonClass =
  "inline-flex size-10 items-center justify-center rounded-md border border-border/80 bg-background/90 text-foreground shadow-sm transition-[background-color,border-color,color,opacity] hover:border-accent/70 hover:bg-accent/15 hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-35 motion-reduce:transition-none sm:size-11";

export const ProjectGallery = ({
  projects,
  state,
  onStateChange,
  onClose,
  originRef,
}: ProjectGalleryProps) => {
  const [imageError, setImageError] = useState(false);
  const touchStartRef = useRef<{ x: number; y: number } | null>(null);

  const activeProject = state ? projects[state.projectIndex] : undefined;
  const activeImages = activeProject?.images ?? [];
  const activeImage = state ? activeImages[state.imageIndex] : undefined;
  const isOpen = Boolean(activeProject && activeImage && state);

  useEffect(() => {
    if (
      state &&
      (!projects[state.projectIndex] ||
        !projects[state.projectIndex].images?.[state.imageIndex])
    ) {
      onClose();
    }
  }, [onClose, projects, state]);

  useEffect(() => {
    setImageError(false);
  }, [state?.imageIndex, state?.projectIndex, activeImage?.src]);

  if (!activeProject || !activeImage || !state) {
    return null;
  }

  const canGoToPreviousImage = state.imageIndex > 0;
  const canGoToNextImage = state.imageIndex < activeImages.length - 1;
  const canGoToPreviousProject = state.projectIndex > 0;
  const canGoToNextProject = state.projectIndex < projects.length - 1;

  const changeImage = (nextImageIndex: number) => {
    if (
      nextImageIndex < 0 ||
      nextImageIndex >= activeImages.length ||
      nextImageIndex === state.imageIndex
    ) {
      return;
    }

    onStateChange({
      projectIndex: state.projectIndex,
      imageIndex: nextImageIndex,
    });
  };

  const changeProject = (nextProjectIndex: number) => {
    if (
      nextProjectIndex < 0 ||
      nextProjectIndex >= projects.length ||
      nextProjectIndex === state.projectIndex
    ) {
      return;
    }

    onStateChange({
      projectIndex: nextProjectIndex,
      imageIndex: 0,
    });
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    const keyActions: Record<string, () => void> = {
      ArrowLeft: () => changeImage(state.imageIndex - 1),
      ArrowRight: () => changeImage(state.imageIndex + 1),
      ArrowUp: () => changeProject(state.projectIndex - 1),
      ArrowDown: () => changeProject(state.projectIndex + 1),
    };
    const action = keyActions[event.key];

    if (!action) {
      return;
    }

    event.preventDefault();
    action();
  };

  const handleTouchStart = (event: TouchEvent<HTMLDivElement>) => {
    const touch = event.touches[0];

    if (!touch) {
      return;
    }

    touchStartRef.current = { x: touch.clientX, y: touch.clientY };
  };

  const handleTouchEnd = (event: TouchEvent<HTMLDivElement>) => {
    const start = touchStartRef.current;
    const touch = event.changedTouches[0];
    touchStartRef.current = null;

    if (!start || !touch) {
      return;
    }

    const deltaX = touch.clientX - start.x;
    const deltaY = touch.clientY - start.y;
    const isHorizontalSwipe =
      Math.abs(deltaX) >= 48 && Math.abs(deltaX) > Math.abs(deltaY);

    if (!isHorizontalSwipe) {
      return;
    }

    changeImage(state.imageIndex + (deltaX > 0 ? -1 : 1));
  };

  return (
    <Dialog
      open={isOpen}
      onOpenChange={(open) => {
        if (!open) {
          onClose();
        }
      }}
    >
      <DialogContent
        className="flex h-auto max-h-[calc(100svh-2rem)] w-[calc(100%-2rem)] max-w-[96rem] flex-col gap-0 overflow-hidden rounded-xl border-border/80 bg-background/95 p-0 sm:h-[min(92svh,56rem)] sm:w-[calc(100%-3rem)]"
        onKeyDown={handleKeyDown}
        onCloseAutoFocus={(event) => {
          event.preventDefault();
          originRef.current?.focus();
        }}
      >
        <div className="border-b border-border/70 px-4 py-3 pr-14 sm:px-8 sm:py-5">
          <p className="font-mono text-[0.68rem] uppercase tracking-[0.16em] text-accent">
            Galeria de projetos
          </p>
          <DialogTitle className="mt-1 text-xl font-bold leading-tight sm:text-2xl">
            {activeProject.title}
          </DialogTitle>
          <DialogDescription className="sr-only">
            Visualização ampliada das imagens de {activeProject.title}. Use as
            setas esquerda e direita para trocar de imagem e as setas para
            cima e para baixo para trocar de projeto.
          </DialogDescription>
          <p
            className="mt-2 font-mono text-xs text-muted-foreground"
            aria-live="polite"
            aria-atomic="true"
          >
            Projeto {state.projectIndex + 1} de {projects.length}
            {activeImages.length > 1 && (
              <>
                {" · Imagem "}
                {state.imageIndex + 1} de {activeImages.length}
              </>
            )}
          </p>
        </div>

        <div
          className="relative aspect-video max-h-[calc(100svh-8rem)] w-full shrink-0 touch-pan-y bg-black/90 p-2 sm:h-full sm:max-h-none sm:aspect-auto sm:min-h-0 sm:flex-1 sm:p-8"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <div className="relative h-full w-full">
            {imageError ? (
              <div
                className="flex h-full w-full flex-col items-center justify-center gap-3 px-6 text-center text-slate-200"
                role="status"
              >
                <div className="flex size-12 items-center justify-center rounded-full border border-slate-500/80 bg-slate-900/70 text-slate-200">
                  <ImageOff className="size-5" aria-hidden="true" />
                </div>
                <div className="flex items-center gap-2 text-sm font-semibold">
                  <AlertCircle className="size-4" aria-hidden="true" />
                  Não foi possível carregar esta imagem.
                </div>
                <p className="max-w-sm text-sm text-slate-300">
                  Você pode fechar a galeria ou continuar navegando pelos
                  projetos disponíveis.
                </p>
              </div>
            ) : (
              <Image
                key={activeImage.src}
                src={activeImage.src}
                alt={activeImage.alt}
                fill
                className="object-contain"
                sizes="(max-width: 640px) 92vw, 88vw"
                onError={() => setImageError(true)}
              />
            )}
          </div>

          {activeImages.length > 1 && (
            <div className="pointer-events-none absolute inset-x-3 top-1/2 flex -translate-y-1/2 items-center justify-between sm:inset-x-6">
              <button
                type="button"
                className={cn(
                  navigationButtonClass,
                  "pointer-events-auto",
                  projects.length > 1 && "mr-14 sm:mr-16",
                )}
                onClick={() => changeImage(state.imageIndex - 1)}
                disabled={!canGoToPreviousImage}
                aria-label="Ver imagem anterior"
              >
                <ChevronLeft className="size-5" aria-hidden="true" />
              </button>
              <button
                type="button"
                className={cn(navigationButtonClass, "pointer-events-auto")}
                onClick={() => changeImage(state.imageIndex + 1)}
                disabled={!canGoToNextImage}
                aria-label="Ver próxima imagem"
              >
                <ChevronRight className="size-5" aria-hidden="true" />
              </button>
            </div>
          )}

          {projects.length > 1 && (
            <div className="pointer-events-none absolute right-3 top-1/2 flex -translate-y-1/2 flex-col gap-2 sm:right-6">
              <button
                type="button"
                className={cn(navigationButtonClass, "pointer-events-auto")}
                onClick={() => changeProject(state.projectIndex - 1)}
                disabled={!canGoToPreviousProject}
                aria-label="Ver projeto anterior"
              >
                <ChevronUp className="size-5" aria-hidden="true" />
              </button>
              <button
                type="button"
                className={cn(navigationButtonClass, "pointer-events-auto")}
                onClick={() => changeProject(state.projectIndex + 1)}
                disabled={!canGoToNextProject}
                aria-label="Ver próximo projeto"
              >
                <ChevronDown className="size-5" aria-hidden="true" />
              </button>
            </div>
          )}
        </div>

        <p className="sr-only">
          Use as setas esquerda e direita para navegar pelas imagens e as setas
          para cima e para baixo para navegar pelos projetos.
        </p>
      </DialogContent>
    </Dialog>
  );
};
