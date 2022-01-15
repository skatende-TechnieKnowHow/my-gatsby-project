import * as React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import { container, heading, navLinks, navLinkItem, navLinkText } 
from './layout.module.css'

const Layout = ({ pageTitle, children }) => {
    const data = useStaticQuery(graphql`
    query {
        site {
            siteMetadata {
                title
    }
  }
}
`)

    return (

    <div className={container}>
    <title>{pageTitle} | {data.site.siteMetadata.title}</title>
    <header>{data.site.siteMetadata.title}</header>
    <nav>
        <ul className={navLinks}>
            <li className={navLinkItem}>
            <Link to="/" className={navLinkText}>Home</Link></li>
             <li className={navLinkItem}>
            <Link to="/about" className={navLinkText}>About</Link></li>
            <li className={navLinkItem}>
            <Link to="/project" className={navLinkText}>Projects</Link></li>
            <li className={navLinkItem}>
            <Link to="/experience" className={navLinkText}>Experience</Link></li>
            <li className={navLinkItem}>
            <Link to="/skills" className={navLinkText}>Skills</Link></li>
            <li className={navLinkItem}>
            <Link to="/education" className={navLinkText}>Education</Link></li>
            <li className={navLinkItem}>
            <Link to="/services" className={navLinkText}>Services</Link></li>
            <li className={navLinkItem}>
            <Link to="/blog" className={navLinkText}>Blog</Link></li>
            <li className={navLinkItem}>
            <Link to="/contact" className={navLinkText}>Contact</Link></li>
        </ul>
    </nav>
    <main>
        <h1 className={heading}>{pageTitle}</h1>
        {children}
        <footer style={{ marginTop: `2rem`, }}>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.com">Gatsby</a>
        </footer>
    </main>
    </div>
    ) // End of return


} // End of Layout

export default Layout
