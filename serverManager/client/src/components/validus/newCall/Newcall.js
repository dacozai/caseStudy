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
    this.props.calculateCall(this.props.callRequest.amount);
  }

  render() {
    return (
      <div>
        <Fakehader />
        <Row>
          <Col xs="3">
            <Row>
              <Col xs="2" />
              <Col xs="10">
                <Row>
                  <CalForm hey={this.props.commits}/>
                </Row>
                <Row>
                  <Button onClick={this.onClickRequest}> Calculate </Button>
                </Row>
              </Col>
            </Row>
          </Col>
          <Col xs="9">
            <CalTable />
          </Col>
        </Row>
        <Row>
          <Col xs="4"></Col>
          <Col xs="4">
            <ConfirmTable />
            <Button> confirm </Button>
          </Col>
        </Row>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  callRequest: state.callsReducer.callRequest,
  commits: state.callsReducer.commits
});

export default connect(mapStateToProps, {calculateCall} )(Newcall);
