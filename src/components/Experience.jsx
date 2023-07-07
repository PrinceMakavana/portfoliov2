import React from "react";
import { content } from "../Content";
// import { FaPlaceOfWorship } from "react-icons";
import { FaPlaceOfWorship } from "react-icons/fa";
function Experience() {
  const { Experience } = content;
  return (
    <section id="experience">
      <div className='md:container px-5 pt-14 min-h-screen flex flex-col'>
        <div>
          <h2 data-aos='fade-down' className='title'>{Experience.title}</h2>
          <h2 data-aos='fade-down' className='subtitle'>{Experience.subtitle}</h2>
        </div>
        {/* <!-- Container --> */}
        <div class='space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-300 before:to-transparent '>
          {/* <!-- Timeline Item --> */}
          {Experience.experience_content.map((experienceItem, i) => (
            <div class='relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active ' data-aos='fade-down'>
              {/* <!-- Icon --> */}
              <div
                class={`${
                  i % 2 == 0 ? "md:ml-auto" : "md:mr-auto"
                }  flex items-center justify-center w-10 h-10 rounded-full  bg-dark_primary group-[.is-active]:bg-dark_primary text-white group-[.is-active]:text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2`}
              >
                <FaPlaceOfWorship />
              </div>
              {/* <!-- Card --> */}
              <div class='w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-4 rounded border border-slate-200 shadow bg-primaryLinear'>
                <div class='flex items-center justify-between space-x-2 mb-1'>
                  <div class='font-bold text-slate-900'>
                    {experienceItem.role} | {experienceItem.company}
                  </div>
                  <time class='font-caveat font-medium text-indigo-500'>
                    {experienceItem.date}
                  </time>
                </div>
                <div class='text-slate-500'>{experienceItem.para}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;
