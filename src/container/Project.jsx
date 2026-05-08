import React from "react";
import { Link } from "react-router-dom";
import projectsData from "../data/projects.json";
import ProjectCard from "../components/ProjectSection";
import Navbar from "../components/Navbar";
import useScrollAnimation from "../hooks/useScrollAnimation";

const Projects = ({ hideNavbar = false }) => {
  const { ref: headerRef, isVisible: isHeaderVisible } = useScrollAnimation();
  const { ref: btnRef, isVisible: isBtnVisible } = useScrollAnimation();

  return (
    <div id="projects" style={{ background: hideNavbar ? "transparent" : "var(--bg-base)" }}>
      {!hideNavbar && <Navbar />}
      <div className={`max-w-screen-xl mx-auto px-4 lg:px-8 py-10 ${!hideNavbar ? "mt-[80px]" : ""}`}>

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
            className="text-[30px] lg:text-[44px] font-black leading-tight"
            style={{ color: "var(--text-primary)" }}
          >
            Featured{" "}
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
            A selection of my best work — built with modern stacks and clean code.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projectsData.slice(0, 3).map((project, index) => (
            <ProjectCard
              key={index}
              index={index}
              title={project.title}
              description={project.description}
              imageSrcs={project.imageSrcs}
              frameworks={project.frameworks}
              githubLink={project.githubLink}
            />
          ))}
        </div>

        {/* CTA */}
        <div 
          ref={btnRef}
          className={`flex justify-center mt-10 mb-6 anim-hidden anim-fade-up ${isBtnVisible ? "anim-visible" : ""}`}
        >
          <Link
            to="/project"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            <button
              className="inline-flex items-center gap-2 font-semibold py-3 px-8 rounded-xl transition-all duration-300 hover:-translate-y-0.5 text-white"
              style={{
                background: "linear-gradient(135deg, #7c3aed, #6366f1)",
                boxShadow: "0 4px 20px rgba(124,58,237,0.35)",
              }}
            >
              View All Projects
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Projects;
