import * as React from 'react'
import Layout from '../../component/layout'
import { Link, graphql } from 'gatsby'
//import { MDXRenderer } from 'gatsby-plugin-mdx'

// The BlogsTemplate contains blog posts
const BlogsTemplate = ({ data }) => {
    return (
        <Layout pageTitle="Blog Posts Page">
            <p>This page contains all current and previous blog posts.</p>
            
            {
                data.allMdx.nodes.map((node ) => (
                    <article key={node.id}> 
                        {node.name}
                    <h2>
                      <Link to={`/blog/${node.slug}`}>
                      {node.frontmatter.title}
                      </Link>
                      </h2>
                    <p>Published: {node.frontmatter.date}</p>

                    </article>
                ))
            }
              
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

} // End of BlogsTemplate

// Defining and exporting the page query.
export const query = graphql`
query {
  allMdx(sort: {fields: frontmatter___date, order: DESC}) {
    nodes {
      frontmatter {
        date(formatString: "MMMM D, YYYY")
        title
      }
      id
      slug
    }
  }
}
`

export default BlogsTemplate

