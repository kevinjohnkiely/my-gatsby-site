import React from "react"
import { Link } from "gatsby"
import logo from '../images/logo.png'

const Navbar = () => {

  return (
    <nav>
      <div className="logo">
         <Link to="/"><img src={logo} alt="Kevin Kiely Web Developer, Logo" /></Link>
      </div>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/about">About Me</Link>
        <Link to="/projects">Portfolio Projects</Link>
        <Link to="https://github.com/kevinjohnkiely">Github</Link>
      </div>
    </nav>
  )
}

export default Navbar
