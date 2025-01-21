import { content } from "../Content";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import { useState } from "react";
const Testimonials = () => {
  const { Testimonials } = content;
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <section>
      <div className='md:container px-5 pt-14'>
        <h2 className='title'>{Testimonials.title}</h2>
        <h2 className='subtitle'>{Testimonials.subtitle}</h2>
        <br />
        <Swiper
          pagination={{ clickable: true }}
          loop={true}
          direction='vertical'
          spaceBetween={40}
          slidesPerView={1.7}
          onSlideChange={(e) => {
            setActiveIndex(e.realIndex);
          }}
          modules={[Pagination]}
          className='md:h-80 h-[30rem] max-w-3xl'
        >
          {Testimonials.testimonials_content.map((content, i) => (
            <SwiperSlide
              key={i}
              className={`duration-500 bg-bg_light_primary mx-8 border-2  h-full rounded-2xl flex items-center md:m-auto md:text-center  border-slate-200 md:flex-row flex-col w-auto ${
                activeIndex !== i && "scale-75 blur-sm"
              }`}
            >
              <div className='mx-5 py-5'>
                <img src={content.img} className='h-auto md:w-32 w-24 rounded-full min-w-[60px]' alt='' />
              </div>
              <div>
                <div className='sm:text-base text-sm  text-center md:text-left'> 
                  <p className=''>{content.review}</p>
                  <br />
                  <h6>{content.name}</h6>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;
