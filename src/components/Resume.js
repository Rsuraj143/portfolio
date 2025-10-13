import EducationCard from "./EducationCard";
import SkillCard from "./SkillCard";
import { FiDownload } from "react-icons/fi";
import ExperienceCard from "./ExperienceCard";

function Resume() {
  return (
    <div
      className="flex flex-col items-center main-container pt-10 pb-12 px-4 sm:px-16"
      id="resume"
    >
       <a
        href="./Suraj_Rauda_Resume.pdf"
        target="_blank"
        className="flex space-x-4 text-xl my-6 items-center bg-white bg-opacity-10 border border-transparent hover:shadow-md hover:border-gray-200 focus:outline-none  text-nik-lightGray px-6 py-4 rounded-3xl cursor-pointer mt-8 hover:border-opacity-20 transition-all"
      >
        <FiDownload className="text-2xl md:text-3xl" />
        <span>Resume</span>
      </a>
      <div className="flex flex-col items-start self-start w-full mb-10">
        <h6 className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-6 md:mb-10 px-8 sm:px-0">
          Education
        </h6>
        <div className="grid grid-cols-1 px-8 md:grid-cols-2 gap-6 lg:flex-row items-center justify-around w-full">
          <EducationCard
            year="2014-2018"
            degree="Bachelor of Technology"
            university="Biju Patnaik University of Technology"
          />
          <EducationCard
            year="2019-2020"
            degree="Full-Stack Web Development"
            university="Naresh i Technologies"
          />
        </div>
      </div>

      <div className="flex flex-col items-start self-start w-full mb-10">
        <h6 className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-6 md:mb-10 px-8 sm:px-0">
          Experience
        </h6>
        <div className="grid grid-cols-1 px-8 md:grid-cols-2 gap-6 lg:flex-row justify-around w-full">
        <ExperienceCard
            logo="/static/images/milesLogo.png"
            year="May 2024 - Present"
            post="Front End Developer"
            company="Miles Education Pvt. Ltd."
            info="Working as a Front End Developer In Miles Education. Proficient In NextJs, ReactJS, Tailwind CSS etc. I have worked on some projects called MilesForce that similar to CRM. I have explored NextJS,Tailwind CSS"
          />
          <ExperienceCard
            logo="/static/images/TrooInbound_logo.svg"
            year="Nov 2022 - May 2024"
            post="Front End Developer"
            company="TRooInbound Pvt. Ltd."
            info="Working as a Front End Developer In TRooInbound. Proficient In ReactJS, Redux, Tailwind CSS etc. I have worked on some projects called Push-Analytics Admin Pannel and TRoo Themes. I have explored ReactJs,Tailwind CSS, React-Bootstrap."
          />
          <ExperienceCard
            logo="/static/images/microSpark.jpg"
            year="Mar 2022 - Oct 2022"
            post="Front End Developer"
            company="MicroSpark Software Solutions Pvt. Ltd."
            info="Worked on designing landing pages of website using different technologies like JAVASCRIPT, REACTJS,TAILWIND CSS, HTML, CSS, BOOTSTRAP"
          />
          {/* <ExperienceCard
            logo="/static/images/Thriveni.png"
            year="Nov 2020 - Feb 2022"
            post="Front End Developer"
            company="Thriveni Earthmovers Pvt. Ltd."
            info="Worked on InHouse Projects using  technologies like  JAVASCRIPT, REACTJS, TAILWINDIC CSS, HTML, CSS, SCSS, BOOTSTRAP"
          /> */}
        </div>
      </div>

      <div className="flex flex-col items-start self-start w-full">
        <h6 className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-6 md:mb-10 px-8 sm:px-0">
          Skills
        </h6>
        <div className="grid grid-cols-3 lg:grid-cols-5 xl:grid-cols-7 gap-3 sm:gap-4 md:gap-5 lg:gap-6 w-full mb-6 px-8 content-center items-center">
          <SkillCard img="/static/images/figma.svg" title="Figma" />
          <SkillCard img="/static/images/bootstrap.svg" title="Bootstrap" />
          <SkillCard img="/static/images/sass.svg" title="SASS" />
          <SkillCard
            img="/static/images/tailwindcss.svg"
            title="Tailwind CSS"
          />
          <SkillCard img="/static/images/javascript.svg" title="JavaScript" />
          <SkillCard img="/static/images/react.svg" title="React" />
          <SkillCard img="/static/images/redux.svg" title="Redux" />
          <SkillCard img="/static/images/nextjs-2.svg" title="NextJS" />
          <SkillCard
            img="/static/images/styled-components.svg"
            title="Styled Components"
          />
          <SkillCard img="/static/images/framer.svg" title="Framer Motion" />
          <SkillCard img="/static/images/material-ui.svg" title="Material UI" />
          <SkillCard img="/static/images/semantic.svg" title="Semantic UI" />
          <SkillCard img="/static/images/firebase.svg" title="Firebase" />
          <SkillCard img="/static/images/npm.svg" title="NPM" />
          <SkillCard img="/static/images/github.svg" title="Github" />
        </div>
      </div>
     
    </div>
  );
}

export default Resume;
