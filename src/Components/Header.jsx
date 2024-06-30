import React, { useEffect } from "react";
import { Navbar } from "./Navbar";
import styles from "./header.module.css";
import MyPic from "../Images/pic1.jpg";
import { FaFacebook, FaWhatsapp } from "react-icons/fa";
import { BsLinkedin, BsGithub, BsGoogle } from "react-icons/bs";
import AOS from "aos";
import "aos/dist/aos.css";
const Header = () => {
  useEffect(() => {
    AOS.init();
  });
  return (
    <div className={styles.headerMainBox}>
      {/* <Navbar /> */}
      <section className={styles.headerCOntent}>
        <div className={styles.intro}>
          <h3 data-aos="fade-up" data-aos-duration="2000">
            HI There !
          </h3>
          <h1 data-aos="fade-down" data-aos-duration="3000">
            I AM AHMED RAZA
          </h1>
          <h3 data-aos="fade-up" data-aos-duration="2000">
            FRONT END DEVELOPER
          </h3>

          <div className={styles.socialIcon}>
         
            <li>
            <a href="https://wa.me/+923142322336" target="_blank" id="whatsapp-icon">
              <FaWhatsapp size={28} />
              </a>
            </li>
            <li>
              <a href="https://github.com/ahmedraza13" target="_blank">
              <BsGithub size={28}  />
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/ahmedraza13" target="_blank">
              <BsLinkedin size={28}  />
              </a>
            </li>
            <li>
              <a href="mailto:ahmedfaisalakhawala@gmail.com">
              <BsGoogle size={28} />
              </a>
            </li>
          </div>
          <button>SEE MY WORK</button>
        </div>
        <div className={styles.picture}>
          <img data-aos="fade-down" data-aos-duration="2000" src={MyPic} />
        </div>
      </section>
    </div>
  );
};

export default Header;
