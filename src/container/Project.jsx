import React from "react";
import {Link} from "react-router-dom";
import projectsData from "../data/projects.json";
import ProjectSection from "../components/ProjectSection";
import Navbar from "../components/Navbar";

const Projects = () => {
  return (
    <div>
      <Navbar />
      <div className="max-w-screen-xl mx-auto px-4 lg:px-6 py-10">
        <h1 className="px-6 lg:px-10 text-left text-[28px] lg:text-[40px] font-bold text-gray-800 mb-6">
          Projects :
        </h1>
        {projectsData.slice(0, 3).map((project, index) => (
          <ProjectSection
            key={index}
            title={project.title}
            description={project.description}
            imageSrcs={project.imageSrcs}
            frameworks={project.frameworks}
            githubLink={project.githubLink}
          />
        ))}

        {/* Button More Projects */}
        <div className="flex justify-center mt-8">
          <Link
            to="/project"
            onClick={() => window.scrollTo({top: 0, behavior: "smooth"})}
          >
            <button className="bg-black text-white py-2 px-6 rounded-lg hover:bg-gray-700 transition duration-300">
              More Projects
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Projects;
