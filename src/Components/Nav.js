import React from "react";
import Logo from "../Assests/image/logo.png";
import "./Nav.css";
const Nav = () => {
  return (
    <div className=" container mx-auto  p-3 bg-[rgba(0,0,0,0.41)]  fixed z-20 mb-8">
     
        <div className=" ml-[5%] md:lg:ml-[10%]">
          <img className=" invert brightness-150 " src={Logo} alt="" />
        </div>
    </div>
  );
};

export default Nav;
