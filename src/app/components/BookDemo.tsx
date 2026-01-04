import { Calendar, ExternalLink } from "lucide-react";
import { BOOK_DEMO } from "../constants/personal";

export function BookDemo() {
  // Replace with actual Calendly link
  const calendlyLink = BOOK_DEMO;

  return (
    <section id="book-demo" className="py-20 lg:py-32 px-6 lg:px-8 bg-gradient-to-b from-neutral-900/30 to-neutral-950">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center justify-center size-16 bg-gradient-to-br from-purple-500 to-cyan-500 rounded-full mb-8 shadow-xl shadow-purple-500/25">
            <Calendar className="size-8 text-white" />
          </div>

          <h2 className="text-neutral-100 mb-6">
            Backend Risk Review &{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
              Execution Plan
            </span>
          </h2>

          <p className="text-neutral-300 mb-10 max-w-2xl mx-auto text-lg">
            Bring your idea, system, or code. We'll focus on real issues: what can break, where money flows, how to scale, and what to build first.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={calendlyLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-purple-500 to-cyan-500 text-white px-8 py-4 rounded-lg hover:from-purple-600 hover:to-cyan-600 transition-all inline-flex items-center justify-center gap-2 shadow-xl shadow-purple-500/25"
            >
              <Calendar className="size-5" />
              Schedule on Calendly
              <ExternalLink className="size-4" />
            </a>
          </div>

          <div className="mt-12 pt-12 border-t border-neutral-800/50">
            <div className="grid sm:grid-cols-3 gap-8 text-left">
              <div className="border border-purple-500/10 bg-purple-500/5 p-6 rounded-lg">
                <div className="text-purple-400 text-sm mb-2">Meeting Type</div>
                <div className="text-neutral-200">Free technical consultation</div>
              </div>
              <div className="border border-cyan-500/10 bg-cyan-500/5 p-6 rounded-lg">
                <div className="text-cyan-400 text-sm mb-2">Duration</div>
                <div className="text-neutral-200">20–30 minutes</div>
              </div>
              <div className="border border-blue-500/10 bg-blue-500/5 p-6 rounded-lg">
                <div className="text-blue-400 text-sm mb-2">Next Step</div>
                <div className="text-neutral-200">Proposal or decline—no pressure</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}