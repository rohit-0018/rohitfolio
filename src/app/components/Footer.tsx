import { Github, Linkedin, Mail, ArrowUp } from "lucide-react";
import { motion } from "motion/react";
import { EMAIL, GITHUB, LINKEDIN, LOCATION, NAME } from "../constants/personal";
import { useTheme } from "../theme/ThemeProvider";

export function Footer() {
  const theme = useTheme();
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-white/5 mt-20">
      {/* Top accent line */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: `linear-gradient(90deg, transparent, ${theme.accentHex}, transparent)` }}
      />

      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-10 py-12 sm:py-16">
        {/* Big editorial wordmark */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-12"
        >
          <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-neutral-600 mb-4">
            $ end_of_file
          </div>
          <h3 className="text-[clamp(2.5rem,8vw,7rem)] leading-[0.85] tracking-[-0.04em] font-semibold text-white">
            Let's{" "}
            <span className="font-serif italic font-normal" style={{ color: theme.accentHex }}>
              build
            </span>{" "}
            something.
          </h3>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 pt-12 border-t border-white/5">
          <div>
            <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-neutral-600 mb-3">
              Author
            </div>
            <div className="text-neutral-200">{NAME}</div>
            <div className="text-neutral-500 text-sm mt-1">Backend engineer · {LOCATION}</div>
          </div>

          <div>
            <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-neutral-600 mb-3">
              Reach
            </div>
            <a href={`mailto:${EMAIL}`} className="text-neutral-200 hover:text-white transition-colors block" style={{ borderBottom: `1px dashed ${theme.accentHex}` }}>
              {EMAIL}
            </a>
            <div className="flex gap-4 mt-4">
              {[
                { href: GITHUB, Icon: Github, label: "GitHub" },
                { href: LINKEDIN, Icon: Linkedin, label: "LinkedIn" },
                { href: `mailto:${EMAIL}`, Icon: Mail, label: "Email" },
              ].map(({ href, Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="text-neutral-500 hover:text-white transition-colors"
                >
                  <Icon className="size-4" />
                </a>
              ))}
            </div>
          </div>

          <div className="md:text-right">
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="group inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-neutral-400 hover:text-white transition-colors"
            >
              Back to top
              <ArrowUp className="size-3 group-hover:-translate-y-1 transition-transform" />
            </button>
          </div>
        </div>

        <div className="pt-8 mt-12 border-t border-white/5 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 font-mono text-[10px] uppercase tracking-[0.2em] text-neutral-600">
          <div>© {year} {NAME} · all rights reserved</div>
          <div className="flex items-center gap-3">
            <span className="size-1.5 rounded-full" style={{ background: theme.accentHex }} />
            paid engagements only
          </div>
        </div>
      </div>
    </footer>
  );
}
