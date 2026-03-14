import { cn } from "@/lib/utils";
import { Braces, Database, ImageOff, ServerCog } from "lucide-react";

const BACKEND_TECH_REGEX =
  /node|express|nestjs|adonis|api|postgres|mysql|mongodb|typeorm|knex|jwt|docker|redis/i;

const getIsBackendProject = (technologies: string[]) =>
  technologies.some((tech) => BACKEND_TECH_REGEX.test(tech));

export const ImagePlaceholder = ({
  title,
  technologies,
  compact = false,
}: {
  title: string;
  technologies: string[];
  compact?: boolean;
}) => {
  const isBackendProject = getIsBackendProject(technologies);
  const previewTechs = technologies.slice(0, compact ? 2 : 3);

  if (isBackendProject) {
    return (
      <div className="relative h-full w-full overflow-hidden bg-[radial-gradient(circle_at_15%_15%,color-mix(in_oklab,var(--accent)_25%,transparent),transparent_55%),linear-gradient(135deg,color-mix(in_oklab,var(--background)_76%,black_24%),color-mix(in_oklab,var(--background)_88%,var(--accent)_12%))]">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,color-mix(in_oklab,var(--border)_45%,transparent)_1px,transparent_1px),linear-gradient(to_bottom,color-mix(in_oklab,var(--border)_45%,transparent)_1px,transparent_1px)] bg-size-[28px_28px] opacity-30" />
        <div className="relative z-10 h-full w-full px-4 py-3 sm:px-5 sm:py-4 flex flex-col justify-between">
          <div className="inline-flex w-fit items-center gap-2 rounded-full border border-accent/45 bg-accent/10 px-3 py-1">
            <ServerCog className="size-3.5 text-accent" aria-hidden="true" />
            <span className="font-mono text-[0.68rem] tracking-[0.14em] uppercase text-accent">
              Back-end
            </span>
          </div>

          <div className="space-y-3">
            {!compact && (
              <p className="line-clamp-1 text-xs font-mono text-foreground/90">
                {title}
              </p>
            )}
            <div className="flex items-center gap-2 text-muted-foreground">
              <Database className="size-4" aria-hidden="true" />
              <Braces className="size-4" aria-hidden="true" />
              <span className="text-[0.68rem] font-mono uppercase tracking-[0.12em]">
                API + Dados
              </span>
            </div>

            <div className="flex flex-wrap gap-1.5">
              {previewTechs.map((tech) => (
                <span
                  key={tech}
                  className="rounded-md border border-border/70 bg-background/35 px-2 py-0.5 text-[0.65rem] font-mono text-muted-foreground"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      className={cn(
        "relative h-full w-full overflow-hidden",
        "bg-[radial-gradient(circle_at_20%_20%,color-mix(in_oklab,var(--accent)_18%,transparent),transparent_58%),linear-gradient(150deg,color-mix(in_oklab,var(--background)_80%,black_20%),color-mix(in_oklab,var(--muted)_75%,var(--background)_25%))]",
      )}
    >
      <div className="absolute inset-0 bg-[linear-gradient(120deg,transparent_0%,transparent_42%,color-mix(in_oklab,var(--foreground)_8%,transparent)_52%,transparent_62%)]" />
      <div className="relative z-10 flex h-full w-full flex-col items-center justify-center gap-3 text-muted-foreground">
        <ImageOff className="size-8 opacity-70" aria-hidden="true" />
        <span className="font-mono text-[0.7rem] uppercase tracking-[0.14em]">
          Preview indisponivel
        </span>
      </div>
    </div>
  );
};
