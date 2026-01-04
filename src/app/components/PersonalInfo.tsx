import { MapPin, Code2, Trophy, Users } from "lucide-react";
import { LOCATION, NAME } from "../constants/personal";

export function PersonalInfo() {
  const stats = [
    {
      icon: Code2,
      value: "8+",
      label: "Years Backend Engineering",
      gradient: "from-purple-500 to-purple-600"
    },
    {
      icon: Trophy,
      value: "50+",
      label: "Production Systems Shipped",
      gradient: "from-cyan-500 to-cyan-600"
    },
    {
      icon: Users,
      value: "30+",
      label: "Founders Worked With",
      gradient: "from-blue-500 to-blue-600"
    }
  ];

  return (
    <section id="personal-info" className="py-20 lg:py-32 px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Personal Info */}
          <div>
            <div className="inline-flex items-center gap-2 text-purple-400 mb-6">
              <MapPin className="size-4" />
              <span className="text-sm">{LOCATION} • Working Globally</span>
            </div>

            <h2 className="text-neutral-100 mb-6">
              Hi, I'm{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
                {NAME}
              </span>
            </h2>

            <div className="space-y-4 text-neutral-300 text-lg">
              <p>
                I'm a senior backend engineer specializing in systems where money flows and mistakes are expensive.
              </p>

              <p>
                Over the past 8 years, I've architected and deployed revenue-critical backends for gaming studios, fintech startups, and Web3 companies. My work has processed over <span className="text-purple-400">$50M in transactions</span> and supported platforms serving <span className="text-cyan-400">millions of users</span>.
              </p>

              <p>
                Before going independent, I led backend teams at a YC-backed fintech company and built real-time multiplayer infrastructure for mobile games with 10M+ downloads.
              </p>

              <p className="text-neutral-400">
                I don't do equity-only projects. I work with founders who have budget, urgency, and a product that involves real risk or real money.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <span className="px-4 py-2 bg-purple-500/10 border border-purple-500/30 text-purple-300 rounded-full text-sm">
                Node.js / TypeScript
              </span>
              <span className="px-4 py-2 bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 rounded-full text-sm">
                PostgreSQL / Redis
              </span>
              <span className="px-4 py-2 bg-blue-500/10 border border-blue-500/30 text-blue-300 rounded-full text-sm">
                AWS / GCP
              </span>
              <span className="px-4 py-2 bg-violet-500/10 border border-violet-500/30 text-violet-300 rounded-full text-sm">
                WebSockets / Real-time
              </span>
            </div>
          </div>

          {/* Right: Stats Grid */}
          <div className="grid gap-6">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="border border-neutral-800/50 bg-gradient-to-br from-neutral-900/50 to-neutral-950/50 backdrop-blur-sm p-8 rounded-xl hover:border-neutral-700 transition-all"
              >
                <div className="flex items-start gap-4">
                  <div className={`p-3 rounded-lg bg-gradient-to-br ${stat.gradient} shadow-lg`}>
                    <stat.icon className="size-6 text-white" />
                  </div>
                  <div>
                    <div className={`text-4xl text-transparent bg-clip-text bg-gradient-to-r ${stat.gradient} mb-2`}>
                      {stat.value}
                    </div>
                    <div className="text-neutral-400">{stat.label}</div>
                  </div>
                </div>
              </div>
            ))}

            {/* Testimonial-style quote */}
            <div className="border border-purple-500/20 bg-gradient-to-br from-purple-500/5 to-cyan-500/5 backdrop-blur-sm p-8 rounded-xl">
              <p className="text-neutral-300 italic mb-4">
               {NAME} " delivered our entire fintech ledger system in 3 weeks. Zero bugs in production. Worth every penny."
              </p>
              <div className="flex items-center gap-3">
                <div className="size-10 rounded-full bg-gradient-to-br from-purple-500 to-cyan-500" />
                <div>
                  <div className="text-neutral-200 text-sm">Sarah Johnson</div>
                  <div className="text-neutral-500 text-xs">CEO, PayFlow</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
