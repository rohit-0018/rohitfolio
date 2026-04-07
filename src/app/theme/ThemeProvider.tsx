import { createContext, useCallback, useContext, useEffect, useMemo, useState, ReactNode } from "react";

export type Accent = {
  name: string;
  label: string;
  accentHex: string;
  accentSoft: string;
  accentGlow: string;
};

export type Mode = "dark" | "light";

type ThemeCtx = Accent & {
  mode: Mode;
  toggleMode: () => void;
  setMode: (m: Mode) => void;
};

const ACCENTS: Accent[] = [
  { name: "emerald", label: "EMERALD", accentHex: "#10b981", accentSoft: "rgba(16,185,129,0.14)",  accentGlow: "rgba(16,185,129,0.35)" },
  { name: "amber",   label: "AMBER",   accentHex: "#f59e0b", accentSoft: "rgba(245,158,11,0.14)",  accentGlow: "rgba(245,158,11,0.35)" },
  { name: "sky",     label: "SKY",     accentHex: "#0ea5e9", accentSoft: "rgba(14,165,233,0.14)",  accentGlow: "rgba(14,165,233,0.35)" },
  { name: "rose",    label: "ROSE",    accentHex: "#f43f5e", accentSoft: "rgba(244,63,94,0.14)",   accentGlow: "rgba(244,63,94,0.35)" },
  { name: "violet",  label: "VIOLET",  accentHex: "#8b5cf6", accentSoft: "rgba(139,92,246,0.14)",  accentGlow: "rgba(139,92,246,0.35)" },
  { name: "lime",    label: "LIME",    accentHex: "#65a30d", accentSoft: "rgba(101,163,13,0.14)",  accentGlow: "rgba(101,163,13,0.35)" },
];

const ThemeContext = createContext<ThemeCtx>({} as ThemeCtx);

export function useTheme() {
  return useContext(ThemeContext);
}

const STORAGE_KEY = "rohit-portfolio-mode";

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [accent] = useState<Accent>(() => ACCENTS[Math.floor(Math.random() * ACCENTS.length)]);
  const [mode, setModeState] = useState<Mode>(() => {
    if (typeof window === "undefined") return "dark";
    const saved = localStorage.getItem(STORAGE_KEY) as Mode | null;
    if (saved === "light" || saved === "dark") return saved;
    return window.matchMedia?.("(prefers-color-scheme: light)").matches ? "light" : "dark";
  });

  const setMode = useCallback((m: Mode) => {
    setModeState(m);
    try { localStorage.setItem(STORAGE_KEY, m); } catch {}
  }, []);

  const toggleMode = useCallback(() => setMode(mode === "dark" ? "light" : "dark"), [mode, setMode]);

  useEffect(() => {
    const r = document.documentElement;
    r.style.setProperty("--theme-accent-hex", accent.accentHex);
    r.style.setProperty("--theme-accent-soft", accent.accentSoft);
    r.style.setProperty("--theme-accent-glow", accent.accentGlow);
    r.dataset.theme = accent.name;
    r.dataset.mode = mode;
  }, [accent, mode]);

  const value = useMemo<ThemeCtx>(() => ({ ...accent, mode, toggleMode, setMode }), [accent, mode, toggleMode, setMode]);
  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}
