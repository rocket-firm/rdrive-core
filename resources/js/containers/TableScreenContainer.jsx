import React, { Component } from 'react';
import {connect} from 'react-redux';
import SchemasContainer from './SchemasContainer';
import LayoutDefault from 'components/layouts/LayoutDefault';
import TableContainer from './TableContainer';
import { bindActionCreators } from 'redux';
import {getModels} from 'store/models';

class TableScreenContainer extends Component {

    render() {
        return (
            <SchemasContainer>
                <LayoutDefault>
                    <TableContainer {...this.props}>

                    </TableContainer>
                </LayoutDefault>
            </SchemasContainer>
        )
    }
}


export default  connect(
    ({
        schemas,
        models,
    }) => ({
        schemas,
        models
    }),
    dispatch => bindActionCreators({
        getModels
    }, dispatch)
)(TableScreenContainer)

