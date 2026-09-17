const SectionGradient = ({ from, to, className = "" }) => (
  <div
    aria-hidden="true"
    className={`h-20 md:h-28 w-full bg-gradient-to-b ${className}`}
    style={{
      backgroundImage: `linear-gradient(to bottom, ${from}, ${to})`,
    }}
  />
);

export default SectionGradient;
