import React, { Component } from "react";
import {
  Form,
  FormGroup,
  Label,
  Input,
  Col
} from "reactstrap"

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
    return (
      <div>
        <Form onSubmit={this.handleSubmit}>
          <FormGroup row>
            <Label htmlFor="inDate" md={2}>
              Date
            </Label>
            <Col md={5}>
              <Input
                type="date"
                id="inDate"
                name="inDate"
                placeholder="Date"
                value={this.state.inDate}
                onChange={this.handleInputChange}
              />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label htmlFor="rule" md={2}>
              Rule
            </Label>
            <Col md={5}>
              <Input
                type="select"
                id="rule"
                name="rule"
                placeholder="Rule"
                value={this.state.rule}
                onChange={this.handleInputChange}
              >
                <option selected value="coconut">
                  First in First Out (FIFO)
                </option>
              </Input>
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label htmlFor="date" md={2}>
              Investment Name
            </Label>
            <Col md={5}>
              <Input
                type="text"
                id="investName"
                name="investName"
                placeholder="Investment Name"
                value={this.state.investName}
                onChange={this.handleInputChange}
              />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label htmlFor="date" md={2}>
              Capital Required for Investment
            </Label>
            <Col md={5}>
              <Input
                type="text"
                id="capitalRe"
                name="capitalRe"
                placeholder="Capital Required for Investment"
                value={this.state.capitalRe}
                onChange={this.handleInputChange}
              />
            </Col>
          </FormGroup>
        </Form>
      </div>
    );
  }
}

export default CalForm;
