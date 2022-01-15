// importing React
import * as  React from 'react'
import { Link } from 'gatsby'
import Layout from '../component/layout'

// Define the AboutPage with fat arrow function component
const Skills = () => {
  return (
    <Layout pageTitle="Skills">
      <title>Skills Profile</title>
      <h2>Information Technology Skills</h2>
      <p>Web Application Development, Database administration, network troubleshooting.</p>
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

// Exporting the Skills component
export default Skills

