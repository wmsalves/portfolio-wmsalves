import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function Section({
  children,
  className,
  id,
  ariaLabelledby,
}: {
  children: ReactNode;
  className?: string;
  id?: string;
  ariaLabelledby?: string;
}) {
  return (
    <section
      id={id}
      aria-labelledby={ariaLabelledby}
      className={cn("relative py-16 sm:py-20 lg:py-24", className)}
    >
      {children}
    </section>
  );
}
