"use client";

import { useState, useEffect, useCallback } from "react";

interface UseThemeReturn {
  theme: string;
  isPulling: boolean;
  handlePullChainClick: () => void;
}

export function useTheme(): UseThemeReturn {
  const [theme, setTheme] = useState("dark");
  const [isPulling, setIsPulling] = useState(false);

  useEffect(() => {
    const currentTheme =
      document.documentElement.getAttribute("data-theme") || "dark";
    setTheme(currentTheme);
  }, []);

  const handlePullChainClick = useCallback(() => {
    if (isPulling) return;
    setIsPulling(true);

    setTimeout(() => {
      const nextTheme = theme === "dark" ? "light" : "dark";
      setTheme(nextTheme);
      document.documentElement.setAttribute("data-theme", nextTheme);
      localStorage.setItem("theme", nextTheme);
    }, 120);

    setTimeout(() => {
      setIsPulling(false);
    }, 350);
  }, [isPulling, theme]);

  return { theme, isPulling, handlePullChainClick };
}
