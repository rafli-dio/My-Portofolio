import React from "react";

const SkillCard = ({ name, logo }) => (
  <div
    className="group flex flex-col justify-center items-center p-5 rounded-xl border transition-all duration-300 hover:-translate-y-1 cursor-default"
    style={{
      background: "var(--bg-elevated)",
      borderColor: "var(--border)",
    }}
    onMouseEnter={(e) => {
      e.currentTarget.style.borderColor = "rgba(124,58,237,0.4)";
      e.currentTarget.style.boxShadow = "0 8px 30px rgba(124,58,237,0.15)";
      e.currentTarget.style.background = "rgba(124,58,237,0.08)";
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.borderColor = "var(--border)";
      e.currentTarget.style.boxShadow = "none";
      e.currentTarget.style.background = "var(--bg-elevated)";
    }}
  >
    <i
      className={`${logo} text-4xl mb-3 transition-transform duration-300 group-hover:scale-110`}
      style={{ color: "#a78bfa" }}
    />
    <p
      className="font-semibold text-sm text-center"
      style={{ color: "var(--text-primary)" }}
    >
      {name}
    </p>
  </div>
);

export default SkillCard;
