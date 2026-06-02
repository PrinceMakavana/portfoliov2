import React, { useEffect, useRef } from "react";
import { content } from "../Content";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
const Projects = () => {
  const { Projects } = content;
  const slidesPerView = window.innerWidth < 768 ? 1 : 3;
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.play();
       video.addEventListener("loadedmetadata", function() {
            video.playbackRate = 1.25;
        });
    }
  }, []);
  return (
    <section className='bg-dark_primary ' id="projects">
      <div className='md:container px-5 pt-14 min-h-screen flex flex-col '>
        <div>
          <h2 data-aos='fade-down' className='title !text-white'>
            {Projects.title}
          </h2>
          <h4 data-aos='fade-down' className='subtitle'>
            {Projects.subtitle}
          </h4>
          <br />
        </div>
        <div className='flex items-center  mt-auto mb-auto'>
          {/* <img
          data-aos="fade-right"
            src={Projects.image}
            alt=''
            className='max-w-[45vw] min-w-[22rem]'
          /> */}
          <Swiper
            pagination={{ clickable: true }}
            slidesPerView={slidesPerView}
            direction="horizontal"
            spaceBetween={20}
            modules={[Pagination]}
            className='projects-swiper rounded-3xl pb-12 self-start'
          >
            {Projects.project_content.map((content, i) => (
              <SwiperSlide key={i} className='h-auto'>
                <div className='max-w-sm h-full m-auto overflow-hidden shadow-sm bg-bg_light_primary rounded-md flex flex-col'>
                  <div className='aspect-[16/9] w-full overflow-hidden bg-dark_primary'>
                    {content.ContentType === "image" ? (
                      <img
                        src={content.image}
                        alt={content.title}
                        className='w-full h-full object-cover hover:scale-110 transition-all duration-500'
                      />
                    ) : content.ContentType === "video" ? (
                      <video
                        aria-label={content.title}
                        autoPlay={true}
                        loop
                        muted
                        playsInline
                        className='w-full h-full object-cover hover:scale-110 transition-all duration-500'
                        ref={videoRef}
                      >
                        <source src={content.image} type="video/mp4" />
                      </video>
                    ) : null}
                  </div>
                  <div className='px-6 py-4 flex-1 flex flex-col'>
                    <div className='font-bold text-xl mb-2 title min-h-[4.5rem]'>
                      {content.title}
                    </div>
                    <p className='text-gray-700 text-base h-[10rem] project-content-height-fix'>{content.para}</p>
                  </div>
                  <div className='px-6 pt-4 pb-5 mt-auto'>
                    {content.code.length !== 0 && (
                      <a href={content.code} className='btn mr-2'>
                        Code
                      </a>
                    )}
                    <a target="_blank" rel="noreferrer" href={content.link} className='btn'>
                      Live
                    </a>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Projects;
