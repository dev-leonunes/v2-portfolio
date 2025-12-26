type TechsBadgeProps = {
  tech: string;
};

export const TechsBadge = ({ tech }: TechsBadgeProps) => {
  return (
    <span className="text-[#22d4fd] bg-[#233554] text-sm font-normal leading-[1.3] px-[10px] py-[2px] rounded-lg mt-[10px] font-mono">
      {tech}
    </span>
  );
};
