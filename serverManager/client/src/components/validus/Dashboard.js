import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getFunds } from "../../actions/callUp";

import Fakehader from "./Fakehader";

import BootstrapTable from 'react-bootstrap-table-next';
import { Container } from 'reactstrap';

export class Dashboard extends Component {
  
  static propTypes = {
    funds: PropTypes.object.isRequired,
    getFunds: PropTypes.func.isRequired
  };

  componentDidMount() {
    this.props.getFunds();
  }

  render() {
    console.log("DashBoard: ",this.props.funds);

    if (this.props.funds.column.length > 0 && this.props.funds.data.length > 0 ) {
      return (
        <div>
          <Fakehader />
          <Container>
            <BootstrapTable keyField='id' data={ this.props.funds.data } columns={ this.props.funds.column } />
          </Container>
        </div>
      );
    } else {
      return (
        <div>
          <Fakehader />
          <Container>
          </Container>
        </div>
      );
    }    
  }
}

const mapStateToProps = state => ({
  funds: state.callsReducer.funds
});

export default connect(mapStateToProps, { getFunds })(Dashboard);
