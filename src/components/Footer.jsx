import React from "react";

const Footer = () => {
  return (
    <footer
      className="border-t mt-16"
      style={{ background: "var(--bg-surface)", borderColor: "var(--border)" }}
    >
      <div className="max-w-screen-xl mx-auto px-4 lg:px-8 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* Logo */}
        <div className="text-lg font-black tracking-tight">
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

        {/* Copyright */}
        <p className="text-xs" style={{ color: "var(--text-secondary)" }}>
          © {new Date().getFullYear()} Rafli Dio Muhammad Valent. All rights reserved.
        </p>

        {/* Social Icons */}
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
              className="flex items-center justify-center w-8 h-8 rounded-lg border transition-all duration-200 hover:-translate-y-0.5"
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
              <i className={`${icon} text-sm`} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
