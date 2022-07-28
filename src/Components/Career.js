import React from "react";
// import { AiFillFileImage } from "@react-icons/all-files/fa/AiFillFileImage";

const Career = () => {
  return (
    <div className="container py-10">
      <div className=" flex justify-around ">
        <h1 className=" text-[50px] font-bold">
          Career <span className="text-[#0095fff8]">+</span>
        </h1>
        <a
          className=" border-b border-[#00b7fff8] 
              hover:bg-[#022e4544] transform hover:translate-x-3 
              hover:duration-500 hover:delay-200 hover:pr-3"
          href="/"
        >
          {" "}
          GET CV 
        </a>
      </div>
      <div className=" flex  justify-center gap-20 my-14 mx-auto flex-wrap">
        <div>
            <h1 className=" text-[25px] font-bold mb-1">DriveMe Fleets</h1>
            <h4>Ux Consult / Designer</h4>
            <p className="mt-2 text-slate-600 text-[18px]">Mar 2019 - Present</p>
        </div>
        <div>
            <h1 className=" text-[25px] font-bold mb-1">DriveMe Fleets</h1>
            <h4>Ux Consult / Designer</h4>
            <p className="mt-2 text-slate-600 text-[18px]">Mar 2019 - Present</p>
        </div>
        <div>
            <h1 className=" text-[25px] font-bold mb-1">DriveMe Fleets</h1>
            <h4>Ux Consult / Designer</h4>
            <p className="mt-2 text-slate-600 text-[18px]">Mar 2019 - Present</p>
        </div>
        <div>
            <h1 className=" text-[25px] font-bold mb-1">DriveMe Fleets</h1>
            <h4>Ux Consult / Designer</h4>
            <p className="mt-2 text-slate-600 text-[18px]">Mar 2019 - Present</p>
        </div>
        
      
        
      </div>
    </div>
  );
};

export default Career;
