"use client";

import { motion, type Variants } from "framer-motion";
import { type ReactNode } from "react";

interface FadeUpProps {
  children: ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
  once?: boolean;
}

const fadeUpVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: (custom: { delay: number; duration: number }) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: custom.delay,
      duration: custom.duration,
      ease: [0.645, 0.045, 0.355, 1],
    },
  }),
};

export const FadeUp = ({
  children,
  delay = 0,
  duration = 0.5,
  className,
  once = true,
}: FadeUpProps) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount: 0.1 }}
      variants={fadeUpVariants}
      custom={{ delay, duration }}
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
      duration: 0.5,
      ease: [0.645, 0.045, 0.355, 1],
    },
  },
};

export const StaggerContainer = ({
  children,
  staggerDelay = 0.1,
  className,
  once = true,
}: StaggerContainerProps) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount: 0.1 }}
      variants={staggerContainerVariants}
      custom={staggerDelay}
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
      ease: [0.645, 0.045, 0.355, 1],
    },
  }),
};

export const FadeIn = ({
  children,
  delay = 0,
  duration = 0.5,
  className,
  once = true,
}: FadeInProps) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount: 0.1 }}
      variants={fadeInVariants}
      custom={{ delay, duration }}
      className={className}
    >
      {children}
    </motion.div>
  );
};
