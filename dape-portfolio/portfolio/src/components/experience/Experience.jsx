import React from "react";
import "./Experience.css";
import ProgressBar from "@ramonak/react-progress-bar";

function Experience() {
  return (
    <section id="experience">
      <h5>Skills that I have</h5>
      <h2>Skills</h2>

      <div className="container experience__container">
        <div className="experience__webdev">
          <h3>Web and Mobile Development</h3>
          <div className="experience__content">
          <article className="experience__details">
              <h4>Java</h4>
              <ProgressBar
                completed={70}
                bgColor="#050519"
                baseBgColor="rgba(255, 255, 255, 0.6)"
                animateOnRender={true}
              />
            </article>
            <article className="experience__details">
              <h4>HTML</h4>
              <ProgressBar
                completed={85}
                bgColor="#050519"
                baseBgColor="rgba(255, 255, 255, 0.6)"
                animateOnRender={true}
              />
            </article>
            <article className="experience__details">
              <h4>CSS</h4>
              <ProgressBar
                completed={80}
                bgColor="#050519"
                baseBgColor="rgba(255, 255, 255, 0.6)"
                animateOnRender={true}
              />
            </article>
            <article className="experience__details">
              <h4>Javascript</h4>
              <ProgressBar
                completed={70}
                bgColor="#050519"
                baseBgColor="rgba(255, 255, 255, 0.6)"
                animateOnRender={true}
              />
            </article>
            <article className="experience__details">
              <h4>React</h4>
              <ProgressBar
                completed={85}
                bgColor="#050519"
                baseBgColor="rgba(255, 255, 255, 0.6)"
                animateOnRender={true}
              />
            </article>
            <article className="experience__details">
              <h4>ExpressJS</h4>
              <ProgressBar
                completed={65}
                bgColor="#050519"
                baseBgColor="rgba(255, 255, 255, 0.6)"
                animateOnRender={true}
              />
            </article>
            <article className="experience__details">
              <h4>NodeJS</h4>
              <ProgressBar
                completed={65}
                bgColor="#050519"
                baseBgColor="rgba(255, 255, 255, 0.6)"
                animateOnRender={true}
              />
            </article>
            <article className="experience__details">
              <h4>MongoDB</h4>
              <ProgressBar
                completed={70}
                bgColor="#050519"
                baseBgColor="rgba(255, 255, 255, 0.6)"
                animateOnRender={true}
              />
            </article>
            <article className="experience__details">
              <h4>Flutter</h4>
              <ProgressBar
                completed={80}
                bgColor="#050519"
                baseBgColor="rgba(255, 255, 255, 0.6)"
                animateOnRender={true}
              />
            </article>
            <article className="experience__details">
              <h4>Dart</h4>
              <ProgressBar
                completed={65}
                bgColor="#050519"
                baseBgColor="rgba(255, 255, 255, 0.6)"
                animateOnRender={true}
              />
            </article>
            <article className="experience__details">
              <h4>Figma and Adobe XD</h4>
              <ProgressBar
                completed={75}
                bgColor="#050519"
                baseBgColor="rgba(255, 255, 255, 0.6)"
                animateOnRender={true}
              />
            </article>
          </div>
        </div>

        <div className="experience__media">
          <h3>Image, Video, and Music Production</h3>
          <div className="experience__content">
            <article className="experience__details">
              <h4>Adobe Photoshop</h4>
              <ProgressBar
                completed={75}
                bgColor="#050519"
                baseBgColor="rgba(255, 255, 255, 0.6)"
                animateOnRender={true}
              />
            </article>
            <article className="experience__details">
              <h4>Adobe Premier</h4>
              <ProgressBar
                completed={65}
                bgColor="#050519"
                baseBgColor="rgba(255, 255, 255, 0.6)"
                animateOnRender={true}
              />
            </article>
            <article className="experience__details">
              <h4>Adobe After Effects</h4>
              <ProgressBar
                completed={50}
                bgColor="#050519"
                baseBgColor="rgba(255, 255, 255, 0.6)"
                animateOnRender={true}
              />
            </article>
            <article className="experience__details">
              <h4>Blender</h4>
              <ProgressBar
                completed={45}
                bgColor="#050519"
                baseBgColor="rgba(255, 255, 255, 0.6)"
                animateOnRender={true}
              />
            </article>
            <article className="experience__details">
              <h4>FL Studio</h4>
              <ProgressBar
                completed={85}
                bgColor="#050519"
                baseBgColor="rgba(255, 255, 255, 0.6)"
                animateOnRender={true}
              />
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;
