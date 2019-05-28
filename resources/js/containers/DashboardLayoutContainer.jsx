import React, { Component } from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchSettings } from 'store/settings';
import { fetchSchemasList } from 'store/schemas';

class DashboardLayoutContainer extends Component {
  componentDidMount() {
    const { fetchSettings, fetchSchemasList } = this.props
    fetchSettings();
    fetchSchemasList();
  }
  render() {
    return (
      <h1>DashboardLayoutContainer</h1>
    );
  }
}

export default connect(
  ({
    settings
  }) => ({
    settings
  }), 
  (dispatch) => bindActionCreators({
    fetchSettings,
    fetchSchemasList
  }, dispatch)
)(DashboardLayoutContainer);