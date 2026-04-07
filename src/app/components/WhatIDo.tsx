import { Database, Wallet, Zap, Shield, ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";
import { useTheme } from "../theme/ThemeProvider";

const CAPABILITIES = [
  {
    icon: Wallet,
    title: "Money logic",
    sub: "wallets · ledgers · RTP",
    description: "Accurate financial systems that handle real money safely. Idempotent flows, double-entry ledgers, reconciliation.",
  },
  {
    icon: Zap,
    title: "Real-time systems",
    sub: "websockets · pub/sub · events",
    description: "Low-latency backends for live interactions, multiplayer game logic, and event-driven pipelines.",
  },
  {
    icon: Database,
    title: "Revenue-critical APIs",
    sub: "postgres · redis · queues",
    description: "Core infrastructure that directly impacts your bottom line — designed for correctness under load.",
  },
  {
    icon: Shield,
    title: "Production deployment",
    sub: "observability · scaling · SLOs",
    description: "Reliable architecture with monitoring, alerting, and graceful degradation built in from day one.",
  },
];

export function WhatIDo() {
  const theme = useTheme();

  return (
    <section id="what-i-do" className="relative py-20 sm:py-28 lg:py-40 px-5 sm:px-6 lg:px-10">
      <div className="max-w-7xl mx-auto">
        <SectionLabel index="01" label="capabilities" />

        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-[clamp(2rem,5vw,4rem)] leading-[1] tracking-[-0.03em] font-semibold text-white max-w-3xl mb-6"
        >
          The problems that{" "}
          <span className="font-serif italic font-normal" style={{ color: theme.accentHex }}>
            keep you
          </span>{" "}
          up at night.
        </motion.h2>

        <p className="text-neutral-400 max-w-2xl text-lg mb-16">
          Bugs that cost money. Downtime that destroys trust. Technical debt that blocks the roadmap.
          That's where I come in.
        </p>

        <div className="grid md:grid-cols-2 gap-px bg-white/5 border border-white/5 rounded-2xl overflow-hidden">
          {CAPABILITIES.map((c, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="group relative bg-[#0a0a0a] p-8 lg:p-10 hover:bg-[#0d0d0d] transition-colors"
            >
              <div className="flex items-start justify-between mb-6">
                <div
                  className="size-12 grid place-items-center rounded-lg border border-white/10"
                  style={{ background: theme.accentSoft, color: theme.accentHex }}
                >
                  <c.icon className="size-5" />
                </div>
                <ArrowUpRight className="size-5 text-neutral-700 group-hover:text-white group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all" />
              </div>
              <h3 className="text-2xl text-white tracking-tight mb-1">{c.title}</h3>
              <div className="font-mono text-[11px] uppercase tracking-[0.2em] text-neutral-600 mb-4">
                {c.sub}
              </div>
              <p className="text-neutral-400 leading-relaxed">{c.description}</p>

              {/* Bottom accent line */}
              <div
                className="absolute bottom-0 left-0 right-0 h-px origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"
                style={{ background: theme.accentHex }}
              />
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 flex items-center gap-4 font-mono text-sm text-neutral-500"
        >
          <span style={{ color: theme.accentHex }}>→</span>
          <span>If your product involves money or risk, this is where I help.</span>
        </motion.div>
      </div>
    </section>
  );
}

export function SectionLabel({ index, label }: { index: string; label: string }) {
  const theme = useTheme();
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="flex items-center gap-3 mb-8 font-mono text-xs uppercase tracking-[0.25em] text-neutral-500"
    >
      <span style={{ color: theme.accentHex }}>{index}</span>
      <span className="h-px w-12" style={{ background: theme.accentHex }} />
      <span>{label}</span>
    </motion.div>
  );
}
