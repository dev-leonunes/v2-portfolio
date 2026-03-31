"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { ArrowUp } from "lucide-react";

export const ScrollToTop = () => {
  const BASE_BOTTOM = 32;
  const RIGHT_OFFSET = 32;
  const BUTTON_SIZE = 48;
  const [isVisible, setIsVisible] = useState(false);
  const [isDockedToFooter, setIsDockedToFooter] = useState(false);
  const [dockTop, setDockTop] = useState<number | null>(null);

  useEffect(() => {
    const handleVisibility = () => {
      const heroHeight = window.innerHeight * 0.7;
      const nextVisible = window.scrollY > heroHeight;
      setIsVisible((prev) => (prev === nextVisible ? prev : nextVisible));
    };

    handleVisibility();

    window.addEventListener("scroll", handleVisibility, { passive: true });
    window.addEventListener("resize", handleVisibility);

    return () => {
      window.removeEventListener("scroll", handleVisibility);
      window.removeEventListener("resize", handleVisibility);
    };
  }, []);

  useEffect(() => {
    const footer = document.getElementById("site-footer");

    if (!footer) {
      return;
    }

    const updateDockTop = () => {
      const nextDockTop = footer.offsetTop - BUTTON_SIZE - BASE_BOTTOM;
      setDockTop((prev) => (prev === nextDockTop ? prev : nextDockTop));
    };

    updateDockTop();

    const footerObserver = new IntersectionObserver(
      ([entry]) => {
        setIsDockedToFooter(entry.isIntersecting);
      },
      {
        root: null,
        threshold: 0,
      },
    );

    footerObserver.observe(footer);

    const resizeObserver = new ResizeObserver(updateDockTop);
    resizeObserver.observe(footer);

    window.addEventListener("resize", updateDockTop);

    return () => {
      footerObserver.disconnect();
      resizeObserver.disconnect();
      window.removeEventListener("resize", updateDockTop);
    };
  }, []);

  const dockedStyle =
    isDockedToFooter && dockTop !== null
      ? { top: `${dockTop}px`, right: `${RIGHT_OFFSET}px` }
      : { bottom: `${BASE_BOTTOM}px`, right: `${RIGHT_OFFSET}px` };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div
      className={cn(
        isDockedToFooter && dockTop !== null ? "absolute z-50" : "fixed z-50",
        "transition duration-300",
        isVisible
          ? "translate-x-0 opacity-100"
          : "translate-x-20 opacity-0 pointer-events-none",
      )}
      style={dockedStyle}
    >
      <div className="relative w-12 h-12 group">
        <div
          className={cn(
            "absolute inset-0 w-full h-full border-2 border-accent rounded-lg",
            "translate-x-2 translate-y-2 z-0",
            "transition-all duration-300 ease-out",
            "opacity-0 group-hover:opacity-100",
            "group-hover:translate-x-3 group-hover:translate-y-3",
          )}
        ></div>

        <button
          onClick={scrollToTop}
          className={cn(
            "absolute inset-0 w-full h-12 rounded-lg",
            "bg-accent text-accent-foreground",
            "border-2 border-accent",
            "flex items-center justify-center cursor-pointer",
            "transition-transform duration-300 ease-out",
            "focus:outline-none",
            "group-hover:-translate-x-1 group-hover:-translate-y-1",
            "z-10",
          )}
          aria-label="Voltar ao topo"
        >
          <ArrowUp size={18} strokeWidth={2.5} />
        </button>
      </div>
    </div>
  );
};
