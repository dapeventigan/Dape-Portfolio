import React from "react";
import "./Footer.css";
import FooterSocials from "./FooterSocials";

const Footer = () => {
  return (
    <footer>
      <div className="container footer__content">
        <div className="footer__contents">
          <h3 className="portfolio__dape">Portfolio developed by DAPE</h3>

          <div className="contact__details">
            <h3>Contact</h3>
            <p>Email: dabeventigan@gmail.com</p>
            <p>Mobile No.: +639201026946</p>
          </div>

          <div className="footer__socials">
            <h3>Socials</h3>
            <FooterSocials />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
