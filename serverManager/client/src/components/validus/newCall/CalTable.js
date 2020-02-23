import React, { Component } from "react";

var products = [
  {
    commitId: 1,
    fundId: 1,
    date: "2018/1/31",
    fund: "Fund_1",
    commitAmount: 10000000.0,
    notice: 500000.0,
    totalDrawNotice: 500000.0,
    undrawCapiNotice: null
  }
];

export class CalTable extends Component {
  render() {
    return (
      <div>
        <BootstrapTable data={products}>
          <TableHeaderColumn
            dataField="commitId"
            isKey
            width="10%"
            dataAlign="center"
          >
            Commitment_ID
          </TableHeaderColumn>
          <TableHeaderColumn dataField="fundId" width="10%" dataAlign="center">
            Fund_ID
          </TableHeaderColumn>
          <TableHeaderColumn dataField="date" width="15%" dataAlign="center">
            Date
          </TableHeaderColumn>
          <TableHeaderColumn dataField="fund" width="5%" dataAlign="center">
            Fund
          </TableHeaderColumn>
          <TableHeaderColumn
            dataField="commitAmount"
            width="15%"
            dataAlign="center"
          >
            Commited Amount
          </TableHeaderColumn>
          <TableHeaderColumn dataField="notice" width="15%" dataAlign="center">
            Notice
          </TableHeaderColumn>
          <TableHeaderColumn
            dataField="totalDrawNotice"
            width="15%"
            dataAlign="center"
          >
            Total Drawdown Notice
          </TableHeaderColumn>
          <TableHeaderColumn
            dataField="undrawCapiNotice"
            width="15%"
            dataAlign="center"
          >
            Undrawn Capital Commitment After Current Drawdown Notice
          </TableHeaderColumn>
        </BootstrapTable>
      </div>
    );
  }
}

export default CalTable;
