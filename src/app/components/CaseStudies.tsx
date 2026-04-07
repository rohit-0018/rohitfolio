import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { caseStudies } from "../constants/casestudies";
import { useTheme } from "../theme/ThemeProvider";
import { SectionLabel } from "./WhatIDo";

export function CaseStudies() {
  const theme = useTheme();

  return (
    <section id="case-studies" className="relative py-20 sm:py-28 lg:py-40 px-5 sm:px-6 lg:px-10">
      <div className="max-w-7xl mx-auto">
        <SectionLabel index="04" label="selected work" />

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-[clamp(2rem,5vw,4rem)] leading-[1] tracking-[-0.03em] font-semibold text-white mb-16 max-w-3xl"
        >
          Things I've{" "}
          <span className="font-serif italic font-normal" style={{ color: theme.accentHex }}>
            shipped
          </span>
          .
        </motion.h2>

        <div className="space-y-px bg-white/5 border border-white/5 rounded-2xl overflow-hidden">
          {caseStudies.map((cs, i) => (
            <motion.div
              key={cs.slug}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.06 }}
            >
              <Link
                to={`/case-study/${cs.slug}`}
                className="group block bg-[#0a0a0a] hover:bg-[#0d0d0d] transition-colors p-8 lg:p-10"
              >
                <div className="flex items-start gap-8">
                  {/* Index */}
                  <div className="hidden sm:block font-mono text-xs text-neutral-700 pt-2 w-10 shrink-0">
                    {String(i + 1).padStart(2, "0")}
                  </div>

                  {/* Body */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-6">
                      <h3 className="text-2xl lg:text-3xl text-white tracking-tight group-hover:translate-x-1 transition-transform">
                        {cs.title}
                      </h3>
                      <ArrowUpRight
                        className="size-6 text-neutral-700 shrink-0 group-hover:-translate-y-1 group-hover:translate-x-1 transition-all"
                        style={{ color: theme.accentHex }}
                      />
                    </div>

                    <p className="text-neutral-400 mt-3 max-w-3xl leading-relaxed">
                      {cs.shortDescription}
                    </p>

                    {/* Tech chips */}
                    {cs.tech?.length > 0 && (
                      <div className="flex flex-wrap gap-2 mt-5">
                        {cs.tech.slice(0, 5).map((t) => (
                          <span
                            key={t}
                            className="px-2.5 py-1 font-mono text-[10px] uppercase tracking-wider text-neutral-500 border border-white/5 rounded"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>

                <div
                  className="mt-6 h-px origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-700"
                  style={{ background: `linear-gradient(90deg, ${theme.accentHex}, transparent)` }}
                />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
