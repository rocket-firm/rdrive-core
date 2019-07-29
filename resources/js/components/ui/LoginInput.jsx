import React from 'react';
import styled from 'styled-components';

const InputUI = styled.input`
    margin-left: 20px;
    margin-bottom: 20px;
`

const LoginInput = ({input, meta, label, type}) => {
    const {invalid, error} = meta;
    return <div>
                <label>{`${label}:`}</label>
                <InputUI {...input} type={type} />
                {invalid ? <span>{error}</span> : null}
            </div>
}

export default LoginInput;