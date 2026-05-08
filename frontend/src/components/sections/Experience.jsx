import SectionTitle from "@/components/ui-fx/SectionTitle";
import { Reveal } from "@/components/ui-fx/Reveal";
import { Briefcase, Users } from "lucide-react";

const items = [
  {
    company: "3Skill",
    role: "AI & ML Intern",
    dates: "Dec 2025 — Feb 2026",
    icon: Briefcase,
    bullets: [
      "Building practical ML pipelines and contributing to real-world AI workflows.",
      "Hands-on with model training, data preprocessing, and pattern learning.",
    ],
  },
  {
    company: "RNTU Technical Club",
    role: "Core Technical Member",
    dates: "Dec 2024 — Present",
    icon: Users,
    bullets: [
      "Lead coding challenges, technical discussions, and innovation sprints.",
      "Mentor juniors; coordinate cross-team workshops on AI & design.",
    ],
  },
];

const Experience = () => {
  return (
    <section
      id="experience"
      className="relative px-6 py-24 md:py-32 max-w-5xl mx-auto"
      data-testid="experience-section"
    >
      <SectionTitle eyebrow="03 — Trajectory" title="Experience" />

      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white/15 to-transparent" />

        <div className="space-y-10">
          {items.map((it, idx) => {
            const Icon = it.icon;
            const right = idx % 2 === 1;
            return (
              <Reveal
                key={it.company}
                variant={right ? "right" : "left"}
                delay={idx * 0.08}
              >
                <div
                  className={`relative grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-12 items-start`}
                  data-testid={`experience-item-${idx}`}
                >
                  {/* Dot */}
                  <div className="absolute left-4 md:left-1/2 -translate-x-1/2 top-6 h-3 w-3 rounded-full bg-white/80 ring-4 ring-[#0a0c12]" />

                  {/* Content (alternating side on md+) */}
                  <div
                    className={`pl-12 md:pl-0 ${
                      right ? "md:col-start-2" : "md:col-start-1"
                    }`}
                  >
                    <div className="glass-strong rounded-2xl p-6 lift">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="h-9 w-9 rounded-lg border border-white/15 bg-white/5 grid place-items-center">
                          <Icon className="h-4 w-4 text-white/80" />
                        </div>
                        <div>
                          <h3 className="font-section text-white text-base md:text-lg">
                            {it.role}
                          </h3>
                          <p className="text-white/55 text-xs tracking-wider">
                            {it.company}
                          </p>
                        </div>
                      </div>
                      <p className="text-[10px] uppercase tracking-[0.3em] text-white/40 mb-3">
                        {it.dates}
                      </p>
                      <ul className="space-y-2">
                        {it.bullets.map((b, i) => (
                          <li
                            key={i}
                            className="text-sm text-white/70 leading-relaxed flex gap-2"
                          >
                            <span className="text-white/30 mt-1.5 h-px w-3 bg-white/30 flex-shrink-0" />
                            {b}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Experience;
