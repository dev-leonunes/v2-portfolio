"use client";

import Link from "next/link";
import Image from "next/image";
import { NavItem } from "./nav-items";
import { ThemeToggle } from "./theme-toggle";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Menu } from "lucide-react";

const NAV_ITEMS = [
  { href: "#about", label: "Sobre" },
  { href: "#experience", label: "Experiências" },
  { href: "#projects", label: "Projetos" },
];

export const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="absolute top-0 w-full z-10 h-16 lg:h-24 flex items-center">
      <div className="container mx-auto px-6 lg:px-12 max-w-7xl flex items-center justify-between">
        <Link href="/">
          <Image width={58} height={49} src="/next.svg" alt="Logo" />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-10">
          {NAV_ITEMS.map((item, index) => (
            <NavItem {...item} index={index} key={item.label} />
          ))}
          <ThemeToggle />
        </nav>

        {/* Mobile Navigation */}
        <div className="flex lg:hidden">
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="text-accent hover:bg-accent/10 h-12 w-12"
              >
                <Menu className="h-7 w-7" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-70">
              <nav className="flex flex-col gap-6 mt-8">
                {NAV_ITEMS.map((item, index) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="font-mono text-base text-accent hover:opacity-80 transition-opacity py-2"
                  >
                    <span className="text-accent">
                      {String(index + 1).padStart(2, "0")}.
                    </span>{" "}
                    {item.label}
                  </Link>
                ))}
                <div className="pt-4 border-t border-border">
                  <ThemeToggle />
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};
