import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionTitle from "@/components/ui-fx/SectionTitle";
import { Reveal } from "@/components/ui-fx/Reveal";
import { Award, X } from "lucide-react";

/*
  Drop your certificate images/PDFs into:
    /app/frontend/public/assets/certs/
  with the filenames listed in the `file` field below.
  Supported: .png .jpg .webp .pdf
*/
const certs = [
  {
    title: "Generative AI Mastermind",
    issuer: "Outskill",
    date: "Apr 2026",
    file: "/assets/certs/generative-ai-mastermind.png",
  },
  {
    title: "AWS Solutions Architecture",
    issuer: "Forage · Job Simulation",
    date: "Oct 2025",
    file: "/assets/certs/aws-solutions-architecture.png",
  },
  {
    title: "Deloitte Australia · Data Analytics",
    issuer: "Forage · Job Simulation",
    date: "Oct 2025",
    file: "/assets/certs/deloitte-data-analytics.png",
  },
  {
    title: "Microsoft Copilot for Productivity",
    issuer: "Microsoft & LinkedIn",
    date: "Sep 2025",
    file: "/assets/certs/microsoft-copilot.png",
  },
  {
    title: "Ethics of AI",
    issuer: "University of Helsinki",
    date: "May 2026",
    file: "/assets/certs/ethics-of-ai.png",
  },
];

const Certifications = () => {
  const [active, setActive] = useState(null);

  const isPdf = (f) => f && f.toLowerCase().endsWith(".pdf");

  return (
    <section
      id="certifications"
      className="relative px-6 py-24 md:py-32 max-w-6xl mx-auto"
      data-testid="certifications-section"
    >
      <SectionTitle title="Certifications" />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
        {certs.map((c, i) => (
          <Reveal key={c.title} variant="up" delay={i * 0.06}>
            <button
              type="button"
              onClick={() => setActive(c)}
              className="glass rounded-2xl p-5 md:p-6 lift h-full w-full text-left flex flex-col"
              data-testid={`cert-card-${i}`}
            >
              <div className="flex items-start justify-between mb-4">
                <div className="h-10 w-10 rounded-lg border border-white/15 bg-white/5 grid place-items-center">
                  <Award className="h-4 w-4 text-white/80" />
                </div>
                <span className="text-[10px] uppercase tracking-[0.25em] text-white/40">
                  {c.date}
                </span>
              </div>
              <h3 className="font-section text-white text-base md:text-lg leading-snug mb-2">
                {c.title}
              </h3>
              <p className="text-xs text-white/50 mt-auto">{c.issuer}</p>
            </button>
          </Reveal>
        ))}
      </div>

      {/* Preview popup */}
      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-50 flex items-center justify-center px-4 py-8"
            style={{ background: "rgba(2,4,10,0.78)", backdropFilter: "blur(8px)" }}
            onClick={() => setActive(null)}
            data-testid="cert-preview-overlay"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 12 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.96, opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.2, 0.8, 0.2, 1] }}
              className="glass-strong rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden flex flex-col"
              onClick={(e) => e.stopPropagation()}
              data-testid="cert-preview-modal"
            >
              <div className="flex items-center justify-between p-4 border-b border-white/10">
                <div>
                  <h3 className="font-section text-white text-base md:text-lg">
                    {active.title}
                  </h3>
                  <p className="text-xs text-white/50">
                    {active.issuer} · {active.date}
                  </p>
                </div>
                <button
                  onClick={() => setActive(null)}
                  className="h-9 w-9 rounded-full border border-white/15 bg-white/5 grid place-items-center text-white/70 hover:text-white hover:bg-white/10 transition"
                  data-testid="cert-preview-close"
                  aria-label="Close preview"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
              <div className="flex-1 overflow-auto bg-black/40">
                {isPdf(active.file) ? (
                  <iframe
                    title={active.title}
                    src={active.file}
                    className="w-full h-[75vh]"
                  />
                ) : (
                  <img
                    src={active.file}
                    alt={active.title}
                    className="w-full h-auto block"
                    onError={(e) => {
                      e.currentTarget.style.display = "none";
                      e.currentTarget.parentElement.querySelector(
                        ".cert-fallback"
                      ).style.display = "flex";
                    }}
                  />
                )}
                <div
                  className="cert-fallback hidden flex-col items-center justify-center text-center p-12 text-white/55"
                  style={{ display: "none" }}
                >
                  <Award className="h-10 w-10 mb-4 text-white/40" />
                  <p className="text-sm">
                    Drop your certificate at <br />
                    <span className="text-white/80">{active.file}</span>
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Certifications;
