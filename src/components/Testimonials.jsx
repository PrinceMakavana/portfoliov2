import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { content } from "../Content";
import Tooltip from "../Layouts/Tooltip";
import { FiMessageSquare, FiUser } from "react-icons/fi";

/** Less vertical travel to finish the full horizontal track */
const SCROLL_FACTOR = 0.55;

const Testimonials = () => {
  const { Testimonials } = content;
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
  }, [Testimonials.testimonials_content.length]);

  const verticalScroll = Math.round(scrollDistance * SCROLL_FACTOR);

  return (
    <section
      ref={sectionRef}
      id="testimonials"
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
            {Testimonials.title}
          </h2>
          <h4 data-aos="fade-down" className="subtitle">
            {Testimonials.subtitle}
          </h4>
        </div>

        <motion.div
          ref={trackRef}
          style={{ x, paddingLeft: padLeft, paddingRight: padLeft }}
          className="mt-6 flex gap-6 w-max will-change-transform mx-5 md:mx-0"
        >
          {Testimonials.testimonials_content.map((item, i) => (
            <article
              key={i}
              className="shrink-0 w-[min(85vw,44rem)]  h-[18rem] bg-bg_light_primary rounded-2xl p-7 md:p-8 flex flex-col border border-slate-200 shadow-sm"
            >
              <div className="flex flex-col gap-2 min-h-0 flex-1">
                <div className="flex items-center border-b border-dashed border-dark_primary/15 hover:border-dark_primary transition-all duration-300 w-full gap-4 pb-4">
                  {item.img ? (
                    <img
                      src={item.img}
                      className="h-14 w-14 rounded-full shrink-0 border border-slate-200 object-cover"
                      alt={item.name}
                    />
                  ) : (
                    <div
                      className="h-14 w-14 rounded-full shrink-0 border border-slate-200 bg-white flex items-center justify-center text-dark_primary/50"
                      aria-hidden="true"
                    >
                      <FiUser className="h-7 w-7" />
                    </div>
                  )}
                  <div className="min-w-0">
                    <div className="flex items-center gap-2 min-w-0">
                      {/* <FiMessageSquare className="shrink-0 text-dark_primary text-lg" /> */}
                      <p className="text-xl font-Poppins font-semibold text-dark_primary truncate">
                        {item.name}
                      </p>
                    </div>
                   
                  </div>
                </div>

                <div className="mt-5 flex-1 overflow-visible">
                  <Tooltip content={item.review}>
                    <p
                      className="text-[0.95rem] text-dark_primary/80 font-Poppins leading-relaxed ellipse-3 cursor-help"
                      tabIndex={0}
                      aria-label="Full review"
                    >
                      {item.review}
                    </p>
                  </Tooltip>
                </div>
              </div>
            </article>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
