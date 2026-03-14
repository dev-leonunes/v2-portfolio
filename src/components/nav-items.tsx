import Link from "next/link";

type NavItemProps = {
  href: string;
  label: string;
  index: number;
  active?: boolean;
};

export const NavItem = ({ label, href, index, active = false }: NavItemProps) => {
  return (
    <Link
      href={href}
      className={[
        "relative font-mono text-sm transition-all duration-250",
        "after:absolute after:-bottom-1.5 after:left-0 after:h-px after:bg-accent after:transition-all after:duration-300",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/60 rounded-sm",
        active
          ? "text-accent after:w-full"
          : "text-secondary after:w-0 hover:text-accent hover:-translate-y-0.5 hover:after:w-full",
      ].join(" ")}
      aria-current={active ? "page" : undefined}
    >
      <span className="text-accent">{String(index + 1).padStart(2, "0")}.</span> {label}
    </Link>
  );
};
