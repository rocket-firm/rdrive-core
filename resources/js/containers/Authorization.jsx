import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getUserAuthenticate } from 'store/authorization';
import LoginInput from 'components/ui/LoginInput';
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
const Authorization = ({ user, getUserAuthenticate: authenticateUser }) => {
    const navigate = useNavigate();
    const [credentials, setCredentials] = useState({ email: '', password: '' });
    const [errors, setErrors] = useState({});

    useEffect(() => {
        if (user.isAuthenticated) {
            navigate('/dashboard/', { replace: true });
        }
    }, [navigate, user.isAuthenticated]);

    const handleChange = ({ target: { name, value } }) => {
        setCredentials(current => ({ ...current, [name]: value }));
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        const result = await authenticateUser(credentials);
        setErrors(result.ok ? {} : result.errors);
    };

    return (
        <FormContainerUI>
            <FormUI onSubmit={handleSubmit}>
                <LoginInput
                    name="email"
                    type="email"
                    label="email"
                    value={credentials.email}
                    error={errors.email}
                    onChange={handleChange}
                />
                <LoginInput
                    name="password"
                    type="password"
                    label="password"
                    value={credentials.password}
                    error={errors.password}
                    onChange={handleChange}
                />
                <ButtonUI type="submit">Submit</ButtonUI>
            </FormUI>
        </FormContainerUI>
    );
};

export default connect(
    ({ user }) => ({ user }),
    { getUserAuthenticate },
)(Authorization);
