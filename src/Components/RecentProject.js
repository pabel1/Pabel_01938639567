import React from "react";
import projectImg_1 from "../Assests/image/project__1.png";
import projectImg_2 from "../Assests/image/project__2.png";
import projectImg_3 from "../Assests/image/project__3.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import Slider from "react-slick";

const RecentProject = () => {
  // const settings = {
  //   dots: true,
  //   infinite: true,
  //   speed: 500,
  //   slidesToShow: 1,
  //   slidesToScroll: 1,
  // };
  return (
    //
    <div className="container flex flex-col justify-around items-center  pb-14 ">
      <h1 className=" mr-[600px] text-[60px]  font-bold">
        Recent
        <br />
        Projects <span className="text-[#0095fff8]">+</span>
      </h1>
      {/* <Slider> */}
        <div className=" grid grid-cols-2 mx-auto ">
          <img
            className=" w-[450px] rounded-lg mr-3 mt-36"
            src={projectImg_1}
            alt=""
          />
          <div className="flex flex-col gap-3">
            <div className=" relative">
              <img
                className="  w-[450px] rounded-lg"
                src={projectImg_2}
                alt=""
              />
              <h1 className="  absolute top-[80%] left-[10%] font-bold text-[25px] hidden hover:visible">
                <span className="text-[#0095fff8]">|</span>UAE
              </h1>
            </div>
            <div>
              <img
                className=" w-[450px] rounded-lg"
                src={projectImg_3}
                alt=""
              />
            </div>
          </div>
        </div>
      {/* </Slider> */}
      <button
        className="mr-[700px] mb-16 text-left border-b border-[#00b7fff8] p-2 
              hover:bg-[#022e4544] transform hover:translate-x-3 
              hover:duration-500 hover:delay-200 hover:pr-3"
      >
        <a href="/myskill">SCROLL FOR MORE</a>
      </button>
    </div>
  );
};

export default RecentProject;
