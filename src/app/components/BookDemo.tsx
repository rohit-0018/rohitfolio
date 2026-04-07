import { Calendar, ExternalLink, ArrowRight } from "lucide-react";
import { motion } from "motion/react";
import { BOOK_DEMO } from "../constants/personal";
import { useTheme } from "../theme/ThemeProvider";
import { SectionLabel } from "./WhatIDo";

export function BookDemo() {
  const theme = useTheme();

  return (
    <section id="book-demo" className="relative py-20 sm:py-28 lg:py-44 px-5 sm:px-6 lg:px-10">
      <div className="max-w-7xl mx-auto">
        <SectionLabel index="07" label="contact" />

        <div className="grid lg:grid-cols-12 gap-12 items-end">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-8"
          >
            <h2 className="text-[clamp(2.4rem,6.5vw,5.5rem)] leading-[0.95] tracking-[-0.04em] font-semibold text-white">
              Got something{" "}
              <span className="font-serif italic font-normal" style={{ color: theme.accentHex }}>
                hard
              </span>
              <br />
              to ship?
            </h2>
            <p className="text-neutral-400 max-w-xl text-lg mt-8">
              Bring your idea, system, or code. We'll focus on real issues — what can break,
              where money flows, how to scale, and what to build first.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="lg:col-span-4 flex flex-col gap-4"
          >
            <motion.a
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.97 }}
              href={BOOK_DEMO}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between px-7 py-5 rounded-lg font-medium text-black"
              style={{
                background: theme.accentHex,
                boxShadow: `0 20px 60px -20px ${theme.accentGlow}`,
              }}
            >
              <span className="flex items-center gap-3">
                <Calendar className="size-5" />
                Schedule on Calendly
              </span>
              <ArrowRight className="size-5 group-hover:translate-x-1 transition-transform" />
            </motion.a>

            <a
              href={BOOK_DEMO}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-neutral-500 hover:text-white transition-colors px-2"
            >
              opens in new tab <ExternalLink className="size-3" />
            </a>
          </motion.div>
        </div>

        {/* Meta strip */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-20 grid sm:grid-cols-3 border-t border-white/5"
        >
          {[
            { k: "Type",       v: "Free technical consultation" },
            { k: "Duration",   v: "20–30 minutes" },
            { k: "Next step",  v: "Proposal · or decline · no pressure" },
          ].map((row) => (
            <div key={row.k} className="py-8 px-6 border-b sm:border-b-0 sm:border-r last:border-r-0 border-white/5">
              <div className="font-mono text-[10px] uppercase tracking-[0.25em] mb-3" style={{ color: theme.accentHex }}>
                {row.k}
              </div>
              <div className="text-neutral-200">{row.v}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
