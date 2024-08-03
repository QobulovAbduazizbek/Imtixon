import React from "react";
import { Link } from "react-router-dom";
import { projects } from "../data";
import PageWrapper from "../components/PageWrapper";

const Portfolio = () => {
  return (
    <PageWrapper>
    <div className="w-full max-w-base mx-auto px-5 py-20">
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {projects.map((project) => {
          return (
            <li key={project.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <img className="w-full h-auto" src={project.image} alt={project.title} />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600">{project.text}</p>
                <Link to={`/portfolio/${project.title}`} className="text-blue-500 hover:underline mt-2">Подробнее</Link>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
    </PageWrapper>
  );
};

export default Portfolio;
