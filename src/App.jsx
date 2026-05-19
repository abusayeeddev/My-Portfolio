import React from "react";
import { Route, Routes } from "react-router-dom";
import Rootlayout from "./Components/Layout/Rootlayout";
import Home from "/src/Components/Page/Home";
import About from "/src/Components/Page/About"
import Service from "/src/Components/Page/Service"
import Blog from "/src/Components/Page/Blog"
import Contact from "/src/Components/Page/Contact"
import Project from "/src/Components/Page/Project"


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Rootlayout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="service" element={<Service />} />
          <Route path="blog" element={<Blog />} />
          <Route path="contact" element={<Contact />} />
          <Route path="project" element={<Project />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
