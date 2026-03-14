import { cn } from "@/lib/utils";
import { type ProjectType } from "@/constants";

const getTypeLabel = (type: ProjectType) => {
  return type === "personal" ? "Projeto Pessoal" : "Freela";
};

export const ProjectTypeBadge = ({
  type,
  size = "md",
}: {
  type: ProjectType;
  size?: "sm" | "md";
}) => (
  <span
    className={cn(
      "rounded-full font-mono bg-accent/15 text-accent border border-accent/30 tracking-wide",
      size === "sm" ? "px-2 py-1 text-[11px]" : "px-3 py-1 text-xs",
    )}
  >
    {getTypeLabel(type)}
  </span>
);
