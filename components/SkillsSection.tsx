import { skills } from "@/constants/skills";
import { Skill, SkillCategory } from "@/constants/types/types";

const SkillsSection = () => {
  return (
    <div className="md:px-[120px] py-[28px] flex flex-col items-center md:items-start gap-6 px-5">
      <h3 className="text-6xs md:text-h6">Skills</h3>
      <div className="w-full">
        {skills.map((item: SkillCategory) => {
          return (
            <div
              className="flex flex-col md:flex-row  justify-between mt-7 gap-10 border-b-[1px] py-10"
              key={Date.now()}
            >
              <h1 className="text-h5">{item.major}</h1>
              <div className="flex flex-wrap flex-grow md:justify-end gap-4">
                {item.skills.map((item: Skill) => (
                  <div
                    className="flex flex-col w-[25%] items-center gap-2 mb-4"
                    key={Date.now()}
                  >
                    {item.icon}
                    <p>{item.label}</p>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SkillsSection;
