import { useState } from "react";

import { skills, statistics } from "../constants";
import { Button, SkillCard } from "../components";
import { skillWordPress } from "../assets/images";
import { arrowRight } from "../assets/icons";

const Hero = () => {
  const [bigSkill, setBigSkill] = useState(skillWordPress);

  return (
    <section
      id="home"
      className="w-full flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-container"
    >
      <div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full  max-xl:padding-x pt-28">
        <p className="text-xl font-montserrat text-orange-600 ">
          {/* <strong className="block">Haroon Sajjad</strong>
          <br /> */}
          Experienced Full-stack Web Developer & Web Designer
        </p>

        <h1 className="mt-3 font-palanquin text-8xl max-sm:text-[72px] max-sm:leading-[82px] font-bold">
          <span className="whitespace-nowrap relative z-10 pr-10">
            Empowering Your
          </span>
          <br />
          <span className="text-orange-600 inline-block mt-3">Online</span>{" "}
          <span className="relative z-10">Presence</span>
        </h1>
        <p className="font-montserrat text-slate-gray text-lg leading-8 mt-6 mb-14 ">
          {[
            "WordPress",
            "Laravel",
            "NodeJS",
            "ReactJS",
            "Bootstrap",
            "Tailwind",
          ].map((skill, index) => (
            <span
              key={index}
              className="rounded-full bg-slate-gray text-xs py-2 px-3 text-white mx-1"
            >
              {skill}
            </span>
          ))}
        </p>

        <Button label="Let's Talk" iconURL={arrowRight} btnUrl="https://cal.com/haroon.sajjad/30min/" linkTarget="__blank" />

        <div className="flex justify-start items-start flex-wrap w-full mt-20 gap-16">
          {statistics.map((stat, index) => (
            <div key={index}>
              <p className="text-4xl font-palanquin font-bold">{stat.value}</p>
              <p className="leading-7 font-montserrat text-slate-gray">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="relative flex-1 flex justify-center items-center xl:min-h-screen max-xl:py-40 bg-primary bg-hero bg-cover bg-center">
        <img
          src={bigSkill}
          alt="shoe colletion"
          width={510}
          height={402}
          className="object-contain relative z-10 w-[510px] h-[402px]"
        />

        <div className="flex sm:gap-6 gap-4 absolute -bottom-[5%] sm:left-[6%] max-sm:px-6">
          {skills.map((skill, index) => (
            <div key={index}>
              <SkillCard
                index={index}
                imgURL={skill}
                changeSkillImage={(skill) => setBigSkill(skill)}
                bigSkill={bigSkill}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
