import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getFunds } from "../../actions/callUp";

import Fakehader from "./Fakehader";

import BootstrapTable from 'react-bootstrap-table-next';
import { Container } from 'reactstrap';

var products = [
  {
    date: "2018/1/31",
    call: 1,
    Fund_1: 9500000.0,
    Fund_2: null,
    Fund_3: null,
    Fund_4: null
  }
];

var columns = [
  { dataField: "date", text: "Date" },
  { dataField: "call", text: "Call #" }
];

export class Dashboard extends Component {
  static propTypes = {
    funds: PropTypes.array.isRequired,
    getFunds: PropTypes.func.isRequired
  };

  componentDidMount() {
    this.props.getFunds();
    console.log(this.props.funds);
  }

  render() {
    // console.log(this.props.funds);
    if (this.props.funds.length > 0){
      for (let i=0;i< this.props.funds.length; i++) {
        let elem = this.props.funds[i]; 
        columns.push({dataField: elem.name.replace(/[ ,]+/g, "_"), text: elem.name});
      }
      console.log(columns);
    } 

    return (
      <div>
        <Fakehader />
        <Container>
          <BootstrapTable keyField='id' data={ products } columns={ columns } />
        </Container>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  funds: state.callsReducer.funds
});

export default connect(mapStateToProps, { getFunds })(Dashboard);
