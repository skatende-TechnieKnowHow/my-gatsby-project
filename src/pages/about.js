// importing React
import * as  React from 'react'
import { Link } from 'gatsby'
import Layout from '../component/layout'

// Define the AboutPage with fat arrow function component
const AboutPage = () => {
  return (
    <Layout pageTitle="About Me">
      <title>About myself</title>
      <h2>SK Web Development career background</h2>

      <p>My software Development journey began some years ago with JavaScript and JAVA programming when I joined
           a university program.</p>
      <p>But my real office application development began when I designed forms and created</p>
      <p>an office application which was based on Microsoft Access Database.</p>
      <a href="https://www.microsoft.com/en-ww/microsoft-365/access">Microsoft Access</a>
      <p>I have always wanted to know how certain things work by reading about them first</p>
      <p>,and then breaking down the details so that I can re-create them.</p>
      <p> More information to follow from....</p>
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
export default AboutPage

