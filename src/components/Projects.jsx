import { content } from "../Content";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
const Projects = () => {
  const { Projects } = content;
  const slidesPerView = window.innerWidth < 768 ? 1 : 3;
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
            modules={[Pagination]}
            className='rounded-3xl pb-16  self-start'
            spaceBetween={20}
          >
            {Projects.project_content.map((content, i) => (
              <SwiperSlide key={i} className=''>
                <div class='max-w-sm m-auto  overflow-hidden shadow-sm bg-bg_light_primary pb-3 rounded-md'>
                  <img
                    class='w-full'
                    src={content.image}
                    alt='Mountain'
                    className='hover:scale-110  h-[10rem] transition-all duration-500 m-auto'
                  />
                  <div class='px-6 py-4'>
                    <div class='font-bold text-xl mb-2 title'>
                      {content.title}
                    </div>
                    <p class='text-gray-700 text-base h-[10rem] '>{content.para}</p>
                  </div>
                  <div class='px-6 pt-4 pb-2'>
                    {content.code.length != 0 && (
                      <a href={content.code} className='btn mr-2'>
                        Code
                      </a>
                    )}
                    <a target="_blank" href={content.link} className='btn'>
                      Live
                    </a>
                  </div>
                </div>

                {/* <img src={content.image} alt='...' className='m-auto' />
                <div className='flex flex-col gap-1 mt-2 '>
                  <h5 className='font-bold font-Poppins'>{content.title}</h5>
                  <button className='font-bold text-gray self-end'>
                    READ MORE{" "}
                  </button>
                </div> */}
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Projects;
