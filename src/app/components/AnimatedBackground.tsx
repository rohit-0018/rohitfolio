import { motion, useReducedMotion } from "motion/react";
import { useTheme } from "../theme/ThemeProvider";

/**
 * Editorial background — adapts to light/dark mode and themed accent.
 */
export function AnimatedBackground() {
  const theme = useTheme();
  const reduce = useReducedMotion();
  const isLight = theme.mode === "light";
  const dotColor = isLight ? "#0000001a" : "#1a1a1a";
  const vignette = isLight
    ? "radial-gradient(ellipse at center, transparent 0%, transparent 55%, rgba(255,255,255,0.6) 100%)"
    : "radial-gradient(ellipse at center, transparent 0%, transparent 50%, rgba(0,0,0,0.85) 100%)";
  const monoStrokeBase = isLight ? "#00000066" : "#ffffff66";
  const fadeColor = isLight ? "#fafaf9" : "#050505";

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden -z-0">
      {/* Dot grid texture */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `radial-gradient(circle, ${dotColor} 1px, transparent 1px)`,
          backgroundSize: "28px 28px",
          maskImage: "radial-gradient(ellipse at center, black 40%, transparent 90%)",
          WebkitMaskImage: "radial-gradient(ellipse at center, black 40%, transparent 90%)",
          opacity: isLight ? 0.6 : 0.35,
        }}
      />

      <div className="absolute inset-0" style={{ background: vignette }} />

      {/* Corner accent glows */}
      <div
        className="absolute -top-40 -right-40 w-[520px] h-[520px] rounded-full blur-[140px]"
        style={{ background: `radial-gradient(circle, ${theme.accentHex}, transparent 70%)`, opacity: isLight ? 0.18 : 0.25 }}
      />
      <div
        className="absolute -bottom-40 -left-40 w-[420px] h-[420px] rounded-full blur-[140px]"
        style={{ background: `radial-gradient(circle, ${theme.accentHex}, transparent 70%)`, opacity: isLight ? 0.12 : 0.15 }}
      />

      {/* Scanning beam */}
      {!reduce && (
        <motion.div
          className="absolute left-0 right-0 h-[2px]"
          style={{
            background: `linear-gradient(90deg, transparent, ${theme.accentHex}, transparent)`,
            boxShadow: `0 0 20px ${theme.accentHex}`,
            opacity: isLight ? 0.4 : 0.6,
          }}
          initial={{ top: "-2%" }}
          animate={{ top: "102%" }}
          transition={{ duration: 9, repeat: Infinity, ease: "linear" }}
        />
      )}

      {/* Monogram artwork */}
      <svg
        className="absolute -right-32 top-1/4 w-[680px] h-[680px]"
        style={{ opacity: isLight ? 0.05 : 0.07 }}
        viewBox="-200 -200 400 400"
      >
        <defs>
          <linearGradient id="mono-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor={theme.accentHex} stopOpacity="0.9" />
            <stop offset="100%" stopColor={monoStrokeBase} stopOpacity="0.4" />
          </linearGradient>
        </defs>

        <motion.g
          animate={reduce ? undefined : { rotate: 360 }}
          transition={{ duration: 90, repeat: Infinity, ease: "linear" }}
          style={{ transformOrigin: "0px 0px" }}
        >
          <circle cx="0" cy="0" r="180" fill="none" stroke="url(#mono-grad)" strokeWidth="1" strokeDasharray="2 6" />
          <circle cx="0" cy="0" r="140" fill="none" stroke={theme.accentHex} strokeWidth="0.6" />
          <polygon points="0,-160 139,80 -139,80" fill="none" stroke="url(#mono-grad)" strokeWidth="1.2" />
          <rect x="-100" y="-100" width="200" height="200" fill="none" stroke={theme.accentHex} strokeOpacity="0.5" strokeWidth="0.8" />
        </motion.g>

        <motion.g
          animate={reduce ? undefined : { rotate: -360 }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
          style={{ transformOrigin: "0px 0px" }}
        >
          <polygon
            points="0,-110 105,-34 65,90 -65,90 -105,-34"
            fill="none"
            stroke={theme.accentHex}
            strokeOpacity="0.6"
            strokeWidth="1"
          />
        </motion.g>

        <g transform="translate(-70 -90)" fill="none" stroke="url(#mono-grad)" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round">
          <path d="M 0 180 L 0 0 L 90 0 Q 140 0 140 50 Q 140 100 90 100 L 0 100 M 75 100 L 140 180" />
        </g>
      </svg>

      {!reduce && (
        <svg className="absolute inset-0 w-full h-full">
          {Array.from({ length: 18 }).map((_, i) => {
            const x = (i * 137 + 23) % 100;
            const y = (i * 53 + 11) % 100;
            return (
              <motion.circle
                key={i}
                cx={`${x}%`}
                cy={`${y}%`}
                r="1.4"
                fill={theme.accentHex}
                animate={{ opacity: [0.1, 0.8, 0.1] }}
                transition={{ duration: 3 + (i % 4), delay: i * 0.18, repeat: Infinity, ease: "easeInOut" }}
              />
            );
          })}
        </svg>
      )}

      <div
        className="absolute bottom-0 left-0 right-0 h-40"
        style={{ background: `linear-gradient(to top, ${fadeColor}, transparent)` }}
      />
    </div>
  );
}
