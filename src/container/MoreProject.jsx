import React from "react";
import projectsData from "../data/projects.json";
import ProjectCard from "../components/ProjectSection";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import useScrollAnimation from "../hooks/useScrollAnimation";

const MoreProject = () => {
  const { ref: headerRef, isVisible: isHeaderVisible } = useScrollAnimation();

  return (
    <div style={{ background: "var(--bg-base)", minHeight: "100vh" }}>
      <Navbar />
      <div className="max-w-screen-xl mx-auto px-4 lg:px-8 py-10 mt-[80px]">

        {/* Section Header */}
        <div 
          ref={headerRef}
          className={`mb-8 anim-hidden anim-fade-up ${isHeaderVisible ? "anim-visible" : ""}`}
        >
          <p
            className="text-xs font-bold uppercase tracking-widest mb-2"
            style={{ color: "#7c3aed" }}
          >
            ✦ Portfolio
          </p>
          <h1
            className="text-[30px] sm:text-[34px] lg:text-[44px] font-black leading-tight"
            style={{ color: "var(--text-primary)" }}
          >
            All{" "}
            <span className="gradient-text">Projects</span>
          </h1>
          <div
            className="mt-3 w-14 h-[3px] rounded-full"
            style={{ background: "linear-gradient(90deg, #7c3aed, #6366f1)" }}
          />
          <p
            className="mt-3 text-sm lg:text-base max-w-xl"
            style={{ color: "var(--text-secondary)" }}
          >
            A complete collection of my work — from web apps to management systems, built with modern technologies.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projectsData.map((project, index) => (
            <ProjectCard
              key={index}
              project={project}
              index={index}
              title={project.title}
              description={project.description}
              imageSrcs={project.imageSrcs}
              frameworks={project.frameworks}
              githubLink={project.githubLink}
              category={project.category}
            />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default MoreProject;
