import React from "react";

const MySkill = () => {
  return (
    <div className="dark:bg-black dark:text-white grid grid-cols-2   py-16" id="#myskill" >
      <div className="  flex flex-col items-start justify-center mx-auto ml-[200px] ">
        <h4 className=" text-[18px] font-semibold text-[rgb(49,46,129)]">
          MY SKILLSET
        </h4>
        <h1 className=" text-[30px] font-bold my-7">
          Graphic Design,
          <br />
          Interface Design &<br />
          User Experience
        </h1>

        <button
          className="text-left border-b border-[#00b7fff8] p-2 
              hover:bg-[#022e4544] transform hover:translate-x-3 
              hover:duration-500 hover:delay-200 hover:pr-3"
        >
          <a href="/">MY PROCESS</a>
        </button>
      </div>
      <div className=" flex flex-col items-start justify-center mx-auto">
        <p className="dark:text-zinc-400  my-9 mb-6 text-[16px]  mr-[280px] text-justify">
          I specialize in building complex web applications, leading front-end
          teams, digital product design and developing visual design systems. I
          enjoy creating effortless user experience and designing delightful
          digital products. The entire process of going from a concept to
          release and gathering user’s feedback on either client’s or my own
          products is what makes me wake up everyday! I worked with numerous
          clients from all around the world from early startups to
          well-established companies. I always seek new opportunities for
          cooperation on projects around interesting dashboards, design systems
          or landing pages. Let’s create something awesome together!
        </p>
      </div>
    </div>
  );
};

export default MySkill;
