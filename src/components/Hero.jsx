import { createElement } from "react";
import { content } from "../Content";
import Tooltip from "../Layouts/Tooltip";
const Resume = "/assets/Prince_Makavana_Resume.pdf";

const Hero = () => {
  const { hero } = content;
  return (
    <section id='home'>
      <div className='min-h-screen relative flex md:flex-row flex-col md:items-center justify-center items-center gap-6 md:gap-10 bg-primaryLinear px-6 md:px-10'>
        <div className='md:h-[32rem] h-[15rem] shrink-0'>
          <img
            data-aos='slide-up'
            src={hero.image}
            alt='Profile'
            className='h-full object-cover rounded-full'
          />
        </div>

        <div
          data-aos='fade-down'
          className='w-full flex flex-col gap-4 max-w-2xl pb-16 md:pb-0 md:pt-2 items-center md:items-start text-center md:text-left'
        >
          <h1 className='text-[#EAF2FA]  tracking-tight leading-[1]'>
            {hero.firstName}<br className="lg:block hidden" /> 
            <span className='text-dark_primary '> {hero.LastName}</span>
          </h1>

          
          <Tooltip content={hero.tagline}>
          <p className=' font-semibold text-lg md:text-xl text-dark_primary/80 tracking-wide'>
            {hero.title}
          </p>
          </Tooltip>


          <div className=' flex flex-wrap items-center gap-3'>
            <a
              target='_blank'
              rel='noopener noreferrer'
              href={Resume}
              className='btn cursor-pointer hover:bg-[#EAF2FA]/60 transition-colors'
            >
              {hero.btnText}
            </a>
            {hero.social_links.map((social, i) => (
              <a
                key={i}
                href={social.link}
                target={social.link.startsWith("mailto:") ? "_self" : "_blank"}
                rel='noopener noreferrer'
                aria-label={social.label}
                className='flex items-center justify-center w-10 h-10 border-2 border-dark_primary rounded-md rounded-br-3xl bg-[#EAF2FA]/50 hover:bg-[#EAF2FA] transition-colors'
              >
                {createElement(social.icon, {
                  className: "text-xl text-dark_primary",
                })}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
