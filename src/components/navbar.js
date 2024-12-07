import React, { useState } from "react"
import {
  Container,
  Collapse,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap"
import imgLogo from "../images/mm_logo_01.svg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons"
import { faEnvelope } from "@fortawesome/free-regular-svg-icons"

import { socialMedia } from "../appData"

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  const toggleMenu = () => setMenuOpen(!menuOpen)

  return (
    <Navbar id="main-navbar" color="primary" dark expand="sm" fixed="top">
      <Container>
        <NavbarToggler className="ms-auto" onClick={toggleMenu} />
        <Collapse isOpen={menuOpen} navbar>
          <NavbarBrand href="/">
            <img src={imgLogo} className="navbar-logo" alt="Logo" />
          </NavbarBrand>
          <Nav navbar className="me-auto">
            <NavItem>
              <NavLink href="#about">About</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#projects">Projects</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#contact">Contact</NavLink>
            </NavItem>
            <NavItem className="social-text">
              <NavLink href={socialMedia.github} target="_blank">
                GitHub
              </NavLink>
            </NavItem>
            <NavItem className="social-text">
              <NavLink href={socialMedia.linkedin} target="_blank">
                LinkedIn
              </NavLink>
            </NavItem>
            <NavItem className="social-text">
              <NavLink href={`mailto:${socialMedia.email}`} target="_blank">
                Email
              </NavLink>
            </NavItem>
          </Nav>

          <Nav navbar className="ms-auto navbar-social">
            <NavItem>
              <NavLink href={socialMedia.github} target="_blank">
                <FontAwesomeIcon icon={faGithub} />
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href={socialMedia.linkedin} target="_blank">
                <FontAwesomeIcon icon={faLinkedinIn} />
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href={`mailto:${socialMedia.email}`} target="_blank">
                <FontAwesomeIcon icon={faEnvelope} />
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Container>
    </Navbar>
  )
}

export default NavBar
