import React, { useEffect } from "react";
import "./Projects.css";

import ReactProjectImg from "../../assets/merndesktop.png";
import FlutterProjectImg from "../../assets/flutterphone.png";
import UIUXProjectImg from "../../assets/uiuxdesktop.png";
import BeeHubImg from "../../assets/beehub.png";
import SportTXTImg from "../../assets/sportTXT.png";
import SmiskiImg from "../../assets/smiski.png";
import KellywoodImg from "../../assets/kellywood.png";

import AOS from "aos";
import "aos/dist/aos.css";

const Projects = () => {
  useEffect(() => {
    AOS.init({ duration: 3000 });
  }, []);

  return (
    <section id="projects">
      <h5>Things I have worked on</h5>
      <h2>Projects</h2>

      <div className="container projects__container">
        <div className="projects__card">
          <div className="card">
            <div
              className="card__desc"
              data-aos="fade-right"
              data-aos-duration="3000"
              data-aos-delay="100"
              data-aos-once="true"
            >
              <h2>Kellywood Builder Landing Page</h2>
              <p>
                This website I developed was a technical exam for
                TechnoDream Web Designs. The website's UI and UX was designed by
                Dallas Marketing Company Red Spot Design and developed by me
                using ReactJS.
              </p>
              <div className="project__buttons">
                <a
                  href="https://dapeventigan.github.io/dape-technodream/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button className="btn btn-primary">Live Demo</button>
                </a>

                <a
                  href="https://github.com/dapeventigan/dape-technodream"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button className="btn btn-primary">Github Repo</button>
                </a>
              </div>
            </div>

            <div
              className="img__container"
              data-aos="fade-left"
              data-aos-duration="3000"
              data-aos-delay="100"
              data-aos-once="true"
            >
              <img src={KellywoodImg} alt="" />
            </div>
          </div>

          <div className="card__mobile">
            <div
              className="img__container"
              data-aos="fade"
              data-aos-duration="3000"
              data-aos-delay="100"
              data-aos-once="true"
            >
              <img src={KellywoodImg} alt="" />
            </div>

            <div
              className="card__desc"
              data-aos="fade"
              data-aos-duration="3000"
              data-aos-delay="100"
              data-aos-once="true"
            >
              <h2>Kellywood Builder Landing Page</h2>
              <p>
                This website I developed was a technical exam for
                TechnoDream Web Designs. The website's UI and UX was designed by
                Dallas Marketing Company Red Spot Design and developed by me
                using ReactJS.
              </p>
              <div className="project__buttons">
                <a
                  href="https://dapeventigan.github.io/dape-technodream/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button className="btn btn-primary">Live Demo</button>
                </a>

                <a
                  href="https://github.com/dapeventigan/dape-technodream"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button className="btn btn-primary">Github Repo</button>
                </a>
              </div>
            </div>
          </div>

          <div className="card">
            <div
              className="img__container"
              data-aos="fade-right"
              data-aos-duration="3000"
              data-aos-delay="100"
              data-aos-once="true"
            >
              <img src={SportTXTImg} alt="" />
            </div>
            <div
              className="card__desc"
              data-aos="fade-left"
              data-aos-duration="3000"
              data-aos-delay="100"
              data-aos-once="true"
            >
              <h2>SportTXT Home Page</h2>
              <p>
                This website I developed was a technical exam for New Media
                Services which is an evaluation for Web Designer Role. I've
                designed the UI of the website, developed a 3D Hero Header using
                Spline3D, and coded the rest of the website using ReactJS.
              </p>
              <div className="project__buttons">
                <a
                  href="https://dapeventigan.github.io/dape-sportsTXT-nms/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button className="btn btn-primary">Live Demo</button>
                </a>

                <a
                  href="https://www.figma.com/file/aiGqe1ylzbZecpSqeveUOe/dape-SportsTXT-NMS?type=design&node-id=0%3A1&mode=design&t=VHyJOT11Jf0cXe06-1"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button className="btn btn-primary">Figma file</button>
                </a>

                <a
                  href="https://github.com/dapeventigan/dape-sportsTXT-nms"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button className="btn btn-primary">Github Repo</button>
                </a>
              </div>
            </div>
          </div>

          <div className="card__mobile">
            <div
              className="img__container"
              data-aos="fade"
              data-aos-duration="3000"
              data-aos-delay="100"
              data-aos-once="true"
            >
              <img src={SportTXTImg} alt="" />
            </div>

            <div
              className="card__desc"
              data-aos="fade"
              data-aos-duration="3000"
              data-aos-delay="100"
              data-aos-once="true"
            >
              <h2>SportTXT Home Page</h2>
              <p>
                This website I developed was a technical exam for New Media
                Services which is an evaluation for Web Designer Role. I've
                designed the UI of the website, developed a 3D Hero Header using
                Spline3D, and coded the rest of the website using ReactJS.
              </p>
              <div className="project__buttons">
                <a
                  href="https://dapeventigan.github.io/dape-sportsTXT-nms/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button className="btn btn-primary">Live Demo</button>
                </a>

                <a
                  href="https://www.figma.com/file/aiGqe1ylzbZecpSqeveUOe/dape-SportsTXT-NMS?type=design&node-id=0%3A1&mode=design&t=VHyJOT11Jf0cXe06-1"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button className="btn btn-primary">Figma file</button>
                </a>

                <a
                  href="https://github.com/dapeventigan/dape-sportsTXT-nms"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button className="btn btn-primary">Github Repo</button>
                </a>
              </div>
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
              <h2>【UNOFFICIAL SITE】SMISKI by dape</h2>
              <p>
                Self taught how to make 3D models in Blender, imported the model
                to Spline3D, and implemented the final animated 3D model to
                ReactJS. This is my first 3D modeled website and used SMISKI as
                an inspiration for the Website Design.
              </p>
              <div className="project__buttons">
                <a
                  href="https://dapeventigan.github.io/dape-smiski-3dweb/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button className="btn btn-primary">Live Demo</button>
                </a>

                <a
                  href="https://github.com/dapeventigan/dape-smiski-3dweb"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button className="btn btn-primary">Github Repo</button>
                </a>
              </div>
            </div>

            <div
              className="img__container"
              data-aos="fade-left"
              data-aos-duration="3000"
              data-aos-delay="100"
              data-aos-once="true"
            >
              <img src={SmiskiImg} alt="" />
            </div>
          </div>

          <div className="card__mobile">
            <div
              className="img__container"
              data-aos="fade"
              data-aos-duration="3000"
              data-aos-delay="100"
              data-aos-once="true"
            >
              <img src={SmiskiImg} alt="" />
            </div>

            <div
              className="card__desc"
              data-aos="fade"
              data-aos-duration="3000"
              data-aos-delay="100"
              data-aos-once="true"
            >
              <h2>【UNOFFICIAL SITE】SMISKI by dape</h2>
              <p>
                Self taught how to make 3D models in Blender, imported the model
                to Spline3D, and implemented the final animated 3D model to
                ReactJS. This is my first 3D modeled website and used SMISKI as
                an inspiration for the Website Design.
              </p>
              <div className="project__buttons">
                <a
                  href="https://dapeventigan.github.io/dape-smiski-3dweb/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button className="btn btn-primary">Live Demo</button>
                </a>

                <a
                  href="https://github.com/dapeventigan/dape-smiski-3dweb"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button className="btn btn-primary">Github Repo</button>
                </a>
              </div>
            </div>
          </div>

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
                Developed a Fully Designed Fullstack Web Application using
                React, Express, Node, and MongoDB. Deployed through Render and
                due to onrender.com being a public suffix, I will not be able to
                demo the website with a backend unless I host it with a personal
                domain. Thank you for understanding.
              </p>
              <div className="project__buttons">
                <a
                  href="https://dape-beehub-v2.onrender.com/landing-page"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button className="btn btn-primary">Live Demo</button>
                </a>

                <a
                  href="https://github.com/dapeventigan/beehub-va-v1"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button className="btn btn-primary">
                    Frontend Github Repo
                  </button>
                </a>

                <a
                  href="https://github.com/dapeventigan/beehub-va-api-v1"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button className="btn btn-primary">
                    Backend Github Repo
                  </button>
                </a>
              </div>
            </div>
          </div>

          <div className="card__mobile">
            <div
              className="img__container"
              data-aos="fade"
              data-aos-duration="3000"
              data-aos-delay="100"
              data-aos-once="true"
            >
              <img src={BeeHubImg} alt="" />
            </div>

            <div
              className="card__desc"
              data-aos="fade"
              data-aos-duration="3000"
              data-aos-delay="100"
              data-aos-once="true"
            >
              <h2>BeeHub Virtual Assistant Co.</h2>
              <p>
                Developed a Fully Designed Fullstack Web Application using
                React, Express, Node, and MongoDB. Deployed through Render and
                due to onrender.com being a public suffix, I will not be able to
                demo the website with a backend unless I host it with a personal
                domain. Thank you for understanding.
              </p>
              <div className="project__buttons">
                <a
                  href="https://dape-beehub-v2.onrender.com/landing-page"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button className="btn btn-primary">Live Demo</button>
                </a>

                <a
                  href="https://github.com/dapeventigan/beehub-va-v1"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button className="btn btn-primary">
                    Frontend Github Repo
                  </button>
                </a>

                <a
                  href="https://github.com/dapeventigan/beehub-va-api-v1"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button className="btn btn-primary">
                    Backend Github Repo
                  </button>
                </a>
              </div>
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
              data-aos="fade"
              data-aos-duration="3000"
              data-aos-delay="100"
              data-aos-once="true"
            >
              <img src={ReactProjectImg} alt="" />
            </div>

            <div
              className="card__desc"
              data-aos="fade"
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

          <div className="card">
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

          <div className="card__mobile">
            <div
              className="img__container"
              data-aos="fade"
              data-aos-duration="3000"
              data-aos-delay="100"
              data-aos-once="true"
            >
              <img src={FlutterProjectImg} alt="" />
            </div>

            <div
              className="card__desc"
              data-aos="fade"
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
              data-aos="fade"
              data-aos-duration="3000"
              data-aos-delay="100"
              data-aos-once="true"
            >
              <img src={UIUXProjectImg} alt="" />
            </div>
            <div
              className="card__desc"
              data-aos="fade"
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
