import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import "./header.css"

const Header = ({ siteTitle }) => (
  <header className="header">
    <div className="container header__title">{siteTitle}</div>
    <div className="container">
      <div className="row">
        <nav className="col-md-12 header__nav">
          <div className="col-md-3 no-padding">
            <Link to="/">
              <a className="header__link">Home</a>
            </Link>
          </div>
          <div className="col-md-3 no-padding">
            <Link to="/history/">
              <a className="btn btn-primary btn-block">History</a>
            </Link>
          </div>
          <div className="col-md-3 no-padding">
            <Link to="/links/">
              <a className="btn btn-primary btn-block">Links</a>
            </Link>
          </div>
          <div className="col-md-3 no-padding">
            <Link to="/credits/">
              <a className="btn btn-primary btn-block">Credits</a>
            </Link>
          </div>
        </nav>
      </div>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
