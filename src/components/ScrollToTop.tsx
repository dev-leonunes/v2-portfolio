"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { ArrowUp } from "lucide-react";

export const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      const heroHeight = window.innerHeight * 0.7;

      if (window.scrollY > heroHeight) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div
      className={cn(
        "fixed bottom-8 right-8 z-50",
        "transition-all duration-300",
        isVisible
          ? "translate-x-0 opacity-100"
          : "translate-x-20 opacity-0 pointer-events-none"
      )}
    >
      <div className="relative w-12 h-12 group">
        <div
          className={cn(
            "absolute inset-0 w-full h-full border-2 border-accent rounded-lg",
            "translate-x-2 translate-y-2 z-0",
            "transition-all duration-300 ease-out",
            "opacity-0 group-hover:opacity-100",
            "group-hover:translate-x-3 group-hover:translate-y-3"
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
            "z-10"
          )}
          aria-label="Voltar ao topo"
        >
          <ArrowUp size={18} strokeWidth={2.5} />
        </button>
      </div>
    </div>
  );
};
