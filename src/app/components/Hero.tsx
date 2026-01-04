import { ArrowRight, Calendar } from "lucide-react";

export function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="hero" className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-4xl">
          {/* Greeting badge */}
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500/10 to-cyan-500/10 border border-purple-500/20 rounded-full px-4 py-2 mb-8">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-500"></span>
            </span>
            <span className="text-sm text-purple-300">Available for select projects</span>
          </div>

          <h1 className="text-neutral-100 mb-6 tracking-tight">
            Backend systems where{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-cyan-400 to-blue-400">
              money, fairness, and uptime
            </span>{" "}
            matter
          </h1>
          
          <p className="text-neutral-400 mb-10 max-w-2xl text-lg">
            I help founders build and deploy revenue-critical backend systems (gaming, fintech, SaaS, Web3) — fast and safely.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={() => scrollToSection("book-demo")}
              className="bg-gradient-to-r from-purple-500 to-cyan-500 text-white px-8 py-4 rounded-lg hover:from-purple-600 hover:to-cyan-600 transition-all inline-flex items-center justify-center gap-2 group shadow-xl shadow-purple-500/25"
            >
              <Calendar className="size-5" />
              Book a Free Technical Demo
              <ArrowRight className="size-5 group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              onClick={() => scrollToSection("case-studies")}
              className="border border-purple-500/30 bg-purple-500/5 text-purple-100 px-8 py-4 rounded-lg hover:border-purple-500/50 hover:bg-purple-500/10 transition-all inline-flex items-center justify-center gap-2 backdrop-blur-sm"
            >
              View Case Studies
            </button>
          </div>
        </div>
      </div>

      {/* Enhanced gradient */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-purple-900/20 via-cyan-900/10 to-transparent pointer-events-none" />
    </section>
  );
}