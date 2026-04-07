import { TrendingUp, FileCode, Cpu, Rocket, IterationCw } from "lucide-react";
import { motion } from "motion/react";
import { useTheme } from "../theme/ThemeProvider";
import { SectionLabel } from "./WhatIDo";

const STEPS = [
  { number: "01", icon: TrendingUp, title: "Understand money & risk", description: "Map where money moves, where things can break, and what keeps you up at night." },
  { number: "02", icon: FileCode,    title: "Design the architecture", description: "Build the technical foundation that scales and stays maintainable." },
  { number: "03", icon: Cpu,         title: "Implement backend logic", description: "Production-grade code with testing, error handling, and monitoring built in." },
  { number: "04", icon: Rocket,      title: "Deploy & monitor",        description: "Ship to production with observability, logging, and alerting in place." },
  { number: "05", icon: IterationCw, title: "Iterate safely",          description: "Continuous improvement without breaking what's already working." },
];

export function HowIWork() {
  const theme = useTheme();

  return (
    <section id="how-i-work" className="relative py-20 sm:py-28 lg:py-40 px-5 sm:px-6 lg:px-10">
      <div className="max-w-7xl mx-auto">
        <SectionLabel index="06" label="process" />

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-[clamp(2rem,5vw,4rem)] leading-[1] tracking-[-0.03em] font-semibold text-white mb-6 max-w-3xl"
        >
          A reliable,{" "}
          <span className="font-serif italic font-normal" style={{ color: theme.accentHex }}>
            systematic
          </span>{" "}
          way of working.
        </motion.h2>

        <p className="text-neutral-400 max-w-2xl text-lg mb-20">
          Five steps, no surprises. Designed to minimize risk and maximize velocity.
        </p>

        {/* Vertical timeline */}
        <div className="relative max-w-4xl">
          {/* Animated vertical line */}
          <motion.div
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }}
            className="absolute left-6 top-2 bottom-2 w-px origin-top"
            style={{ background: `linear-gradient(to bottom, ${theme.accentHex}, transparent)` }}
          />

          <div className="space-y-12">
            {STEPS.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="relative pl-20 group"
              >
                {/* Node */}
                <div
                  className="absolute left-0 top-0 size-12 grid place-items-center rounded-full border bg-[#050505]"
                  style={{
                    borderColor: theme.accentHex,
                    boxShadow: `0 0 0 4px #050505, 0 0 30px ${theme.accentGlow}`,
                  }}
                >
                  <step.icon className="size-5" style={{ color: theme.accentHex }} />
                </div>

                <div className="flex items-baseline gap-4 mb-2">
                  <span
                    className="font-mono text-xs"
                    style={{ color: theme.accentHex }}
                  >
                    {step.number}
                  </span>
                  <h3 className="text-2xl text-white tracking-tight">{step.title}</h3>
                </div>
                <p className="text-neutral-400 leading-relaxed max-w-2xl">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-20 p-8 rounded-xl border border-white/10 bg-white/[0.02] backdrop-blur-sm flex items-start gap-5 max-w-4xl"
        >
          <span className="font-mono text-xs uppercase tracking-[0.2em] mt-1" style={{ color: theme.accentHex }}>
            note
          </span>
          <div>
            <p className="text-neutral-200 text-lg mb-1">Paid engagements only. No equity-only work.</p>
            <p className="text-neutral-500 text-sm">
              I work with founders who are serious about execution and have budget allocated for professional engineering.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
