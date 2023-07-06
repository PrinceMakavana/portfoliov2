import { content } from "../Content";
const Hero = () => {
  const { hero } = content;
  return (
    <section>
      <div className="min-h-screen relative flex md:flex-row flex-col md:items-end justify-center items-center bg-primaryLinear">
        {/* <div
          data-aos="slide-right"
          data-aos-delay="1200"
          className="absolute h-full md:w-4/12 w-8/12 top-0 left-0 bg-primaryLinear bottom-0 -z-10"
        >
          <h1 className="rotate-90 absolute p-[30%] right-[-15%] text-[#EAF2FA]">
            {hero.firstName}{" "}
            <span className="text-dark_primary "> {hero.LastName}</span>
          </h1>
        </div> */}
         <div className="md:h-[43rem] h-[15rem]">
          <img
            data-aos="slide-up"
            src={hero.image}
            alt="Profile"
            className="h-full object-cover"
          />
        </div>
        <div data-aos="fade-down" className="pb-16 pl-6 pt-5">
          <h1 className=" text-[#EAF2FA]">
            {hero.firstName}{" "}
            <span className="text-dark_primary "> {hero.LastName}</span>
          </h1>
          <h2 className="title">{hero.title}</h2>
          <br />
          <div className="flex justify-start ">
            <a target="_blank" href="#" className="btn cursor-pointer">{hero.btnText}</a>
          </div>
          <div className="flex flex-col gap-10 mt-10">
            {hero.hero_content.map((content, i) => (
              <div
                key={i}
                data-aos="fade-down"
                data-aos-delay={i * 3}
                className={`flex item-center w-80 gap-5  ${
                  i === 1 && "flex-row-reverse text-right"
                } `}
              >
                <h3>{content.count}</h3>
                <p>{content.text}</p>
              </div>
            ))}
          </div>
        </div>
       
      </div>
    </section>
  );
};

export default Hero;
