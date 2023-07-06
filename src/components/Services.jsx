import { content } from "../Content";
const Services = () => {
  const { services } = content;
  return (
    <section>
      <div className='md:container px-5 py-14'>
        <h2 className='title'>{services.title}</h2>
        <h4 className='subtitle'>{services.subtitle}</h4>
        <br />
        <div className='flex gap-5 justify-between flex-wrap  group'>
          {services.service_content.map((content, i) => (
            <div
              key={i}
              className='min-w-[14rem] duration-300 cursor-pointer border-2 rounded-xl border-slate-200 text-center bg-bg_light_primary p-6 flex-1 group-hover:blur-sm hover:!blur-none'
            >
              <img src={content.logo} alt='' className='mx-auto' />
              <h6 className='my-3'>{content.title}</h6>
              <p className='lending-7'>{content.para}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
