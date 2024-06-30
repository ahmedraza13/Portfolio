import React, { useEffect } from "react";
import styles from "./aboutsection.module.css";
import MyPic from "../Images/pic1.jpg";
import Aos from "aos";

const AboutSection = () => {
  useEffect(() => {
    Aos.init();
  });
  return (
    <div className={styles.mainBox}>
      <section className={styles.aboutPic}>
        <img src={MyPic} alt="" />
      </section>
      <section
        className={styles.aboutme}
        data-aos="fade-left"
        data-aos-duration="2000"
      >
        <h5>About Me</h5>
        <h1>HELLO WORLD</h1>
        <p>
          Hello, my name is Ahmed Raza, and I'm a front end developer. I specialize in creating user-friendly websites through coding, which includes HTML, CSS, and JavaScript. I'm passionate about web design and development, and I'm constantly looking for ways to improve my skills and knowledge.
        </p>
      </section>
    </div>
  );
};

export default AboutSection;
