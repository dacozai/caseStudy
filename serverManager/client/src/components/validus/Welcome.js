import React from "react";

import "../../styles/mine.scss";
import Header from "../layout/Header";

const Welcome = (props) => {
  
  function handleClick() {
    const redirectURL = "/dashboard";
    props.history.push(redirectURL);
  }

  return (
    <div>
      <Header />
      <div className="container">
        <button className="myBt" onClick = {handleClick}> 
          Capital Call
        </button>
      </div>
    </div>
  );
}

export default Welcome;
