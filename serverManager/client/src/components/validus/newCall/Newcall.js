import React, { Component } from "react";
import { Container, Button, Row, Col } from "reactstrap";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { calculateCall } from "../../../actions/callUp";

import Fakehader from "../Fakehader";
import ConfirmTable from "./ConfirmTable";
import CalTable from "./CalTable";
import CalForm from "./Form/CalForm";

class Newcall extends Component {
  constructor(props) {
    super(props);
    this.onClickRequest = this.onClickRequest.bind(this);
  }

  static propTypes = {
    callRequest: PropTypes.object.isRequired,
    calculateCall: PropTypes.func.isRequired
  };

  onClickRequest() {
    console.log("hi");
    this.props.calculateCall(this.props.callRequest.amount);
  }

  render() {
    return (
      <div>
        <Fakehader />
        <Container>
          <Row>
            <Col xs="4">
              <CalForm />
            </Col>
            <Col xs="8">
              <CalTable />
            </Col>
          </Row>
          <Button onClick={this.onClickRequest}> Calculate </Button>
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

const mapStateToProps = state => ({
  callRequest: state.callsReducer.callRequest
});

export default connect(mapStateToProps, {calculateCall} )(Newcall);
