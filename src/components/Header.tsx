"use client";

import Link from "next/link";
import Image from "next/image";
import { NavItem } from "./nav-items";
import { ThemeToggle } from "./theme-toggle";
import { MountStagger, SlideInSide } from "@/components/animations";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { Menu } from "lucide-react";

const NAV_ITEMS = [
  { href: "#about", label: "Sobre" },
  { href: "#experience", label: "Experiências" },
  { href: "#projects", label: "Projetos" },
];

export const Header = () => {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [isDarkTheme, setIsDarkTheme] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    setMounted(true);
  }, []);

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
    const onScroll = () => setIsScrolled(window.scrollY > 16);

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

      setActiveSection(current);
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
        "fixed top-0 w-full z-40 h-16 lg:h-24 flex items-center transition-all duration-300",
        isScrolled
          ? "bg-background/82 backdrop-blur-md shadow-[0_8px_30px_-24px_rgba(0,0,0,0.85)]"
          : "bg-transparent",
      ].join(" ")}
    >
      <div className="container mx-auto px-6 lg:px-12 max-w-7xl flex items-center justify-between">
        <MountStagger className="hidden lg:block">
          <SlideInSide distance={-24} duration={0.58}>
            <Link href="/">
              <Image
                width={96}
                height={42}
                src={isDarkTheme ? "/Logo-dark.png" : "/Logo-light.png"}
                alt="Logo"
                className="h-7 w-auto lg:h-8"
                priority
              />
            </Link>
          </SlideInSide>
        </MountStagger>

        <Link href="/" className="lg:hidden">
          <Image
            width={96}
            height={42}
            src={isDarkTheme ? "/Logo-dark.png" : "/Logo-light.png"}
            alt="Logo"
            className="h-7 w-auto lg:h-8"
            priority
          />
        </Link>

        {/* Desktop Navigation */}
        <MountStagger
          className="hidden lg:flex items-center gap-10"
          staggerDelay={0.09}
          delayChildren={0.05}
        >
          {NAV_ITEMS.map((item, index) => (
            <SlideInSide key={item.label}>
              <NavItem
                {...item}
                index={index}
                active={activeSection === item.href.slice(1)}
              />
            </SlideInSide>
          ))}
          <SlideInSide duration={0.56} distance={26}>
            <ThemeToggle />
          </SlideInSide>
        </MountStagger>

        {/* Mobile Navigation */}
        <div className="flex lg:hidden">
          {mounted ? (
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
                        "font-mono text-base transition-all py-2 px-3 rounded-md",
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
          ) : (
            <Button
              variant="ghost"
              size="icon"
              className="text-accent h-12 w-12 rounded-lg opacity-0 pointer-events-none"
              aria-hidden="true"
              tabIndex={-1}
            >
              <Menu className="h-5! w-5!" />
            </Button>
          )}
        </div>
      </div>
    </header>
  );
};
