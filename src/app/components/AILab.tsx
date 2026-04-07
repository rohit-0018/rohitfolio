import { ArrowUpRight, Sparkles, BrainCircuit, FileText, Bot, Workflow } from "lucide-react";
import { motion } from "motion/react";
import { useTheme } from "../theme/ThemeProvider";
import { SectionLabel } from "./WhatIDo";

type Project = {
  title: string;
  status: "shipping" | "building" | "research";
  tagline: string;
  description: string;
  link?: string;
  icon: React.ComponentType<{ className?: string }>;
  tech: string[];
  featured?: boolean;
};

const PROJECTS: Project[] = [
  {
    title: "KnowledgeAI · Paper AI",
    status: "building",
    tagline: "Read research papers 10× faster",
    description:
      "An AI co-reader for academic papers — extracts key insights, generates structured summaries, and lets you chat with any PDF. Built on RAG with custom citation grounding so the model can never hallucinate a reference.",
    link: "https://knowledgeai.itsrohitpandey.in",
    icon: FileText,
    tech: ["Next.js", "Python", "pgvector", "OpenAI", "LangChain", "RAG"],
    featured: true,
  },
  {
    title: "Agentic Workflow Engine",
    status: "building",
    tagline: "Self-orchestrating task graphs",
    description:
      "A framework that lets multiple LLM agents plan, delegate, and verify each other's work via a typed task graph. Built to replace brittle prompt chains in production pipelines.",
    icon: Workflow,
    tech: ["TypeScript", "DAG", "Claude", "GPT-4o"],
  },
  {
    title: "Voice-First Assistant",
    status: "research",
    tagline: "Sub-300ms streaming voice agent",
    description:
      "Experimenting with real-time voice agents using streaming STT → LLM → TTS pipelines. Goal: feel like talking to a person, not waiting for one.",
    icon: Bot,
    tech: ["Whisper", "Realtime API", "WebRTC"],
  },
  {
    title: "Embeddings Search Lab",
    status: "shipping",
    tagline: "Semantic search for messy data",
    description:
      "Production-grade hybrid search combining BM25 + dense vectors with re-ranking. Powers a few internal tools that search across millions of unstructured documents.",
    icon: BrainCircuit,
    tech: ["pgvector", "Qdrant", "Cohere Rerank"],
  },
];

export function AILab() {
  const theme = useTheme();

  return (
    <section id="ai-lab" className="relative py-20 sm:py-28 lg:py-40 px-5 sm:px-6 lg:px-10">
      <div className="max-w-7xl mx-auto">
        <SectionLabel index="02" label="ai lab" />

        <div className="grid lg:grid-cols-12 gap-8 mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7 text-[clamp(2rem,5vw,4rem)] leading-[1] tracking-[-0.03em] font-semibold text-white"
          >
            Building AI tools that{" "}
            <span className="font-serif italic font-normal" style={{ color: theme.accentHex }}>
              think with you
            </span>
            , not for you.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="lg:col-span-5 text-neutral-400 text-lg leading-relaxed self-end"
          >
            On the side, I prototype AI-native products. Some are research, some are real apps — all
            are open about what they actually do under the hood. No magic. No vibes. Just systems.
          </motion.p>
        </div>

        {/* Featured project — KnowledgeAI */}
        {PROJECTS.filter((p) => p.featured).map((p) => (
          <motion.a
            key={p.title}
            href={p.link}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            whileHover={{ y: -4 }}
            className="group relative block rounded-2xl border border-white/10 bg-[#0a0a0a] overflow-hidden mb-8"
            style={{ boxShadow: `0 40px 100px -40px ${theme.accentGlow}` }}
          >
            <div
              className="absolute top-0 left-0 right-0 h-px"
              style={{ background: `linear-gradient(90deg, transparent, ${theme.accentHex}, transparent)` }}
            />

            <div className="grid lg:grid-cols-12 gap-8 p-8 lg:p-12">
              <div className="lg:col-span-7">
                <div className="flex items-center gap-3 mb-5">
                  <span
                    className="font-mono text-[10px] uppercase tracking-[0.25em] px-2.5 py-1 rounded-full"
                    style={{ background: theme.accentSoft, color: theme.accentHex }}
                  >
                    Featured · live
                  </span>
                  <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-neutral-600">
                    {p.tagline}
                  </span>
                </div>

                <h3 className="text-3xl lg:text-5xl text-white tracking-tight font-semibold mb-5 group-hover:translate-x-1 transition-transform">
                  {p.title}
                </h3>
                <p className="text-neutral-400 text-lg leading-relaxed mb-6 max-w-xl">
                  {p.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {p.tech.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-1 font-mono text-[10px] uppercase tracking-wider text-neutral-400 border border-white/10 rounded"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em]" style={{ color: theme.accentHex }}>
                  Visit knowledgeai.itsrohitpandey.in
                  <ArrowUpRight className="size-4 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
                </div>
              </div>

              {/* Animated visual */}
              <div className="lg:col-span-5 relative min-h-[260px]">
                <div className="absolute inset-0 rounded-xl border border-white/10 bg-gradient-to-br from-white/[0.04] to-transparent overflow-hidden p-6">
                  <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-neutral-600 mb-4">
                    paper_ai.preview
                  </div>
                  <DocumentArt />
                </div>
              </div>
            </div>
          </motion.a>
        ))}

        {/* Other projects grid */}
        <div className="grid md:grid-cols-3 gap-px bg-white/5 border border-white/5 rounded-2xl overflow-hidden">
          {PROJECTS.filter((p) => !p.featured).map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="group relative bg-[#0a0a0a] p-8 hover:bg-[#0d0d0d] transition-colors"
            >
              <div className="flex items-start justify-between mb-5">
                <div
                  className="size-11 grid place-items-center rounded-lg border border-white/10"
                  style={{ background: theme.accentSoft, color: theme.accentHex }}
                >
                  <p.icon className="size-5" />
                </div>
                <span
                  className="font-mono text-[9px] uppercase tracking-[0.2em] px-2 py-1 rounded"
                  style={{
                    background: p.status === "shipping" ? theme.accentSoft : "rgba(255,255,255,0.05)",
                    color: p.status === "shipping" ? theme.accentHex : "#737373",
                  }}
                >
                  {p.status}
                </span>
              </div>
              <h3 className="text-xl text-white tracking-tight mb-2">{p.title}</h3>
              <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-neutral-600 mb-4">
                {p.tagline}
              </div>
              <p className="text-neutral-400 text-sm leading-relaxed mb-5">{p.description}</p>
              <div className="flex flex-wrap gap-1.5">
                {p.tech.map((t) => (
                  <span
                    key={t}
                    className="px-2 py-0.5 font-mono text-[9px] uppercase text-neutral-500 border border-white/5 rounded"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <div
                className="absolute bottom-0 left-0 right-0 h-px origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"
                style={{ background: theme.accentHex }}
              />
            </motion.div>
          ))}
        </div>

        <div className="mt-10 flex items-center gap-3 font-mono text-sm text-neutral-500">
          <Sparkles className="size-4" style={{ color: theme.accentHex }} />
          <span>Want to collaborate on an AI project? Let's talk.</span>
        </div>
      </div>
    </section>
  );
}

function DocumentArt() {
  const theme = useTheme();
  return (
    <svg viewBox="0 0 220 180" className="w-full h-auto">
      {/* Page */}
      <motion.rect
        x="20" y="14" width="120" height="155" rx="6"
        fill="none" stroke={theme.accentHex} strokeOpacity="0.6" strokeWidth="1"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2 }}
      />
      {[26, 38, 50, 62, 74, 86, 98, 110, 122, 134, 146].map((y, i) => (
        <motion.rect
          key={y}
          x="30" y={y} width={i % 3 === 0 ? 80 : 100} height="3" rx="1"
          fill={theme.accentHex} fillOpacity={i === 0 ? 0.8 : 0.25}
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 + i * 0.05 }}
          style={{ transformOrigin: "30px center" }}
        />
      ))}

      {/* Highlight */}
      <motion.rect
        x="28" y="58" width="80" height="10" rx="2"
        fill={theme.accentHex} fillOpacity="0.18"
        initial={{ width: 0 }}
        whileInView={{ width: 80 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.8 }}
      />

      {/* AI summary card */}
      <motion.g
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 1 }}
      >
        <rect x="148" y="40" width="60" height="100" rx="6" fill={theme.accentHex} fillOpacity="0.08" stroke={theme.accentHex} strokeOpacity="0.5" strokeWidth="0.8" />
        <circle cx="158" cy="52" r="3" fill={theme.accentHex} />
        <rect x="166" y="50" width="32" height="3" rx="1" fill={theme.accentHex} fillOpacity="0.7" />
        {[64, 72, 80, 88, 96, 104, 112, 120, 128].map((y, i) => (
          <rect key={y} x="156" y={y} width={i % 2 === 0 ? 44 : 36} height="2" rx="1" fill={theme.accentHex} fillOpacity="0.35" />
        ))}
      </motion.g>

      {/* Connection arc */}
      <motion.path
        d="M 110 70 Q 130 70 148 70"
        fill="none"
        stroke={theme.accentHex}
        strokeWidth="1"
        strokeDasharray="2 3"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 1.4 }}
      />
    </svg>
  );
}
