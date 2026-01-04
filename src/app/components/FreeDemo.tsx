import { CheckCircle2, Calendar } from "lucide-react";

export function FreeDemo() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const benefits = [
    "Review your system or idea",
    "Identify money / logic / scaling risks",
    "Suggest execution approach",
    "No obligation"
  ];

  return (
    <section id="free-demo" className="py-20 lg:py-32 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-5xl mx-auto border border-purple-500/20 bg-gradient-to-br from-purple-500/10 via-neutral-900/50 to-cyan-500/10 backdrop-blur-sm rounded-2xl p-8 lg:p-12 shadow-2xl shadow-purple-500/10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-cyan-500 text-white text-xs px-3 py-1 rounded-full mb-4">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
                </span>
                FREE OFFER
              </div>

              <h2 className="text-neutral-100 mb-6">
                Free Backend{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
                  Risk Review & Demo
                </span>
              </h2>
              <p className="text-neutral-300 mb-8 text-lg">
                20–30 minute live call where we focus on what actually matters for your backend.
              </p>

              <ul className="space-y-4 mb-8">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="size-5 text-purple-400 mt-0.5 flex-shrink-0" />
                    <span className="text-neutral-200">{benefit}</span>
                  </li>
                ))}
              </ul>

              <button
                onClick={() => scrollToSection("book-demo")}
                className="bg-gradient-to-r from-purple-500 to-cyan-500 text-white px-8 py-4 rounded-lg hover:from-purple-600 hover:to-cyan-600 transition-all inline-flex items-center gap-2 shadow-xl shadow-purple-500/25"
              >
                <Calendar className="size-5" />
                Schedule Demo
              </button>
            </div>

            <div className="bg-neutral-950/80 border border-neutral-800/50 backdrop-blur-sm rounded-xl p-8 shadow-xl">
              <div className="space-y-6">
                <div>
                  <div className="text-purple-400 text-sm mb-2">Duration</div>
                  <div className="text-neutral-100">20–30 minutes</div>
                </div>
                <div>
                  <div className="text-cyan-400 text-sm mb-2">Format</div>
                  <div className="text-neutral-100">Live video call</div>
                </div>
                <div>
                  <div className="text-blue-400 text-sm mb-2">What to bring</div>
                  <div className="text-neutral-100">Your idea, system, or code</div>
                </div>
                <div>
                  <div className="text-violet-400 text-sm mb-2">Cost</div>
                  <div className="text-neutral-100 text-lg">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
                      Free
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}