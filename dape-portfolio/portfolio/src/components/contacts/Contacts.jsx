import "./Contacts.css";
import React, { useRef,useState } from "react";
import Modal from '@mui/material/Modal';
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { AiOutlineMail } from "react-icons/ai";
import { BsMessenger } from "react-icons/bs";
import { BiLogoUpwork } from "react-icons/bi";

const Contacts = () => {

  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_bkwr23n', 'template_rmu3aug', form.current, 'NCD-HMjr_lx67kLlb')
      .then((result) => {
          console.log(result.text);
          setIsModalOpen(true);
      }, (error) => {
          console.log(error.text);
      });

      e.target.reset()
  };

  const [isModalOpen, setIsModalOpen] = useState(false);
  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleModalClick = (e) => {
    e.stopPropagation();
  };

  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__cards">
          <a className="card__links" href="mailto:dabeventigan@gmail.com" target="_blank" rel="noreferrer">
          <motion.article
            whileHover={{ scale: 1.1 }}
            className="contact__option"
          >
            <AiOutlineMail />
            <h4>Email</h4>
            <h5>dabeventigan@gmail.com</h5>
            <p>Send Message</p>
          </motion.article>
          </a>
          <a className="card__links" href="https://m.me/trashdape" target="_blank" rel="noreferrer">
          <motion.article
            whileHover={{ scale: 1.1 }}
            className="contact__option"
          >
            <BsMessenger />
            <h4>Messenger</h4>
            <h5>Dabe Ventigan</h5>
            <p>Send Message</p>
          </motion.article>
          </a>

          <a className="card__links" href="https://www.upwork.com/freelancers/~01f3724bc8e10cfa1b?viewMode=1" target="_blank" rel="noreferrer">
          <motion.article
            whileHover={{ scale: 1.1 }}
            className="contact__option"
          >
            <BiLogoUpwork />
            <h4>Upwork</h4>
            <h5>Dabe V.</h5>
            <p>Visit Profile</p>
          </motion.article>
          </a>
        </div>

        <div className="message__container">
          <form className="contact__message" ref={form} onSubmit={sendEmail}>
            <input
              type="text"
              name="name"
              placeholder="Your Full Name"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
            />
            <textarea
              name="message"
              rows="7"
              placeholder="Your Message"
              required
            ></textarea>
            <button type="submit" className="btn btn-primary">
              Send Message
            </button>
          </form>
        </div>

        
        <Modal className="modal__container" open={isModalOpen} onClose={closeModal}>
          <div className="modal__content" onClick={handleModalClick}>
            <span className="modal__close" onClick={closeModal}>
              &times;
            </span>
            <h4>Your message have been sent!</h4>
            <p>I will reply to you using the email you've provided. Thank you!😸</p>
            <button className="btn btn-primary" onClick={closeModal}>OK</button>
          </div>
        </Modal>
    

      </div>
    </section>
  );
};

export default Contacts
