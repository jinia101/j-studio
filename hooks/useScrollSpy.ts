"use client";

import { useState, useEffect } from "react";

export function useScrollSpy(
  refs: React.RefObject<HTMLDivElement | null>[]
): number {
  const [activeSection, setActiveSection] = useState(0);

  useEffect(() => {
    const observerOptions: IntersectionObserverInit = {
      root: null,
      rootMargin: "-28% 0px -28% 0px",
      threshold: 0.15,
    };

    const observerCallback: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const index = parseInt(
            entry.target.getAttribute("data-section-index") || "0",
            10
          );
          if (!isNaN(index)) {
            setActiveSection(index);
          }
        }
      });
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions
    );

    refs.forEach((ref) => {
      if (ref.current) observer.observe(ref.current);
    });

    return () => observer.disconnect();
  }, [refs]);

  return activeSection;
}
