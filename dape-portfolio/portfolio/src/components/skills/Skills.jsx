import React, { useEffect } from "react";
import "./Skills.css";
import ProgressBar from "@ramonak/react-progress-bar";
import { useInView } from "react-intersection-observer";

import AOS from "aos";
import "aos/dist/aos.css";

function Skills() {
  
  const { ref, inView } = useInView({
    triggerOnce: true,
  });

  useEffect(() => {
    AOS.init({ duration: 3000 });
  }, []);


  return (
    <section id="experience">
      <h5>Skills that I have</h5>
      <h2>Skills</h2>

      <div className="container experience__container" ref={ref}>
        <div className="experience__webdev" 
              data-aos="fade-right"
              data-aos-duration="500"
              data-aos-once="true">
          <h3>Web and Mobile Development</h3>
          <div className="experience__content">
            {skillsData.map((item, i) => (
              <article
                item={item}
                key={item.title}
                className="experience__details"
              >
                <h4>{item.title}</h4>
                <div>{inView ? 
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

        <div className="experience__media"
              data-aos="fade-left"
              data-aos-duration="500"
              data-aos-once="true">
          <h3>Image, Video, and Music Production</h3>
          <div className="experience__content" ref={ref}>
            {skillsMedData.map((item2, i2) => (
              <article
                item2={item2}
                key={item2.title}
                className="experience__details"
              >
                <h4>{item2.title}</h4>
                <div>{inView ? 
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
    percent: 60,
  },
  {
    title: "Python",
    percent: 60,
  },
  {
    title: "HTML",
    percent: 85,
  },
  {
    title: "CSS",
    percent: 80,
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
    percent: 75,
  },
  {
    title: "NodeJS",
    percent: 75,
  },
  {
    title: "MongoDB",
    percent: 80,
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
    percent: 80,
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
