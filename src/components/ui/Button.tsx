import { forwardRef, type ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

type ButtonProps = ComponentProps<"button"> & {
  variant?: "primary" | "secondary" | "outline";
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", ...props }, ref) => {
    const baseStyles =
      "inline-flex items-center justify-center rounded-xl text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-bg disabled:pointer-events-none disabled:opacity-50";

    const variants = {
      primary:
        "bg-primary text-primary-foreground hover:bg-primary-2 shadow-sm border border-transparent",
      secondary:
        "bg-surface-2 text-foreground hover:bg-surface border border-border/70",
      outline:
        "border border-border/70 bg-transparent text-foreground hover:bg-surface-2",
    };

    return (
      <button
        ref={ref}
        className={twMerge(baseStyles, variants[variant], className)}
        {...props}
      />
    );
  },
);
Button.displayName = "Button";
