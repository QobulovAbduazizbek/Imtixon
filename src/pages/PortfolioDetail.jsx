import React from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { projects } from "../data";
import Arrowd from '../img/Arrowd.png'
import PageWrapper from "../components/PageWrapper";

const PortfolioDetail = () => {
  const { title } = useParams();

  const projectItem = projects.find((project) => {
    return project.title  === title;
  });

  return (
    <PageWrapper>
    <div className="w-full max-w-base mx-auto pt-20 pb-10 px-5">
      <div className="mb-5">
        <Link to={'/'} className="text-[#6cd16c] text-sm"> <u>Главная</u></Link>
        <span className="text-[#6cd16c] text-sm mx-1"> / </span>
        <Link to={'/portfolio'} className="text-[#6cd16c] text-sm"> <u>Статьи</u></Link>
        <span className="text-[#6cd16c] text-sm mx-1"> / </span>
        <h3 className="text-[#969494] text-sm inline">{projectItem.title}</h3>
      </div>
      <h1 className="text-3xl lg:text-5xl font-bold mb-5">{projectItem.title}</h1>
      <div>
        <p className="mb-5 text-[#555454] text-sm lg:text-base">Дата публикации: 02.06.2024</p>
        <p className="text-[#555454] text-sm lg:text-base">{projectItem.text}</p>
      </div>
    </div>
    </PageWrapper>
  );
};

export default PortfolioDetail;
