import React, { Component } from 'react';

import Fakehader from './Fakehader';

import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';

var products = [{
  date: '2018/1/31',
  call: 1,
  FundOne: 9500000.00,
  FundTwo: null,
  FundThree: null,
  FundFour: null
}];

export class Dashboard extends Component {

  render() {
    return (
      <div>
        <Fakehader /> 
        <div className="container">
          <BootstrapTable data={ products }>
            <TableHeaderColumn dataField='date' isKey width='20%' dataAlign="center">Date</TableHeaderColumn>
            <TableHeaderColumn dataField='call' width='10%' dataAlign="right">Call #</TableHeaderColumn>
            <TableHeaderColumn dataField='FundOne' width='10%' dataAlign="right">Fund 1</TableHeaderColumn>
            <TableHeaderColumn dataField='FundTwo' width='10%' dataAlign="right">Fund 2</TableHeaderColumn>
            <TableHeaderColumn dataField='FundThree' width='10%' dataAlign="right">Fund 3</TableHeaderColumn>
            <TableHeaderColumn dataField='FundFour' width='10%' dataAlign="right">Fund 4</TableHeaderColumn>
          </BootstrapTable>
        </div>
      </div>
    )
  }
}

export default Dashboard
