import React from "react"
import Layout from "../components/Layout"
import { graphql, Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import * as styles from "../styles/project-details.module.css"

const ProjectDetails = ({ data }) => {
  const { html } = data.markdownRemark
  const { title, stack, featuredImg, link, github } = data.markdownRemark.frontmatter
  return (
    <Layout>
      <div className={styles.details}>
        <h2>{title}</h2>
        <div className={styles.featured}>
          <GatsbyImage
            image={getImage(
                featuredImg
            )}
            alt=''
          />
        </div>
        <h3>{stack}</h3>
        <p>Live link: <Link to={link} target="_blank">{link}</Link></p>
        <div
          className={styles.html}
          dangerouslySetInnerHTML={{ __html: html }}
        />
        <p>Github repo: <Link to={github} target="_blank">{github}</Link></p>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query ProjectsPage($slug: String) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        stack
        title
        link
        github
        featuredImg {
            childImageSharp {
                gatsbyImageData(
                    layout: FULL_WIDTH
                    placeholder: BLURRED
                    formats: [AUTO, WEBP]
                )
            }
            }
      }
    }
  }
`

export default ProjectDetails
