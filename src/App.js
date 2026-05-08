import "@/App.css";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import TechStack from "@/components/sections/TechStack";
import Experience from "@/components/sections/Experience";
import Certifications from "@/components/sections/Certifications";
import Projects from "@/components/sections/Projects";
import Workflow from "@/components/sections/Workflow";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";

import CustomCursor from "@/components/ui-fx/CustomCursor";

function App() {
  return (
    <div className="App" data-testid="portfolio-root">
      <CustomCursor />
      <Hero />

      {/* About → Workflow */}
      <main className="relative z-10 bg-[#04050a] overflow-hidden bw-animated-bg">
        {/* Subtle dark overlay for content legibility */}
        <div
          className="absolute inset-0 z-0 pointer-events-none"
          style={{
            background:
              "linear-gradient(180deg, rgba(2,4,10,0.1) 0%, rgba(2,4,10,0.3) 50%, rgba(2,4,10,0.6) 100%)",
          }}
        />
        {/* Bottom fade into the black Get in Touch section */}
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-b from-transparent to-black z-0" />

        <div className="relative z-10">
          <About />
          <TechStack />
          <Experience />
          <Certifications />
          <Projects />
          <Workflow />
        </div>
      </main>

      {/* Get in Touch + Footer on a clean solid dark-black backdrop */}
      <section className="relative" style={{ background: "#000000" }}>
        <Contact />
        <Footer />
      </section>
    </div>
  );
}

export default App;
