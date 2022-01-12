// import React
import * as React from "react"
import { Link } from 'gatsby'
import Layout from "../component/layout"
import { StaticImage } from "gatsby-plugin-image"

// Define the IndexPage fat arrow function component
const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <title>Gatsby Project Home Page</title>
      <h1>Welcome to my Gatsby Project Home Page</h1> 
      <Link to="/">Home</Link> <br />
      <Link to="/about">About</Link> <br />
      <Link to="/blog">Blog Page</Link> <br />
       <Link to="/404">404 Error Page</Link> <br />
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
    </Layout>
  )
}

// Exporting the component
export default IndexPage