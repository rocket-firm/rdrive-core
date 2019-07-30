import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import AuthentificateCont from './AuthentificateCont';
import SchemasContainer from './SchemasContainer';
import LayoutDefault from 'components/layouts/LayoutDefault';
import { ModelScreen } from 'screens/ModelScreen';
import { getModelsId } from 'store/models';
import { bindActionCreators } from 'redux';

class ModelScreenContainer extends AuthentificateCont {
    
    componentDidMount() {
        const {getModelsId} = this.props;
        const {params} = this.props.match;
        getModelsId(params)
    }

    render() {
        return (
            <SchemasContainer>
                <LayoutDefault>
                    <ModelScreen {...this.props}></ModelScreen>
                </LayoutDefault>
            </SchemasContainer>
        )
    }
}

export default connect(
    ({  
        schemas,
        models,
    }) => ({
        schemas,
        models
    }),
    dispatch => bindActionCreators({
        getModelsId
    }, dispatch)
)(ModelScreenContainer)