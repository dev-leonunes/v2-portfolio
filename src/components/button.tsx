import { ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>

export const Button = ({ children, className, ...props }: ButtonProps) => {
    return (
        <button
            className={cn(
                'py-3 px-4 rounded-lg flex items-center justify-center gap-2',
                className
            )}
            {...props}
        >
            {children}
        </button>
    );
}