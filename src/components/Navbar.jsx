import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const { theme, toggleTheme } = useTheme();

  const links = [
    { to: "/", label: "About" },
    { to: "/project", label: "Projects" },
    { to: "/experience", label: "Experience" },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <div className="fixed top-0 left-0 w-full z-50">
      <nav className="px-4 lg:px-12 py-3">
        <div
          className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl px-6 py-4 rounded-2xl border shadow-xl"
          style={{
            background: "var(--navbar-bg)",
            borderColor: "var(--border)",
            backdropFilter: "blur(20px)",
            WebkitBackdropFilter: "blur(20px)",
          }}
        >
          {/* Logo */}
          <Link
            to="/"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex items-center gap-1 text-xl font-black tracking-tight"
          >
            <span className="gradient-text">RAFLI</span>
            <span style={{ color: "var(--text-primary)" }}>DIO</span>
            <span
              className="ml-1 text-xs font-semibold px-2 py-0.5 rounded-full border"
              style={{
                borderColor: "var(--accent-primary)",
                color: "var(--accent-text)",
                background: "var(--accent-bg)",
              }}
            >
              DEV
            </span>
          </Link>

          {/* Right side: Theme toggle + Mobile menu */}
          <div className="flex items-center gap-2 md:hidden">
            <ThemeToggleButton theme={theme} toggleTheme={toggleTheme} />
            <button
              id="menu-toggle"
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center rounded-lg hover:bg-[var(--bg-elevated)] focus:outline-none transition-colors"
              style={{ color: "var(--text-secondary)" }}
              aria-controls="navbar"
              aria-expanded={isOpen}
              onClick={() => setIsOpen(!isOpen)}
            >
              <span className="sr-only">Open main menu</span>
              <i className={`fa-solid ${isOpen ? "fa-xmark" : "fa-bars"} text-lg`} />
            </button>
          </div>

          {/* Navigation Links */}
          <div
            id="navbar"
            className={`${isOpen ? "block" : "hidden"} w-full md:flex md:w-auto md:items-center`}
          >
            <ul className="flex flex-col items-center font-medium mt-4 md:mt-0 md:flex-row md:space-x-1">
              {links.map(({ to, label }) => (
                <li key={to}>
                  <Link
                    to={to}
                    onClick={() => {
                      window.scrollTo({ top: 0, behavior: "smooth" });
                      setIsOpen(false);
                    }}
                    className="block py-2 px-4 rounded-lg text-sm font-medium transition-colors duration-200"
                    style={{
                      color: isActive(to) ? "var(--accent-text)" : "var(--text-secondary)",
                      background: isActive(to) ? "var(--accent-bg)" : "transparent",
                    }}
                    onMouseEnter={(e) => {
                      if (!isActive(to)) {
                        e.currentTarget.style.color = "var(--text-primary)";
                        e.currentTarget.style.background = "var(--bg-elevated)";
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (!isActive(to)) {
                        e.currentTarget.style.color = "var(--text-secondary)";
                        e.currentTarget.style.background = "transparent";
                      }
                    }}
                  >
                    {label}
                  </Link>
                </li>
              ))}

              {/* Theme Toggle - Desktop */}
              <li className="hidden md:flex md:ml-2">
                <ThemeToggleButton theme={theme} toggleTheme={toggleTheme} />
              </li>

              {/* GitHub CTA */}
              <li className="md:ml-2 mt-2 md:mt-0">
                <a
                  href="https://github.com/rafli-dio"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold rounded-xl text-white transition-all duration-300 hover:opacity-90 hover:-translate-y-0.5"
                  style={{ background: "linear-gradient(135deg, #7c3aed, #6366f1)" }}
                >
                  <i className="fa-brands fa-github text-base" />
                  GitHub
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

/* Theme Toggle Button */
const ThemeToggleButton = ({ theme, toggleTheme }) => {
  const isDark = theme === "dark";
  return (
    <button
      onClick={toggleTheme}
      aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
      title={`Switch to ${isDark ? "light" : "dark"} mode`}
      className="relative flex items-center justify-center w-10 h-10 rounded-xl border transition-all duration-300 hover:-translate-y-0.5 overflow-hidden"
      style={{ background: "var(--bg-elevated)", borderColor: "var(--border)" }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = "var(--accent-border)";
        e.currentTarget.style.boxShadow = "0 4px 15px var(--accent-glow)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = "var(--border)";
        e.currentTarget.style.boxShadow = "none";
      }}
    >
      {/* Sun (dark mode → click to switch to light) */}
      <i
        className="fa-solid fa-sun text-base absolute transition-all duration-300"
        style={{
          color: "#f59e0b",
          opacity: isDark ? 1 : 0,
          transform: isDark ? "rotate(0deg) scale(1)" : "rotate(90deg) scale(0.4)",
        }}
      />
      {/* Moon (light mode → click to switch to dark) */}
      <i
        className="fa-solid fa-moon text-base absolute transition-all duration-300"
        style={{
          color: "var(--accent-primary)",
          opacity: isDark ? 0 : 1,
          transform: isDark ? "rotate(-90deg) scale(0.4)" : "rotate(0deg) scale(1)",
        }}
      />
    </button>
  );
};

export default Navbar;
