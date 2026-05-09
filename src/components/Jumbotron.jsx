import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import useScrollAnimation from "../hooks/useScrollAnimation";

const Jumbotron = () => {
  const { ref: textRef, isVisible: isTextVisible } = useScrollAnimation();
  const { ref: imgRef, isVisible: isImgVisible } = useScrollAnimation({ threshold: 0.1 });

  const roles = [
    { p1: "Full Stack", p2: "Developer." },
    { p1: "Problem", p2: "Solver." }
  ];
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [speed, setSpeed] = useState(100);

  useEffect(() => {
    const currentFull = roles[roleIndex].p1 + roles[roleIndex].p2;

    const timeout = setTimeout(() => {
      if (isDeleting) {
        setDisplayText(currentFull.substring(0, displayText.length - 1));
        setSpeed(50);
      } else {
        setDisplayText(currentFull.substring(0, displayText.length + 1));
        setSpeed(100);
      }

      if (!isDeleting && displayText === currentFull) {
        setSpeed(2000); // Pause at end
        setIsDeleting(true);
      } else if (isDeleting && displayText === "") {
        setIsDeleting(false);
        setRoleIndex((prev) => (prev + 1) % roles.length);
        setSpeed(500); // Pause before next word
      }
    }, speed);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, roleIndex, speed]);

  return (
    <div
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden noise-bg"
      style={{ background: "var(--bg-base)" }}
    >
      {/* Ambient blobs */}
      <div
        className="absolute top-1/4 left-[-100px] w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(124,58,237,0.15) 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />
      <div
        className="absolute bottom-1/4 right-[-80px] w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(99,102,241,0.12) 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />

      <div className="max-w-screen-xl mx-auto px-4 lg:px-8 py-10 mt-[80px] w-full flex flex-col lg:flex-row justify-between items-center gap-12">

        {/* Description Section */}
        <section
          ref={textRef}
          className={`w-full lg:w-[55%] flex flex-col items-center lg:items-start text-center lg:text-left anim-hidden anim-fade-right ${isTextVisible ? "anim-visible" : ""}`}
        >

          {/* Badge */}
          <div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold mb-6 border"
            style={{
              background: "var(--accent-bg)",
              borderColor: "var(--accent-border)",
              color: "var(--accent-text)",
            }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-violet-400 animate-pulse" />
            Available for opportunities
          </div>

          <p className="text-lg lg:text-xl font-medium mb-2" style={{ color: "var(--text-secondary)" }}>
            Hello, I'm Rafli Dio
          </p>

          <h1 className="text-[42px] lg:text-[72px] font-black leading-none tracking-tight mb-6 min-h-[1.2em] lg:min-h-[2.1em]">
            <span style={{ color: "var(--text-primary)" }}>
              {displayText.slice(0, roles[roleIndex].p1.length)}
            </span>
            {displayText.length > roles[roleIndex].p1.length && <br />}
            <span className="gradient-text">
              {displayText.slice(roles[roleIndex].p1.length)}
            </span>
            <span className="typewriter-cursor"></span>
          </h1>

          <p className="text-base lg:text-lg leading-relaxed max-w-lg mb-8" style={{ color: "var(--text-secondary)" }}>
            I'm <strong style={{ color: "var(--text-primary)" }}>Rafli Dio Muhammad Valent</strong>, a web developer with 3+ years of experience crafting modern web applications.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-3 justify-center lg:justify-start mb-10">
            <Link to="/experience">
              <button
                className="inline-flex items-center gap-2 px-6 py-3 font-semibold rounded-xl text-white transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl"
                style={{
                  background: "linear-gradient(135deg, #7c3aed, #6366f1)",
                  boxShadow: "0 4px 20px rgba(124, 58, 237, 0.35)",
                }}
              >
                <i className="fa-solid fa-briefcase text-sm" />
                View Experience
              </button>
            </Link>
            <Link to="/project">
              <button
                className="inline-flex items-center gap-2 px-6 py-3 font-semibold rounded-xl transition-all duration-300 hover:-translate-y-0.5 border"
                style={{
                  background: "var(--accent-bg)",
                  borderColor: "var(--accent-border)",
                  color: "var(--accent-text)",
                }}
              >
                <i className="fa-solid fa-code text-sm" />
                See Projects
              </button>
            </Link>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-3">
            {[
              {
                href: "https://github.com/rafli-dio",
                icon: "fa-brands fa-github",
                label: "GitHub",
                hoverColor: "var(--text-primary)",
              },
              {
                href: "https://www.linkedin.com/in/rafli-dio-3298b0205/",
                icon: "fa-brands fa-linkedin-in",
                label: "LinkedIn",
                hoverColor: "#60a5fa",
              },
              {
                href: "https://www.instagram.com/raflidio_/",
                icon: "fa-brands fa-instagram",
                label: "Instagram",
                hoverColor: "#f472b6",
              },
            ].map(({ href, icon, label, hoverColor }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                title={label}
                className="flex items-center justify-center w-11 h-11 rounded-xl border transition-all duration-300 hover:-translate-y-1"
                style={{
                  background: "var(--bg-elevated)",
                  borderColor: "var(--border)",
                  color: "var(--text-secondary)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = hoverColor;
                  e.currentTarget.style.borderColor = "var(--accent-border)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = "var(--text-secondary)";
                  e.currentTarget.style.borderColor = "var(--border)";
                }}
              >
                <i className={`${icon} text-lg`} />
              </a>
            ))}
          </div>
        </section>

        {/* Image Section */}
        <section
          ref={imgRef}
          className={`w-full lg:w-[40%] flex justify-center items-center py-10 lg:py-0 anim-hidden anim-fade-left ${isImgVisible ? "anim-visible" : ""}`}
        >
          <div className="relative anim-float">
            {/* Ambient glow */}
            <div
              className="absolute pointer-events-none"
              style={{
                inset: "-40px",
                background: "radial-gradient(circle, rgba(124,58,237,0.25) 0%, transparent 65%)",
                filter: "blur(30px)",
              }}
            />

            {/* Corner accents */}
            <div
              className="absolute -top-3 -left-3 w-14 h-14 rounded-tl-2xl pointer-events-none z-10"
              style={{
                borderTop: "2px solid rgba(124,58,237,0.6)",
                borderLeft: "2px solid rgba(124,58,237,0.6)",
              }}
            />
            <div
              className="absolute -bottom-3 -right-3 w-14 h-14 rounded-br-2xl pointer-events-none z-10"
              style={{
                borderBottom: "2px solid rgba(124,58,237,0.6)",
                borderRight: "2px solid rgba(124,58,237,0.6)",
              }}
            />

            {/* Image frame */}
            <div
              className="relative overflow-hidden rounded-2xl border"
              style={{
                width: "280px",
                height: "340px",
                borderColor: "rgba(124, 58, 237, 0.35)",
                boxShadow: "0 20px 60px rgba(124, 58, 237, 0.2), 0 0 0 1px rgba(124,58,237,0.08)",
              }}
            >
              <img
                src="./images/oke-rafli.png"
                alt="Rafli Dio Muhammad Valent - Software Developer"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  objectPosition: "center top",
                  display: "block",
                }}
              />
              <div
                className="absolute bottom-0 left-0 right-0 h-1/4 pointer-events-none"
                style={{ background: "linear-gradient(to top, rgba(8,8,15,0.45), transparent)" }}
              />
            </div>

            {/* Floating badge */}
            <div
              className="absolute -bottom-5 left-1/2 -translate-x-1/2 whitespace-nowrap inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold border shadow-xl z-10"
              style={{
                background: "var(--bg-elevated)",
                borderColor: "var(--accent-border)",
                color: "var(--accent-text)",
              }}
            >
              <i className="fa-solid fa-star text-yellow-400 text-[10px]" />
              3+ Years Experience
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Jumbotron;
