import React from 'react';

const Select = ({languages, changeFunc, language}) => {
    return (
        <select onChange = {(e) => changeFunc(e.target.value)} value={language}>
            {languages.map( (e, i) => (
                (language == e.value) ? 
                    <option key={i} value={e.value} checked>{e.label}</option> :
                    <option key={i} value={e.value}>{e.label}</option>
            ))}
        </select>
    )
}

export default Select;