import React, { Component } from 'react'
import {
  Navbar,
} from 'reactstrap';

import Logo from './Logo';


export class Header extends Component {

  render() {
    return (
      <Navbar color="light" light expand="md">
        <Logo />
      </Navbar>
    )
  }
}

export default Header
