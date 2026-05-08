import StatusIndicator from "@/components/ui-fx/StatusIndicator";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer
      className="relative px-6 pt-12 pb-10 border-t border-white/5"
      data-testid="footer"
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex flex-col md:flex-row items-center gap-3 md:gap-6">
          <p className="text-[11px] tracking-[0.25em] uppercase text-white/40">
            Designed & Built by Jatin Prajapati · © {year}
          </p>
          <StatusIndicator />
        </div>
        <p className="text-[11px] tracking-[0.25em] uppercase text-white/30">
          Where Ancient Wisdom Meets Future Tech
        </p>
      </div>
    </footer>
  );
};

export default Footer;
