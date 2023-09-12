import React from "react";
import { motion } from "framer-motion";
import { useState } from "react";
import { BiDownArrow } from "react-icons/bi";
import "./Work.css";

const Work = () => {
  const workData = [
    {
      title: "Flutter Developer | Feil, Feil, & Feil Manila",
      desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia, accusamus!",
    },
    {
      title: "UI/UX Designer | Freelance",
      desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia, accusamus!",
    },
  ];

  const [isSelected, setIsSelected] = useState();

  const toggleCard = (i) => {
    if (isSelected == i){
      return setIsSelected();
    }

    setIsSelected(i)
  }

  return (
    <section id="Work">
      <h5>What has Dape been up to?</h5>
      <h2>Work History</h2>

      <div className="container work__container">
        <div className="work__text">
          <h5>
            These are the companies that helped in my professional growth.
          </h5>
          <h5>
            Through these, I acquired valuable experiences, skills, and
            knowledge in the career I am pursuing.
          </h5>
        </div>

        <div className="work__cards">
          <div className="work__accordion">
            {workData.map((item, i) => (
              <motion.div
                className="work__content"
                onClick={() => toggleCard(i)}
                whileHover={{ scale: 1.02 }}
              >
                <div className="work__title">
                  <h2>{item.title}</h2>
                  <BiDownArrow className="arrowdown"/>
                </div>

                <div className={isSelected == i ? "work__description show" : "work__description"}>{item.desc}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Work;
