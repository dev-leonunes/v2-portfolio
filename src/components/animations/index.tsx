"use client";

import { motion, type Variants, useReducedMotion } from "framer-motion";
import { type ReactNode } from "react";

const EASE_OUT_EXPO: [number, number, number, number] = [0.22, 1, 0.36, 1];

interface FadeUpProps {
  children: ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
  once?: boolean;
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
}: FadeUpProps) => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount: 0.1 }}
      variants={fadeUpVariants}
      custom={{
        delay: shouldReduceMotion ? 0 : delay,
        duration: shouldReduceMotion ? Math.min(duration, 0.3) : duration,
        reduceMotion: shouldReduceMotion,
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

interface MountStaggerProps {
  children: ReactNode;
  staggerDelay?: number;
  delayChildren?: number;
  className?: string;
}

const mountStaggerVariants: Variants = {
  hidden: {},
  visible: (custom: { staggerDelay: number; delayChildren: number }) => ({
    transition: {
      staggerChildren: custom.staggerDelay,
      delayChildren: custom.delayChildren,
    },
  }),
};

export const MountStagger = ({
  children,
  staggerDelay = 0.08,
  delayChildren = 0,
  className,
}: MountStaggerProps) => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={mountStaggerVariants}
      custom={{
        staggerDelay: shouldReduceMotion ? 0 : staggerDelay,
        delayChildren: shouldReduceMotion ? 0 : delayChildren,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

interface SlideInSideProps {
  children: ReactNode;
  className?: string;
  duration?: number;
  distance?: number;
}

const slideInSideVariants: Variants = {
  hidden: (custom: { reduceMotion: boolean; distance: number }) => ({
    opacity: 0,
    x: custom.reduceMotion ? 0 : custom.distance,
  }),
  visible: (custom: { reduceMotion: boolean; duration: number }) => ({
    opacity: 1,
    x: 0,
    transition: {
      duration: custom.reduceMotion ? 0 : custom.duration,
      ease: EASE_OUT_EXPO,
    },
  }),
};

export const SlideInSide = ({
  children,
  className,
  duration = 0.5,
  distance = 22,
}: SlideInSideProps) => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      variants={slideInSideVariants}
      custom={{
        reduceMotion: shouldReduceMotion,
        duration,
        distance,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};
