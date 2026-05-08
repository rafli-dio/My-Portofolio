import React from "react";
import Navbar from "../components/Navbar";
import Jumbotron from "../components/Jumbotron";
import Project from "./Project";
import Skills from "./Skills";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div style={{ background: "var(--bg-base)" }}>
      <Navbar />
      <Jumbotron />

      {/* Divider */}
      <div className="max-w-screen-xl mx-auto px-4 lg:px-8">
        <div className="h-[1px] w-full" style={{ background: "var(--border)" }} />
      </div>

      <Project />

      {/* Skills wrapper */}
      <div
        className="border-t"
        style={{ borderColor: "var(--border)", background: "var(--bg-surface)" }}
      >
        <div className="max-w-screen-xl mx-auto px-4 lg:px-8">
          <Skills />
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Home;
