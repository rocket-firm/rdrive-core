import React from 'react';


const LoginInput = ({input, meta, label, type}) => {
    const {invalid, error} = meta;
    return <div>
                <label>{label}</label>
                <input {...input} type={type} />
                {invalid ? <span>{error}</span> : null}
            </div>
}

export default LoginInput;