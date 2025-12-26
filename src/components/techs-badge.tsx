type TechsBadgeProps = {
  tech: string;
};

export const TechsBadge = ({ tech }: TechsBadgeProps) => {
  return (
    <span className="px-4 py-2 rounded-md font-mono text-sm text-accent bg-accent/20">
      {tech}
    </span>
  );
};
