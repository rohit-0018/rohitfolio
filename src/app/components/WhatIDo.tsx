import { Database, Wallet, Zap, Shield } from "lucide-react";

export function WhatIDo() {
  const capabilities = [
    {
      icon: Wallet,
      title: "Money logic (wallets, RTP, ledgers)",
      description: "Accurate financial systems that handle real money safely",
      gradient: "from-purple-500/10 to-purple-500/5",
      iconColor: "text-purple-400"
    },
    {
      icon: Zap,
      title: "Real-time systems (WebSockets, events)",
      description: "Low-latency backends for live interactions and gameplay",
      gradient: "from-cyan-500/10 to-cyan-500/5",
      iconColor: "text-cyan-400"
    },
    {
      icon: Database,
      title: "Revenue-critical backend systems",
      description: "Core infrastructure that directly impacts your bottom line",
      gradient: "from-blue-500/10 to-blue-500/5",
      iconColor: "text-blue-400"
    },
    {
      icon: Shield,
      title: "Production deployment & scaling",
      description: "Reliable architecture that grows with your product",
      gradient: "from-violet-500/10 to-violet-500/5",
      iconColor: "text-violet-400"
    }
  ];

  return (
    <section id="what-i-do" className="py-20 lg:py-32 px-6 lg:px-8 bg-neutral-900/30">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-3xl mb-16">
          <h2 className="text-neutral-100 mb-6">
            What I{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
              Do
            </span>
          </h2>
          <p className="text-neutral-400 text-lg">
            I solve the problems that keep founders up at night. The kind where bugs cost money, downtime destroys trust, and technical debt blocks your roadmap.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {capabilities.map((capability, index) => (
            <div
              key={index}
              className={`border border-neutral-800/50 bg-gradient-to-br ${capability.gradient} backdrop-blur-sm p-8 rounded-xl hover:border-neutral-700 transition-all hover:scale-[1.02] hover:shadow-xl`}
            >
              <capability.icon className={`size-8 ${capability.iconColor} mb-4`} />
              <h3 className="text-neutral-100 mb-3">{capability.title}</h3>
              <p className="text-neutral-400">
                {capability.description}
              </p>
            </div>
          ))}
        </div>

        <div className="border-l-2 border-gradient-to-b from-purple-500 to-cyan-500 pl-6 py-2 bg-gradient-to-r from-purple-500/5 to-transparent rounded-r-lg">
          <p className="text-neutral-200">
            If your product involves money or risk, this is where I help.
          </p>
        </div>
      </div>
    </section>
  );
}