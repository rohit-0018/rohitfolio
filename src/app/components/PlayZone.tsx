import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Gamepad2, Trophy, Zap, RotateCw } from "lucide-react";
import { useTheme } from "../theme/ThemeProvider";
import { SectionLabel } from "./WhatIDo";

type Mode = "idle" | "ready" | "playing" | "done";

const ROUND_TIME = 15; // seconds
const STORAGE_HIGH = "rohit-portfolio-game-high";

export function PlayZone() {
  const theme = useTheme();
  const [mode, setMode] = useState<Mode>("idle");
  const [score, setScore] = useState(0);
  const [time, setTime] = useState(ROUND_TIME);
  const [target, setTarget] = useState({ x: 50, y: 50 });
  const [combo, setCombo] = useState(0);
  const [high, setHigh] = useState<number>(() => {
    if (typeof window === "undefined") return 0;
    return Number(localStorage.getItem(STORAGE_HIGH) || 0);
  });
  const fieldRef = useRef<HTMLDivElement>(null);

  // Game timer
  useEffect(() => {
    if (mode !== "playing") return;
    if (time <= 0) {
      setMode("done");
      if (score > high) {
        setHigh(score);
        try { localStorage.setItem(STORAGE_HIGH, String(score)); } catch {}
      }
      return;
    }
    const id = setTimeout(() => setTime((t) => t - 1), 1000);
    return () => clearTimeout(id);
  }, [mode, time, score, high]);

  const start = () => {
    setScore(0);
    setCombo(0);
    setTime(ROUND_TIME);
    setMode("playing");
    moveTarget();
  };

  const moveTarget = () => {
    setTarget({
      x: 8 + Math.random() * 84,
      y: 12 + Math.random() * 76,
    });
  };

  const onHit = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (mode !== "playing") return;
    setScore((s) => s + 1 + Math.floor(combo / 3));
    setCombo((c) => c + 1);
    moveTarget();
  };

  const onMiss = () => {
    if (mode !== "playing") return;
    setCombo(0);
  };

  return (
    <section id="play-zone" className="relative py-20 sm:py-28 lg:py-40 px-5 sm:px-6 lg:px-10">
      <div className="max-w-7xl mx-auto">
        <SectionLabel index="04" label="play zone" />

        <div className="grid lg:grid-cols-12 gap-10 items-end mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7 text-[clamp(2rem,5vw,4rem)] leading-[1] tracking-[-0.03em] font-semibold text-white"
          >
            While you're here,{" "}
            <span className="font-serif italic font-normal" style={{ color: theme.accentHex }}>
              play
            </span>{" "}
            a quick round.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="lg:col-span-5 text-neutral-400 text-lg"
          >
            15 seconds. Click the moving target as many times as you can. Build a combo for bonus
            points. Beat your high score.
          </motion.p>
        </div>

        <div className="flex flex-col-reverse lg:grid lg:grid-cols-12 gap-px bg-white/5 border border-white/5 rounded-2xl overflow-hidden">
          {/* HUD */}
          <div className="lg:col-span-3 bg-[#0a0a0a] p-6 sm:p-8 grid grid-cols-2 gap-x-6 gap-y-5 lg:flex lg:flex-col lg:gap-6">
            <Stat label="score"     value={score}      hex={theme.accentHex} icon={Zap} />
            <Stat label="time"      value={`${time}s`} hex={theme.accentHex} icon={Gamepad2} />
            <Stat label="combo"     value={`×${combo}`} hex={theme.accentHex} icon={Zap} />
            <Stat label="high"      value={high}       hex={theme.accentHex} icon={Trophy} />

            <div className="col-span-2 mt-2 lg:mt-auto">
              <button
                onClick={start}
                className="w-full px-4 py-3 rounded-md font-medium text-white inline-flex items-center justify-center gap-2"
                style={{
                  background: theme.accentHex,
                  boxShadow: `0 10px 30px -10px ${theme.accentGlow}`,
                }}
              >
                {mode === "idle" ? "Start" : mode === "done" ? <><RotateCw className="size-4" /> Play again</> : "Restart"}
              </button>
              <p className="mt-3 font-mono text-[10px] uppercase tracking-[0.2em] text-neutral-600 text-center">
                no signups · pure dopamine
              </p>
            </div>
          </div>

          {/* Field */}
          <div
            ref={fieldRef}
            onClick={onMiss}
            className="lg:col-span-9 bg-[#0a0a0a] relative aspect-[4/5] sm:aspect-[16/10] overflow-hidden cursor-crosshair select-none touch-none"
            style={{
              backgroundImage: `radial-gradient(circle, ${theme.accentHex}10 1px, transparent 1px)`,
              backgroundSize: "20px 20px",
            }}
          >
            {/* Idle / Done overlay */}
            <AnimatePresence>
              {mode !== "playing" && (
                <motion.div
                  key={mode}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="absolute inset-0 grid place-items-center bg-[#0a0a0a]/80 backdrop-blur-sm z-20"
                >
                  <div className="text-center max-w-md px-6">
                    {mode === "idle" && (
                      <>
                        <Gamepad2 className="size-10 mx-auto mb-4" style={{ color: theme.accentHex }} />
                        <h3 className="text-3xl text-white mb-3 tracking-tight">Ready when you are.</h3>
                        <p className="text-neutral-400">Hit Start, then click the dot before it gets away.</p>
                      </>
                    )}
                    {mode === "done" && (
                      <>
                        <Trophy className="size-10 mx-auto mb-4" style={{ color: theme.accentHex }} />
                        <h3 className="text-4xl text-white mb-2 tracking-tight">
                          {score} <span className="text-neutral-600 text-xl">pts</span>
                        </h3>
                        <p className="text-neutral-400 mb-1">
                          {score > 30 ? "Backend reflexes detected." :
                           score > 15 ? "Solid run. Try again?" :
                           "Warming up. Go again."}
                        </p>
                        <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-neutral-600 mt-4">
                          high score · {high}
                        </p>
                      </>
                    )}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Crosshair grid lines */}
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute left-1/2 top-0 bottom-0 w-px bg-white/5" />
              <div className="absolute top-1/2 left-0 right-0 h-px bg-white/5" />
            </div>

            {/* Target */}
            {mode === "playing" && (
              <motion.button
                key={`${target.x}-${target.y}`}
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0, opacity: 0 }}
                transition={{ type: "spring", stiffness: 300, damping: 18 }}
                onClick={onHit}
                className="absolute size-14 sm:size-12 rounded-full grid place-items-center cursor-pointer"
                style={{
                  left: `${target.x}%`,
                  top: `${target.y}%`,
                  transform: "translate(-50%, -50%)",
                  background: `radial-gradient(circle, ${theme.accentHex}, ${theme.accentHex}88)`,
                  boxShadow: `0 0 30px ${theme.accentGlow}, 0 0 60px ${theme.accentGlow}`,
                }}
                aria-label="Hit target"
              >
                <motion.span
                  className="absolute inset-0 rounded-full border-2"
                  style={{ borderColor: theme.accentHex }}
                  animate={{ scale: [1, 1.6], opacity: [0.7, 0] }}
                  transition={{ duration: 1.2, repeat: Infinity }}
                />
                <span className="size-3 rounded-full bg-white" />
              </motion.button>
            )}

            {/* Combo display */}
            {mode === "playing" && combo > 2 && (
              <motion.div
                key={combo}
                initial={{ scale: 1.4, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="absolute top-4 right-4 font-mono text-xs uppercase tracking-[0.2em]"
                style={{ color: theme.accentHex }}
              >
                ×{combo} combo
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

function Stat({ label, value, hex, icon: Icon }: { label: string; value: string | number; hex: string; icon: React.ComponentType<{ className?: string }> }) {
  return (
    <div>
      <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-neutral-600 mb-2 flex items-center gap-2">
        <Icon className="size-3" style={{ color: hex }} />
        {label}
      </div>
      <div className="text-3xl font-semibold tabular-nums text-white">{value}</div>
    </div>
  );
}
