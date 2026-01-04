"use client";

import Link from "next/link";
import Image from "next/image";
import { NavItem } from "./nav-items";
import { ThemeToggle } from "./theme-toggle";

const NAV_ITEMS = [
  { href: "#about", label: "Sobre" },
  { href: "#experience", label: "Experiências" },
  { href: "#projects", label: "Projetos" },
];

export const Header = () => {
  return (
    <header className="absolute top-0 w-full z-10 h-24 flex items-center">
      <div className="container mx-auto px-6 lg:px-12 max-w-7xl flex items-center justify-between">
        <Link href="/">
          <Image width={58} height={49} src="/next.svg" alt="Logo" />
        </Link>

        <nav className="flex items-center gap-4 sm:gap-10">
          {NAV_ITEMS.map((item, index) => (
            <NavItem {...item} index={index} key={item.label} />
          ))}
          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
};
