type TechsBadgeProps = {
    tech: string;
}

export const TechsBadge = ({ tech }: TechsBadgeProps) => {
    return (
        <span className="badge text-sm px-3 py-1 rounded-lg">
            {tech}
        </span>
    );
}