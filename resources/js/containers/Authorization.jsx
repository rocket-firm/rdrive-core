import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Field, reduxForm, formValueSelector} from 'redux-form';
import { bindActionCreators } from 'redux';
import {getUserAuthenticate} from 'store/authorization';
import AuthentificateCont from './AuthentificateCont';

class Authorization extends AuthentificateCont {
    
    sendUserData(e) {
        const {getUserAuthenticate} = this.props;
        getUserAuthenticate(e)
    };
    shouldComponentUpdate(nextProps) {
        const {user} = nextProps;
        if(user.isAuthenticated) {
            nextProps.history.push('/dashboard')
        }
        return true
    }
    render() {
        const {user, handleSubmit} = this.props;
        console.dir(this.props)
        return (
            <form onSubmit={handleSubmit(this.sendUserData.bind(this))}>
                <div>
                    <label htmlFor="email">e-mail</label>
                    <Field name="email" component="input" type="email"/>
                </div>
                <div>
                    <label htmlFor="password">password</label>
                    <Field name="password" component="input" type="password" />
                </div>
                <button type="submit">Submit</button>
            </form>
        )
    }
}

Authorization = reduxForm({
    // a unique name for the form
    form: 'login'
})(Authorization)

const selector = formValueSelector('login') 

Authorization = connect(
    state => {
      // or together as a group
      const { Login, password } = selector(state, 'Login', 'password')
      return {
        Login,
        password
      }
    }
  )(Authorization)

export default connect(({
    user
}) => {return ({
    user
})}, 
    dispatch => bindActionCreators({
        getUserAuthenticate
    }, dispatch)
)(Authorization);