import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getFunds } from "../../actions/callUp";

import Fakehader from "../layout/Fakehader";

import MaterialTable from "material-table";
import { Container } from "reactstrap";

export class Dashboard extends Component {
  static propTypes = {
    funds: PropTypes.object.isRequired,
    getFunds: PropTypes.func.isRequired
  };

  componentDidMount() {
    this.props.getFunds();
  }

  render() {
    return (
      <div>
        <Fakehader />
        <Container>
          <MaterialTable
            columns={this.props.funds.column}
            data={this.props.funds.data}
            title={""}
            options={{
              search: false,
              exportButton: false
            }}
          />
        </Container>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  funds: state.callsReducer.funds
});

export default connect(mapStateToProps, { getFunds })(Dashboard);
