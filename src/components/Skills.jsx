import { content } from "../Content";

const Skills = () => {
  const { skills } = content;

  return (
    <section className="min-h-fit bg-bg_light_primary" id="skills">
      <div className="md:container px-5 sm:py-14 py-10">
        <h2 data-aos="fade-down" className="title">
          {skills.title}
        </h2>
        <h4 className="subtitle" data-aos="fade-down">
          {skills.subtitle}
        </h4>
        <br />

        <div className="flex flex-col gap-6">
          {skills.skills_content.map((group, groupIndex) => (
            <div
              key={group.category}
              data-aos="fade-up"
              data-aos-delay={groupIndex * 60}
              className="flex flex-col lg:flex-row lg:items-center lg:items-start gap-3 lg:gap-5"
            >
              <p className="shrink-0 lg:w-56 lg:w-64 text-base lg:text-md text-dark_primary leading-snug">
                <span >{group.category}:</span>
              </p>

              <div className="flex flex-wrap items-center gap-1.5 md:gap-2.5">
                {group.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="group flex items-center gap-1.5 md:gap-2.5 bg-white border border-slate-200 rounded-md px-2 py-1 md:px-3 md:py-2 shadow-sm hover:border-dark_primary/40 hover:shadow-md transition-all duration-200"
                  >
                    <img
                      src={skill.logo}
                      alt=""
                      className="w-4 h-4 md:w-6 md:h-6 object-contain shrink-0 group-hover:scale-110 transition-transform duration-200"
                    />
                    <span className="text-xs md:text-sm font-medium text-dark_primary whitespace-nowrap">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
