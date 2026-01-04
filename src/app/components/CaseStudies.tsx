import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { caseStudies } from "../constants/casestudies";

export function CaseStudies() {
  return (
    <section id="case-studies" className="py-24 px-6 bg-neutral-900/30">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-neutral-100 mb-12">
          Case <span className="text-purple-400">Studies</span>
        </h2>

        <div className="space-y-8">
          {caseStudies.map(cs => (
            <div
              key={cs.slug}
              className="border border-purple-500/20 rounded-2xl p-8 hover:border-purple-500/40 transition"
            >
              <div className="flex justify-between items-start">
                <h3 className="text-neutral-100">{cs.title}</h3>
                <ArrowUpRight className="text-purple-400" />
              </div>

              <p className="text-neutral-400 mt-3">
                {cs.shortDescription}
              </p>

              <Link
                to={`/case-study/${cs.slug}`}
                className="inline-block mt-4 text-purple-400 hover:underline"
              >
                Read full breakdown →
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
