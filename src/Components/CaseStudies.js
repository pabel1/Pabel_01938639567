import React from "react";
import projectImg_1 from "../Assests/image/project__1.png";
import projectImg_2 from "../Assests/image/project__2.png";

const CaseStudies = () => {
  return (
    <div className="container py-14 flex flex-col items-center pb-24">
      <h1 className="mr-[600px] text-[50px] font-bold ">
        Case Studies <span className="text-[#0095fff8]">+</span>
      </h1>
      <div className=" flex justify-center items-center gap-3 mx-auto  my-10 ">
        <div className=" relative flex flex-col">
          <div>
            <img
              className=" w-[450px]   rounded-xl"
              src={projectImg_1}
              alt=""
            />
          </div>
          {/*  */}
          <div
          className=" absolute top-0 left-0 text-white bg-[rgba(0,0,0,.3)] w-[450px] 
          h-[100%] flex justify-center items-center opacity-0 hover:opacity-100
            hover:duration-700 hover:-translate-y-[4px]" 
          >
            <h1 className="  font-bold text-[25px] mt-[40%] mr-[50%]">
            <span className="text-[#0095fff8]">|</span> Soovu
            </h1>
          </div>
        </div>
        <div className=" relative flex flex-col">
          <div>
            <img
              className=" w-[450px]   rounded-xl"
              src={projectImg_2}
              alt=""
            />
          </div>
          {/*  */}
          <div
          className=" absolute top-0 left-0 text-white bg-[rgba(0,0,0,.3)] w-[450px] 
          h-[100%] flex justify-center items-center opacity-0 hover:opacity-100
            hover:duration-700 hover:-translate-y-[4px]" 
          >
            <h1 className="  font-bold text-[25px] mt-[40%] mr-[50%]">
            <span className="text-[#0095fff8]">|</span> FirstbankQuest
            </h1>
          </div>
        </div>
       
      </div>
    </div>
  );
};

export default CaseStudies;
