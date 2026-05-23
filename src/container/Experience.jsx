import React from "react";
import Navbar from "../components/Navbar";
import Skills from "./Skills";
import useScrollAnimation from "../hooks/useScrollAnimation";

const workItems = [
  {
    period: "Februari – April 2025",
    company: "Kantor Pertanahan ATR / BPN Kota Surakarta",
    role: "Internship",
    description: "Peserta magang (Internship) di lingkungan instansi Kantor Pertanahan ATR/BPN Kota Surakarta.",
  },
  {
    period: "Januari – Maret 2021",
    company: "PT. GIT Solution",
    role: "Internship",
    description: "Peserta Magang Online Academy Kompetensi Web Developer (2021)",
  },
];

const certItems = [
  {
    title: "Amikom Center — Peserta Magang Online Academy Kompetensi Web Developer (2021)",
  },
  {
    title: "PT Git Solution — Uji Sertifikasi Kompetensi Web Developer (2022)",
  },
];

const Experience = ({ hideNavbar = false }) => {
  const { ref: titleRef, isVisible: isTitleVisible } = useScrollAnimation();
  const { ref: workRef, isVisible: isWorkVisible } = useScrollAnimation();
  const { ref: certRef, isVisible: isCertVisible } = useScrollAnimation();

  return (
    <div 
      id="experience" 
      style={{ background: hideNavbar ? "transparent" : "var(--bg-base)", minHeight: hideNavbar ? "auto" : "100vh" }}
    >
      {!hideNavbar && <Navbar />}
      <div className={`max-w-screen-xl mx-auto px-4 lg:px-8 py-10 ${!hideNavbar ? "mt-[80px]" : ""}`}>

        {/* Page Title */}
        <div 
          ref={titleRef}
          className={`text-center mb-16 anim-hidden anim-fade-up ${isTitleVisible ? "anim-visible" : ""}`}
        >
          <p
            className="text-xs font-bold uppercase tracking-widest mb-2"
            style={{ color: "#7c3aed" }}
          >
            ✦ My Journey
          </p>
          <h1
            className="text-[36px] sm:text-[44px] lg:text-[56px] font-black leading-tight"
            style={{ color: "var(--text-primary)" }}
          >
            Experience &amp;{" "}
            <span className="gradient-text">Achievements</span>
          </h1>
          <div
            className="mx-auto mt-3 w-16 h-[3px] rounded-full"
            style={{ background: "linear-gradient(90deg, #7c3aed, #6366f1)" }}
          />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Works Section */}
          <div 
            ref={workRef}
            className={`anim-hidden anim-fade-right ${isWorkVisible ? "anim-visible" : ""}`}
          >
            <div className="flex items-center gap-3 mb-8">
              <div
                className="w-8 h-8 rounded-lg flex items-center justify-center"
                style={{ background: "rgba(124,58,237,0.15)", border: "1px solid rgba(124,58,237,0.3)" }}
              >
                <i className="fa-solid fa-briefcase text-sm" style={{ color: "var(--accent-text)" }} />
              </div>
              <h2
                className="text-2xl font-black"
                style={{ color: "var(--text-primary)" }}
              >
                Work Experience
              </h2>
            </div>

            {/* Timeline */}
            <div className="flex flex-col">
              {workItems.map((item, i) => (
                <div key={i} className="flex gap-4 items-stretch">

                  {/* Left: line + dot column */}
                  <div className="flex flex-col items-center flex-shrink-0" style={{ width: "20px" }}>
                    {/* Dot */}
                    <div
                      className="w-4 h-4 rounded-full border-2 flex items-center justify-center flex-shrink-0 mt-1 z-10"
                      style={{
                        background: "var(--bg-base)",
                        borderColor: "#7c3aed",
                        boxShadow: "0 0 10px rgba(124,58,237,0.4)",
                      }}
                    >
                      <div className="w-1.5 h-1.5 rounded-full" style={{ background: "#7c3aed" }} />
                    </div>
                    {/* Connector line (only if not last item) */}
                    {i < workItems.length - 1 && (
                      <div
                        className="w-[2px] -mb-1 mt-1 z-0"
                        style={{ background: "linear-gradient(to bottom, #7c3aed, rgba(124,58,237,0.3))", flex: "1 1 0%" }}
                      />
                    )}
                  </div>

                  {/* Card wrapper */}
                  <div className={`flex-1 ${i < workItems.length - 1 ? "pb-6" : ""}`}>
                    <div
                      className="p-5 rounded-xl border h-full"
                      style={{
                        background: "var(--bg-surface)",
                        borderColor: "var(--border)",
                      }}
                    >
                      <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                        <div>
                          <h3
                            className="font-bold text-base"
                            style={{ color: "var(--text-primary)" }}
                          >
                            {item.company}
                          </h3>
                          <span
                            className="text-xs font-semibold px-2 py-0.5 rounded-full"
                            style={{
                              background: "rgba(124,58,237,0.12)",
                              color: "#a78bfa",
                              border: "1px solid rgba(124,58,237,0.25)",
                            }}
                          >
                            {item.role}
                          </span>
                        </div>
                        <span
                          className="text-xs font-medium"
                          style={{ color: "var(--text-secondary)" }}
                        >
                          {item.period}
                        </span>
                      </div>
                      <p
                        className="text-sm mt-2"
                        style={{ color: "var(--text-secondary)" }}
                      >
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Certification Section */}
          <div 
            ref={certRef}
            className={`anim-hidden anim-fade-left ${isCertVisible ? "anim-visible" : ""}`}
          >
            <div className="flex items-center gap-3 mb-8">
              <div
                className="w-8 h-8 rounded-lg flex items-center justify-center"
                style={{ background: "rgba(250,204,21,0.12)", border: "1px solid rgba(250,204,21,0.25)" }}
              >
                <i className="fa-solid fa-trophy text-sm" style={{ color: "#f59e0b" }} />
              </div>
              <h2
                className="text-2xl font-black"
                style={{ color: "var(--text-primary)" }}
              >
                Certifications
              </h2>
            </div>

            <div className="flex flex-col gap-4">
              {certItems.map((cert, i) => (
                <div
                  key={i}
                  className="flex items-start gap-4 p-5 rounded-xl border transition-all duration-300"
                  style={{
                    background: "var(--bg-surface)",
                    borderColor: "var(--border)",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = "rgba(124,58,237,0.35)";
                    e.currentTarget.style.boxShadow = "0 4px 20px rgba(124,58,237,0.12)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = "var(--border)";
                    e.currentTarget.style.boxShadow = "none";
                  }}
                >
                  <div
                    className="flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center"
                    style={{ background: "rgba(250,204,21,0.1)", border: "1px solid rgba(250,204,21,0.2)" }}
                  >
                    <i className="fa-solid fa-trophy text-base" style={{ color: "#f59e0b" }} />
                  </div>
                  <p
                    className="text-sm font-medium leading-relaxed"
                    style={{ color: "var(--text-primary)" }}
                  >
                    {cert.title}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Skills Section - Only show if not in single page mode */}
        {!hideNavbar && (
          <div
            className="rounded-2xl border p-6 lg:p-10"
            style={{
              background: "var(--bg-surface)",
              borderColor: "var(--border)",
            }}
          >
            <Skills />
          </div>
        )}
      </div>
    </div>
  );
};

export default Experience;
