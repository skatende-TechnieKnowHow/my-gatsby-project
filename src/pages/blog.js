import * as React from 'react'
import Layout from '../component/layout'
import { Link, graphql } from 'gatsby'

// The BlogsTemplate contains blog posts
const BlogsTemplate = ({ data }) => {
    return (
        <Layout pageTitle="Blog Posts Page">
            <p>This page contains all current and previous Blogs posted here.</p>
            <ul> 
            {
                data.allFile.nodes.map(node => (
                    <li key={node.name}> 
                        {node.name}
                    </li>
                ))
            }
            </ul>
            <Link to="/">Home</Link> <br />
            <Link to="/about">About</Link> <br />
            <Link to="/blog">Blog Page</Link> <br />
            <Link to="/404">404 Error Page</Link> <br />
        </Layout>
    )

} // End of BlogsTemplate

// Defining and exporting the page query.
export const query = graphql`
    query {
      allFile {
        nodes {
         name
    }
  }
}
`

export default BlogsTemplate