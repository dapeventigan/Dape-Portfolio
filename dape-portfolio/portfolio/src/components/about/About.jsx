import React from "react";
import "./About.css";
import AboutCarousel from "./AboutCarousel";
import { MdSchool, MdWork } from "react-icons/md";
import { BsInfoCircle } from "react-icons/bs";
import "aos/dist/aos.css";

function About() {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-delay="50"
        data-aos-once="true"
      >
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
                href="https://konect.gg/d4pe#510808"
                target="_blank"
                rel="noreferrer"
              >
                <article className="about__card">
                  <BsInfoCircle className="about__icon" />
                  <h5>Info</h5>
                  <small>Dabe M. Ventigan</small>
                  <small>05/29/2000</small>
                  <small>Baguio City</small>
                  <small>PH</small>
                </article>
              </a>

              <a
                className="anchor__card"
                href="https://www.facebook.com/photo/?fbid=677838077720243&set=pcb.677839594386758"
                target="_blank"
                rel="noreferrer"
              >
                <article className="about__card">
                  <MdSchool className="about__icon" />
                  <h5>School</h5>
                  <small>Saint Louis University</small>
                  <small>BSIT</small>
                  <small>Dean's Lister</small>
                  <small>Aug 2018 - July 2023</small>
                </article>
              </a>

              <article className="about__card">
                <MdWork className="about__icon" />
                <h5>Job Interest</h5>
                <small>Web Developer</small>
                <small>Software Developer</small>
                <small>UI/UX Designer</small>
                <small>Graphic Designer</small>
              </article>
            </div>

            <div className="desc__container">
              <h3 className="animate-charcter"> Hello!</h3>
              <p>
                My name is Dabe Ventigan, and you can call me Dape. I'm an IT
                Graduate from Saint Louis University. I aspire to pursue a
                career as a Fullstack Web or Software Developer, UI/UX Designer,
                Graphic Designer, or any IT related roles that I can contribute
                my skills. To complement my technical skills, I've actively
                sought opportunities to expand my knowledge and experience. I've
                attended tech meetups and conferences, connecting with industry
                professionals and absorbing insights into the latest
                technological advancements. Moreover, I've taken on freelance
                projects where I've applied my coding and design skills in
                real-world scenarios, refining my abilities to meet a client's
                expectations.
              </p>
            </div>

            <a href="#contact" className="btn btn-primary">
              Message me
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
