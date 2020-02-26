import React from 'react'
import variables from "../../../../styles/mine.scss";
import {
  FormGroup,
  Label,
  Input,
  Col
} from "reactstrap"

const formTitle = variables.formTitle;
const formValue = variables.formValue;

const CallFormElem = (props) => {
  return (
    <FormGroup row key={props.field.keyField}>
      <Label htmlFor={props.field.labelFor} md={formTitle}>
        {props.field.labelName}
      </Label>
      <Col md={formValue}>
        <Input
          type={props.field.inpuType}
          id={props.field.inpuId}
          name={props.field.inpuName}
          placeholder={props.field.inpuPlaceholder}
          value={props.field.inpuValue}
          onChange={props.field.onChgMethod}
        />
      </Col>
    </FormGroup>
  )
}


export default CallFormElem;
