import { ArrowRight, Calendar, Github, Linkedin, Mail, Sparkles } from "lucide-react";
import { motion } from "motion/react";
import { useTheme } from "../theme/ThemeProvider";
import { EMAIL, GITHUB, LINKEDIN, NAME, LOCATION } from "../constants/personal";

export function Hero() {
  const theme = useTheme();

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.08, delayChildren: 0.15 } },
  };
  const item = {
    hidden: { opacity: 0, y: 18 },
    show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center pt-28 pb-20 lg:pt-40 px-5 sm:px-6 lg:px-10"
    >
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Left: Editorial copy */}
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="lg:col-span-7"
          >
            {/* Status bar */}
            <motion.div variants={item} className="flex flex-wrap items-center gap-3 mb-8 font-mono text-xs uppercase tracking-[0.2em] text-neutral-500">
              <span className="flex items-center gap-2">
                <span className="relative flex h-2 w-2">
                  <motion.span
                    className="absolute inline-flex h-full w-full rounded-full"
                    style={{ background: theme.accentHex }}
                    animate={{ scale: [1, 2.5, 1], opacity: [0.7, 0, 0.7] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                  <span className="relative inline-flex rounded-full h-2 w-2" style={{ background: theme.accentHex }} />
                </span>
                <span style={{ color: theme.accentHex }}>Available · Q3</span>
              </span>
              <span className="text-neutral-700">/</span>
              <span>{LOCATION}</span>
            </motion.div>

            <motion.div variants={item} className="font-mono text-sm text-neutral-500 mb-4">
              <span style={{ color: theme.accentHex }}>$</span> whoami → {NAME.toLowerCase().replace(" ", "_")}
            </motion.div>

            <motion.h1
              variants={item}
              className="text-[clamp(2rem,9vw,5.6rem)] leading-[0.95] tracking-[-0.04em] font-semibold text-white mb-6"
            >
              Backend systems
              <br />
              for things that{" "}
              <span className="font-serif italic font-normal" style={{ color: theme.accentHex }}>
                actually
              </span>
              <br />
              matter.
            </motion.h1>

            <motion.p
              variants={item}
              className="text-neutral-400 max-w-2xl text-lg lg:text-xl leading-relaxed mb-8"
            >
              I'm a senior backend engineer building revenue-critical infrastructure for
              <span className="text-neutral-200"> gaming</span>,
              <span className="text-neutral-200"> fintech</span>, and
              <span className="text-neutral-200"> Web3</span> teams — and lately, I'm
              prototyping <span className="text-neutral-200">AI-native products</span> on the side.
            </motion.p>

            {/* Mini-stats inline */}
            <motion.div variants={item} className="grid grid-cols-2 sm:flex sm:flex-wrap gap-x-6 gap-y-3 mb-10 font-mono text-[10px] sm:text-xs uppercase tracking-[0.12em] sm:tracking-[0.15em] text-neutral-500">
              <span>8+ <span className="text-neutral-700">years</span></span>
              <span>$50M+ <span className="text-neutral-700">processed</span></span>
              <span>10M+ <span className="text-neutral-700">users</span></span>
              <span style={{ color: theme.accentHex }}>99.99% uptime</span>
            </motion.div>

            {/* CTAs */}
            <motion.div variants={item} className="flex flex-col sm:flex-row gap-4 mb-12">
              <motion.button
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => scrollTo("book-demo")}
                className="group relative px-7 py-4 rounded-md font-medium text-white inline-flex items-center gap-3"
                style={{
                  background: theme.accentHex,
                  boxShadow: `0 10px 40px -10px ${theme.accentGlow}`,
                }}
              >
                <Calendar className="size-4" />
                Book a free technical demo
                <ArrowRight className="size-4 group-hover:translate-x-1 transition-transform" />
              </motion.button>

              <motion.button
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => scrollTo("ai-lab")}
                className="px-7 py-4 rounded-md font-medium border border-white/10 text-neutral-200 hover:border-white/30 hover:bg-white/5 transition-colors inline-flex items-center gap-2"
              >
                <Sparkles className="size-4" style={{ color: theme.accentHex }} />
                See my AI lab →
              </motion.button>
            </motion.div>

            {/* Socials */}
            <motion.div variants={item} className="flex items-center gap-5 text-neutral-500">
              <span className="font-mono text-[10px] uppercase tracking-[0.2em]">Connect</span>
              <span className="h-px w-10 bg-neutral-800" />
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
                  className="hover:text-white transition-colors"
                >
                  <Icon className="size-5" />
                </a>
              ))}
            </motion.div>
          </motion.div>

          {/* Right: Headshot card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5 max-w-sm mx-auto lg:max-w-none w-full"
          >
            <HeadshotCard />
          </motion.div>
        </div>
      </div>

      {/* Scroll cue */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 font-mono text-[10px] uppercase tracking-[0.3em] text-neutral-600 hidden lg:flex flex-col items-center gap-2"
        animate={{ y: [0, 6, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        scroll
        <span className="h-8 w-px bg-gradient-to-b from-neutral-600 to-transparent" />
      </motion.div>
    </section>
  );
}

function HeadshotCard() {
  const theme = useTheme();
  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="relative"
    >
      {/* Decorative rotating ring behind image */}
      <motion.svg
        className="absolute -inset-6 pointer-events-none"
        viewBox="0 0 200 200"
        animate={{ rotate: 360 }}
        transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
      >
        <circle cx="100" cy="100" r="98" fill="none" stroke={theme.accentHex} strokeOpacity="0.35" strokeWidth="0.4" strokeDasharray="2 6" />
      </motion.svg>

      {/* Photo frame */}
      <div
        className="relative rounded-2xl overflow-hidden border border-white/10 bg-[#0a0a0a] aspect-[4/5]"
        style={{ boxShadow: `0 40px 100px -30px ${theme.accentGlow}` }}
      >
        {/* Themed gradient overlay */}
        <div
          className="absolute inset-0 mix-blend-overlay z-10 pointer-events-none"
          style={{ background: `linear-gradient(160deg, ${theme.accentHex}30, transparent 60%)` }}
        />

        <img
          src="/images/headshot2.png"
          alt={`${"Rohit Pandey"} headshot`}
          className="w-full h-full object-cover"
          loading="eager"
        />

        {/* Top-left chrome */}
        <div className="absolute top-4 left-4 z-20 flex items-center gap-1.5">
          <span className="size-2 rounded-full" style={{ background: theme.accentHex }} />
          <span className="size-2 rounded-full bg-white/30" />
          <span className="size-2 rounded-full bg-white/30" />
          <span className="ml-2 font-mono text-[10px] text-white/70">~/me.jpg</span>
        </div>

        {/* Bottom info bar */}
        <div className="absolute left-0 right-0 bottom-0 z-20 p-5 bg-gradient-to-t from-black/90 via-black/60 to-transparent">
          <div className="flex items-end justify-between gap-3">
            <div>
              <div className="text-white text-lg font-semibold tracking-tight">Rohit Pandey</div>
              <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/60 mt-1">
                Backend · AI · Realtime
              </div>
            </div>
            <motion.div
              className="size-2.5 rounded-full"
              style={{ background: theme.accentHex, boxShadow: `0 0 12px ${theme.accentHex}` }}
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>
        </div>
      </div>

      {/* Currently-building chip — sits OUTSIDE the photo, fully legible */}
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.6 }}
        className="mt-5 inline-flex items-center gap-3 px-4 py-2.5 rounded-full border border-white/10 bg-[#0a0a0a]"
        style={{ boxShadow: `0 16px 40px -20px ${theme.accentGlow}` }}
      >
        <span className="relative flex h-2 w-2 shrink-0">
          <motion.span
            className="absolute inline-flex h-full w-full rounded-full"
            style={{ background: theme.accentHex }}
            animate={{ scale: [1, 2.4, 1], opacity: [0.7, 0, 0.7] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          <span className="relative inline-flex h-2 w-2 rounded-full" style={{ background: theme.accentHex }} />
        </span>
        <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-neutral-500">
          currently
        </span>
        <span className="font-mono text-xs text-white">
          building <span style={{ color: theme.accentHex }}>knowledge.ai</span>
        </span>
      </motion.div>
    </motion.div>
  );
}
