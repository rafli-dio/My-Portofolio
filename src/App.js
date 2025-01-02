import React from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "./container/Home";
import Experience from "./container/Experience";
import MoreProject from "./container/MoreProject";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project" element={<MoreProject />} />
        <Route path="/experience" element={<Experience />} />
      </Routes>
    </Router>
  );
}

export default App;
