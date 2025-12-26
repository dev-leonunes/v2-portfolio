"use client";

import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

export const ThemeToggle = () => {
  const [isDark, setIsDark] = useState(true);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    const savedTheme = localStorage.getItem("theme");

    if (savedTheme) {
      const isThemeDark = savedTheme === "dark";
      setIsDark(isThemeDark);
      applyTheme(isThemeDark);
    } else {
      const prefersDark = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;
      setIsDark(prefersDark);
      applyTheme(prefersDark);
    }
  }, []);

  const applyTheme = (dark: boolean) => {
    const root = document.documentElement;
    root.classList.remove("light", "dark");
    root.classList.add(dark ? "dark" : "light");
  };

  const toggleTheme = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);
    applyTheme(newTheme);
    localStorage.setItem("theme", newTheme ? "dark" : "light");
  };

  if (!mounted) {
    return <div className="w-6 h-6" />;
  }

  return (
    <button
      onClick={toggleTheme}
      className="text-accent hover:scale-110 transition-transform duration-200"
      aria-label="Alternar tema"
    >
      {isDark ? <Sun size={20} /> : <Moon size={20} />}
    </button>
  );
};
