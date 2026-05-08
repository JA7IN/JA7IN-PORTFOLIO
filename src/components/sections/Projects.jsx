import SectionTitle from "@/components/ui-fx/SectionTitle";
import { Reveal } from "@/components/ui-fx/Reveal";
import { ArrowUpRight, Brain, Rocket, ScanText, Github } from "lucide-react";

const projects = [
  {
    name: "AI-Powered Smart Classifier",
    year: "2025",
    tags: ["Python", "Scikit-learn", "Pandas"],
    icon: Brain,
    description:
      "An ML classifier that learns patterns from labelled datasets and serves real-time predictions through a clean Python interface — focused on data quality, preprocessing pipelines, and explainability.",
    repo: "https://github.com/JA7IN",
  },
  {
    name: "Hackathon Pitch Validator",
    year: "2026",
    tags: ["Generative AI", "Web", "LLM"],
    icon: Rocket,
    description:
      "A Generative-AI tool that scores hackathon pitches on novelty, feasibility & market fit. Built as a lightweight web app guiding founders through structured, AI-coached refinement loops.",
    repo: "https://github.com/JA7IN",
  },
  {
    name: "Automated Deadline Extractor",
    year: "2026",
    tags: ["NER", "NLP", "Python"],
    icon: ScanText,
    description:
      "A Named-Entity-Recognition model that auto-extracts deadlines, dates and action items from unstructured documents — turning emails and PDFs into a clean, queryable timeline.",
    repo: "https://github.com/JA7IN",
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="relative px-6 py-24 md:py-32 max-w-6xl mx-auto"
      data-testid="projects-section"
    >
      <SectionTitle title="Projects" />

      <div className="space-y-5 md:space-y-6">
        {projects.map((p, i) => {
          const Icon = p.icon;
          return (
            <Reveal key={p.name} variant="up" delay={i * 0.08}>
              <a
                href={p.repo}
                target="_blank"
                rel="noreferrer"
                className="block glass-strong rounded-2xl p-6 md:p-8 lift group cursor-pointer"
                data-testid={`project-card-${i}`}
              >
                <div className="flex flex-col md:flex-row md:items-start gap-6 md:gap-10">
                  <div className="flex items-center gap-4 md:w-1/3">
                    <div className="h-12 w-12 rounded-xl border border-white/15 bg-white/5 grid place-items-center flex-shrink-0">
                      <Icon className="h-5 w-5 text-white/85" />
                    </div>
                    <div>
                      <p className="text-[10px] uppercase tracking-[0.3em] text-white/40 mb-1">
                        {p.year} · Project 0{i + 1}
                      </p>
                      <h3 className="font-section text-white text-xl md:text-2xl leading-tight">
                        {p.name}
                      </h3>
                    </div>
                  </div>

                  <div className="md:flex-1 flex flex-col gap-4">
                    <p className="text-white/65 text-sm md:text-base leading-relaxed">
                      {p.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {p.tags.map((t) => (
                        <span
                          key={t}
                          className="px-2.5 py-1 text-[10px] uppercase tracking-[0.2em] rounded-full border border-white/12 bg-white/[0.03] text-white/60"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="md:self-center">
                    <span
                      className="inline-flex items-center gap-1.5 text-xs text-white/55 group-hover:text-white transition"
                      data-testid={`project-link-${i}`}
                    >
                      <Github className="h-3.5 w-3.5" /> View on GitHub{" "}
                      <ArrowUpRight className="h-3.5 w-3.5" />
                    </span>
                  </div>
                </div>
              </a>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
};

export default Projects;
