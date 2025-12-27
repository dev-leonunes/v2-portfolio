import Link from "next/link";

type NavItemProps = {
  href: string;
  label: string;
  index: number;
};

export const NavItem = ({ label, href, index }: NavItemProps) => {
  return (
    <Link
      href={href}
      className="font-mono text-sm text-accent hover:opacity-80 transition-opacity"
    >
      <span className="text-accent">{String(index + 1).padStart(2, "0")}.</span> {label}
    </Link>
  );
};
