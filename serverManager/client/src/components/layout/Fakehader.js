import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import {
  Nav,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Collapse,
  NavItem
} from "reactstrap";
import Logo from './Logo';

export class Fakehader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isNavOpen: false
    };
    this.toggleNav = this.toggleNav.bind(this);
  }

  toggleNav() {
    this.setState({
      isNavOpen: !this.state.isNavOpen
    });
  }

  render() {
    return (
      <Navbar color="light" light expand="md">
          <Logo />
          <Collapse isOpen={this.state.isNavOpen} navbar>
            <Nav className="ml" navbar>
              <NavItem>
                <p>Capital Call</p>
              </NavItem>
            </Nav>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink className="nav-link ml-auto" to="/dashboard">
                  <span className="fa fa-home fa-lg"></span> Dashboard
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="nav-link mr-auto" to="/newcall">
                  <span className="fa fa-info fa-lg"></span> new_call
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
      </Navbar>
    );
  }
}

export default Fakehader;
