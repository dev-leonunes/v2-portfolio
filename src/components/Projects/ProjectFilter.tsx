import { cn } from "@/lib/utils";
import { type ProjectType } from "@/constants";
import { Filter } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const FILTER_OPTIONS: { value: ProjectType | "all"; label: string }[] = [
  { value: "all", label: "Todos" },
  { value: "personal", label: "Projetos Pessoais" },
  { value: "freelance", label: "Freelas" },
];

const isFilterValue = (value: string): value is ProjectType | "all" =>
  FILTER_OPTIONS.some((option) => option.value === value);

export const ProjectFilter = ({
  filterType,
  onFilterChange,
  resultCount,
}: {
  filterType: ProjectType | "all";
  onFilterChange: (type: ProjectType | "all") => void;
  resultCount: number;
}) => {
  const currentLabel =
    FILTER_OPTIONS.find((opt) => opt.value === filterType)?.label || "Todos";

  return (
    <DropdownMenu modal={false}>
      <DropdownMenuTrigger asChild>
        <button
          type="button"
          className={cn(
            "flex items-center gap-2 px-4 py-2 border border-accent/50 rounded-lg",
            "text-accent font-mono text-sm bg-background/35",
            "hover:bg-accent/8 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/70 focus-visible:ring-offset-2 focus-visible:ring-offset-background",
          )}
          aria-label={`Filtrar projetos: ${currentLabel}`}
        >
          <Filter size={16} />
          {currentLabel}
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-52">
        <DropdownMenuRadioGroup
          value={filterType}
          onValueChange={(value) => {
            if (isFilterValue(value)) {
              onFilterChange(value);
            }
          }}
          aria-label="Filtrar projetos por tipo"
        >
          {FILTER_OPTIONS.map((option) => (
            <DropdownMenuRadioItem
              key={option.value}
              value={option.value}
              className={cn(
                "cursor-pointer font-mono",
                filterType === option.value && "text-accent bg-accent/5",
              )}
            >
              {option.label}
            </DropdownMenuRadioItem>
          ))}
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
      <p className="sr-only" aria-live="polite" aria-atomic="true">
        {currentLabel}: {resultCount === 1
          ? "1 projeto encontrado"
          : `${resultCount} projetos encontrados`}.
      </p>
    </DropdownMenu>
  );
};
