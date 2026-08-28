import { TbBrandGithub } from "react-icons/tb";

export const ProjectLinks = ({
  projectTitle,
  githubUrl,
  liveUrl,
  size = "md",
}: {
  projectTitle: string;
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
          className={`inline-flex items-center gap-1.5 rounded-sm font-mono font-semibold text-accent underline decoration-accent/35 underline-offset-4 transition-[transform,opacity,text-decoration-color] duration-250 hover:-translate-y-0.5 hover:opacity-85 hover:decoration-accent/70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/70 focus-visible:ring-offset-2 focus-visible:ring-offset-background ${textSizeClass}`}
          aria-label={`Abrir repositório de ${projectTitle} no GitHub`}
        >
          <TbBrandGithub
            size={size === "sm" ? 16 : 18}
            aria-hidden="true"
          />
          GitHub
        </a>
      )}

      {liveUrl && (
        <a
          href={liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={`font-mono font-semibold text-accent underline decoration-accent/35 underline-offset-4 transition-[transform,opacity,text-decoration-color] duration-250 hover:-translate-y-0.5 hover:opacity-85 hover:decoration-accent/70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/70 focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-sm ${textSizeClass}`}
          aria-label={`Ver o projeto ${projectTitle} online`}
        >
          {`Ver${size === "md" ? " projeto" : ""} ->`}
        </a>
      )}
    </div>
  );
};
