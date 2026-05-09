import React, { useState, useEffect, useCallback } from "react";

const frameworkColors = {
  Laravel:    { bg: "rgba(239,68,68,0.12)",   text: "#dc2626", border: "rgba(239,68,68,0.3)",   dot: "#ef4444" },
  TailwindCSS:{ bg: "rgba(6,182,212,0.12)",   text: "#0891b2", border: "rgba(6,182,212,0.3)",   dot: "#06b6d4" },
  Bootstrap:  { bg: "rgba(139,92,246,0.12)",  text: "#7c3aed", border: "rgba(139,92,246,0.3)",  dot: "#8b5cf6" },
  React:      { bg: "rgba(14,165,233,0.12)",  text: "#0284c7", border: "rgba(14,165,233,0.3)",  dot: "#0ea5e9" },
  "Next.js":  { bg: "rgba(100,116,139,0.12)", text: "#475569", border: "rgba(100,116,139,0.3)", dot: "#64748b" },
  Vue:        { bg: "rgba(34,197,94,0.12)",   text: "#15803d", border: "rgba(34,197,94,0.3)",   dot: "#22c55e" },
  default:    { bg: "rgba(124,58,237,0.12)",  text: "#7c3aed", border: "rgba(124,58,237,0.3)",  dot: "#7c3aed" },
};
const getFrameworkStyle = (name) => frameworkColors[name] || frameworkColors.default;

const ProjectDetailModal = ({ project, onClose }) => {
  const [activeImg, setActiveImg] = useState(0);
  const [visible, setVisible] = useState(false);

  // Animate in
  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 10);
    return () => clearTimeout(t);
  }, []);

  // Lock body scroll
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = ""; };
  }, []);

  // Close with animation
  const handleClose = useCallback(() => {
    setVisible(false);
    setTimeout(onClose, 280);
  }, [onClose]);

  // Close on Escape key
  const handleKey = useCallback((e) => {
    if (e.key === "Escape") handleClose();
  }, [handleClose]);
  useEffect(() => {
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [handleKey]);

  if (!project) return null;

  const { title, category, year, role, fullDescription, description, features, frameworks, database, imageSrcs, githubLink } = project;
  const displayDesc = fullDescription || description;

  const prevImg = () => setActiveImg((p) => (p - 1 + imageSrcs.length) % imageSrcs.length);
  const nextImg = () => setActiveImg((p) => (p + 1) % imageSrcs.length);

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4"
      style={{
        background: visible ? "rgba(8,8,15,0.75)" : "rgba(8,8,15,0)",
        backdropFilter: visible ? "blur(12px)" : "blur(0px)",
        WebkitBackdropFilter: visible ? "blur(12px)" : "blur(0px)",
        transition: "all 0.28s ease",
      }}
      onClick={(e) => { if (e.target === e.currentTarget) handleClose(); }}
    >
      {/* Modal Container */}
      <div
        className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-2xl border"
        style={{
          background: "var(--bg-surface)",
          borderColor: "rgba(124,58,237,0.35)",
          boxShadow: "0 24px 80px rgba(124,58,237,0.22), 0 8px 32px rgba(0,0,0,0.4)",
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0) scale(1)" : "translateY(24px) scale(0.97)",
          transition: "all 0.28s cubic-bezier(0.34,1.56,0.64,1)",
        }}
      >
        {/* Top accent bar */}
        <div
          className="absolute top-0 left-0 right-0 h-[3px] rounded-t-2xl z-10"
          style={{ background: "linear-gradient(90deg, #7c3aed, #6366f1, #a78bfa)" }}
        />

        {/* Close button */}
        <button
          onClick={handleClose}
          aria-label="Close modal"
          className="absolute top-4 right-4 z-20 w-9 h-9 flex items-center justify-center rounded-xl border transition-all duration-200 hover:scale-105"
          style={{
            background: "var(--bg-elevated)",
            borderColor: "var(--border)",
            color: "var(--text-secondary)",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.borderColor = "rgba(239,68,68,0.5)";
            e.currentTarget.style.color = "#ef4444";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.borderColor = "var(--border)";
            e.currentTarget.style.color = "var(--text-secondary)";
          }}
        >
          <i className="fa-solid fa-xmark" />
        </button>

        {/* ── IMAGE GALLERY ── */}
        <div
          className="relative w-full"
          style={{ background: "var(--bg-elevated)", minHeight: "200px" }}
        >
          {/* Images stack — height driven by content */}
          <div className="relative w-full" style={{ minHeight: "180px" }}>
            {imageSrcs.map((src, i) => (
              <img
                key={i}
                src={src}
                alt={`${title} screenshot ${i + 1}`}
                className="w-full transition-all duration-500"
                style={{
                  display:    i === activeImg ? "block" : "none",
                  maxHeight:  "420px",
                  objectFit:  "contain",
                  objectPosition: "center top",
                  background: "var(--bg-elevated)",
                }}
              />
            ))}
          </div>

          {/* Top accent bar */}
          <div
            className="absolute top-0 left-0 right-0 h-[3px] z-10"
            style={{ background: "linear-gradient(90deg, #7c3aed, #6366f1, #a78bfa)" }}
          />

          {/* Prev / Next */}
          {imageSrcs.length > 1 && (
            <>
              <button
                onClick={prevImg}
                className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 flex items-center justify-center rounded-full z-[3] transition-all duration-200 hover:scale-110"
                style={{ background: "rgba(8,8,15,0.7)", border: "1px solid rgba(124,58,237,0.4)", color: "#a78bfa", backdropFilter: "blur(6px)" }}
                aria-label="Previous image"
              >
                <i className="fa-solid fa-chevron-left text-xs" />
              </button>
              <button
                onClick={nextImg}
                className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 flex items-center justify-center rounded-full z-[3] transition-all duration-200 hover:scale-110"
                style={{ background: "rgba(8,8,15,0.7)", border: "1px solid rgba(124,58,237,0.4)", color: "#a78bfa", backdropFilter: "blur(6px)" }}
                aria-label="Next image"
              >
                <i className="fa-solid fa-chevron-right text-xs" />
              </button>

              {/* Dots */}
              <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 z-[3]">
                {imageSrcs.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveImg(i)}
                    className="rounded-full transition-all duration-300"
                    style={{
                      width:      i === activeImg ? "20px" : "6px",
                      height:     "6px",
                      background: i === activeImg ? "#a78bfa" : "rgba(167,139,250,0.35)",
                    }}
                    aria-label={`Go to image ${i + 1}`}
                  />
                ))}
              </div>
            </>
          )}

          {/* Screenshot counter */}
          <div
            className="absolute top-4 left-4 z-[3] flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-[11px] font-semibold"
            style={{ background: "rgba(8,8,15,0.65)", border: "1px solid rgba(124,58,237,0.35)", color: "#a78bfa", backdropFilter: "blur(6px)" }}
          >
            <i className="fa-regular fa-image text-[10px]" />
            {activeImg + 1} / {imageSrcs.length}
          </div>
        </div>

        {/* ── CONTENT ── */}
        <div className="p-6 pt-5">
          {/* Header */}
          <div className="mb-5">
            {/* Category badge */}
            {category && (
              <span
                className="inline-flex items-center gap-1.5 text-[11px] font-bold px-2.5 py-1 rounded-full mb-3"
                style={{ background: "rgba(124,58,237,0.18)", border: "1px solid rgba(124,58,237,0.35)", color: "#a78bfa" }}
              >
                <i className="fa-solid fa-graduation-cap text-[10px]" />
                {category}
              </span>
            )}

            <h2
              className="text-2xl font-black leading-tight mb-2"
              style={{ color: "var(--text-primary)" }}
            >
              {title}
            </h2>
            <div className="w-12 h-[3px] rounded-full mb-4" style={{ background: "linear-gradient(90deg,#7c3aed,#6366f1)" }} />

            {/* Meta info row */}
            <div className="flex flex-wrap gap-3 mb-4">
              {year && (
                <span className="inline-flex items-center gap-1.5 text-xs font-medium" style={{ color: "var(--text-secondary)" }}>
                  <i className="fa-regular fa-calendar text-violet-400" />
                  {year}
                </span>
              )}
              {role && (
                <span className="inline-flex items-center gap-1.5 text-xs font-medium" style={{ color: "var(--text-secondary)" }}>
                  <i className="fa-solid fa-user-tie text-violet-400" />
                  {role}
                </span>
              )}
              {database && (
                <span className="inline-flex items-center gap-1.5 text-xs font-medium" style={{ color: "var(--text-secondary)" }}>
                  <i className="fa-solid fa-database text-violet-400" />
                  {database}
                </span>
              )}
            </div>

            {/* Description */}
            <p className="text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>
              {displayDesc}
            </p>
          </div>

          {/* ── TWO COLUMN: Features + Tech ── */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-6">
            {/* Features */}
            {features && features.length > 0 && (
              <div
                className="rounded-xl p-4 border"
                style={{ background: "var(--bg-elevated)", borderColor: "var(--border)" }}
              >
                <h3
                  className="text-xs font-bold uppercase tracking-widest mb-3 flex items-center gap-2"
                  style={{ color: "#7c3aed" }}
                >
                  <i className="fa-solid fa-list-check" />
                  Fitur Utama
                </h3>
                <ul className="space-y-2">
                  {features.map((feat, i) => (
                    <li key={i} className="flex items-start gap-2 text-xs" style={{ color: "var(--text-secondary)" }}>
                      <span
                        className="mt-[3px] w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0"
                        style={{ background: "rgba(124,58,237,0.2)", color: "#a78bfa" }}
                      >
                        <i className="fa-solid fa-check text-[8px]" />
                      </span>
                      {feat}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Tech Stack */}
            {frameworks && frameworks.length > 0 && (
              <div
                className="rounded-xl p-4 border"
                style={{ background: "var(--bg-elevated)", borderColor: "var(--border)" }}
              >
                <h3
                  className="text-xs font-bold uppercase tracking-widest mb-3 flex items-center gap-2"
                  style={{ color: "#7c3aed" }}
                >
                  <i className="fa-solid fa-layer-group" />
                  Tech Stack
                </h3>
                <div className="flex flex-wrap gap-2">
                  {frameworks.map((fw, i) => {
                    const s = getFrameworkStyle(fw);
                    return (
                      <span
                        key={i}
                        className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-full border"
                        style={{ background: s.bg, color: s.text, borderColor: s.border }}
                      >
                        <span className="w-2 h-2 rounded-full flex-shrink-0" style={{ background: s.dot }} />
                        {fw}
                      </span>
                    );
                  })}
                  {database && (
                    <span
                      className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-full border"
                      style={{ background: "rgba(34,197,94,0.12)", color: "#15803d", borderColor: "rgba(34,197,94,0.3)" }}
                    >
                      <span className="w-2 h-2 rounded-full flex-shrink-0" style={{ background: "#22c55e" }} />
                      {database}
                    </span>
                  )}
                </div>

                {/* Thumbnail strip */}
                {imageSrcs.length > 1 && (
                  <div className="mt-4">
                    <p className="text-[10px] uppercase tracking-widest font-bold mb-2" style={{ color: "var(--text-secondary)" }}>
                      Screenshots
                    </p>
                    <div className="flex gap-2">
                      {imageSrcs.map((src, i) => (
                        <button
                          key={i}
                          onClick={() => setActiveImg(i)}
                          className="rounded-lg overflow-hidden border-2 transition-all duration-200 flex-shrink-0"
                          style={{
                            borderColor: i === activeImg ? "#7c3aed" : "transparent",
                            width: "56px",
                            height: "40px",
                          }}
                        >
                          <img src={src} alt={`thumb ${i + 1}`} className="w-full h-full object-cover object-top" />
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* ── CTA ── */}
          <div className="flex gap-3">
            <a
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 inline-flex items-center justify-center gap-2 text-sm font-semibold py-3 px-6 rounded-xl text-white transition-all duration-300 hover:-translate-y-0.5"
              style={{
                background: "linear-gradient(135deg,#7c3aed,#6366f1)",
                boxShadow: "0 4px 20px rgba(124,58,237,0.35)",
              }}
            >
              <i className="fa-brands fa-github text-base" />
              Lihat di GitHub
            </a>
            <button
              onClick={handleClose}
              className="inline-flex items-center justify-center gap-2 text-sm font-semibold py-3 px-5 rounded-xl border transition-all duration-200 hover:-translate-y-0.5"
              style={{
                background: "var(--bg-elevated)",
                borderColor: "var(--border)",
                color: "var(--text-secondary)",
              }}
            >
              <i className="fa-solid fa-xmark" />
              Tutup
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetailModal;
