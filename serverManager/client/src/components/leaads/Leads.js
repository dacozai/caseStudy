import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getData, deleteData } from "../../actions/crudtest";

export class Leads extends Component {
  static propTypes = {
    leads: PropTypes.array.isRequired,
    getData: PropTypes.func.isRequired,
    deleteData: PropTypes.func.isRequired
  };

  componentDidMount() {
    this.props.getData();
  }

  render() {
    return (
      <Fragment>
        <h2>Leads</h2>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Message</th>
              <th />
            </tr>
          </thead>
          <tbody>
            {this.props.leads.map(lead => (
              <tr key={lead.id}>
                <td>{lead.id}</td>
                <td>{lead.name}</td>
                <td>{lead.email}</td>
                <td>{lead.message}</td>
                <td>
                  <button
                    onClick={this.props.deleteData.bind(this, lead.id)}
                    className="btn btn-danger btn-sm"
                  >
                    {" "}
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Fragment>
    );
  }
}

// mapstate means the states in Redux
// the first state is in redux and then leadsReducer is from index.js
const mapStateToProps = state => ({
  leads: state.leadsReducer.leads
});

export default connect(mapStateToProps, { getData, deleteData })(Leads);
