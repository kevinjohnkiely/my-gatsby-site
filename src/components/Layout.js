import React from "react"
import Navbar from "./Navbar"
import "../styles/global.css"
import logo from '../images/logo-half.png'

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <Navbar />
      <div className="content">{children}</div>
      <footer>
        <p>
          &copy;2021 | Kevin Kiely Web Developer | Made with{" "}
          <a href="https://www.gatsbyjs.com/" target="_blank" rel="noreferrer">
            Gatsby.js
          </a> | Hosted on <a href="https://www.netlify.com/">Netlify</a>
        </p>
        <div className="logoFooter"><img src={logo} alt='Kevin Kiely Web Developer Logo' /></div>
      </footer>
    </div>
  )
}

export default Layout
