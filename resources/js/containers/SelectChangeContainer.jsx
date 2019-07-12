import React, { Component } from 'react';
import { connect } from 'react-redux';
import Select from 'components/ui/Select';
import {setLanguage} from 'store/localizations';

class SelectChangeContainer extends Component {
    
    render() {
        const {setLanguage} = this.props
        console.dir(setLanguage)
        return (
            <Select {...this.props} changeFunc = {(val) => setLanguage(val)} />
        )
    }
}
export default connect(({ localizations: { language, languages } }) => ({
    languages,
    language
}), (dispatch) =>({
    setLanguage: (payload) => dispatch(setLanguage(payload))
}))(SelectChangeContainer)
