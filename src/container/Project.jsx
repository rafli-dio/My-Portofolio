import React from "react";
import projectsData from "../data/projects.json";
import ProjectSection from "../components/ProjectSection";

const Projects = () => {
  return (
    <div
      className="max-w-[9
    0%] mx-auto px-4 lg:px-6 py-10"
    >
      <h1 className="px-10 text-left text-[40px] font-bold text-gray-800 mb-6">
        Projects :
      </h1>
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
  );
};

export default Projects;
