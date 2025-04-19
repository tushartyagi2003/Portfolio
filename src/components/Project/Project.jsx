import React from "react";
import styles from "./Project.module.css";

const Project = () => {
  return (
    <>
      <section className={styles.container}>
        <h1 className={styles.title}>Projects</h1>

        <div className={styles.content}>
          
            <div className={styles.card}>
              <img
                className={styles.img}
                src="/assets/hero/download.jpeg"
                alt=""
              />
              <div className={styles.text}>
                
                <p>
                  Project description goes here. Lorem ipsum dolor, sit amet
                  consectetur adipisicing elit. Velit aliquam fugiat iure ea
                  aperiam consectetur consequatur quo dolor nulla alias?
                </p>
                <div className={styles.tech}>
                  <p>Node</p>
                  <p>javascript</p>
                  <p>React</p>
                </div>
                <div className={styles.btns}>
                  <button className={styles.btn}>Github</button>
                  <button className={styles.btn}>Live</button>
                </div>
              </div>
            </div>
          

          
            <div className={styles.card}>
              <img
                className={styles.img}
                src="/assets/hero/download.jpeg"
                alt=""
              />
              <div className={styles.text}>
                <p>
                  Project description goes here. Lorem ipsum dolor sit amet
                  consectetur adipisicing elit. Officiis nemo reiciendis qui
                  blanditiis. Tenetur magni aut architecto expedita id magnam.
                </p>
                <div className={styles.tech}>
                  <p>Node</p>
                  <p>javascript</p>
                  <p>React</p>
                </div>
                <div className={styles.btns}>
                  <button className={styles.btn}>Github</button>
                  <button className={styles.btn}>Live</button>
                </div>
              </div>
            </div>
          

          <div>
            <div className={styles.card}>
              <img
                className={styles.img}
                src="../assets/hero/download.jpeg"
                alt=""
              />
              <div className={styles.text}>
                <p>
                  Project description goes here. Lorem ipsum dolor, sit amet
                  consectetur adipisicing elit. Excepturi facilis dignissimos,
                  aut nulla sequi aliquid error fuga rerum aliquam assumenda?
                </p>
                <div className={styles.tech}>
                  <p>Node</p>
                  <p>javascript</p>
                  <p>React</p>
                </div>
                <div className={styles.btns}>
                  <button className={styles.btn}>Github</button>
                  <button className={styles.btn}>Live</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>



    </>
  );
};

export default Project;
