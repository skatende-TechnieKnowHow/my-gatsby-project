// import React
import * as React from "react"
import { Link } from 'gatsby'
import Layout from "../component/layout"

// Define the IndexPage fat arrow function component
const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <title>Gatsby Project Home Page</title>
      <h1>Welcome to my Gatsby Project Home Page</h1> 
      <Link to="/">Home</Link> <br />
      <Link to="/about">About</Link> <br />
       <Link to="/404">404 Error Page</Link> <br />
      <p>This project is made with Gatsby and ReactJS Tech Stack</p>
    </Layout>
  )
}

// Exporting the component
export default IndexPage