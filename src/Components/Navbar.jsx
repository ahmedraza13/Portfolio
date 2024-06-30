import React, { useEffect, useState } from "react";
import styles from "./Navbar.module.css";
export const Navbar = () => {
  const [bgColor, setbgColor] = useState("none");
  window.addEventListener("scroll", () => {
    if (Math.floor(window.scrollY) > 10) {
      setbgColor("#89715b");
    } else if (Math.floor(window.scrollY) < 10) {
      setbgColor("transparent");
    }
  });

  return (
    <div style={{ backgroundColor: bgColor }} className={styles.navbarBox}>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Portfolio</li>
        <li>Resume</li>
        <li>Contact</li>
      </ul>
    </div>
  );
};
