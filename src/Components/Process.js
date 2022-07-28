import React from "react";

const Process = () => {
  return (
    <div className="container ">
      <div className="  ml-[200px]">
        <h1 className=" text-[50px] font-bold">
          Process <span className="text-[#0095fff8]">+</span>
        </h1>
      </div>
      <div className=" mx-auto flex justify-center ">
        <div className=" grid grid-cols-3 gap-16 my-14">
          <div className=" relative ">
            <h1 className=" opacity-10 text-[80px] font-bold">01</h1>
            <h2 className=" absolute top-[50px] left-10 text-[25px]  font-bold">
              Pre-Process
            </h2>
            <h4 className=" text-[18px] ml-10 mb-3">Collect Informations</h4>
            <h4 className=" text-[18px] ml-10 mb-3">Personas</h4>
            <h4 className=" text-[18px] ml-10 mb-3">SetUp Goals</h4>
            <h4 className=" text-[18px] ml-10 mb-3">
              Project Folder + Moodboard
            </h4>
          </div>
          <div className=" relative">
            <h1 className=" opacity-10 text-[80px] font-bold">02</h1>
            <h2 className=" absolute top-[50px] left-10 text-[25px]  font-bold">
              Low Fidelity
            </h2>
            <h4 className=" text-[18px] ml-10 mb-3">Whiteboard</h4>
            <h4 className=" text-[18px] ml-10 mb-3">Maps Screen Info</h4>
            <h4 className=" text-[18px] ml-10 mb-3">Possible States</h4>
            <h4 className=" text-[18px] ml-10 mb-3">First Diagram</h4>
          </div>
          <div className=" relative">
            <h1 className=" opacity-10 text-[80px] font-bold">03</h1>
            <h2 className=" absolute top-[50px] left-10 text-[25px]  font-bold">
              Work/ Design
            </h2>
            <h4 className=" text-[18px] ml-10 mb-3">Moodboard</h4>
            <h4 className=" text-[18px] ml-10 mb-3">First Diagram</h4>
            <h4 className=" text-[18px] ml-10 mb-3">Write your copy</h4>
            <h4 className=" text-[18px] ml-10 mb-3">Intern Test</h4>
          </div>

          <div className=" relative">
            <h1 className=" opacity-10 text-[80px] font-bold">04</h1>
            <h2 className=" absolute top-[50px] left-10 text-[25px]  font-bold">
              Assets & Delivery
            </h2>
            <h4 className=" text-[18px] ml-10 mb-3">Specifications</h4>
            <h4 className=" text-[18px] ml-10 mb-3">Diagram</h4>
            <h4 className=" text-[18px] ml-10 mb-3">Final Prototype</h4>
            <h4 className=" text-[18px] ml-10 mb-3">Video x Notes</h4>
          </div>
          <div className=" relative">
            <h1 className=" opacity-10 text-[80px] font-bold">05</h1>
            <h2 className=" absolute top-[50px] left-10 text-[25px]  font-bold">
              Final & Test
            </h2>
            <h4 className=" text-[18px] ml-10 mb-3">Inspectlet x hotjar</h4>
            <h4 className=" text-[18px] ml-10 mb-3">Mixpanel</h4>
            <h4 className=" text-[18px] ml-10 mb-3">Google Analytics</h4>
            <h4 className=" text-[18px] ml-10 mb-3">Intercom</h4>
          </div>
          <div className=" relative">
            <h1 className=" opacity-10 text-[80px] font-bold">06</h1>
            <h2 className=" absolute top-[50px] left-10 text-[25px]  font-bold">
              After Design
            </h2>
            <h4 className=" text-[18px] ml-10 mb-3">Goals</h4>
            <h4 className=" text-[18px] ml-10 mb-3">Workspace</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Process;
