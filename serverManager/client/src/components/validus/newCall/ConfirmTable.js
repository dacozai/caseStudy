import React, { Component } from 'react'
import MaterialTable from "material-table";

import { connect } from "react-redux";
import PropTypes from "prop-types";

const columns = [
  {field: "name", title: ""},
  {field: "amount", title: "Total Drawdown Notice"},
];

export class ConfirmTable extends Component {
  static propTypes = {
    commits: PropTypes.object.isRequired,
  };

  render() {
    return (
      <MaterialTable 
        columns = {columns}
        data = {this.props.commits.finalTable}
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

export default connect(mapStateToProps)(ConfirmTable);

