import { cn } from "@/lib/utils";
import { ReactNode } from "react";

type BadgeProps = {
  children: ReactNode;
  className?: string;
};

export const Badge = ({ children, className }: BadgeProps) => {
  return (
    <span className={cn("px-4 py-2 rounded-md font-mono text-sm text-accent bg-accent/20", className)}>
      {children}
    </span>
  );
};
