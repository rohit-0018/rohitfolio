export interface CaseStudy {
    slug: string;
    title: string;
    shortDescription: string;
    heroImage: string;
    problem: string;
    solution: string;
    outcome: string;
    deepDive: {
        heading: string;
        content: string[];
    }[];
    tech: string[];
    liveLink?: string;
}

export const caseStudies: CaseStudy[] = [
    {
        slug: "solanaflyer-rtp-fairness",
        title: "SolanaFlyer — Provably Fair Aviator-Style Game",
        shortDescription:
            "Real-time aviator-style gambling game with mathematically correct RTP and provable fairness.",
        heroImage: "/images/solanaflyer.png",
        problem:
            "The product required a real-time gambling game where every multiplier outcome must be mathematically fair, auditable, and impossible to manipulate. Any bug could directly result in financial loss or loss of player trust.",
        solution:
            "Designed and implemented a provably fair RTP system, deterministic crash calculation, secure wallet flows, and real-time game state broadcasting with strict server authority.",
        outcome:
            "Production-ready game with fair RTP distribution, transparent verification, and stable real-time gameplay under concurrent users.",
        deepDive: [
            {
                heading: "RTP & Fairness Model",
                content: [
                    "Each round uses a server-seeded cryptographic hash combined with client-visible parameters to generate the crash multiplier.",
                    "The RTP (Return To Player) is enforced mathematically across large sample sizes, not per round.",
                    "Players can independently verify outcomes using the seed and algorithm, ensuring provable fairness."
                ]
            },
            {
                heading: "Game Architecture",
                content: [
                    "Server-authoritative game loop with no client-side trust.",
                    "WebSocket-based real-time broadcasting for game ticks and crash events.",
                    "Wallet debits and credits executed atomically with round state."
                ]
            },
            {
                heading: "Why This Is Hard",
                content: [
                    "You must balance randomness with strict financial correctness.",
                    "Any race condition or floating-point error can create money leaks.",
                    "The system must be fast, deterministic, and auditable at the same time."
                ]
            }
        ],
        tech: ["Node.js", "WebSockets", "Cryptography", "Money Logic"],
        liveLink: "https://solanaflyer.com"
    },

    {
        slug: "sixr-cricket-scale",
        title: "Sixr Cricket — Millions of Requests at Scale",
        shortDescription:
            "High-scale sports gaming platform handling massive traffic spikes with autoscaling.",
        heroImage: "/images/sixr.png",
        problem:
            "The platform needed to handle unpredictable traffic spikes during live matches, with millions of requests per second, without downtime or degraded user experience.",
        solution:
            "Designed a horizontally scalable Node.js backend with stateless services, autoscaling infrastructure, and a performant Next.js frontend.",
        outcome:
            "Stable production system handling peak loads seamlessly during live matches.",
        deepDive: [
            {
                heading: "Scalable Backend Design",
                content: [
                    "Stateless Node.js services behind load balancers.",
                    "Autoscaling policies tuned for sudden traffic spikes.",
                    "Strict separation of read-heavy and write-heavy workloads."
                ]
            },
            {
                heading: "Frontend Performance",
                content: [
                    "Next.js frontend optimized for fast initial loads.",
                    "Edge caching and CDN distribution for static assets.",
                    "Minimal client-side computation during peak traffic."
                ]
            },
            {
                heading: "Operational Complexity",
                content: [
                    "Live sports traffic is bursty and unpredictable.",
                    "Scaling too late causes outages; scaling too early wastes money.",
                    "Observability and metrics were critical."
                ]
            }
        ],
        tech: ["Next.js", "Node.js", "Autoscaling", "High Traffic"],
        liveLink: "https://firstinnings.sixrcricket.com"
    },

    {
        slug: "twitno-extension",
        title: "Twitno — In-House Twitter Automation Extension",
        shortDescription:
            "Chrome extension built for controlled, safe, in-house marketing automation.",
        heroImage: "/images/twitno.png",
        problem:
            "The client needed internal Twitter automation without violating platform safety rules or triggering spam detection.",
        solution:
            "Built a Chrome extension with controlled automation, AI-assisted replies, strict rate limits, and human-in-the-loop workflows.",
        outcome:
            "Marketing workflows automated safely without account bans or spam flags.",
        deepDive: [
            {
                heading: "Automation Without Spam",
                content: [
                    "No mass actions or uncontrolled loops.",
                    "Every action gated by explicit user intent.",
                    "Rate limits enforced well below platform thresholds."
                ]
            },
            {
                heading: "Extension Architecture",
                content: [
                    "Content scripts for DOM interaction.",
                    "Background workers for orchestration.",
                    "LLM integration only for assistive tasks."
                ]
            }
        ],
        tech: ["Chrome Extension", "React", "Node.js", "LLMs"]
    }
];
