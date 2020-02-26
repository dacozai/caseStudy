import React, { Component } from 'react'
import variables from "../../../styles/mine.scss";
import {
  Form,
  FormGroup,
  Label,
  Input,
  Col
} from "reactstrap"

const formTitle = variables.formTitle;
const formValue = variables.formValue;

const CallFormElem = (props) => {
  const field = props.field.map((field) => {
    return (
      <FormGroup row key={field.keyField}>
        <Label htmlFor={field.labelFor} md={formTitle}>
          {field.labelName}
        </Label>
        <Col md={formValue}>
          <Input
            type={field.inpuType}
            id={field.inpuId}
            name={field.inpuName}
            placeholder={field.inpuPlaceholder}
            value={field.inpuValue}
            onChange={field.onChgMethod}
          />
        </Col>
      </FormGroup>
    )
  })
  
  return(
    <div>
      {field}
    </div>  
  )
  
}
/*
const CallFormElem = (props) => {
  return (
    <FormGroup row key={this.props.field.keyField}>
      <Label htmlFor={this.props.field.labelFor} md={formTitle}>
        {this.props.field.labelName}
      </Label>
      <Col md={formValue}>
        <Input
          type={this.props.field.inpuType}
          id={this.props.field.inpuId}
          name={this.props.field.inpuName}
          placeholder={this.props.field.inpuPlaceholder}
          value={this.props.field.inpuValue}
          onChange={this.props.field.onChgMethod}
        />
      </Col>
    </FormGroup>
  )
}
*/

export default CallFormElem;
