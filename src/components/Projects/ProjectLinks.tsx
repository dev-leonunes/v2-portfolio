import { TbBrandGithub } from "react-icons/tb";

export const ProjectLinks = ({
  githubUrl,
  liveUrl,
  size = "md",
}: {
  githubUrl?: string;
  liveUrl?: string;
  size?: "sm" | "md";
}) => (
  <div className="flex items-center gap-4">
    {githubUrl && (
      <a
        href={githubUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="text-accent hover:opacity-70 transition-opacity"
      >
        <TbBrandGithub size={size === "sm" ? 20 : 24} />
      </a>
    )}
    {liveUrl && (
      <a
        href={liveUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="font-mono text-sm text-accent hover:opacity-70 transition-opacity"
      >
        Ver{size === "md" && " projeto"} →
      </a>
    )}
  </div>
);
