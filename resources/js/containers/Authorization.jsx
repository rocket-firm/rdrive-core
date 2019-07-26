import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm, formValueSelector } from 'redux-form';
import { bindActionCreators } from 'redux';
import { getUserAuthenticate } from 'store/authorization';
import LoginInput from 'components/ui/LoginInput';
import AuthentificateCont from './AuthentificateCont';

class Authorization extends AuthentificateCont {

    sendUserData(e) {
        const { getUserAuthenticate } = this.props;
        getUserAuthenticate(e)
    };
    shouldComponentUpdate(nextProps) {
        const { user } = nextProps;
        if (user.isAuthenticated) {
            nextProps.history.push('/dashboard')
        }
        return true
    }
    render() {
        const { handleSubmit } = this.props;
        return (
            <form onSubmit={handleSubmit(this.sendUserData.bind(this))}>
                <Field name="email" component={LoginInput} type="email" label="email" />
                <Field name="password" component={LoginInput} type="password" label="password" />
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
        const { email, password } = selector(state, 'email', 'password')
        return {
            email,
            password
        }
    }
)(Authorization)

export default connect(({
    user
}) => {
    return ({
        user
    })
},
    dispatch => bindActionCreators({
        getUserAuthenticate
    }, dispatch)
)(Authorization);