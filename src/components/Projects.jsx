import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { content } from "../Content";
import { FiFolder, FiExternalLink, FiGithub } from "react-icons/fi";

/** Less vertical travel to finish the full horizontal track */
const SCROLL_FACTOR = 0.55;

const Projects = () => {
  const { Projects } = content;
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const trackRef = useRef(null);
  const [scrollDistance, setScrollDistance] = useState(0);
  const [padLeft, setPadLeft] = useState(20);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  const x = useTransform(scrollYProgress, [0, 1], [0, -scrollDistance]);

  useEffect(() => {
    const measure = () => {
      const title = titleRef.current;
      const track = trackRef.current;
      if (title) {
        setPadLeft(title.getBoundingClientRect().left);
      }
      if (!track) return;
      const distance = Math.max(0, track.scrollWidth - window.innerWidth);
      setScrollDistance(distance);
    };

    measure();
    const raf = requestAnimationFrame(measure);
    window.addEventListener("resize", measure);

    const resizeObserver = new ResizeObserver(measure);
    if (trackRef.current) resizeObserver.observe(trackRef.current);
    if (titleRef.current) resizeObserver.observe(titleRef.current);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", measure);
      resizeObserver.disconnect();
    };
  }, [Projects.project_content.length]);

  const verticalScroll = Math.round(scrollDistance * SCROLL_FACTOR);

  return (
    <section
      ref={sectionRef}
      id="projects"
      className="relative bg-primaryLinear"
      style={{
        height:
          scrollDistance > 0
            ? `calc(100vh + ${verticalScroll}px)`
            : "100vh",
      }}
    >
      <div className="sticky top-0 h-screen flex flex-col justify-center overflow-hidden py-10 md:py-12">
        <div ref={titleRef} className="md:container px-5 shrink-0">
          <h2 data-aos="fade-down" className="title">
            {Projects.title}
          </h2>
          <h4 data-aos="fade-down" className="subtitle">
            {Projects.subtitle}
          </h4>
        </div>

        <motion.div
          ref={trackRef}
          style={{ x, paddingLeft: padLeft, paddingRight: padLeft }}
          className="mt-6 flex gap-6 w-max will-change-transform mx-5 md:mx-0"
        >
          {Projects.project_content.map((project, i) => (
            <article
              key={i}
              className="shrink-0 w-[min(90vw,28rem)] sm:w-[30rem] min-h-[25rem] h-fit bg-bg_light_primary rounded-2xl p-7 md:p-8 flex justify-between flex-col border border-slate-200 shadow-sm"
            >
              <div className="flex flex-col gap-2 min-h-0 flex-1">
                <div className="flex items-center border-b border-dashed border-dark_primary/15 hover:border-dark_primary transition-all duration-300 w-fit gap-3">
                  <div
                    onClick={() => window.open(project.link, "_blank")}
                    className="cursor-pointer flex items-center gap-2 min-w-0"
                  >
                    <FiFolder className="shrink-0 text-dark_primary text-xl" />
                    <p className="text-xl font-Poppins font-semibold text-dark_primary truncate">
                      {project.title}
                    </p>
                  </div>
                  <div className="flex items-center gap-2 shrink-0">
                    {project.code ? (
                      <a
                        href={project.code}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${project.title} source code`}
                        className="text-dark_primary/70 hover:text-dark_primary transition-colors"
                      >
                        <FiGithub className="text-lg" />
                      </a>
                    ) : null}
                    {project.link ? (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${project.title} live site`}
                        className="text-[#e11d48] hover:opacity-80 transition-opacity"
                      >
                        <FiExternalLink className="text-lg" />
                      </a>
                    ) : null}
                  </div>
                </div>

                <ul className="mt-5 space-y-3 list-disc pl-5">
                  {project.bullets?.map((bullet, j) => (
                    <li
                      key={j}
                      className="text-[0.95rem] text-dark_primary/80 font-Poppins leading-relaxed"
                    >
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>

              {project.tech?.length ? (
                <div className="mt-6 flex flex-wrap gap-2">
                  {project.tech.map((item, j) => (
                    <span
                      key={j}
                      className="px-3 py-1.5 text-xs font-Poppins font-medium text-dark_primary bg-white border border-slate-200 rounded-md shadow-sm"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              ) : null}
            </article>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
