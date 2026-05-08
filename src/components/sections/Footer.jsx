const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer
      className="relative px-6 pt-12 pb-10 border-t border-white/5"
      data-testid="footer"
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-3">
        <p className="text-[11px] tracking-[0.25em] uppercase text-white/40">
          Designed & Built by Jatin Prajapati · © {year}
        </p>
        <p className="text-[11px] tracking-[0.25em] uppercase text-white/30">
          Where Ancient Wisdom Meets Future Tech
        </p>
      </div>
    </footer>
  );
};

export default Footer;
