import React, { useEffect } from "react";
import styles from "./logoDiv.module.css";
import { SiMongodb, SiExpress, SiReact, SiNodedotjs } from "react-icons/si";
import AOS from "aos";
import "aos/dist/aos.css";

const LogoDiv = () => {
  useEffect(() => {
    AOS.init();
  });
  return (
    <div className={styles.logomainBox}>
      <ul data-aos="fade-left" data-aos-duration="1000">
        <li className={styles.mongo}>
          <SiMongodb />
        </li>
        <li className={styles.express}>
          <SiExpress />
        </li>
        <li className={styles.react}>
          <SiReact />
        </li>
        <li className={styles.nodejs}>
          <SiNodedotjs />
        </li>
      </ul>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </div>
  );
};

export default LogoDiv;
