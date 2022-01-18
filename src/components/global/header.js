import * as React from "react"
import PropTypes from "prop-types"
import { Container, Navbar, Nav } from 'react-bootstrap'
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

const Header = ({ siteTitle }) => (
  
  <Navbar className="header" expand="md" variant="light">
    <Container>
      <Navbar.Brand href="/">
      <StaticImage
      src="../images/for21days-logo.png"
      alt="For 21 days logo"
      height="35"
      className="d-inline-block align-top"
      ></StaticImage>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarResponsive" />
        <Navbar.Collapse className="justify-content-end" id="navbarResponsive">
          <Nav >
            <Nav.Item>
              <Link to="/challenges" className="nav-link" activeClassName="active">21-day Challenges</Link>
            </Nav.Item>
            <Nav.Item>
              <Link to="/blog" className="nav-link" activeClassName="active">Blog</Link>
            </Nav.Item>
            <Nav.Item>
            <Link to="/about" className="nav-link" activeClassName="active">About</Link>
          </Nav.Item>
          </Nav>
        </Navbar.Collapse>
    </Container>
  </Navbar>
  

)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
