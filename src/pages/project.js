// importing React
import * as  React from 'react'
import { Link } from 'gatsby'
import Layout from '../component/layout'

// Define the AboutPage with fat arrow function component
const Project = () => {
  return (
    <Layout pageTitle="Projects">
      <title>Project Profile</title>
      <h2>Projects completed and Work in progress</h2>
      <p>Please browser through these Projects to get an idea about my work.</p>
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

// Exporting the AboutPage component
export default Project

