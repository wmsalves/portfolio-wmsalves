import { forwardRef, type ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

type ButtonProps = ComponentProps<"button"> & {
  variant?: "primary" | "secondary" | "outline";
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", ...props }, ref) => {
    const baseStyles =
      "inline-flex items-center justify-center rounded-xl text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-400 disabled:pointer-events-none disabled:opacity-50";

    const variants = {
      primary:
        "bg-purple-600 text-white hover:bg-purple-700 dark:hover:bg-purple-500 shadow-sm",
      secondary:
        "bg-purple-100 text-purple-900 hover:bg-purple-200 dark:bg-purple-900/40 dark:text-purple-100 dark:hover:bg-purple-900/60",
      outline:
        "border border-gray-200 bg-transparent hover:bg-gray-100 hover:text-gray-900 dark:border-gray-800 dark:hover:bg-gray-800 dark:hover:text-gray-100",
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
