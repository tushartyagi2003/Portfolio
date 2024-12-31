import React, { useState } from "react";
import styles from "./Navbar.module.css";
// import {getImageUrl} from '../../utils'

import about from "../../../assets/about/aboutImage.png"
// change are above and 49 

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <nav className={styles.navbar}>
        <a className={styles.title} href="/">
          Portfolio
        </a>

        <div className={styles.menu}>
          <img
            className={styles.menuBtn}
            src={
              menuOpen
                ? "/assets/nav/closeIcon.png"
                : "/assets/nav/menuIcon.png"
            }
            alt="menuIcon"
            onClick={() => setMenuOpen(!menuOpen)}
          />

          <ul
            className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`}
            onClick={() => setMenuOpen(false)}
          >
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#experience">Experience</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>

        <img src={about} alt="" />

      </nav>
    </>
  );
};

export default Navbar;
