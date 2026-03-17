"use client";

import { useEffect, useState } from "react";

export function useActiveSection<T extends string>(sections: T[]) {
  const [activeSection, setActiveSection] = useState<T>(sections[0]);

  useEffect(() => {
    const handleScroll = () => {
      let foundSection: T | null = null;

      const offset = window.innerHeight * 0.3;

      for (const section of sections) {
        const el = document.querySelector(section);

        if (el) {
          const rect = el.getBoundingClientRect();

          if (rect.top <= offset && rect.bottom >= offset) {
            foundSection = section;
          }
        }
      }

      if (foundSection) {
        setActiveSection(foundSection);
      }
    };

    window.addEventListener("scroll", handleScroll);

    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [sections]);

  return activeSection;
}
