import { Reveal } from "@/components/ui-fx/Reveal";

const SectionTitle = ({ title, align = "center" }) => {
  const alignCls =
    align === "left"
      ? "items-start text-left"
      : align === "right"
      ? "items-end text-right"
      : "items-center text-center";
  return (
    <div className={`flex flex-col ${alignCls} mb-14 md:mb-20`}>
      <Reveal variant="up">
        <h2
          className="font-section text-3xl md:text-5xl text-white/95"
          data-testid="section-title"
        >
          {title}
        </h2>
      </Reveal>
    </div>
  );
};

export default SectionTitle;
