import { useParams } from "react-router-dom";
import { caseStudies } from "../constants/casestudies";

export function CaseStudyDetail() {
  const { slug } = useParams();
  const study = caseStudies.find(c => c.slug === slug);

  if (!study) return <div className="p-10 text-neutral-300">Not found</div>;

  return (
    <div className="max-w-6xl mx-auto px-6 py-20">
      <div className="grid lg:grid-cols-2 gap-12 items-start">
        <div>
          <h1 className="text-neutral-100 mb-6">{study.title}</h1>
          <p className="text-neutral-400 mb-8">{study.shortDescription}</p>

          <div className="space-y-6">
            <section>
              <h4 className="text-purple-400 mb-2">Problem</h4>
              <p className="text-neutral-300">{study.problem}</p>
            </section>

            <section>
              <h4 className="text-purple-400 mb-2">Solution</h4>
              <p className="text-neutral-300">{study.solution}</p>
            </section>

            <section>
              <h4 className="text-purple-400 mb-2">Outcome</h4>
              <p className="text-neutral-300">{study.outcome}</p>
            </section>
          </div>
        </div>

        <div>
          <img
            src={study.heroImage}
            alt={study.title}
            className="rounded-xl shadow-2xl"
          />
        </div>
      </div>

      <div className="mt-16 space-y-12">
        {study.deepDive.map((block, i) => (
          <div key={i}>
            <h3 className="text-neutral-100 mb-4">{block.heading}</h3>
            <ul className="space-y-2">
              {block.content.map((line, j) => (
                <li key={j} className="text-neutral-300">
                  • {line}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {study.liveLink && (
        <a
          href={study.liveLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-12 text-purple-400 hover:underline"
        >
          Visit live project →
        </a>
      )}
    </div>
  );
}
