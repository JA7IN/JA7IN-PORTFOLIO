import SectionTitle from "@/components/ui-fx/SectionTitle";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/ui-fx/Reveal";
import {
  Code2,
  Brain,
  Terminal,
  Palette,
  Github,
  Figma,
  Database,
  Cpu,
  Box,
  Wand2,
  PenTool,
  Image as ImageIcon,
  Layers,
  GitBranch,
  Sparkles,
} from "lucide-react";

const groups = [
  {
    title: "Languages",
    Icon: Code2,
    items: ["Python", "C++", "Java", "HTML5", "CSS3", "Bash / Shell", "PostgreSQL"],
  },
  {
    title: "AI / ML",
    Icon: Brain,
    items: [
      "Model Training",
      "Data Preprocessing",
      "Pattern Learning",
      "Rule-Based Systems",
      "Bias Mitigation",
      "AI Explainability",
    ],
  },
  {
    title: "Environments",
    Icon: Terminal,
    items: ["WSL2 / Ubuntu", "VS Code", "Git / GitHub", "Linux (Kali)", "Windows 11"],
  },
  {
    title: "Design",
    Icon: Palette,
    items: [
      "Figma",
      "Adobe Photoshop",
      "Canva",
      "Wireframing",
      "Prototyping",
      "Branding & Identity",
    ],
  },
];

const marqueeIcons = [
  Code2, Brain, Cpu, Database, Github, Figma, PenTool, Palette,
  Box, Wand2, ImageIcon, Layers, GitBranch, Sparkles, Terminal,
];

const TechStack = () => {
  return (
    <section
      id="stack"
      className="relative px-6 py-24 md:py-32 max-w-6xl mx-auto"
      data-testid="stack-section"
    >
      <SectionTitle title="Tech Stack" />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {groups.map((g, i) => {
          const Icon = g.Icon;
          return (
            <Reveal key={g.title} variant="up" delay={i * 0.08}>
              <div
                className="glass rounded-2xl p-6 md:p-7 lift h-full"
                data-testid={`stack-group-${g.title.toLowerCase().replace(/[^a-z]+/g, "-")}`}
              >
                <div className="flex items-center gap-3 mb-5">
                  <div className="h-9 w-9 rounded-xl border border-white/15 bg-white/5 grid place-items-center">
                    <Icon className="h-4 w-4 text-white/85" />
                  </div>
                  <h3 className="font-section text-white/95 text-lg">{g.title}</h3>
                </div>
                <StaggerGroup className="flex flex-wrap gap-2" stagger={0.04}>
                  {g.items.map((it) => (
                    <StaggerItem key={it} variant="scale">
                      <span className="px-3 py-1.5 text-xs rounded-full border border-white/10 bg-white/[0.03] text-white/75 hover:bg-white/10 hover:text-white transition">
                        {it}
                      </span>
                    </StaggerItem>
                  ))}
                </StaggerGroup>
              </div>
            </Reveal>
          );
        })}
      </div>

      {/* Icon marquee — no edge masks, just continuous flow */}
      <div className="mt-12 relative overflow-hidden py-4">
        <div className="marquee-track items-center">
          {[...marqueeIcons, ...marqueeIcons].map((Ic, i) => (
            <div
              key={i}
              className="h-12 w-12 rounded-xl border border-white/10 bg-white/[0.04] grid place-items-center flex-shrink-0"
            >
              <Ic className="h-5 w-5 text-white/70" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
