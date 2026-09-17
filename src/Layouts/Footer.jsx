import React from "react";
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
} from "motion/react";
const VIEWBOX_WIDTH = 1410;

function Footer() {
  const gradientX1Raw = useMotionValue(0.5);
  const shouldReduceMotion = useReducedMotion();
  const gradientX1 = useSpring(
    useTransform(gradientX1Raw, [0, 1], [0, VIEWBOX_WIDTH]),
    {
      stiffness: 150,
      damping: 10,
    },
  );

  const handleMouseMove = (event) => {
    if (shouldReduceMotion) return;

    const containerRect = event.currentTarget.getBoundingClientRect();
    gradientX1Raw.set(
      (event.clientX - containerRect.left) / containerRect.width,
    );
  };

  const handleMouseLeave = () => {
    if (shouldReduceMotion) return;
    gradientX1Raw.set(0.5);
  };

  return (
    <footer className="relative bg-primaryLinear p-3 pb-0 text-center `">
      <div className="absolute m-auto w-full bottom-[20px]">
      <h6 className="mb-3">Prince Makavana</h6>
      <p>© 2023 - PRESENT Prince Makavana</p>
      </div>
      <div className=" after:z-1 after:bg-foreground/15">
        <div
          className="overflow-hidden"
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
        >
          <div className="flex w-full translate-y-[37.5%] items-center justify-center">
            <svg
              className="container size-full sm:size-auto md:size-full p-0 sm:px-[14px] "
              viewBox="0 0 1410 258"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M177 1H209V257H177V1ZM209 1H305V33H209V1ZM305 33H337V97H305V33ZM209 97H305V129H209V97ZM369 1H401V257H369V1ZM401 1H497V33H401V1ZM497 33H529V97H497V33ZM401 97H497V129H401V97ZM401 129H465V161H433V257H401V129ZM465 161H529V257H497V193H465V161ZM561 1H657V33H561V1ZM593 33H625V225H593V33ZM561 225H657V257H561V225ZM689 1H721V257H689V1ZM817 1H849V257H817V1ZM721 33H753V97H721V33ZM753 97H785V161H753V97ZM785 161H817V225H785V161ZM1009 33H1041V65H1009V33ZM913 1H1009V33H913V1ZM881 33H913V225H881V33ZM913 225H1009V257H913V225ZM1009 193H1041V225H1009V193ZM1073 1H1105V257H1073V1ZM1105 1H1233V33H1105V1ZM1105 97H1201V129H1105V97Z"
                fill="url(#paint0_linear_1145_73)"
              />
              <path
                d="M1105 225H1233V257H1105V225Z"
                fill="url(#paint0_linear_1145_73)"
              />
              <path
                className="stroke-dark_primary/20"
                d="M177 1H209V257H177V1M209 1H305V33H209V1M305 33H337V97H305V33M209 97H305V129H209V97M369 1H401V257H369V1M401 1H497V33H401V1M497 33H529V97H497V33M401 97H497V129H401V97M401 129H465V161H433V257H401V129M465 161H529V257H497V193H465V161M561 1H657V33H561V1M593 33H625V225H593V33M561 225H657V257H561V225M689 1H721V257H689V1M817 1H849V257H817V1M721 33H753V97H721V33M753 97H785V161H753V97M785 161H817V225H785V161M1009 33H1041V65H1009V33M913 1H1009V33H913V1M881 33H913V225H881V33M913 225H1009V257H913V225M1009 193H1041V225H1009V193M1073 1H1105V257H1073V1M1105 1H1233V33H1105V1M1105 97H1201V129H1105V97M1105 225H1233V257H1105V225"
                strokeWidth="2"
              />
              <defs>
                <motion.linearGradient
                  id="paint0_linear_1145_73"
                  x1={gradientX1}
                  y1="1"
                  x2="705"
                  y2="257"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0.625" stopColor="#06223F" stopOpacity="0" />
                  <stop offset="1" stopColor="#06223F" />
                </motion.linearGradient>
              </defs>
            </svg>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
