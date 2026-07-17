"use client";

import Link from "next/link";
import Image from "next/image";
import { NavItem } from "./nav-items";
import { ThemeToggle } from "./theme-toggle";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { type CSSProperties, type ReactNode, useEffect, useState } from "react";
import { Menu } from "lucide-react";

const NAV_ITEMS = [
  { href: "#about", label: "Sobre" },
  { href: "#experience", label: "Experiências" },
  { href: "#projects", label: "Projetos" },
];

const HeaderSlideIn = ({
  children,
  delay = 0,
  duration = 0.5,
  distance = 22,
}: {
  children: ReactNode;
  delay?: number;
  duration?: number;
  distance?: number;
}) => (
  <div
    className="header-slide-in"
    style={
      {
        "--header-animation-delay": `${delay}s`,
        "--header-animation-duration": `${duration}s`,
        "--header-animation-distance": `${distance}px`,
      } as CSSProperties
    }
  >
    {children}
  </div>
);

export const Header = () => {
  const [open, setOpen] = useState(false);
  const [isDarkTheme, setIsDarkTheme] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const root = document.documentElement;
    const updateTheme = () => {
      setIsDarkTheme(root.classList.contains("dark"));
    };

    updateTheme();

    const observer = new MutationObserver(updateTheme);
    observer.observe(root, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    const onScroll = () => {
      const nextIsScrolled = window.scrollY > 16;
      setIsScrolled((previous) =>
        previous === nextIsScrolled ? previous : nextIsScrolled,
      );
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const updateActiveSection = () => {
      const sections = NAV_ITEMS.map((item) =>
        document.querySelector(item.href),
      ).filter(Boolean) as HTMLElement[];

      if (!sections.length) return;

      const probe = window.scrollY + window.innerHeight * 0.38;
      let current = "";

      for (const section of sections) {
        if (probe >= section.offsetTop) {
          current = section.id;
        }
      }

      setActiveSection((previous) =>
        previous === current ? previous : current,
      );
    };

    const rafId = requestAnimationFrame(updateActiveSection);
    window.addEventListener("scroll", updateActiveSection, { passive: true });
    window.addEventListener("resize", updateActiveSection);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("scroll", updateActiveSection);
      window.removeEventListener("resize", updateActiveSection);
    };
  }, []);

  return (
    <header
      className={[
        "fixed top-0 w-full z-40 h-16 lg:h-24 flex items-center transition-[background-color,box-shadow] duration-300",
        isScrolled
          ? "bg-background/82 backdrop-blur-md shadow-[0_8px_30px_-24px_rgba(0,0,0,0.85)]"
          : "bg-transparent",
      ].join(" ")}
    >
      <div className="container mx-auto px-6 lg:px-12 max-w-7xl flex items-center justify-between">
        <div className="hidden lg:block">
          <HeaderSlideIn distance={-24} duration={0.58}>
            <Link href="/">
              <Image
                width={131}
                height={114}
                src={isDarkTheme ? "/Logo-dark.webp" : "/Logo-light.webp"}
                alt="Logo"
                className="h-7 w-auto lg:h-8"
                priority
              />
            </Link>
          </HeaderSlideIn>
        </div>

        <Link href="/" className="lg:hidden">
          <Image
            width={131}
            height={114}
            src={isDarkTheme ? "/Logo-dark.webp" : "/Logo-light.webp"}
            alt="Logo"
            className="h-7 w-auto lg:h-8"
            priority
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-10">
          {NAV_ITEMS.map((item, index) => (
            <HeaderSlideIn key={item.label} delay={0.05 + index * 0.09}>
              <NavItem
                {...item}
                index={index}
                active={activeSection === item.href.slice(1)}
              />
            </HeaderSlideIn>
          ))}
          <HeaderSlideIn delay={0.32} duration={0.56} distance={26}>
            <ThemeToggle />
          </HeaderSlideIn>
        </div>

        {/* Mobile Navigation */}
        <div className="flex lg:hidden">
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="text-accent hover:bg-accent/10 h-12 w-12 rounded-lg"
                aria-label="Abrir menu de navegacao"
              >
                <Menu className="h-5! w-5!" />
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="w-70 border-l border-border/80 bg-background/95 backdrop-blur-xl"
            >
              <SheetTitle className="sr-only">Menu</SheetTitle>
              <nav className="flex flex-col gap-6 mt-8">
                {NAV_ITEMS.map((item, index) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className={[
                      "font-mono text-base transition-[color,background-color] py-2 px-3 rounded-md",
                      activeSection === item.href.slice(1)
                        ? "bg-accent/15 text-accent"
                        : "text-secondary hover:text-accent hover:bg-accent/10",
                    ].join(" ")}
                    aria-current={
                      activeSection === item.href.slice(1)
                        ? "location"
                        : undefined
                    }
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
