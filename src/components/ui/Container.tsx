import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function Container({
  children,
  className,
  withRail = false,
}: {
  children: ReactNode;
  className?: string;
  withRail?: boolean;
}) {
  return (
    <div
      className={cn(
        "mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8",
        withRail && "lg:pr-[360px]",
        className,
      )}
    >
      {children}
    </div>
  );
}
