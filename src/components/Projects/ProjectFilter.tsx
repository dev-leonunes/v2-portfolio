import { cn } from "@/lib/utils";
import { type ProjectType } from "@/constants";
import { Filter } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const FILTER_OPTIONS: { value: ProjectType | "all"; label: string }[] = [
  { value: "all", label: "Todos" },
  { value: "personal", label: "Projetos Pessoais" },
  { value: "freelance", label: "Freelas" },
];

export const ProjectFilter = ({
  filterType,
  onFilterChange,
}: {
  filterType: ProjectType | "all";
  onFilterChange: (type: ProjectType | "all") => void;
}) => {
  const currentLabel =
    FILTER_OPTIONS.find((opt) => opt.value === filterType)?.label || "Todos";

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button
          className={cn(
            "flex items-center gap-2 px-4 py-2 border-2 border-accent rounded-lg",
            "text-accent font-mono text-sm bg-transparent",
            "hover:bg-accent/5 transition-colors"
          )}
        >
          <Filter size={16} />
          {currentLabel}
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-48">
        {FILTER_OPTIONS.map((option) => (
          <DropdownMenuItem
            key={option.value}
            onClick={() => onFilterChange(option.value)}
            className={cn(
              "cursor-pointer font-mono",
              filterType === option.value && "text-accent bg-accent/5"
            )}
          >
            {option.label}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
