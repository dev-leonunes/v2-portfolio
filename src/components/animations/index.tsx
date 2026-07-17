"use client";

import {
  type CSSProperties,
  type ReactNode,
  useEffect,
  useRef,
  useState,
} from "react";

type RevealVariant = "up" | "fade";

interface RevealProps {
  children: ReactNode;
  delay?: number;
  duration?: number;
  distance?: number;
  variant?: RevealVariant;
  className?: string;
}

export const AnimationReady = () => {
  useEffect(() => {
    document.documentElement.dataset.animationsReady = "true";

    return () => {
      delete document.documentElement.dataset.animationsReady;
    };
  }, []);

  return null;
};

export const Reveal = ({
  children,
  delay = 0,
  duration = 0.68,
  distance = 28,
  variant = "up",
  className,
}: RevealProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isArmed, setIsArmed] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const element = ref.current;

    if (!element || element.getBoundingClientRect().top < window.innerHeight) {
      return;
    }

    setIsArmed(true);
  }, []);

  useEffect(() => {
    if (!isArmed) {
      return;
    }

    const element = ref.current;

    if (!element) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) {
          return;
        }

        setIsVisible(true);
        observer.disconnect();
      },
      { threshold: 0.1 },
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [isArmed]);

  const style = {
    "--reveal-delay": `${delay}s`,
    "--reveal-duration": `${duration}s`,
    "--reveal-distance": `${distance}px`,
  } as CSSProperties;

  return (
    <div
      ref={ref}
      className={`reveal reveal--${variant}${className ? ` ${className}` : ""}`}
      data-reveal-armed={isArmed || undefined}
      data-reveal-visible={isVisible || undefined}
      style={style}
    >
      {children}
    </div>
  );
};
