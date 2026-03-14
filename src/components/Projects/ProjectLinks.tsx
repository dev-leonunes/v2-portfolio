import { TbBrandGithub } from "react-icons/tb";

export const ProjectLinks = ({
  githubUrl,
  liveUrl,
  size = "md",
}: {
  githubUrl?: string;
  liveUrl?: string;
  size?: "sm" | "md";
}) => {
  if (!githubUrl && !liveUrl) {
    return null;
  }

  const textSizeClass = size === "sm" ? "text-sm" : "text-base";

  return (
    <div className="flex items-center gap-4 flex-wrap">
      {githubUrl && (
        <a
          href={githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={`inline-flex items-center gap-1.5 rounded-sm font-mono font-semibold text-accent underline decoration-accent/35 underline-offset-4 transition-all duration-250 hover:-translate-y-0.5 hover:opacity-85 hover:decoration-accent/70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/70 ${textSizeClass}`}
          aria-label="Abrir repositório no GitHub"
        >
          <TbBrandGithub size={size === "sm" ? 16 : 18} />
          GitHub
        </a>
      )}

      {liveUrl && (
        <a
          href={liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={`font-mono font-semibold text-accent underline decoration-accent/35 underline-offset-4 transition-all duration-250 hover:-translate-y-0.5 hover:opacity-85 hover:decoration-accent/70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/70 rounded-sm ${textSizeClass}`}
        >
          {`Ver${size === "md" ? " projeto" : ""} ->`}
        </a>
      )}
    </div>
  );
};
