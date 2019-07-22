import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchSettings } from 'store/settings';
import { fetchSchemasList } from 'store/schemas';
import Dashboard from 'screens/Dashboard';

class DashboardScreenContainer extends Component {
  componentDidMount() {
    const {
      fetchSettings: fetchSettingsComp,
      fetchSchemasList: fetchSchemasListComp
    } = this.props;
    fetchSettingsComp();
    fetchSchemasListComp();
  }

  render() {
    return <Dashboard {...this.props} />;
  }
}

export default connect(
  ({
    localizations: { language },
    settings: { settings },
    schemas,
  }) => ({
    settings: settings[language],
    schemas,
  }),
  dispatch => bindActionCreators({
    fetchSettings,
    fetchSchemasList
  }, dispatch)
)(DashboardScreenContainer);
