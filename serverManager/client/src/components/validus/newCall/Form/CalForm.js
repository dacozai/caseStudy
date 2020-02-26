import React, { Component } from "react";
import {
  Form,
  Button,
} from "reactstrap";

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
    this.wtf = this.wtf.bind(this);
  }

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
  
  wtf() {
    this.props.callbackFromChild(this.state);
  }

  render() {
    const elements = [
      {
        keyField: "d_formDate",
        labelFor: "inDate",
        labelName: "Date",
        inpuType: "date",
        inpuId: "inDate",
        inpuName: "inDate",
        inpuPlaceholder: "date",
        inpuValue: this.state.inDatea,
        onChgMethod: this.handleInputChange
      }, {
        keyField: "d_formRule",
        labelFor: "rule",
        labelName: "Rule",
        inpuType: "select",
        inpuId: "rule",
        inpuName: "rule",
        inpuPlaceholder: "Rule",
        inpuValue: this.state.rule,
        onChgMethod: this.handleInputChange
      }, {
        keyField: "d_formInvest",
        labelFor: "date",
        labelName: "Investment Name",
        inpuType: "text",
        inpuId: "investName",
        inpuName: "investName",
        inpuPlaceholder: "Investment Name",
        inpuValue: this.state.investName,
        onChgMethod: this.handleInputChange
      }, {
        keyField: "d_formCapital",
        labelFor: "date",
        labelName: "Capital Required for Investment",
        inpuType: "text",
        inpuId: "capitalRe",
        inpuName: "capitalRe",
        inpuPlaceholder: "Capital Required for Investment",
        inpuValue: this.state.capitalRe,
        onChgMethod: this.handleInputChange
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
          <Button onClick={this.wtf}> CCCCCCalculate </Button>
        </Form>
      </div>
    );
  }
}

export default CalForm;
