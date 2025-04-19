import React from "react";
import styles from "./Hero.module.css";

const Hero = () => {
  return (
    <>
      <section className={styles.container}>
        <div  className={styles.content}>
          <h1  className={styles.title}>Hi, I'm Tushar </h1>
          <p  className={styles.description}>
           Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae quis ullam asperiores adipisci ex debitis distinctio ut commodi quos consectetur?
            Est!
          </p>

          <a href="mailto:tushartyagi4648@gmail.com" className={styles.contactBtn}>Contact Me</a>
        </div>

        <img src="/assets/hero/heroImage.png" alt=""   className={styles.heroImg} />
        <div className={styles.topBlur} />
        <div className={styles.bottomBlur} />
      </section>
    </>
  );
};

export default Hero;
