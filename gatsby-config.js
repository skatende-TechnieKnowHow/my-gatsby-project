module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "SK Web Development ",
  },
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/content/pages`,
    },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `blog`,
        path: `${__dirname}/src/content/blog/`,
      },
    },
    "gatsby-plugin-mdx",

  ],
}; // End of module
