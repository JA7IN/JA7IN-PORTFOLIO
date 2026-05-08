import { motion } from "framer-motion";
import { Fragment } from "react";
import SectionTitle from "@/components/ui-fx/SectionTitle";
import { Compass, PenTool, Code2, Rocket } from "lucide-react";

const FragmentRow = Fragment;

const steps = [
  {
    icon: Compass,
    title: "Discover",
    body:
      "Define the core problem, map user flows and identify where intelligent data and AI can elevate the experience.",
  },
  {
    icon: PenTool,
    title: "Design",
    body:
      "Translate strategy into high-fidelity Figma prototypes — dark themes, intuitive navigation and premium aesthetics.",
  },
  {
    icon: Code2,
    title: "Build",
    body:
      "Bring designs to life with React + Tailwind, while wiring up backend logic, APIs and ML models that make the product smart.",
  },
  {
    icon: Rocket,
    title: "Launch",
    body:
      "Rigorous testing, performance tuning, cinematic visual polish and a flawless experience across every device.",
  },
];

// Animated arrow connector between two cards
const Arrow = ({ delay = 0 }) => (
  <div className="hidden lg:flex items-center justify-center w-full">
    <svg
      viewBox="0 0 80 24"
      className="w-full max-w-[80px] h-6 text-white/40"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.2"
    >
      <motion.path
        d="M2 12 H68"
        strokeDasharray="3 4"
        initial={{ pathLength: 0, opacity: 0 }}
        whileInView={{ pathLength: 1, opacity: 1 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.9, delay, ease: "easeOut" }}
      />
      <motion.path
        d="M62 6 L72 12 L62 18"
        initial={{ opacity: 0, x: -6 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.5, delay: delay + 0.7 }}
      />
    </svg>
  </div>
);

const Workflow = () => {
  return (
    <section
      id="workflow"
      className="relative px-6 py-24 md:py-32 max-w-6xl mx-auto"
      data-testid="workflow-section"
    >
      <SectionTitle title="My Workflow" />

      {/* Desktop: cards + arrows in a flowing row */}
      <div className="hidden lg:grid grid-cols-[1fr_auto_1fr_auto_1fr_auto_1fr] gap-3 items-stretch">
        {steps.map((s, i) => {
          const Icon = s.icon;
          return (
            <FragmentRow key={s.title}>
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.7, delay: i * 0.18, ease: [0.2, 0.8, 0.2, 1] }}
                className="glass rounded-2xl p-6 lift relative h-full"
                data-testid={`workflow-step-${i}`}
              >
                <span className="absolute top-4 right-4 text-[10px] tracking-[0.3em] text-white/25">
                  0{i + 1}
                </span>
                <div className="h-11 w-11 rounded-xl border border-white/15 bg-white/5 grid place-items-center mb-5">
                  <Icon className="h-4 w-4 text-white/85" />
                </div>
                <h3 className="font-section text-white text-lg mb-2">{s.title}</h3>
                <p className="text-white/60 text-sm leading-relaxed">{s.body}</p>
              </motion.div>
              {i < steps.length - 1 && <Arrow delay={i * 0.18 + 0.4} />}
            </FragmentRow>
          );
        })}
      </div>

      {/* Tablet/Mobile: vertical stack with down arrows */}
      <div className="lg:hidden flex flex-col items-center gap-3">
        {steps.map((s, i) => {
          const Icon = s.icon;
          return (
            <div key={s.title} className="w-full flex flex-col items-center gap-3">
              <motion.div
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="glass rounded-2xl p-6 lift w-full max-w-md relative"
                data-testid={`workflow-step-${i}`}
              >
                <span className="absolute top-4 right-4 text-[10px] tracking-[0.3em] text-white/25">
                  0{i + 1}
                </span>
                <div className="h-11 w-11 rounded-xl border border-white/15 bg-white/5 grid place-items-center mb-4">
                  <Icon className="h-4 w-4 text-white/85" />
                </div>
                <h3 className="font-section text-white text-lg mb-2">{s.title}</h3>
                <p className="text-white/60 text-sm leading-relaxed">{s.body}</p>
              </motion.div>
              {i < steps.length - 1 && (
                <svg viewBox="0 0 24 32" className="w-5 h-7 text-white/40" fill="none" stroke="currentColor" strokeWidth="1.2">
                  <motion.path
                    d="M12 2 V22"
                    strokeDasharray="3 4"
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: i * 0.1 + 0.3 }}
                  />
                  <path d="M6 18 L12 26 L18 18" />
                </svg>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Workflow;
