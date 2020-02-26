import React, { Component } from "react";
import BootstrapTable from 'react-bootstrap-table-next';

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

var columns = [
  {dataField: "commitId",text: "Commitment_ID"},
  {dataField: "fundId",text: "Fund_ID"},
  {dataField: "date",text: "Date"},
  {dataField: "fund",text: "Fund"},
  {dataField: "commitAmount",text: "Commited Amount"},
  {dataField: "notice",text: "Notice"},
  {dataField: "totalDrawNotice",text: "Total Drawdown Notice"},
  {dataField: "undrawCapiNotice",text: "Undrawn Capital Commitment After Current Drawdown Notice"},
]

export class CalTable extends Component {
  render() {
    return (
      <div>
        <BootstrapTable keyField='id' data={ products } columns={ columns } />
          
      </div>
    );
  }
}

export default CalTable;
