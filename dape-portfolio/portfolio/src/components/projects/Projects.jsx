import React, { useEffect } from "react";
import "./Projects.css";

import ReactProjectImg from "../../assets/merndesktop.png";
import FlutterProjectImg from "../../assets/flutterphone.png";
import UIUXProjectImg from "../../assets/uiuxdesktop.png";
import BeeHubImg from "../../assets/beehub.png";

import AOS from "aos";
import "aos/dist/aos.css";

const Projects = () => {
  useEffect(() => {
    AOS.init({ duration: 3000 });
  }, []);

  return (
    <section id="Projects">
      <h5>Things I have worked on</h5>
      <h2>Projects</h2>

      <div className="container projects__container">
        <div className="projects__card">
          <div className="card">
            <div
              className="img__container"
              data-aos="fade-right"
              data-aos-duration="3000"
              data-aos-delay="100"
              data-aos-once="true"
            >
              <img src={BeeHubImg} alt="" />
            </div>
            <div
              className="card__desc"
              data-aos="fade-left"
              data-aos-duration="3000"
              data-aos-delay="100"
              data-aos-once="true"
            >
              <h2>BeeHub Virtual Assistant Co.</h2>
              <p>
                Developed and Deployed a Fully Designed Fullstack Web
                Application using React, Express, Node, and MongoDB for a
                PH-based client.
              </p>
              <a href="https://beehubvas.com/" target="_blank" rel="noreferrer">
                <button className="btn btn-primary">Visit BeeHub</button>
              </a>
            </div>
          </div>

          <div className="card">
            <div
              className="card__desc"
              data-aos="fade-right"
              data-aos-duration="3000"
              data-aos-delay="100"
              data-aos-once="true"
            >
              <h2>Rimorin Dental Clinic Website</h2>
              <p>
                Together with my SLU Thesis groupmates, we designed and
                developed Rimorin using React, Express, Node, and MongoDB. It is
                an Appointment System Website that aims to make dental
                appointments, manage dental paperwork, and access Dental user
                history effortlessly.
              </p>
            </div>

            <div
              className="img__container"
              data-aos="fade-left"
              data-aos-duration="3000"
              data-aos-delay="100"
              data-aos-once="true"
            >
              <img src={ReactProjectImg} alt="" />
            </div>
          </div>

          <div className="card__mobile">
            <div
              className="img__container"
              data-aos="fade-left"
              data-aos-duration="3000"
              data-aos-delay="100"
              data-aos-once="true"
            >
              <img src={BeeHubImg} alt="" />
            </div>

            <div
              className="card__desc"
              data-aos="fade-right"
              data-aos-duration="3000"
              data-aos-delay="100"
              data-aos-once="true"
            >
              <h2>BeeHub Virtual Assistant Co.</h2>
              <p>
                Developed and Deployed a Fully Designed Fullstack Web
                Application using React, Express, Node, and MongoDB for a
                PH-based client.
              </p>
              <a href="https://beehubvas.com/" target="_blank" rel="noreferrer">
                <button className="btn btn-primary">Visit BeeHub</button>
              </a>
            </div>
          </div>

          <div className="card__mobile">
            <div
              className="img__container"
              data-aos="fade-left"
              data-aos-duration="3000"
              data-aos-delay="100"
              data-aos-once="true"
            >
              <img src={ReactProjectImg} alt="" />
            </div>

            <div
              className="card__desc"
              data-aos="fade-right"
              data-aos-duration="3000"
              data-aos-delay="100"
              data-aos-once="true"
            >
              <h2>Rimorin Dental Clinic Website</h2>
              <p>
                Together with my SLU Thesis groupmates, we designed and
                developed Rimorin using React, Express, Node, and MongoDB. It is
                an Appointment System Website that aims to make dental
                appointments, manage dental paperwork, and access Dental user
                history effortlessly.
              </p>
            </div>
          </div>

          <div className="card__2">
            <div
              className="img__container"
              data-aos="fade-right"
              data-aos-duration="3000"
              data-aos-delay="100"
              data-aos-once="true"
            >
              <img src={FlutterProjectImg} alt="" />
            </div>

            <div
              className="card__desc"
              data-aos="fade-left"
              data-aos-duration="3000"
              data-aos-delay="100"
              data-aos-once="true"
            >
              <h2>FFUFM Flutter Bootcamp Mobile Apps</h2>
              <p>
                In FFUFM Flutter Bootcamp, we developed 4-8 Mobile Applications
                with different unique features to practice coding with Flutter
                and Dart. It consist of state management, right use of
                components, API handling, and flutter animations.
              </p>
            </div>
          </div>

          <div className="card">
            <div
              className="card__desc"
              data-aos="fade-right"
              data-aos-duration="3000"
              data-aos-delay="100"
              data-aos-once="true"
            >
              <h2>Figma/Adobe XD Designs</h2>
              <p>
                I have designed sleek UX and UI for school projects and my
                clients when doing freelance work. I ensure that the content's
                designs are trendy, modern, and user-friendly. I also utilized
                my graphic designing skills to design content and match the
                client's requirements to satisfy my clients and users when using
                the website. I also learned where to place widgets appropriately
                to make the website manageable for the users.
              </p>
            </div>
            <div
              className="img__container"
              data-aos="fade-left"
              data-aos-duration="3000"
              data-aos-delay="100"
              data-aos-once="true"
            >
              <img src={UIUXProjectImg} alt="" />
            </div>
          </div>

          <div className="card__mobile">
            <div
              className="img__container"
              data-aos="fade-left"
              data-aos-duration="3000"
              data-aos-delay="100"
              data-aos-once="true"
            >
              <img src={UIUXProjectImg} alt="" />
            </div>
            <div
              className="card__desc"
              data-aos="fade-right"
              data-aos-duration="3000"
              data-aos-delay="100"
              data-aos-once="true"
            >
              <h2>Figma/Adobe XD Designs</h2>
              <p>
                I have designed sleek UX and UI for school projects and my
                clients when doing freelance work. I ensure that the content's
                designs are trendy, modern, and user-friendly. I also utilized
                my graphic designing skills to design content and match the
                client's requirements to satisfy my clients and users when using
                the website. I also learned where to place widgets appropriately
                to make the website manageable for the users.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
