// import React
import * as React from "react"
import { Link } from 'gatsby'
import Layout from "../component/layout"
import { StaticImage } from "gatsby-plugin-image"
import PropTypes from "prop-types"


// Define the IndexPage fat arrow function component
const IndexPage = ({ }) => {
  
  return (
    <Layout pageTitle="Home Page">
      <title>Gatsby Project Home Page</title>
      <h2>Welcome to my Gatsby Project Home Page</h2> 
       
      <p>This project is made with Gatsby and ReactJS Tech Stack.</p>
      <p>The tools used in this web development project include VSCode and Git.</p>
      <StaticImage
      alt="Image showing gatsby-config.js and other files in VSCode"
      src="../images/vscodeconfig.png"
      width={300}
      quality={95}
      formats={["auto", "webp", "avif"]}
      style={{ marginBottom: `1.45rem` }}
      />
      <br />

        <Link to="/">Home</Link> <br />
        <Link to="/about">About</Link> <br />
        <Link to="/project">Projects</Link> <br />
        <Link to="/experience">Experience</Link> <br />
        <Link to="/skills">Skills</Link> <br />
        <Link to="/education">Education</Link> <br />
        <Link to="/services">Services</Link> <br />
        <Link to="/blog">Blog Page</Link> <br />
        <Link to="/contact">Contact</Link> <br />
    </Layout>
  )
}

// Exporting the component
export default IndexPage