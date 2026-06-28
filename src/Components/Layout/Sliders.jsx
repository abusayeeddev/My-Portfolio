import React from "react";

// Slick Slider start 
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import ServiceCard from "/src/Components/Layout/ServiceCard";
// Slick Slider end 

// icon import start 
import { HiServer } from "react-icons/hi";
import { BsLayoutTextWindowReverse } from "react-icons/bs";
import { FaFigma, FaMobileScreen } from "react-icons/fa6";
import { LuBaggageClaim } from "react-icons/lu";
import { FaHome } from "react-icons/fa";

// Slick Slider start 
const SlickSlider = Slider.default ? Slider.default : Slider;
// Slick Slider end 


const Sliders = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    speed: 3000, // animation কত দ্রুত চলবে
    autoplaySpeed: 1, // pause থাকবে না
    cssEase: "linear",
    arrows: false,
    pauseOnHover: true,
  };

  return (
    <div className="bg-bgclr shadow-[0px_0px_10px_rgba(0,0,0,0.2)] my-4">
      <div className="container">
        <SlickSlider {...settings} className="py-2 items-center">
          <div className="px-1">
            <div className={`rounded-3xl `}>
              <ServiceCard serviceName="Web Development" serviceIcon={<HiServer />} />
            </div>
          </div>

          <div className="px-1">
            <div className=" rounded-3xl">
              <ServiceCard serviceName="Landing Page Design" serviceIcon={<BsLayoutTextWindowReverse />} />
            </div>
          </div>

          <div className="px-1">
            <div className=" rounded-3xl">
              <ServiceCard serviceName="Mobile Responsive Design" serviceIcon={<FaMobileScreen />} />
            </div>
          </div>

          <div className="px-1">
            <div className=" rounded-3xl">
              <ServiceCard serviceName="E-commerce Design" serviceIcon={ <LuBaggageClaim /> } />
            </div>
          </div>
          <div className="px-1">
            <div className={`rounded-3xl `}>
              <ServiceCard serviceName="Custom HomePage" serviceIcon={<FaHome />} />
            </div>
          </div>

          <div className="px-1">
            <div className=" rounded-3xl">
              <ServiceCard serviceName="Landing Page Design" serviceIcon={<BsLayoutTextWindowReverse />} />
            </div>
          </div>

          <div className="px-1">
            <div className=" rounded-3xl">
              <ServiceCard serviceName="Figma to Website" serviceIcon={<FaFigma />} />
            </div>
          </div>

          <div className="px-1">
            <div className=" rounded-3xl">
              <ServiceCard serviceName="Wordpress Landing design" serviceIcon={<HiServer />} />
            </div>
          </div>
        </SlickSlider>
      </div>
    </div>
  );
};

export default Sliders;
