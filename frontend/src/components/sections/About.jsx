import SectionTitle from "@/components/ui-fx/SectionTitle";
import { Reveal } from "@/components/ui-fx/Reveal";
import { GraduationCap, Sparkles, Users } from "lucide-react";

const About = () => {
  return (
    <section
      id="about"
      className="relative px-6 py-24 md:py-32 max-w-6xl mx-auto"
      data-testid="about-section"
    >
      <SectionTitle eyebrow="01 — Profile" title="About Me" />

      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-start">
        {/* Profile image */}
        <Reveal variant="left" className="md:col-span-4">
          <div
            className="glass rounded-2xl overflow-hidden aspect-[4/5] relative"
            data-testid="about-photo"
          >
            {/* Placeholder fallback (shown when no image is dropped at /assets/profile.jpg) */}
            <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-[#0e1220] via-[#161a26] to-[#0a0d18] text-white/40">
              <div className="text-center px-6">
                <div className="w-20 h-20 rounded-full bg-white/5 border border-white/10 mx-auto mb-3 flex items-center justify-center">
                  <span className="font-display text-2xl">JP</span>
                </div>
                <p className="text-[10px] uppercase tracking-[0.3em]">
                  Drop image at
                </p>
                <p className="text-[10px] text-white/30 mt-1">
                  /public/assets/profile.jpg
                </p>
              </div>
            </div>
            {/* Actual image (covers placeholder when present) */}
            <img
              src="/assets/profile.png"
              alt="Jatin Prajapati"
              className="absolute inset-0 w-full h-full object-cover saturate-150 contrast-110"
              onError={(e) => {
                e.currentTarget.style.display = "none";
              }}
            />
          </div>
        </Reveal>

        {/* Bio */}
        <div className="md:col-span-8 space-y-6">
          <Reveal variant="right">
            <p
              className="text-white/75 text-base md:text-lg leading-relaxed"
              data-testid="about-bio"
            >
              A dedicated student exploring{" "}
              <span className="text-white">
                Artificial Intelligence, Machine Learning, and Data Science
              </span>
              , along with a strong passion for{" "}
              <span className="text-white">UI/UX & Graphic Design</span>. My
              journey is driven by curiosity, creativity, and a vision to merge
              technology with design for impactful solutions.
            </p>
          </Reveal>

          <Reveal variant="right" delay={0.1}>
            <p className="text-white/55 text-sm md:text-base leading-relaxed">
              I believe in connecting creativity with innovation. My dual
              interest in AI/ML and design gives me a unique perspective to
              approach problems both logically and visually — eager to
              contribute to internships, projects, and collaborations that
              combine technical expertise with creative design.
            </p>
          </Reveal>

          {/* Quick facts grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-4">
            {[
              {
                icon: GraduationCap,
                label: "Education",
                value: "B.E. - AI/ML · Rabindranath Tagore University Bhopal",
                sub: "Jul 2024 — Jun 2028",
              },
              {
                icon: Users,
                label: "Leadership",
                value: "RNTU Technical Club",
                sub: "Core Member",
              },
              {
                icon: Sparkles,
                label: "Focus",
                value: "AI × Design",
                sub: "Logic meets craft",
              },
            ].map((f, i) => (
              <Reveal key={f.label} variant="up" delay={0.15 + i * 0.08} className="h-full">
                <div
                  className="glass rounded-xl p-4 lift h-full flex flex-col"
                  data-testid={`about-fact-${i}`}
                >
                  <f.icon className="h-4 w-4 text-white/60 mb-3" />
                  <div className="text-[10px] uppercase tracking-[0.25em] text-white/40">
                    {f.label}
                  </div>
                  <div className="text-sm text-white/90 mt-1">{f.value}</div>
                  <div className="text-[11px] text-white/45 mt-0.5">
                    {f.sub}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
