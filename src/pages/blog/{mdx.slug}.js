import * as React from 'react'
import Layout from '../../component/layout'
import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

const BlogPageTemplate = ({ data }) => {
  // getImage is a helper function that takes in a File node or an ImageSharp node
  const image = getImage(data.mdx.frontmatter.hero_image)
    return (
        <Layout pageTitle={data.mdx.frontmatter.title}>
            <p>Published: {data.mdx.frontmatter.date}</p>
           
            <GatsbyImage image={image} alt={data.mdx.frontmatter.hero_image_alt} />
            <p>
              Photo Credit:{" "}
              <a href={data.mdx.frontmatter.hero_image_credit_link}>
                {data.mdx.frontmatter.hero_image_credit_text}
              </a>
            </p>
            <MDXRenderer>
                {data.mdx.body}
            </MDXRenderer>

        </Layout>
    )
} // End of BlogPageTemplate


// Adding page query to the blog post page template.
export const query = graphql`
query ($id: String) {
  mdx(id: {eq: $id}) {
    body
    frontmatter {
      title
      date(formatString: "MMMM D, YYYY")
      hero_image_alt
      hero_image_credit_link
      hero_image_credit_text
      hero_image {
        childImageSharp {
          gatsbyImageData
        }
      }
    }
  }
}
`
export default BlogPageTemplate