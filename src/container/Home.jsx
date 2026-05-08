import React from "react";
import Navbar from "../components/Navbar";
import Jumbotron from "../components/Jumbotron";
import Project from "./Project";
import Experience from "./Experience";
import Skills from "./Skills";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div style={{ background: "var(--bg-base)" }}>
      <Navbar />
      
      <Jumbotron />

      <Project hideNavbar={true} />

      <Experience hideNavbar={true} />

      {/* Skills wrapper */}
      <div
        id="skills"
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
