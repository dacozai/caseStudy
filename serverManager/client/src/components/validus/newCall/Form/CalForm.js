import React, { Component } from "react";
import {
  Form,
} from "reactstrap";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { onChangeRequest } from "../../../../actions/callUp";

import Elem from "./CallFormElem";
import ElemOpt from "./CallFormOpt";

export class CalForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inDate: "",
      rule: "",
      investName: "",
      capitalRe: ""
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  static propTypes = {
    callRequest: PropTypes.object.isRequired,
    onChangeRequest: PropTypes.func.isRequired
  };

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleSubmit(event) {
    console.log("Current State is: " + JSON.stringify(this.state));
    alert("Current State is: " + JSON.stringify(this.state));
    event.preventDefault();
  }

  render() {
    const elements = [
      {
        keyField: "d_formDate",
        labelFor: "inDate",
        labelName: "Date",
        inpuType: "date",
        inpuId: "date",
        inpuName: "date",
        inpuPlaceholder: "date",
        inpuValue: this.props.date,
        onChgMethod: this.props.onChangeRequest
      }, {
        keyField: "d_formRule",
        labelFor: "rule",
        labelName: "Rule",
        inpuType: "select",
        inpuId: "rule",
        inpuName: "rule",
        inpuPlaceholder: "Rule",
        inpuValue: this.state.rule,
        onChgMethod: this.props.onChangeRequest
      }, {
        keyField: "d_formInvest",
        labelFor: "date",
        labelName: "Investment Name",
        inpuType: "text",
        inpuId: "name",
        inpuName: "name",
        inpuPlaceholder: "Investment Name",
        inpuValue: this.props.name,
        onChgMethod: this.props.onChangeRequest
      }, {
        keyField: "d_formCapital",
        labelFor: "date",
        labelName: "Capital Required for Investment",
        inpuType: "text",
        inpuId: "amount",
        inpuName: "amount",
        inpuPlaceholder: "Capital Required for Investment",
        inpuValue: this.props.amount,
        onChgMethod: this.props.onChangeRequest
      }
    ];

    let formList = elements.map( function(each) {
      if (each.inpuType === "select")
        return <ElemOpt key={"parent_"+each.keyField} field={each} /> 
      return <Elem key={"parent_"+each.keyField} field={each} />
    });

    return (
      <div>
        <Form onSubmit={this.handleSubmit}>
          {formList}
        </Form>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  callRequest: state.callsReducer.callRequest
});

export default connect(mapStateToProps, { onChangeRequest })(CalForm);

