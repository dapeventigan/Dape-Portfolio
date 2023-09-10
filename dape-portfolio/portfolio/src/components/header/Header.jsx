import React from "react";
import Lottie from "lottie-react";
import "./Header.css";
import HeaderBtn from "./headerbtn";
import DapeCat from "../../assets/animation_lm9ygd41.json";
import HeaderSocials from "./HeaderSocials";

function Header() {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Dabe Ventigan</h1>
        <h5 className="text-light">Fullstack MERN Developer</h5>
        <HeaderBtn />

        <div className="cat">
          <Lottie animationData={DapeCat} className="cat__svg" />
        </div>

        <HeaderSocials />

        <a href="#contact" className="scroll__down">
          Contact Dape :)
        </a>
      </div>
    </header>
  );
}

export default Header;
