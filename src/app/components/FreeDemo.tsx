import { CheckCircle2, Calendar } from "lucide-react";
import { motion } from "motion/react";
import { useTheme } from "../theme/ThemeProvider";

const BENEFITS = [
  "Review your system or idea",
  "Identify money / logic / scaling risks",
  "Suggest concrete execution approach",
  "No obligation",
];

export function FreeDemo() {
  const theme = useTheme();

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="free-demo" className="relative py-20 sm:py-28 lg:py-40 px-5 sm:px-6 lg:px-10">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="relative max-w-6xl mx-auto rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.04] to-transparent backdrop-blur-sm overflow-hidden"
          style={{ boxShadow: `0 60px 120px -40px ${theme.accentGlow}` }}
        >
          {/* Top accent bar */}
          <div
            className="absolute top-0 left-0 right-0 h-px"
            style={{ background: `linear-gradient(90deg, transparent, ${theme.accentHex}, transparent)` }}
          />

          <div className="grid lg:grid-cols-2">
            {/* Left */}
            <div className="p-10 lg:p-14 border-b lg:border-b-0 lg:border-r border-white/10">
              <div
                className="inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.25em] px-3 py-1.5 rounded-full mb-6"
                style={{ background: theme.accentSoft, color: theme.accentHex }}
              >
                <span className="size-1.5 rounded-full animate-pulse" style={{ background: theme.accentHex }} />
                Free offer
              </div>

              <h2 className="text-[clamp(1.8rem,4vw,3.2rem)] leading-[1] tracking-[-0.03em] font-semibold text-white mb-6">
                Free backend{" "}
                <span className="font-serif italic font-normal" style={{ color: theme.accentHex }}>
                  risk review
                </span>
                .
              </h2>

              <p className="text-neutral-400 text-lg mb-8">
                A 20–30 minute live call where we focus on what actually matters for your backend — and what doesn't.
              </p>

              <ul className="space-y-3 mb-10">
                {BENEFITS.map((b, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.08 }}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle2 className="size-5 mt-0.5 shrink-0" style={{ color: theme.accentHex }} />
                    <span className="text-neutral-200">{b}</span>
                  </motion.li>
                ))}
              </ul>

              <motion.button
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => scrollTo("book-demo")}
                className="px-7 py-4 rounded-md font-medium text-black inline-flex items-center gap-3"
                style={{
                  background: theme.accentHex,
                  boxShadow: `0 10px 40px -10px ${theme.accentGlow}`,
                }}
              >
                <Calendar className="size-4" />
                Schedule the call
              </motion.button>
            </div>

            {/* Right meta panel */}
            <div className="p-10 lg:p-14 bg-[#080808]">
              <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-neutral-600 mb-8">
                ~/meeting.config.json
              </div>
              <div className="space-y-6 font-mono text-sm">
                {[
                  { k: "duration",   v: "20–30 minutes" },
                  { k: "format",     v: "Live video call" },
                  { k: "to_bring",   v: "Your idea, system, or code" },
                  { k: "cost",       v: "free", highlight: true },
                  { k: "next_step",  v: "Proposal · or decline · no pressure" },
                ].map((row) => (
                  <div key={row.k} className="flex justify-between items-baseline gap-6 pb-4 border-b border-white/5">
                    <span className="text-neutral-600">{row.k}</span>
                    <span
                      className={row.highlight ? "text-2xl font-semibold" : "text-neutral-200 text-right"}
                      style={row.highlight ? { color: theme.accentHex } : undefined}
                    >
                      {row.v}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
