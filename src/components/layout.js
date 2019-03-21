/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"

import Header from "./Header/Header"
// import "./layout.css"
import "./main.css"

const Layout = ({ children, backgroundImage }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Header siteTitle={data.site.siteMetadata.title}/>
        <main className="main" style={{backgroundImage: `url(${backgroundImage})`}}>
          <div className="main__title">Hello, I am Pavel Klochkov</div>
        </main>
        {children}
        <footer className="footer">
          <div className="container">
            &copy; 2018 – {new Date().getFullYear()} by <a href="https://github.com/ckomop0x">Pavel "Ckomop0x"
            Klochkov.</a>
          </div>
        </footer>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
