import React from "react"
import Layout from "../components/Layout"
import * as styles from "../styles/home.module.css"
import { graphql, Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

export default function Home({ data }) {
  console.log(data)
  const { title, description } = data.site.siteMetadata

  return (
    <Layout>
      <section className={styles.header}>
        <div>
          <h2>{title}</h2>
          <h3>{description}</h3>
          <p>Phone: 086 7233400 | Email: kevinjohnkiely@gmail.com</p>
          <Link className={styles.btn} to="/projects">
            My Portfolio Projects
          </Link>
        </div>
        <StaticImage src="../images/me.jpg" className={styles.myPic} alt="Kevin Kiely Full Stack Web Developer" />
        
      </section>
    </Layout>
  )
}

export const query = graphql`
  query siteInfo {
    site {
      siteMetadata {
        description
        title
      }
    }
    file(relativePath: { eq: "me.jpg" }) {
      id
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
