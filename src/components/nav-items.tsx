import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "../lib/utils";

type NavItemProps = {
  href: string;
  label: string;
};

export const NavItem = ({ label, href }: NavItemProps) => {
  const pathname = usePathname();
  const isActive = pathname === href;
  return (
    <Link
      href={href}
      className="font-mono text-sm text-accent hover:opacity-80 transition-opacity"
    >
      <span className="text-accent">#</span> {label}
    </Link>
  );
};
