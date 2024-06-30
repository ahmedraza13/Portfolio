import React, { useEffect } from "react";
import styles from "./ContactForm.module.css";
import Pic1 from "../Images/contact1.jpg";
import AOS from "aos";
const ContactForm = () => {
  useEffect(() => {
    AOS.init();
  });
  return (
    <div className={styles.mainBox} data-aos="fade-up">
      <section className={styles.contactPic}>
        <img src={Pic1} alt="" />
      </section>
      <section className={styles.contactForm}>
        <div className={styles.formBox}>
          <section className={styles.formTop}>
            <h2>ahmedfaisalakhawala@gmail.com</h2>
            <h2>+92314-2322336</h2>
          </section>
          <section className={styles.formBottom}>
            <div>
              <input type="text" placeholder="Enter your name..." />
              <input type="email" placeholder="Enter your email..." />
            </div>
            <div>
              <input type="text" placeholder="Subject (optional)" />
            </div>
            <div>
              <textarea
                name=""
                id=""
                cols="30"
                rows="5"
                placeholder="Here goes your message"
              ></textarea>
            </div>
            <button>Send Message</button>
          </section>
        </div>
      </section>
    </div>
  );
};

export default ContactForm;
