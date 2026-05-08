import { motion } from "framer-motion";
import { Download, MessageSquare, ChevronDown, MapPin } from "lucide-react";

const Hero = () => {
  const scrollToContact = () => {
    const el = document.getElementById("contact");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative w-full min-h-screen overflow-hidden"
      data-testid="hero-section"
      style={{ background: "#000000" }}
    >
      {/* Spline 3D background */}
      <div className="absolute inset-0 z-0 overflow-hidden" aria-hidden="true">
        <iframe
          title="Spline glowing planet particles"
          src="https://my.spline.design/glowingplanetparticles-z9tjESNgdzCadcKKxrQDrd8V/"
          frameBorder="0"
          className="absolute left-0 bottom-0 w-full h-[130%] translate-y-[15%]"
          style={{ pointerEvents: "none" }}
          loading="eager"
          allow="autoplay; fullscreen"
          data-testid="hero-spline"
        />
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-b from-transparent to-[#000000] z-10" />
      </div>

      {/* Spline watermark cover */}
      <div
        className="absolute bottom-3 right-3 z-20 h-12 w-44 rounded-md pointer-events-none"
        style={{ background: "#000000" }}
        aria-hidden="true"
      />

      {/* Hero content */}
      <div className="relative z-10 flex flex-col items-center min-h-screen px-6 text-center">
        {/* Tagline pill at top */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.2, 0.8, 0.2, 1] }}
          className="mt-12 md:mt-16 mx-auto"
        >
          <span className="tag-pill text-white/85" data-testid="hero-tagline">
            Where Ancient Wisdom Meets Future Tech
          </span>
        </motion.div>

        <div className="flex-1 flex flex-col items-center justify-center w-full translate-y-[12vh]">
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, delay: 0.25, ease: [0.2, 0.8, 0.2, 1] }}
            className="font-display name-gradient leading-[0.9] tracking-tight"
            style={{
              fontSize: "clamp(3.2rem, 12vw, 10rem)",
              filter:
                "drop-shadow(0 4px 18px rgba(0,0,0,0.75)) drop-shadow(0 0 36px rgba(2,4,10,0.85))",
            }}
            data-testid="hero-name"
          >
            <span className="block">Jatin</span>
            <span className="block">Prajapati</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.85 }}
            className="mt-7 text-[11px] md:text-[13px] uppercase tracking-[0.4em] text-white/85"
            style={{ textShadow: "0 2px 12px rgba(0,0,0,0.85)" }}
            data-testid="hero-roles"
          >
            AI Ethics Advocate · AI / ML Engineering Intern · Data Science · UI / UX
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.05 }}
            className="mt-3 flex items-center gap-2 text-white/65 text-xs"
            style={{ textShadow: "0 2px 10px rgba(0,0,0,0.8)" }}
          >
            <MapPin className="h-3 w-3" />
            <span>Bhopal, MP · India</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="mt-10 flex flex-wrap justify-center gap-4"
          >
            <a
              href="/cv.pdf"
              download
              className="oval-btn"
              data-testid="hero-download-cv"
            >
              <Download className="h-4 w-4" />
              <span>Download CV</span>
            </a>
            <button
              onClick={scrollToContact}
              className="oval-btn"
              data-testid="hero-get-in-touch"
            >
              <MessageSquare className="h-4 w-4" />
              <span>Get in Touch</span>
            </button>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.6 }}
          className="mb-10 flex flex-col items-center gap-1 text-white/40"
          data-testid="hero-scroll-indicator"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <ChevronDown className="h-4 w-4" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
