import React, { Component } from 'react'
import {
  Row,
  Col
} from "reactstrap";

var downTable = [
  {
    name: "Fund 1",
    totalDrawNotice: 5000000.0
  },
  {
    name: "Fund 2",
    totalDrawNotice: 95000000.0
  },
  {
    name: "Fund 3",
    totalDrawNotice: null
  },
  {
    name: "Fund 4",
    totalDrawNotice: null
  },
  {
    name: "Fund 5",
    totalDrawNotice: null
  }
];

export class ConfirmTable extends Component {
  render() {
    return (
      <div>
        <Row>
          <Col xs="3"></Col>
          <Col xs="6">
            <BootstrapTable data={downTable}>
              <TableHeaderColumn
                dataField="name"
                isKey
                width="50%"
                dataAlign="center"
              >
                Commitment_ID
              </TableHeaderColumn>
              <TableHeaderColumn
                dataField="totalDrawNotice"
                width="50%"
                dataAlign="center"
              >
                Fund_ID
              </TableHeaderColumn>
            </BootstrapTable>
          </Col>
        </Row>
      </div>
    )
  }
}

export default ConfirmTable
