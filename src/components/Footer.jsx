import React from "react";
import { Link } from "react-router-dom";
import useScrollAnimation from "../hooks/useScrollAnimation";

const Footer = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <footer
      ref={ref}
      className={`border-t mt-16 anim-hidden anim-fade-up ${isVisible ? "anim-visible" : ""}`}
      style={{ background: "var(--bg-surface)", borderColor: "var(--border)" }}
    >
      <div className="max-w-screen-xl mx-auto px-4 lg:px-8 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Logo & Info */}
          <div className="flex flex-col items-center md:items-start">
            <div className="text-xl font-black tracking-tight mb-4">
              <span className="gradient-text">RAFLI</span>
              <span style={{ color: "var(--text-primary)" }}>DIO</span>
              <span
                className="ml-1 text-xs font-semibold px-2 py-0.5 rounded-full border"
                style={{
                  borderColor: "#7c3aed",
                  color: "var(--accent-text)",
                  background: "var(--accent-bg)",
                }}
              >
                DEV
              </span>
            </div>
            <p className="text-sm text-center md:text-left" style={{ color: "var(--text-secondary)" }}>
              Crafting modern web applications with beautiful interfaces and clean code.
            </p>
          </div>

          {/* Navigation */}
          <div className="flex flex-col items-center md:items-center">
            <h3 className="font-bold mb-4" style={{ color: "var(--text-primary)" }}>Quick Links</h3>
            <div className="flex flex-col gap-3 text-sm text-center md:text-left">
              <Link 
                to="/" 
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} 
                className="font-medium transition-colors hover:text-violet-500" 
                style={{ color: "var(--text-secondary)" }}
              >
                Home
              </Link>
              <Link 
                to="/experience" 
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} 
                className="font-medium transition-colors hover:text-violet-500" 
                style={{ color: "var(--text-secondary)" }}
              >
                Experience
              </Link>
              <Link 
                to="/project" 
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} 
                className="font-medium transition-colors hover:text-violet-500" 
                style={{ color: "var(--text-secondary)" }}
              >
                Projects
              </Link>
            </div>
          </div>

          {/* Social Icons */}
          <div className="flex flex-col items-center md:items-end">
            <h3 className="font-bold mb-4" style={{ color: "var(--text-primary)" }}>Connect</h3>
            <div className="flex items-center gap-3">
              {[
                { href: "https://github.com/rafli-dio", icon: "fa-brands fa-github", label: "GitHub" },
                { href: "https://www.linkedin.com/in/rafli-dio-3298b0205/", icon: "fa-brands fa-linkedin-in", label: "LinkedIn" },
                { href: "https://www.instagram.com/raflidio_/", icon: "fa-brands fa-instagram", label: "Instagram" },
              ].map(({ href, icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  title={label}
                  className="flex items-center justify-center w-9 h-9 rounded-lg border transition-all duration-200 hover:-translate-y-1"
                  style={{
                    background: "var(--bg-elevated)",
                    borderColor: "var(--border)",
                    color: "var(--text-secondary)",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = "var(--accent-border)";
                    e.currentTarget.style.color = "var(--accent-text)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = "var(--border)";
                    e.currentTarget.style.color = "var(--text-secondary)";
                  }}
                >
                  <i className={`${icon} text-base`} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-6 border-t flex flex-col items-center justify-center" style={{ borderColor: "var(--border)" }}>
          <p className="text-xs" style={{ color: "var(--text-secondary)" }}>
            © {new Date().getFullYear()} Rafli Dio Muhammad Valent. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
