import React from "react";
import SkillCard from "../components/SkillCard";
import skillData from "../data/skilss.json";
import useScrollAnimation from "../hooks/useScrollAnimation";

const Skills = () => {
  const { ref: headerRef, isVisible: isHeaderVisible } = useScrollAnimation();
  const { ref: gridRef, isVisible: isGridVisible } = useScrollAnimation();

  return (
    <div className="flex flex-col items-center py-10 px-4">
      {/* Header */}
      <div 
        ref={headerRef} 
        className={`text-center mb-10 anim-hidden anim-fade-up ${isHeaderVisible ? "anim-visible" : ""}`}
      >
      <p
        className="text-xs font-bold uppercase tracking-widest mb-2"
        style={{ color: "#7c3aed" }}
      >
        ✦ Tech Stack
      </p>
      <h2
        className="text-3xl lg:text-4xl font-black"
        style={{ color: "var(--text-primary)" }}
      >
        Skills &amp;{" "}
        <span className="gradient-text">Technologies</span>
      </h2>
      <div
        className="mx-auto mt-3 w-16 h-[3px] rounded-full"
        style={{ background: "linear-gradient(90deg, #7c3aed, #6366f1)" }}
      />
    </div>

      {/* Grid */}
      <div 
        ref={gridRef}
        className={`grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 max-w-screen-lg w-full anim-hidden anim-fade-up anim-delay-200 ${isGridVisible ? "anim-visible" : ""}`}
      >
        {skillData.map((skill, index) => (
          <SkillCard key={index} name={skill.name} logo={skill.logo} />
        ))}
      </div>
    </div>
  );
};

export default Skills;
