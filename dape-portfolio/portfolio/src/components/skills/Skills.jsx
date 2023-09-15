import React from "react";
import "./Skills.css";
import ProgressBar from "@ramonak/react-progress-bar";
import { useInView } from "react-intersection-observer";

function Skills() {
  const { ref, inView } = useInView({
    triggerOnce: true,
  });

  return (
    <section id="experience">
      <h5>Skills that I have</h5>
      <h2>Skills</h2>

      <div className="container experience__container">
        <div className="experience__webdev">
          <h3>Web and Mobile Development</h3>
          <div className="experience__content">
            {skillsData.map((item, i) => (
              <article
                item={item}
                key={item.title}
                className="experience__details"
              >
                <h4>{item.title}</h4>
                <div ref={ref}>{inView ? 
                <ProgressBar
                  completed={item.percent}
                  bgColor="#050519"
                  baseBgColor="rgba(255, 255, 255, 0.6)"
                  animateOnRender={true}
                />
                : null}</div>
              </article>
            ))}
          </div>
        </div>

        <div className="experience__media">
          <h3>Image, Video, and Music Production</h3>
          <div className="experience__content">
            {skillsMedData.map((item2, i2) => (
              <article
                item2={item2}
                key={item2.title}
                className="experience__details"
              >
                <h4>{item2.title}</h4>
                <div ref={ref}>{inView ? 
                <ProgressBar
                  completed={item2.percent}
                  bgColor="#050519"
                  baseBgColor="rgba(255, 255, 255, 0.6)"
                  animateOnRender={true}
                />
                : null}</div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

const skillsData = [
  {
    title: "Java",
    percent: 70,
  },
  {
    title: "HTML",
    percent: 85,
  },
  {
    title: "CSS",
    percent: 70,
  },
  {
    title: "Javascript",
    percent: 70,
  },
  {
    title: "React",
    percent: 85,
  },
  {
    title: "ExpressJS",
    percent: 65,
  },
  {
    title: "NodeJS",
    percent: 65,
  },
  {
    title: "MongoDB",
    percent: 70,
  },
  {
    title: "Flutter",
    percent: 80,
  },
  {
    title: "Dart",
    percent: 65,
  },
  {
    title: "Figma and Adobe XD",
    percent: 75,
  },
];

const skillsMedData = [
  {
    title: "Adobe Photoshop",
    percent: 75,
  },
  {
    title: "Adobe Premier",
    percent: 65,
  },
  {
    title: "Adobe After Effects",
    percent: 50,
  },
  {
    title: "Blender",
    percent: 45,
  },
  {
    title: "FL Studio",
    percent: 85,
  },
];

export default Skills;
