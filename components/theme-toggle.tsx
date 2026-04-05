"use client";

import { useTheme } from "next-themes";
import { SunIcon } from "./sun-icon";
import { MoonIcon } from "./moon-icon";

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const isLight = resolvedTheme === "light";

  return (
    <button
      type="button"
      onClick={() => setTheme(isLight ? "dark" : "light")}
      aria-label={isLight ? "Switch to dark theme" : "Switch to light theme"}
    >
      <span className="dark:hidden">
        <SunIcon />
      </span>
      <span className="hidden dark:block">
        <MoonIcon />
      </span>
    </button>
  );
}
