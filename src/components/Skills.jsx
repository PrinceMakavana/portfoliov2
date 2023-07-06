import { createElement } from "react";
import { content } from "../Content";
import ReactModal from "react-modal";
import { useState } from "react";

const customStyle = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50% , -50%)",
    maxWidth: "23rem",
    width: "90%",
  },
  overlay: {
    padding: "2rem",
  },
};
ReactModal.setAppElement("#root");
const Skills = () => {
  const { skills } = content;
  const [modelIsOpen, setIsOpen] = useState(false);
  const [seleteSkill, setSelectSkill] = useState(null);
  function openModel() {
    setIsOpen(true);
  }
  function closeModel() {
    setIsOpen(false);
  }
  return (
    <section className='min-h-fit bg-bg_light_primary '>
      <ReactModal
        isOpen={modelIsOpen}
        onRequestClose={closeModel}
        style={customStyle}
      >
        <div className='flex items-center gap-2'>
          <img className='h-10' src={seleteSkill?.logo} alt='...' />
          <h6>{seleteSkill?.name}</h6>
        </div>
        <br />
        <ul className='list-decimal px-4 forn-Poppins sm:test-sm text-xs !leading-7 '>
          <li>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum,
            dolorum!
          </li>
          <li>Lorem ipsum dolor sit.</li>
          <li>Lorem ipsum dolor sit amet consectetur.</li>
          <li>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores
            debitis pariatur vitae recusandae officiis error?
          </li>
        </ul>
        <br />
        <div className='flex justify-end'>
          <button className='btn' onClick={closeModel}>
            Close
          </button>
        </div>
      </ReactModal>
      <div className='md:container px-5 py-14'>
        <h2 className='title'>{skills.title}</h2>
        <h4 className='subtitle '>{skills.subtitle}</h4>
        <br />
        <div className='flex flex-wrap gap-4 justify-center '>
          {skills.skills_content.map((skill, i) => (
            <div
              key={i}
              className='bg-white sm:cursor-pointer relative group w-full flex items-center gap-5 p-5 max-w-sm rounded-md border-2 border-slate-200 '
            >
              <div>
                <img
                  src={skill.logo}
                  alt=''
                  className='w-10 group-hover:scale-125  duration-200'
                />
              </div>
              <div>
                <h6>{skill.name}</h6>
                <p className='italic'>{skill.para}</p>
                <div
                  className='text-xl absolute top-3 right-3'
                  onClick={() => {
                    setSelectSkill(skill);
                    openModel();
                  }}
                >
                  {createElement(skills.icon)}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
