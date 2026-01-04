import { TrendingUp, FileCode, Cpu, Rocket, IterationCw } from "lucide-react";

export function HowIWork() {
  const steps = [
    {
      number: "01",
      icon: TrendingUp,
      title: "Understand money & risk flow",
      description: "Map where money moves, where things can break, and what keeps you up at night.",
      gradient: "from-purple-500 to-purple-600"
    },
    {
      number: "02",
      icon: FileCode,
      title: "Design architecture",
      description: "Build the technical foundation that scales and stays maintainable.",
      gradient: "from-cyan-500 to-cyan-600"
    },
    {
      number: "03",
      icon: Cpu,
      title: "Implement backend logic",
      description: "Write production-grade code with testing, error handling, and monitoring built in.",
      gradient: "from-blue-500 to-blue-600"
    },
    {
      number: "04",
      icon: Rocket,
      title: "Deploy & monitor",
      description: "Ship to production with proper observability, logging, and alerting in place.",
      gradient: "from-violet-500 to-violet-600"
    },
    {
      number: "05",
      icon: IterationCw,
      title: "Iterate safely",
      description: "Continuous improvement without breaking what's working.",
      gradient: "from-fuchsia-500 to-fuchsia-600"
    }
  ];

  return (
    <section id="how-i-work" className="py-20 lg:py-32 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-3xl mb-16">
          <h2 className="text-neutral-100 mb-6">
            How I{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
              Work
            </span>
          </h2>
          <p className="text-neutral-400 text-lg">
            A reliable, systematic approach that minimizes risk and maximizes velocity.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {steps.map((step, index) => (
            <div
              key={index}
              className="border border-neutral-800/50 bg-gradient-to-br from-neutral-900/50 to-neutral-950/50 backdrop-blur-sm p-8 rounded-xl hover:border-neutral-700 transition-all hover:scale-[1.02] hover:shadow-xl"
            >
              <div className="flex items-start gap-4 mb-4">
                <span className="text-neutral-600 text-sm">{step.number}</span>
                <div className={`p-2 rounded-lg bg-gradient-to-br ${step.gradient} shadow-lg`}>
                  <step.icon className="size-5 text-white" />
                </div>
              </div>
              <h3 className="text-neutral-100 mb-3">{step.title}</h3>
              <p className="text-neutral-400">{step.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-purple-500/10 to-cyan-500/10 border border-purple-500/20 backdrop-blur-sm rounded-xl p-8">
          <p className="text-neutral-200 mb-2 text-lg">
            💼 Paid engagements only. No equity-only work.
          </p>
          <p className="text-neutral-400">
            I work with founders who are serious about execution and have budget allocated for professional engineering.
          </p>
        </div>
      </div>
    </section>
  );
}