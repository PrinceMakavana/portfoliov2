import { content } from "../Content";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
const Testimonials = () => {
  const { Testimonials } = content;

  return (
    <section>
      <div className='md:container px-5 pt-14'>
        <div className='mb-8'>
          <h2 className='title'>{Testimonials.title}</h2>
          <h2 className='subtitle'>{Testimonials.subtitle}</h2>
        </div>
        <Swiper
          pagination={{ clickable: true }}
          loop={true}
          direction='horizontal'
          spaceBetween={24}
          slidesPerView={1}
          breakpoints={{
            768: {
              slidesPerView: 2,
            },
          }}
          modules={[Pagination]}
          className='testimonials-swiper rounded-3xl pb-12 self-start overflow-visible'
        >
          {Testimonials.testimonials_content.map((content, i) => (
            <SwiperSlide
              key={i}
              className='h-auto overflow-visible'
            >
              <article className='h-full bg-bg_light_primary border border-slate-200 rounded-2xl p-5 md:p-6 flex flex-col'>
                {/* allow tooltip to escape this box */}
                <div className="overflow-visible w-full">
                  <div className='flex items-start gap-4 md:gap-5'>
                    <img
                      src={content.img}
                      className='h-16 w-16 md:h-18 md:w-18 rounded-full shrink-0 border border-slate-200 object-cover'
                      alt={content.name}
                    />
                    <div className='min-w-0'>
                      <h6 className='text-base md:text-lg leading-tight'>{content.name}</h6>
                      <p className='text-sm text-gray mt-1'>Recommendation</p>
                    </div>
                  </div>
                  <div className='pt-5 md:pt-6 flex-1'>
                    <div className="relative group overflow-visible">
                      <p
                        className="text-base md:text-[1.05rem] leading-normal text-dark_primary ellipse-3 cursor-help"
                        tabIndex={0}
                        aria-label="Full review"
                      >
                        {content.review}
                      </p>
                      <div
                        role="tooltip"
                        className="absolute left-0 bottom-full mb-3 z-50 invisible opacity-0 group-hover:visible group-hover:opacity-100 group-focus:visible group-focus:opacity-100 inline-block px-3 py-2 text-sm text-white transition-opacity duration-200 bg-dark_primary rounded-base shadow-md rounded-md"
                      >
                        {content.review}
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;
