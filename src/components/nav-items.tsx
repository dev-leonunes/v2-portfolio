import Link from "next/link";

type NavItemProps = {
  href: string;
  label: string;
};

export const NavItem = ({ label, href }: NavItemProps) => {
  return (
    <Link
      href={href}
      className="font-mono text-sm text-accent hover:opacity-80 transition-opacity"
    >
      <span className="text-accent">#</span> {label}
    </Link>
  );
};
