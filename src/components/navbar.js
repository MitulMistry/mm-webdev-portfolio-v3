import React, { useState } from "react"
import { Container, Collapse, Navbar, NavbarBrand, NavbarToggler, Nav, NavItem, NavLink } from 'reactstrap'

import { socialMedia } from "../data";

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <Navbar id="main-navbar" className="sticky-top" color="light" light expand="sm">
      <Container>        
        <NavbarToggler className="ms-auto" onClick={toggleMenu} />
        <Collapse isOpen={menuOpen} navbar>
          <NavbarBrand href="/">MM</NavbarBrand>
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
          </Nav>

          {/* <Nav navbar className="ms-auto navbar-social">
            <NavItem>
              <NavLink href={profileData.github} target="_blank"><span className="fa fa-github fa-lg"></span></NavLink>                
            </NavItem>
            <NavItem>
              <NavLink href={profileData.linkedin} target="_blank"><span className="fa fa-linkedin fa-lg"></span></NavLink>                
            </NavItem>
            <NavItem>
              <NavLink href={"mailto:" + profileData.email} target="_blank"><span className="fa fa-envelope-o fa-lg"></span></NavLink>                
            </NavItem>
          </Nav> */}
        </Collapse>
      </Container>
    </Navbar>
  )
}

export default NavBar