import React from "react";
import { Link } from "react-router-dom";
import grid_1 from "../img/grid_1.webp";
import grid_2 from "../img/grid_2.webp";
import grid_3 from "../img/grid_3.webp";
import grid_4 from "../img/grid_4.webp";
import u_2 from "../img/u_2.webp";
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";
import "lightgallery/css/lg-autoplay.css";
import "lightgallery/css/lg-share.css";
import "lightgallery/css/lg-rotate.css";
import LightGallery from "lightgallery/react";

import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";
import lgAutoplay from "lightgallery/plugins/autoplay";
import lgVideo from "lightgallery/plugins/video";
import lgShare from "lightgallery/plugins/share";
import lgRotate from "lightgallery/plugins/rotate";
import PageWrapper from "../components/PageWrapper";

const Galareya = () => {
  const images = [grid_1, grid_2, grid_3, grid_4, grid_2, u_2];

  const renderGallery = () => {
    return images.map((src, index) => (
      <a key={index} href={src} data-lg-size="1406-1390" className="group w-full m-5 h-[300px] overflow-hidden relative inline-block cursor-pointer mx-auto">
        <img
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          src={src}
          alt=""
        />
      </a>
    ));
  };

  return (
    <PageWrapper>
    <div className="bg-[#fAfafa]">
      <div className="w-full max-w-base px-4 md:px-12 mx-auto py-5">
        <div className="flex items-center pt-10 mb-7">
          <Link to={"/"} className="text-[#6cd16c] text-[16px]">
            <u>Главная</u>
          </Link>
          <span className="mx-1">/</span>
          <p className="text-[#a5a3a3]">Фотогалерея</p>
        </div>
        <div>
          <h3 className="text-[32px] md:text-[50px] font-bold mb-14">
            Фотогалерея
          </h3>
          <LightGallery
            speed={500}
            plugins={[lgThumbnail, lgShare, lgRotate, lgVideo, lgAutoplay, lgZoom]}
            elementClassNames="grid grid-cols-3 gap-4 md:gap-9 pb-14"
          >
            {renderGallery()}
          </LightGallery>
        </div>
      </div>
    </div>
    </PageWrapper>
  );
};

export default Galareya;
