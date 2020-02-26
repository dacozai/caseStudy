import React, { Component } from "react";
import { Container, Button, Row, Col } from "reactstrap";
import Fakehader from "../Fakehader";
import ConfirmTable from "./ConfirmTable";
import CalTable from "./CalTable";
import CalForm from "./Form/CalForm";

class Newcall extends Component {
  constructor(props) {
    super(props);
    this.state = {
      requests:null 
    };
    this.callbackFromChild = this.callbackFromChild.bind(this);
  }

  callbackFromChild(dataFromChild) {
    console.log(dataFromChild);
    this.setState({ requests: dataFromChild });
    console.log(this.state);
  }

  render() {
    return (
      <div>
        <Fakehader />
        <Container>
          <Row>
            <Col xs="5">
              <CalForm callbackFromChild={this.callbackFromChild} />
            </Col>
            <Col xs="7">
              <CalTable />
            </Col>
          </Row>
          <Button> Calculate </Button>
          {/* <ConfirmTable /> */}
          <Row>
            <Col xs="4"></Col>
            <Col xs="4">
              <Button> confirm </Button>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Newcall;
