import React, { Component } from 'react'
import {
  Navbar,
  NavbarBrand,
} from 'reactstrap';

import imgLogo from '../../images/logos/ValidusLogo.png';

export class Header extends Component {

  render() {
    return (
       <React.Fragment>
        <Navbar color="light" light expand="md">
          <div className="container">
            <NavbarBrand className="mr-auto" href="/">
              <img alt="404" src={ imgLogo } />
            </NavbarBrand>
          </div>
        </Navbar>
      </React.Fragment>
    )
  }
}

export default Header
