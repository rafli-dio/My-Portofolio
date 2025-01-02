import React from "react";
import projectsData from "../data/projects.json";
import ProjectSection from "../components/ProjectSection";
import Navbar from "../components/Navbar";

const MoreProject = () => {
  return (
    <div>
      <Navbar />
      <div className="max-w-screen-xl mx-auto px-4 lg:px-6 py-10 mt-[80px]">
        <h1 className="text-left text-[28px] sm:text-[32px] lg:text-[40px] font-bold text-gray-800 mb-6">
          Projects :
        </h1>
        {/* Loop through the projects data */}
        {projectsData.map((project, index) => (
          <ProjectSection
            key={index}
            title={project.title}
            description={project.description}
            imageSrcs={project.imageSrcs}
            frameworks={project.frameworks}
            githubLink={project.githubLink}
          />
        ))}
      </div>
    </div>
  );
};

export default MoreProject;
