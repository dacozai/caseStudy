import React, { Component } from "react";
import {
  Container,
  Button,
  Row,
  Col
} from "reactstrap";
import Fakehader from "../Fakehader";
import ConfirmTable from "./ConfirmTable";
import CalTable from "./CalTable";
import CalForm from "./CalForm";

class Newcall extends Component {
  
  render() {
    return (
      <div>
        <Fakehader />
        <Container>
          <Row>
            <Col xs="5">
             <CalForm />
            </Col>
            <Col xs="7">
              <CalTable />
            </Col>
          </Row>
          <Button> Calculate </Button>
        <ConfirmTable />
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
