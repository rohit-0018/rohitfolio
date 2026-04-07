import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, Sun, Moon } from "lucide-react";
import { NAME } from "../constants/personal";
import { useTheme } from "../theme/ThemeProvider";

const NAV_ITEMS = [
  { id: "what-i-do",    label: "Work",     index: "01" },
  { id: "ai-lab",       label: "AI Lab",   index: "02" },
  { id: "case-studies", label: "Cases",    index: "03" },
  { id: "play-zone",    label: "Play",     index: "04" },
  { id: "book-demo",    label: "Contact",  index: "05" },
];

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const theme = useTheme();

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const goToSection = (id: string) => {
    setOpen(false);
    const scroll = () => {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    };
    if (location.pathname === "/") return scroll();
    navigate("/");
    setTimeout(scroll, 100);
  };

  const initials = NAME.split(" ").map((n) => n[0]).join("");

  return (
    <motion.nav
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-[#050505]/80 backdrop-blur-xl border-b border-white/5" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-10">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Monogram */}
          <button
            onClick={() => goToSection("hero")}
            className="group flex items-center gap-3"
            aria-label="Home"
          >
            <div
              className="relative size-9 grid place-items-center border border-white/10 rounded-md font-mono text-sm font-semibold tracking-tighter overflow-hidden"
              style={{ color: theme.accentHex }}
            >
              <motion.div
                className="absolute inset-0"
                style={{ background: `linear-gradient(135deg, ${theme.accentSoft}, transparent)` }}
                animate={{ opacity: [0.4, 0.9, 0.4] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              />
              <span className="relative">{initials}</span>
            </div>
            <span className="hidden sm:block font-mono text-xs uppercase tracking-[0.2em] text-neutral-500 group-hover:text-neutral-200 transition-colors">
              {NAME}
            </span>
          </button>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-1">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.id}
                onClick={() => goToSection(item.id)}
                className="group relative px-4 py-2 text-sm text-neutral-400 hover:text-white transition-colors flex items-center gap-2"
              >
                <span className="font-mono text-[10px] text-neutral-600 group-hover:text-[var(--theme-accent-hex)] transition-colors">
                  {item.index}
                </span>
                <span>{item.label}</span>
              </button>
            ))}

            <a
              href="#book-demo"
              onClick={(e) => { e.preventDefault(); goToSection("book-demo"); }}
              className="ml-4 group relative px-5 py-2.5 rounded-md text-sm font-medium transition-all overflow-hidden"
              style={{
                color: theme.accentHex,
                border: `1px solid ${theme.accentHex}55`,
                background: theme.accentSoft,
              }}
            >
              <span className="relative z-10 flex items-center gap-2">
                <span className="size-1.5 rounded-full animate-pulse" style={{ background: theme.accentHex }} />
                Let's talk
              </span>
            </a>

            <button
              onClick={theme.toggleMode}
              aria-label={`Switch to ${theme.mode === "dark" ? "light" : "dark"} mode`}
              className="ml-2 size-10 grid place-items-center rounded-md border border-white/10 text-neutral-300 hover:text-white hover:border-white/30 transition-colors"
            >
              <motion.div
                key={theme.mode}
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                transition={{ duration: 0.4 }}
              >
                {theme.mode === "dark" ? <Sun className="size-4" /> : <Moon className="size-4" />}
              </motion.div>
            </button>
          </div>

          {/* Mobile toggle group */}
          <div className="md:hidden flex items-center gap-1">
            <button
              onClick={theme.toggleMode}
              aria-label="Toggle theme"
              className="size-9 grid place-items-center text-neutral-300"
            >
              {theme.mode === "dark" ? <Sun className="size-4" /> : <Moon className="size-4" />}
            </button>
            <button
              className="text-neutral-300 p-2"
              onClick={() => setOpen((v) => !v)}
              aria-label="Toggle menu"
            >
              {open ? <X className="size-5" /> : <Menu className="size-5" />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t border-white/5 bg-[#050505]/95 backdrop-blur-xl overflow-hidden"
          >
            <div className="px-6 py-4 flex flex-col">
              {NAV_ITEMS.map((item) => (
                <button
                  key={item.id}
                  onClick={() => goToSection(item.id)}
                  className="text-left py-3 text-neutral-300 flex items-center gap-3"
                >
                  <span className="font-mono text-xs text-neutral-600">{item.index}</span>
                  {item.label}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
