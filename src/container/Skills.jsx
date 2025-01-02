import React from "react";
import SkillCard from "../components/SkillCard";
import skillData from "../data/skilss.json";

const Skills = () => (
  <div className="flex flex-col items-center p-6">
    {/* Header H2 */}
    <h2 className="text-4xl font-bold mb-6">Skills</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 max-w-screen-lg">
      {skillData.map((skill, index) => (
        <SkillCard key={index} name={skill.name} logo={skill.logo} />
      ))}
    </div>
  </div>
);

export default Skills;
