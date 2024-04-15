import React, { useRef } from "react";
import "./contact.css";
import face from "../../assets/facebook-icon.png";
import ig from "../../assets/instagram.png";
import twitter from "../../assets/twitter.png";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", form.current, {
        publicKey: "YOUR_PUBLIC_KEY",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };
  return (
    <section id="contactPage">
      <div id="contact">
        <h1 className="contactPageTitle">Contact Us</h1>
        <span className="contactDesc">
          Please fill out the form below to reach us for any questions.
        </span>
        <form className="contactForm" ref={form} onSubmit={sendEmail}>
          <input type="text" className="name" placeholder="Your Name" />
          <input type="text" className="email" placeholder="Your Email" />
          <textarea
            className="msg"
            name="message"
            rows="5"
            placeholder="Your Message"
          ></textarea>
          <button type="submit" value="Send" className="submitBtn">
            Send
          </button>
          <div className="links">
            <img src={twitter} alt="Twitter" className="link" />
            <img src={ig} alt="Instagram" className="link" />
            <img src={face} alt="Facebbok" className="link" />
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
