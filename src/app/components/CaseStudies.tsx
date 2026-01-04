import { ArrowUpRight } from "lucide-react";

export function CaseStudies() {
  const caseStudies = [
    {
      title: "Real-Time Aviator-Style Gambling Backend",
      problem: "Founder needed a production-ready gambling backend with mathematically correct RTP logic, real-time multiplayer gameplay, and secure wallet handling. Time was critical—they had players waiting.",
      solution: "Designed and implemented the complete RTP algorithm, wallet transaction system, WebSocket infrastructure for real-time game state synchronization, and deployed the entire system in one day.",
      outcome: "Production-ready backend handling real-time gameplay safely. Correct money flow, fair RTP distribution, zero downtime during initial launch. System scaled to handle concurrent players without architectural changes.",
      tags: ["Real-time", "Gambling", "WebSockets", "Money Logic"],
      gradient: "from-purple-500/10 to-purple-500/5",
      accentColor: "purple"
    },
    {
      title: "Fintech Ledger System Migration",
      problem: "SaaS fintech company had a fragile ledger system causing reconciliation errors. Every bug meant real money discrepancies and customer support nightmares.",
      solution: "Rebuilt the ledger system with double-entry accounting principles, added comprehensive transaction logging, implemented idempotency for all money operations, and created automated reconciliation checks.",
      outcome: "Zero reconciliation errors post-launch. Support tickets related to money bugs dropped to zero. System handled 10x transaction volume during peak periods without issues.",
      tags: ["Fintech", "Ledgers", "Money Logic", "Production"],
      gradient: "from-cyan-500/10 to-cyan-500/5",
      accentColor: "cyan"
    },
    {
      title: "Web3 Gaming Backend & Smart Contract Integration",
      problem: "Gaming startup needed backend infrastructure that bridged traditional game servers with blockchain for NFT integration and token rewards. Complex state synchronization required.",
      solution: "Built hybrid architecture: traditional backend for game logic and real-time performance, smart contract integration for NFT minting and token distribution, event-driven sync between on-chain and off-chain data.",
      outcome: "Seamless player experience with blockchain benefits. Sub-100ms game response times maintained while handling blockchain transactions asynchronously. Successfully launched with 5,000+ active players.",
      tags: ["Web3", "Gaming", "Smart Contracts", "Hybrid Systems"],
      gradient: "from-blue-500/10 to-blue-500/5",
      accentColor: "blue"
    }
  ];

  const accentColors: Record<string, string> = {
    purple: "border-purple-500/30",
    cyan: "border-cyan-500/30",
    blue: "border-blue-500/30"
  };

  return (
    <section id="case-studies" className="py-20 lg:py-32 px-6 lg:px-8 bg-neutral-900/30">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-3xl mb-16">
          <h2 className="text-neutral-100 mb-6">
            Case{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
              Studies
            </span>
          </h2>
          <p className="text-neutral-400 text-lg">
            Real problems. Real solutions. Real outcomes.
          </p>
        </div>

        <div className="space-y-8">
          {caseStudies.map((study, index) => (
            <div
              key={index}
              className={`border ${accentColors[study.accentColor]} bg-gradient-to-br ${study.gradient} backdrop-blur-sm rounded-2xl p-8 lg:p-10 hover:border-${study.accentColor}-500/50 transition-all group hover:scale-[1.01] hover:shadow-2xl hover:shadow-${study.accentColor}-500/10`}
            >
              <div className="flex items-start justify-between gap-4 mb-6">
                <h3 className="text-neutral-100 flex-1">
                  {study.title}
                </h3>
                <ArrowUpRight className={`size-5 text-${study.accentColor}-400/60 group-hover:text-${study.accentColor}-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all flex-shrink-0`} />
              </div>

              <div className="grid lg:grid-cols-3 gap-8 mb-6">
                <div>
                  <div className={`text-${study.accentColor}-400 text-sm mb-3`}>Problem</div>
                  <p className="text-neutral-300">{study.problem}</p>
                </div>
                <div>
                  <div className={`text-${study.accentColor}-400 text-sm mb-3`}>Solution</div>
                  <p className="text-neutral-300">{study.solution}</p>
                </div>
                <div>
                  <div className={`text-${study.accentColor}-400 text-sm mb-3`}>Outcome</div>
                  <p className="text-neutral-300">{study.outcome}</p>
                </div>
              </div>

              <div className="flex flex-wrap gap-2">
                {study.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className={`text-xs text-${study.accentColor}-300 bg-${study.accentColor}-500/10 border border-${study.accentColor}-500/20 px-3 py-1 rounded-full`}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}