// importing React
import * as  React from 'react'
import { Link } from 'gatsby'
import Layout from '../component/layout'

// Define the AboutPage with fat arrow function component
const Experience = () => {
  return (
    <Layout pageTitle="Experience">
      <title>Experience Profile</title>
      <h2>My Web Development skills come from different sources</h2>
      <p>My web development experience spans 5+ years of using different CMS.</p>
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

// Exporting the Experience component
export default Experience

