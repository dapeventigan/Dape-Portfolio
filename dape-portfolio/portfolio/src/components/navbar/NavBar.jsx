import React from "react";
import { useState } from "react";
import "./NavBar.css";

import PochaccoImg from "../../assets/pochacco.png";
import PochaccoImgHover from "../../assets/pochacco_hover.png";
import { AiOutlineUser, AiOutlinePhone } from "react-icons/ai";
import { BiBook } from "react-icons/bi";
import { RiServiceLine } from "react-icons/ri";

function NavBar() {
  const [isHovered, setIsHovered] = useState(false);
  const image1 = PochaccoImg;
  const image2 = PochaccoImgHover;
  const handleHover = () => {
    setIsHovered(!isHovered);
  };

  const [activeNav, setActiveNav] = useState("#");

  return (
    <nav>
      <a href="#header" className="pochacco__link" onClick={()=> setActiveNav("#")} id={activeNav === '#' ? 'active' : ''}>
        <img
          className="pochacco"
          src={activeNav === '#' || isHovered ? image2 : image1}
          onMouseEnter={handleHover}
          onMouseLeave={handleHover}
          alt=""
        />
      </a>

      <a href="#about" onClick={()=> setActiveNav("#about")} id={activeNav === '#about' ? 'active' : ''}>
        <AiOutlineUser />
      </a>
      <a href="#experience" onClick={()=> setActiveNav("#exp")} id={activeNav === '#exp' ? 'active' : ''}>
        <BiBook />
      </a>
      <a href="#experiences" onClick={()=> setActiveNav("#services")} id={activeNav === '#services' ? 'active' : ''}>
        <RiServiceLine />
      </a>
      <a href="#contact" onClick={()=> setActiveNav("#contact")} id={activeNav === '#contact' ? 'active' : ''}>
        <AiOutlinePhone />
      </a>
    </nav>
  );
}

export default NavBar;
