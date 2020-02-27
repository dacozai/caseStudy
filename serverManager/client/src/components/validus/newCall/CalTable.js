import React, { Component } from "react";
import MaterialTable from "material-table";

import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getCommitTable } from "../../../actions/callUp";

export class CalTable extends Component {

  static propTypes = {
    commits: PropTypes.object.isRequired,
    getCommitTable: PropTypes.func.isRequired
  };

  componentDidMount() {
    this.props.getCommitTable();
  }

  render() {
    return (
      <MaterialTable 
        columns = {this.props.commits.column}
        data = {this.props.commits.data}
        title = ""
        options={{
          search: false,
          exportButton: false,
          paging: false,
          detailPanelColumnAlignment: 'right',
        }}
      />
    );
  }
}

const mapStateToProps = state => ({
  commits: Object.assign({}, state.callsReducer.commits)
});

export default connect(mapStateToProps, { getCommitTable })(CalTable);
