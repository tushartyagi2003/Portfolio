import React from 'react'
import styles from './About.module.css'

const About = () => {
  return (
    <>

    <section className={styles.container}>
        <h1 className={styles.title}>About</h1>

        <div className={styles.content}>
            <div className={styles.imageContainer}>
                <h3>B.tech in Information Technology</h3>
                <p>2021-2025</p>
                <p>Kiet group of Institutions Ghaziabad</p>
            </div>
            <div className={styles.imageContainer}>
                <h3>12th</h3>
                <p>2020-2021</p>
                <p>Dr. K.N Modi Global School Modinagar Ghaziabad</p>
            </div>
            <div className={styles.imageContainer}>
                <h3>10th</h3>
                <p>2018-2019</p>
                <p>Dr. K.N Modi Global School Modinagar Ghaziabad</p>
            </div>
            
        </div>
    </section>



    </>
  )
}

export default About