import React, { useState } from "react";
import { NavLink as RRNavLink } from "react-router-dom";
import {
  Button,
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  NavbarText,
} from "reactstrap";
import "./header.scss";

function HeaderNav() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  return (
    <div>
      <Navbar expand="md">
        <NavbarBrand to="/">Logo</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink activeClassName="active" exact tag={RRNavLink} to="/">
                Home
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink activeClassName="active" tag={RRNavLink} to="/about-us">
                About Us
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink activeClassName="active" tag={RRNavLink} to="/projects">
                Projects
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                activeClassName="active"
                tag={RRNavLink}
                to="/contact-us"
              >
                Contact Us
              </NavLink>
            </NavItem>
          </Nav>
          <NavbarText className="mr-4">Schedule a Meeting</NavbarText>
          <Button color="header" size="md">
            Contact Us
          </Button>
        </Collapse>
      </Navbar>
    </div>
  );
}
export default HeaderNav;
