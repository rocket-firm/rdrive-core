import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm, formValueSelector } from 'redux-form';
import { bindActionCreators } from 'redux';
import { getUserAuthenticate } from 'store/authorization';
import LoginInput from 'components/ui/LoginInput';
import AuthentificateCont from './AuthentificateCont';
import styled from 'styled-components';

const FormContainerUI = styled.div`
    text-align: center;
    margin-top: 20vh;
`
const FormUI = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
`
const ButtonUI = styled.button`
    padding: 10px 20px;
    font-size: 18px;
    border-radius: 0;
    border: none;
    text-transform: uppercase;
    color: #FFF;
    background-color: blue;
    cursor: pointer;
`
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
            <FormContainerUI>
                <FormUI onSubmit={handleSubmit(this.sendUserData.bind(this))}>
                    <Field name="email" component={LoginInput} type="email" label="email" />
                    <Field name="password" component={LoginInput} type="password" label="password" />
                    <ButtonUI type="submit">Submit</ButtonUI>
                </FormUI>
            </FormContainerUI>
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