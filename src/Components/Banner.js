import React from "react";
import bannerImg from "../Assests/image/banner.jpg";
// import "./Banner.css";

const Banner = () => {
  return (
    <div className="banner__bg container mx-auto  mb-14 pt-32 ">
      <div className="  ">
        <div className="nav__baner text-center grid grid-cols-2  lg:gap-24">
          <div className="relative  sm:mx-[3%] md:text-left lg:ml-[200px]">
            <h1 className=" text-[100px]  mt-12 font-bold opacity-[.05]">
              Product <br /> Designer
            </h1>
            <div className="absolute top-[120px] text-center md:lg:text-left">
              <h2 className=" text-[25px] font-bold">Hello, it's me</h2>
              <h1 className=" text-[100px]  mt-12 font-bold ">
                Ojieame<span className="text-[#0095fff8]">.</span>
              </h1>
              <p className=" dark:text-zinc-400  text-justify md:lg:my-4 mb-6  lg:text-justify">
                An enthusiastic product designer currently shaping the future of
                software development by designing smooth user-interfaces that
                promote user interaction with information and data. While
                traveling around the world.
              </p>
              <button
                className=" text-left border-b border-[#00b7fff8] p-2 
              hover:bg-[#022e4544] transform hover:translate-x-3 
              hover:duration-500 hover:delay-200 hover:pr-3"
              >
                <a href="#myskill">SCROLL FOR MORE</a>
              </button>
            </div>
          </div>
          <div className="">
            <img className=" w-[60%] h-[100vh]" src={bannerImg} alt="" />
          </div>
        
        </div>
      </div>
    </div>
  );
};

export default Banner;
