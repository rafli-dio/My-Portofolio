import React, { useState } from "react";
import useScrollAnimation from "../hooks/useScrollAnimation";
import ProjectDetailModal from "./ProjectDetailModal";

const frameworkColors = {
  Laravel:    { bg: "rgba(239,68,68,0.12)",   text: "#dc2626", border: "rgba(239,68,68,0.3)",   dot: "#ef4444" },
  TailwindCSS:{ bg: "rgba(6,182,212,0.12)",   text: "#0891b2", border: "rgba(6,182,212,0.3)",   dot: "#06b6d4" },
  Bootstrap:  { bg: "rgba(139,92,246,0.12)",  text: "#7c3aed", border: "rgba(139,92,246,0.3)",  dot: "#8b5cf6" },
  React:      { bg: "rgba(14,165,233,0.12)",  text: "#0284c7", border: "rgba(14,165,233,0.3)",  dot: "#0ea5e9" },
  "Next.js":  { bg: "rgba(100,116,139,0.12)", text: "#475569", border: "rgba(100,116,139,0.3)", dot: "#64748b" },
  Vue:        { bg: "rgba(34,197,94,0.12)",   text: "#15803d", border: "rgba(34,197,94,0.3)",   dot: "#22c55e" },
  default:    { bg: "rgba(124,58,237,0.12)",  text: "#7c3aed", border: "rgba(124,58,237,0.3)",  dot: "#7c3aed" },
};

const getFrameworkStyle = (name) =>
  frameworkColors[name] || frameworkColors.default;

const ProjectCard = ({
  project,   // full project object for modal
  title,
  description,
  imageSrcs,
  frameworks,
  githubLink,
  category,
  index = 0,
}) => {
  const [currentImg, setCurrentImg] = useState(0);
  const [hovered, setHovered]       = useState(false);
  const [showModal, setShowModal]   = useState(false);
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  const prevImg = (e) => {
    e.stopPropagation();
    setCurrentImg((prev) => (prev - 1 + imageSrcs.length) % imageSrcs.length);
  };
  const nextImg = (e) => {
    e.stopPropagation();
    setCurrentImg((prev) => (prev + 1) % imageSrcs.length);
  };

  return (
    <>
      <div
        ref={ref}
        className={`group flex flex-col rounded-2xl overflow-hidden border transition-all duration-300 anim-hidden anim-fade-up ${isVisible ? "anim-visible" : ""}`}
        style={{
          background:   "var(--bg-surface)",
          borderColor:  hovered ? "rgba(124,58,237,0.4)" : "var(--border)",
          boxShadow:    hovered
            ? "0 12px 40px rgba(124,58,237,0.18), 0 4px 20px rgba(0,0,0,0.2)"
            : "var(--card-shadow)",
          transform:    hovered ? "translateY(-4px)" : "translateY(0)",
        }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {/* ── IMAGE ── */}
        <div
          className="relative w-full overflow-hidden aspect-video"
          style={{ background: "var(--bg-elevated)" }}
        >
          {/* Top accent bar */}
          <div
            className="absolute top-0 left-0 right-0 h-[2px] z-10"
            style={{ background: "linear-gradient(90deg, #7c3aed, #6366f1, #a78bfa)" }}
          />

          {imageSrcs.map((src, i) => (
            <img
              key={i}
              src={src}
              alt={`${title} screenshot ${i + 1}`}
              className="absolute inset-0 w-full h-full object-contain object-center p-2 transition-all duration-500"
              style={{
                opacity:   i === currentImg ? 1 : 0,
                transform: i === currentImg ? "scale(1)" : "scale(1.05)",
                zIndex:    i === currentImg ? 10 : 0,
              }}
            />
          ))}

          {/* Overlay */}
          <div
            className="absolute inset-0 pointer-events-none z-[1]"
            style={{ background: "linear-gradient(to top, rgba(8,8,15,0.55) 0%, transparent 60%)" }}
          />

          {/* Image navigation */}
          {imageSrcs.length > 1 && (
            <>
              <button
                onClick={prevImg}
                className="absolute left-2 top-1/2 -translate-y-1/2 w-7 h-7 flex items-center justify-center rounded-full z-20 transition-all duration-200 opacity-0 group-hover:opacity-100 hover:scale-110"
                style={{ background: "rgba(8,8,15,0.7)", border: "1px solid rgba(124,58,237,0.4)", color: "#a78bfa", backdropFilter: "blur(6px)" }}
                aria-label="Previous image"
              >
                <i className="fa-solid fa-chevron-left text-[11px]" />
              </button>
              <button
                onClick={nextImg}
                className="absolute right-2 top-1/2 -translate-y-1/2 w-7 h-7 flex items-center justify-center rounded-full z-20 transition-all duration-200 opacity-0 group-hover:opacity-100 hover:scale-110"
                style={{ background: "rgba(8,8,15,0.7)", border: "1px solid rgba(124,58,237,0.4)", color: "#a78bfa", backdropFilter: "blur(6px)" }}
                aria-label="Next image"
              >
                <i className="fa-solid fa-chevron-right text-[11px]" />
              </button>

              {/* Dots */}
              <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1 z-20">
                {imageSrcs.map((_, i) => (
                  <button
                    key={i}
                    onClick={(e) => { e.stopPropagation(); setCurrentImg(i); }}
                    className="rounded-full transition-all duration-300"
                    style={{
                      width:      i === currentImg ? "16px" : "6px",
                      height:     "6px",
                      background: i === currentImg ? "#a78bfa" : "rgba(167,139,250,0.4)",
                    }}
                    aria-label={`Go to image ${i + 1}`}
                  />
                ))}
              </div>
            </>
          )}

          {/* Number badge */}
          <div
            className="absolute top-3 left-3 z-20 w-7 h-7 rounded-lg flex items-center justify-center text-xs font-black"
            style={{ background: "rgba(8,8,15,0.65)", border: "1px solid rgba(124,58,237,0.4)", color: "#a78bfa", backdropFilter: "blur(6px)" }}
          >
            {String(index + 1).padStart(2, "0")}
          </div>

          {/* Category badge */}
          {category && (
            <div
              className="absolute top-3 right-3 z-20 flex items-center gap-1 px-2 py-1 rounded-lg text-[10px] font-bold"
              style={{ background: "rgba(124,58,237,0.75)", border: "1px solid rgba(167,139,250,0.5)", color: "#f5f3ff", backdropFilter: "blur(6px)", maxWidth: "130px" }}
            >
              <i className="fa-solid fa-graduation-cap text-[9px] flex-shrink-0" />
              <span className="leading-tight truncate">{category}</span>
            </div>
          )}
        </div>

        {/* ── CONTENT ── */}
        <div className="flex flex-col flex-1 p-5">
          <h2 className="text-lg font-bold mb-1 leading-snug" style={{ color: "var(--text-primary)" }}>
            {title}
          </h2>

          <div
            className="w-8 h-[2px] rounded-full mb-3"
            style={{ background: "linear-gradient(90deg, #7c3aed, #6366f1)" }}
          />

          <p className="text-sm leading-relaxed mb-4 flex-1" style={{ color: "var(--text-secondary)" }}>
            {description.length > 110 ? description.slice(0, 110) + "…" : description}
          </p>

          {/* Frameworks */}
          {frameworks && frameworks.length > 0 && (
            <div className="flex flex-wrap gap-1.5 mb-4">
              {frameworks.map((fw, i) => {
                const s = getFrameworkStyle(fw);
                return (
                  <span
                    key={i}
                    className="inline-flex items-center gap-1 text-[11px] font-semibold px-2.5 py-1 rounded-full border"
                    style={{ background: s.bg, color: s.text, borderColor: s.border }}
                  >
                    <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: s.dot }} />
                    {fw}
                  </span>
                );
              })}
            </div>
          )}

          {/* Buttons */}
          <div className="flex gap-2">
            {/* Detail Button */}
            <button
              onClick={() => setShowModal(true)}
              className="flex-1 inline-flex items-center justify-center gap-2 text-xs font-semibold px-4 py-2 rounded-xl transition-all duration-200 hover:-translate-y-0.5 text-white"
              style={{
                background:  "linear-gradient(135deg,#7c3aed,#6366f1)",
                boxShadow:   "0 3px 12px rgba(124,58,237,0.3)",
              }}
            >
              <i className="fa-solid fa-circle-info text-sm" />
              Detail
            </button>

            {/* GitHub Button */}
            <a
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 text-xs font-semibold px-4 py-2 rounded-xl border transition-all duration-200 hover:-translate-y-0.5"
              style={{ background: "var(--accent-bg)", borderColor: "var(--accent-border)", color: "var(--accent-text)" }}
            >
              <i className="fa-brands fa-github text-sm" />
              GitHub
            </a>
          </div>
        </div>
      </div>

      {/* Detail Modal */}
      {showModal && (
        <ProjectDetailModal
          project={project}
          onClose={() => setShowModal(false)}
        />
      )}
    </>
  );
};

export default ProjectCard;
