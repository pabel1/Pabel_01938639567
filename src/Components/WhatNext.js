import React from "react";

const WhatNext = () => {
  return (
    <div className="  dark:bg-black  dark:text-white text-center pb-28">
      <div className=" flex flex-col justify-center items-center mx-auto">
        <h4 className=" text-center text-[18px] font-bold text-[#312e81] ">
          WHATS NEXT
        </h4>
        <h1 className="text-[30px] font-bold py-7">Lets work together!</h1>
        <p className="dark:text-zinc-400  my-9 mb-6 text-[16px] w-2/5  mr-[280px] text-center ml-80">
          If you'd like to talk about a project you want help with or need an
          advice about product design, just drop me a message at
          nathan@ojieame.design I'm currently Available for any design systems
          projects, dashboard designs or landing pages gigs.
        </p>
        <a
          className="border-b border-[#00b7fff8] 
              hover:bg-[#022e4544] transform hover:translate-x-3 
              hover:duration-500 hover:delay-200 hover:pr-3 p-2  font-semibold"
          href="/"
        >
          WRITE ME AN EMAIL
        </a>
      </div>
    </div>
  );
};

export default WhatNext;
