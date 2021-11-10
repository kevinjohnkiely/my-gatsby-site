import React from "react"
import Layout from "../components/Layout"
import * as styles from "../styles/about.module.css"
import { StaticImage } from "gatsby-plugin-image"
import html from '../images/webskills/html.jpg'
import css from '../images/webskills/css.jpg'
import js from '../images/webskills/js.png'
import react from '../images/webskills/react.png'
import bootstrap from '../images/webskills/bootstrap.png'
import gatsby from '../images/webskills/gatsby.png'

const About = () => {
  return (
    <Layout>
      <div className={styles.about}>
        <div>
          <h1>About Me.</h1>
          <p>
            Hi, I'm Kevin. I am a full-stack web developer based in County
            Limerick, IRELAND, looking for opportunities in the I.T sector.
          </p>
          <p>
            I have over a decades experience designing websites with Wordpress templates, but in
            recent years I have acquired more skills in full stack web development, using JavaScript
            front-end frameworks such as React.js. I have some experience in the MERN development stack,
            as shown in one of my portfolio projects. I am eager to now become part of a development
            team which designs, develops and deploys modern web applications.
          </p>
          <p>Please have a look at my portfolio section for my recent projects, and get in touch by calling 086-7233400
            or email to kevinjohnkiely@gmail.com
          </p>
        </div>
        <div><StaticImage src='../images/laptop.jpg' className={styles.aboutImage} /></div>
      </div>
      <section className={styles.skills}>
        <h2>
            Some of my skills are:
        </h2>
        <div className={styles.flex}>
            <div className={styles.card}>
                <h4>HTML</h4>
                <img src={html} alt="HTML"/>
            </div>
            <div className={styles.card}>
                <h4>CSS</h4>
                <img src={css} alt="CSS"/>
              </div>
              <div className={styles.card}>
                <h4>JavaScript</h4>
                <img src={js} alt="JavaScript"/>
              </div>
              <div className={styles.card}>
                <h4>React.js</h4>
                <img src={react} alt="React"/>
              </div>
              <div className={styles.card}>
                <h4>Bootstrap</h4>
                <img src={bootstrap} alt="Bootstrap"/>
              </div>
              <div className={styles.card}>
                <h4>Gatsby JS</h4>
                <img src={gatsby} alt="Gatsby.js"/>
              </div>           
        </div>
    </section>
    </Layout>
  )
}

export default About
