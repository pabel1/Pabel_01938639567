import React from "react";

const About = () => {
  return (
    <div className="container py-10">
      <h4 className=" text-center text-[18px] font-bold text-[#312e81] ">About Me</h4>
      <div className=" grid grid-cols-2 mx-auto">
      <div className=" flex flex-col justify-center  items-center mt-6 ">
        <h1 className="text-[30px] font-bold py-7 ml-24">Designing with<br />passion for Problem<br />Solving</h1>
        <a
          className="border-b border-[#00b7fff8] 
              hover:bg-[#022e4544] transform hover:translate-x-3 
              hover:duration-500 hover:delay-200 hover:pr-3 p-2"
          href="/"
        >
          FOLLOW ME INSTAGRAM
        </a>
      </div>
      <div className=" flex flex-col items-start justify-center mx-auto">
        <p  className="dark:text-zinc-400  my-9 mb-6 text-[16px]  mr-[280px] text-justify">
          I’ve always been passionate about pixels and design projects and
          haven’t stopped working and learning about new technologies . Other
          than sitting in from of my display I enjoy myself in casual sports,
          such as bowling or playing football with friends. I'm grateful that my
          job allows me to work from anywhere. I’m active on Instagram where I
          share most of the and all info about my upcoming projects. I also like
          sharing my experiences on instagram
        </p>
      </div>
      </div>
    </div>
  );
};

export default About;
