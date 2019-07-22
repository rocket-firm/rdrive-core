import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchSettings } from 'store/settings';
import { fetchSchemasList } from 'store/schemas';
import SideBar from '../components/ui/Sidebar';

class SchemasContainer extends Component {
    componentWillMount() {
        const {
          fetchSettings: fetchSettingsComp,
          fetchSchemasList: fetchSchemasListComp
        } = this.props;
        fetchSettingsComp();
        fetchSchemasListComp();
    }

    render() {
        return (
            <div>{this.props.children}</div>
        )
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
)(SchemasContainer);