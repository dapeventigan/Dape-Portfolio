import React from "react";
import { motion } from "framer-motion";
import { useState } from "react";
import { BiDownArrow } from "react-icons/bi";
import "./Experiences.css";
import "aos/dist/aos.css";

const Experiences = () => {
  const workData = [
    {
      title: "BeeHub Virtual Assistant Co. | BeeHub",
      desc: "I've developed BeeHub's Website using MERN stack. My new experiences here is I'm exposed to handling CORS, cookies (first-party and third-party), using APIs, Nodemailer, Multer, Google Oauth2, handling forms, database management, IO.socket, HTML Emails, Parallax Frontend Effect, managing user roles (admin and client roles), domains and subdomains, deploying a full stack MERN application on Render and setting up CNAME and Alias for a custom domain.",
    },
    {
      title: "Flutter Developer | Feil, Feil, & Feil Manila",
      desc: "I was a Flutter Developer Intern at FFUF Manila. Before being exposed to big projects, I first took the bootcamp by FFUFM on developing Mobile applications using Dart and Flutter. After completing the bootcamp, I was assigned to an on-going project named 'Markilux' and contributed to making UIs responsive.",
    },
    {
      title: "UI/UX Designer | Freelance",
      desc: "Using Figma, I designed a UI and UX landing page for an upcoming Virtual Assistant Company and Online Jobs Company. It is composed of modern web design and minimal motion animation.",
    },
    {
      title: "MERN Fullstack Developer | Saint Louis University",
      desc: "This was our Thesis Project, and it is an Appointment System Website for a Dentist Clinic. We developed the website using MERN (MongoDB, Express, React, and Node). My role in this project focuses mainly on the back-end development. Making sure that the data passed from the server/database and the data inserted are accurate, checking if the server is running smoothly and the APIs are working well. On the front-end side, I focused on the data state changes, making sure that the website renders well and checking for viewport bugs.",
    },
    {
      title: "Graphic Designer | Freelance",
      desc: "I designed Small businesses, Web and Mobile, E-Sport Teams, and Personal logos for clients using Adobe Photoshop and some Adobe Illustrator.",
    },
    {
      title: "Video Editor | Upwork & OnlineJobPH",
      desc: "My clients send me raw video clips and edit them into TikTok/IG reels or YouTube videos for business purposes, gaming content, or advertisements. I use Adobe Premier, Adobe After Effects, Capcut PC, and Timebolt to edit videos.",
    },
  ];

  const [isSelected, setIsSelected] = useState();

  const toggleCard = (i) => {
    if (isSelected === i) {
      return setIsSelected();
    }

    setIsSelected(i);
  };

  return (
    <section id="experiences">
      <h5>Where did I use my skills?</h5>
      <h2>Experiences</h2>

      <div className="container work__container">
        <div
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="50"
          data-aos-once="false"
        >
          <div className="work__cards">
            <div className="work__accordion">
              {workData.map((item, i) => (
                <motion.div
                  key={item.title}
                  className="work__content"
                  onClick={() => toggleCard(i)}
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="work__title">
                    <h2>{item.title}</h2>
                    <BiDownArrow className="arrowdown" />
                  </div>

                  <div
                    className={
                      isSelected === i
                        ? "work__description show"
                        : "work__description"
                    }
                  >
                    {item.desc}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experiences;
