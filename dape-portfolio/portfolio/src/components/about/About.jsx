import React from "react";
import "./About.css";
import AboutCarousel from "./AboutCarousel";
import { MdSchool, MdWork } from "react-icons/md";
import { SiValorant } from "react-icons/si";

function About() {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <AboutCarousel className="about__carousel" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <a
              className="anchor__card"
              href="https://www.facebook.com/photo/?fbid=677838077720243&set=pcb.677839594386758"
              target="_blank"
            >
              <article className="about__card">
                <MdSchool className="about__icon" />
                <h5>School</h5>
                <small>Saint Louis University</small>
                <small>BSIT</small>
                <small>Dean's Lister</small>
                <small>Aug 2018 - July 2023</small>
                <small>&nbsp;</small>
                <small>&nbsp;</small>
              </article>
            </a>

            <a
              className="anchor__card"
              href="https://konect.gg/d4pe#510808"
              target="_blank"
            >
              <article className="about__card">
                <SiValorant className="about__icon" />
                <h5>E-Sports</h5>
                <small>Bonaksu Gaming</small>
                <small>SLU Valorant Team</small>
                <small>Demon Dogs Cerberus</small>
                <small>Baguio City E-Palaro Valorant Team</small>
                <small>&nbsp;</small>
              </article>
            </a>

            <article className="about__card">
              <MdWork className="about__icon" />
              <h5>Work Experience</h5>
              <small>Frontend Developer</small>
              <small>UI/UX Designer</small>
              <small>Graphic Designer</small>
              <small>Multimedia Producer & Editor</small>
              <small>Social Media Manager</small>
            </article>
          </div>
          
          <p>
            Hello World! My name is Dabe Ventigan, you can call me Dabe(The-bhe) or Dape. I'm a fresh BSIT Graduate from Saint Louis University. I want to pursue my career as a
            Fullstack Developer, UI/UX Designer, Graphic Designer, Video and
            Image Editor, Music Producer, Tailor for Street Fashion, or E-Sport
            Player because I am very passionate in every hobby and skill that I
            have. But Currently, I am focused on Fullstack MERN Developer and UI/UX Designing. I love cats 🐈, gaming 🎮, music 🎸, and fashion👚.
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
