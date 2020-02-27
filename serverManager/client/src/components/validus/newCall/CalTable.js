import React, { Component } from "react";
import BootstrapTable from 'react-bootstrap-table-next';
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
    if (this.props.commits.column.length > 0) {
      return (
        <div>
          <BootstrapTable keyField='id' data={ this.props.commits.data } columns={ this.props.commits.column } />
        </div>
      );
    }
    return (
      <div></div>
    );
  }
}

const mapStateToProps = state => ({
  commits: state.callsReducer.commits
});

export default connect(mapStateToProps, { getCommitTable })(CalTable);

