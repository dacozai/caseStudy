import React, { Component } from "react";
import {
  Link,
} from "react-router-dom";

import "../../styles/mine.scss"
import Header from '../layout/Header';

export class Welcome extends Component {

  goToSomewhere(e){
    e.preventDefault();
    console.log("go to other page");
  }

  render() {
    return (
      <div>
        <Header />
        <div className="container">
          <button className="myBt" onClick={this.handleClick}> 
            <Link to="/dashboard">Capital Call</Link> 
          </button>
        </div>
      </div>
    );
  }
}

export default Welcome;
