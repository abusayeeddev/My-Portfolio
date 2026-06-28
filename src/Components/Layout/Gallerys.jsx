import React, { useState } from "react";
import { Link } from "react-router-dom";
import Container from "../Common/Container";

const projects = [
  {
    id: 1,
    title: "E-Commerce Website",
    category: "HTML & CSS",
    image: "/src/assets/cover_1.jpg",
    link: "https://abusayeeddev.github.io/Food-web-site/",
  },
  {
    id: 2,
    title: "Portfolio Website",
    category: "Bootstrap",
    image: "/src/assets/cover_2.jpg",
    link: "https://abusayeeddev.github.io/Class-17/",
  },
  {
    id: 3,
    title: "Landing Page",
    category: "Bootstrap",
    image: "/src/assets/cover_3.jpg",
    link: "https://abusayeeddev.github.io/class-18/",
  },
  {
    id: 4,
    title: "Business Website",
    category: "HTML & CSS",
    image: "/src/assets/cover_4.jpg",
    link: "https://abusayeeddev.github.io/Class-22/",
  },
  {
    id: 5,
    title: "Dashboard UI",
    category: "HTML & CSS",
    image: "/src/assets/cover_5.jpg",
    link: "https://abusayeeddev.github.io/Food-web-site/",
  },
  {
    id: 6,
    title: "Restaurant Website",
    category: "React",
    image: "/src/assets/cover_6.jpg",
    link: "https://tourmaline-queijadas-c435e3.netlify.app/",
  },
  {
    id: 7,
    title: "Portfolio Website",
    category: "Tailwind CSS",
    image: "/src/assets/cover_8.jpg",
    link: "https://abusayeeddev.github.io/class-20/",
  },
];

const categories = [
  "All",
  "React",
  "Tailwind CSS",
  "HTML & CSS",
  "Bootstrap",
];

const Gallerys = ({ limit }) => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = projects.filter(
    (project) =>
      activeCategory === "All" ||
      project.category === activeCategory
  );

  const displayProjects = limit
    ? filteredProjects.slice(0, limit)
    : filteredProjects;

  return (
    <section className="py-20">
      <Container>
        <div className="text-center">
          <h2 className="inline-block text-4xl font-bold text-primary border-b-4 border-buttonBg pb-2">
            My Projects
          </h2>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mt-10">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-5 py-2 rounded-lg border-2 border-textSub font-semibold hover:bg-textSub hover:text-white transition`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {displayProjects.map((project) => (
            <div
              key={project.id}
              className="group relative overflow-hidden rounded-2xl shadow-lg"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-72 object-cover"
              />

              <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition duration-300 flex flex-col items-center justify-center">
                <h3 className="text-white text-2xl font-bold">
                  {project.title}
                </h3>

                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 px-5 py-2 bg-white text-black rounded-lg hover:bg-buttonBg hover:text-white transition"
                >
                  Live Preview
                </a>
              </div>
            </div>
          ))}
        </div>

        {limit && (
          <div className="text-center mt-10">
            <Link
              to="/project"
              className="px-8 py-3 border-2 border-textSub text-white rounded-lg"
            >
              View All Projects
            </Link>
          </div>
        )}
      </Container>
    </section>
  );
};

export default Gallerys;