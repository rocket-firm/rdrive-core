import React from 'react';
import styled from 'styled-components';

const InputUI = styled.input`
    margin-left: 20px;
    margin-bottom: 20px;
`

const LoginInput = ({ error, label, name, onChange, type, value }) => {
    return <div>
                <label>{`${label}:`}</label>
                <InputUI
                  name={name}
                  type={type}
                  value={value}
                  onChange={onChange}
                />
                {error ? <span>{error}</span> : null}
            </div>
}

export default LoginInput;
