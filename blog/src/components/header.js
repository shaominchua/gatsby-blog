import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle, menuLinks }) => (
  <header
    style={{
      background: `white`,
      marginBottom: `1.45rem`,
      color: `black`
    }}
  >
    <div
      style={{
        // margin: `0 auto`,
        // maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
        display: `inline-block`,
        width: `100%`
      }}
    >
      <div style={{float:"left"}}>
        <h2 style={{ margin: `5px 0px 0px 5px`}}>
          <Link
            to="/"
            style={{
              color: `black`,
              textDecoration: `none`,
            }}
          >
            {siteTitle}
          </Link>
        </h2>

      </div>


      <div style={{float:"right"}}>
        <nav>
          <ul style={{ display: "flex", flex: 1,margin: `5px 0px 0px 10px`}}>
            {menuLinks.map(link => (
              <li
                key={link.name}
                style={{
                  listStyleType: `none`,
                  padding: `1rem`,
                  margin: `0px 0px 0px 15px`
                }}
              >
                <Link style={{ color: `black` }} to={link.link}>
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
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
