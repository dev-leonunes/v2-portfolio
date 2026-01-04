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
      "rounded-full font-mono bg-accent/20 text-accent",
      size === "sm" ? "px-2 py-1 text-xs" : "px-3 py-1 text-xs"
    )}
  >
    {getTypeLabel(type)}
  </span>
);
