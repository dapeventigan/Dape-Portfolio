import React from "react";
import "./About.css";
import AboutCarousel from "./AboutCarousel";
import { MdSchool } from "react-icons/md";

function About() {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <AboutCarousel className="about__carousel"/>
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <MdSchool className="about__icon" />
              <h5>Experience</h5>
              <small>3+ Years Working Experience</small>
            </article>

            <article className="about__card">
              <MdSchool className="about__icon" />
              <h5>Experience</h5>
              <small>3+ Years Working Experience</small>
            </article>

            <article className="about__card">
              <MdSchool className="about__icon" />
              <h5>Experience</h5>
              <small>3+ Years Working Experience</small>
            </article>
          </div>

          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque
            assumenda obcaecati fugit provident? Repellat, laboriosam laborum
            similique deserunt quod, atque eius consequatur neque omnis quos
            quis aliquid sit architecto tenetur.
          </p>

          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
}

export default About;
