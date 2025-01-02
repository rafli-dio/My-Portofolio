import React from "react";
import Navbar from "../components/Navbar";
import Jumbotron from "../components/Jumbotron";
import Project from "./Project";
import Skills from "./Skills";
const Home = () => {
  return (
    <div>
      <Navbar />
      <Jumbotron />
      <Project />
      <Skills />
    </div>
  );
};

export default Home;
