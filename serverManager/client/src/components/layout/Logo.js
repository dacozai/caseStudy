import React, { Component } from 'react';
import {
  NavbarBrand,
} from 'reactstrap';

import imgLogo from '../../images/logos/ValidusLogo.png';

export class Logo extends Component {
  render() {
    return (
      <NavbarBrand className="mr-auto" href="/">
        <img alt="404" src={ imgLogo } height="50" width="185" />
      </NavbarBrand>
    )
  }
}

export default Logo;
