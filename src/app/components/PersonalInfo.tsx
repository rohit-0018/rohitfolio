import { MapPin } from "lucide-react";
import { motion, useInView } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { LOCATION, NAME } from "../constants/personal";
import { useTheme } from "../theme/ThemeProvider";
import { SectionLabel } from "./WhatIDo";

const STATS = [
  { value: 8,  suffix: "+", label: "Years backend",          sub: "shipping production code" },
  { value: 50, suffix: "+", label: "Systems shipped",         sub: "in production" },
  { value: 30, suffix: "+", label: "Founders worked with",    sub: "globally" },
];

const STACK = [
  "Node.js", "TypeScript", "Go", "PostgreSQL",
  "Redis", "Kafka", "AWS", "GCP", "Docker", "Kubernetes",
];

export function PersonalInfo() {
  const theme = useTheme();

  return (
    <section id="personal-info" className="relative py-20 sm:py-28 lg:py-40 px-5 sm:px-6 lg:px-10">
      <div className="max-w-7xl mx-auto">
        <SectionLabel index="03" label="about" />

        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20">
          {/* Left: bio */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="inline-flex items-center gap-2 text-neutral-500 mb-8 font-mono text-xs uppercase tracking-[0.2em]"
            >
              <MapPin className="size-3" style={{ color: theme.accentHex }} />
              {LOCATION} · working globally
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="text-[clamp(2rem,5vw,4rem)] leading-[1] tracking-[-0.03em] font-semibold text-white mb-10"
            >
              Hi, I'm{" "}
              <span className="font-serif italic font-normal" style={{ color: theme.accentHex }}>
                {NAME.split(" ")[0]}.
              </span>
            </motion.h2>

            <div className="space-y-6 text-neutral-300 text-lg leading-relaxed max-w-2xl">
              <p>
                I'm a senior backend engineer specializing in systems where money flows and
                mistakes are expensive.
              </p>
              <p>
                Over the past 8 years, I've architected and shipped revenue-critical backends for
                gaming studios, fintech startups, and Web3 companies. My work has processed{" "}
                <span className="text-white" style={{ borderBottom: `1px dashed ${theme.accentHex}` }}>
                  $50M+ in transactions
                </span>{" "}
                and supported platforms serving{" "}
                <span className="text-white" style={{ borderBottom: `1px dashed ${theme.accentHex}` }}>
                  millions of users
                </span>.
              </p>
              <p>
                Before going independent, I led backend teams at a YC-backed fintech and built
                real-time multiplayer infrastructure for mobile games with 10M+ downloads.
              </p>
              <p className="text-neutral-500">
                I don't do equity-only projects. I work with founders who have budget, urgency,
                and a product that involves real risk or real money.
              </p>
            </div>

            {/* Stack */}
            <div className="mt-12">
              <div className="font-mono text-[11px] uppercase tracking-[0.2em] text-neutral-600 mb-4">
                $ stack --list
              </div>
              <div className="flex flex-wrap gap-2">
                {STACK.map((tech, i) => (
                  <motion.span
                    key={tech}
                    initial={{ opacity: 0, y: 8 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.04 }}
                    className="px-3 py-1.5 font-mono text-xs border border-white/10 rounded-md text-neutral-300 hover:text-white hover:border-white/30 transition-colors"
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </div>
          </div>

          {/* Right: stats */}
          <div className="lg:col-span-5 flex flex-col gap-px">
            {STATS.map((s, i) => (
              <StatRow key={i} {...s} />
            ))}

            {/* Quote */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="mt-12 border-l-2 pl-6 py-2"
              style={{ borderColor: theme.accentHex }}
            >
              <p className="text-neutral-200 font-serif italic text-xl leading-relaxed mb-4">
                "{NAME} delivered our entire fintech ledger system in 3 weeks. Zero bugs in
                production. Worth every penny."
              </p>
              <div className="flex items-center gap-3 font-mono text-xs">
                <div
                  className="size-8 rounded-full"
                  style={{ background: `linear-gradient(135deg, ${theme.accentHex}, #ffffff20)` }}
                />
                <div>
                  <div className="text-neutral-200 not-italic">Sarah Johnson</div>
                  <div className="text-neutral-600 text-[10px] uppercase tracking-[0.2em]">CEO · PayFlow</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

function StatRow({ value, suffix, label, sub }: { value: number; suffix: string; label: string; sub: string }) {
  const theme = useTheme();
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let raf = 0;
    const start = performance.now();
    const duration = 1200;
    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - t, 3);
      setCount(Math.round(eased * value));
      if (t < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, value]);

  return (
    <div
      ref={ref}
      className="group flex items-baseline justify-between gap-6 py-6 border-b border-white/5"
    >
      <div>
        <div className="text-neutral-400 text-sm">{label}</div>
        <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-neutral-600 mt-1">
          {sub}
        </div>
      </div>
      <div
        className="text-5xl font-semibold tracking-tight tabular-nums"
        style={{ color: theme.accentHex }}
      >
        {count}
        <span className="text-neutral-600">{suffix}</span>
      </div>
    </div>
  );
}
