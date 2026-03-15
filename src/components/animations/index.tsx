"use client";

import { motion, type Variants, useReducedMotion } from "framer-motion";
import { type ReactNode, useSyncExternalStore } from "react";

const EASE_OUT_EXPO: [number, number, number, number] = [0.22, 1, 0.36, 1];

interface FadeUpProps {
  children: ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
  once?: boolean;
  disableOnMobile?: boolean;
}

const fadeUpVariants: Variants = {
  hidden: (custom: { reduceMotion: boolean }) => ({
    opacity: 0,
    y: custom.reduceMotion ? 0 : 28,
  }),
  visible: (custom: { delay: number; duration: number }) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: custom.delay,
      duration: custom.duration,
      ease: EASE_OUT_EXPO,
    },
  }),
};

export const FadeUp = ({
  children,
  delay = 0,
  duration = 0.68,
  className,
  once = true,
  disableOnMobile = false,
}: FadeUpProps) => {
  const shouldReduceMotion = useReducedMotion();
  const isMobile = useSyncExternalStore(
    (callback) => {
      if (typeof window === "undefined") {
        return () => {};
      }

      const mediaQuery = window.matchMedia("(max-width: 639px)");
      mediaQuery.addEventListener("change", callback);

      return () => mediaQuery.removeEventListener("change", callback);
    },
    () => {
      if (typeof window === "undefined") {
        return false;
      }

      return window.matchMedia("(max-width: 639px)").matches;
    },
    () => false,
  );
  const shouldDisableAnimation = disableOnMobile && isMobile;

  return (
    <motion.div
      initial={shouldDisableAnimation ? false : "hidden"}
      whileInView={shouldDisableAnimation ? undefined : "visible"}
      viewport={shouldDisableAnimation ? undefined : { once, amount: 0.1 }}
      variants={shouldDisableAnimation ? undefined : fadeUpVariants}
      custom={{
        delay:
          shouldDisableAnimation || shouldReduceMotion ? 0 : delay,
        duration:
          shouldDisableAnimation || shouldReduceMotion
            ? 0
            : duration,
        reduceMotion: shouldDisableAnimation || shouldReduceMotion,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

// Variante para containers com stagger nos filhos
interface StaggerContainerProps {
  children: ReactNode;
  staggerDelay?: number;
  className?: string;
  once?: boolean;
}

const staggerContainerVariants: Variants = {
  hidden: {},
  visible: (staggerDelay: number) => ({
    transition: {
      staggerChildren: staggerDelay,
    },
  }),
};

const staggerItemVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.56,
      ease: EASE_OUT_EXPO,
    },
  },
};

export const StaggerContainer = ({
  children,
  staggerDelay = 0.14,
  className,
  once = true,
}: StaggerContainerProps) => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount: 0.1 }}
      variants={staggerContainerVariants}
      custom={shouldReduceMotion ? 0 : staggerDelay}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export const StaggerItem = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <motion.div variants={staggerItemVariants} className={className}>
      {children}
    </motion.div>
  );
};

// FadeIn simples (sem movimento vertical)
interface FadeInProps {
  children: ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
  once?: boolean;
}

const fadeInVariants: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: (custom: { delay: number; duration: number }) => ({
    opacity: 1,
    transition: {
      delay: custom.delay,
      duration: custom.duration,
      ease: EASE_OUT_EXPO,
    },
  }),
};

export const FadeIn = ({
  children,
  delay = 0,
  duration = 0.62,
  className,
  once = true,
}: FadeInProps) => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount: 0.1 }}
      variants={fadeInVariants}
      custom={{
        delay: shouldReduceMotion ? 0 : delay,
        duration: shouldReduceMotion ? Math.min(duration, 0.28) : duration,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};
