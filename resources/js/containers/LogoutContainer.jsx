import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm, formValueSelector } from 'redux-form';
import { bindActionCreators } from 'redux';
import { logoutUserAuth } from 'store/authorization'

class LogoutContainer extends Component {

    logoutUser(e) {
        e.preventDefault()
        const { token } = this.props.user;
        const { logoutUserAuth } = this.props
        logoutUserAuth(token)
    }

    render() {
        return (
            <a onClick={this.logoutUser.bind(this)}>Logout</a>
        )
    }
}

export default connect(({
    user
}) => {
    return ({
        user
    })
},
    dispatch => bindActionCreators({
        logoutUserAuth
    }, dispatch)
)(LogoutContainer)