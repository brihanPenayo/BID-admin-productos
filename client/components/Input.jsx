import React from 'react'

const Input = props => {
    const { label, type, onChange, value, name, placeholder } = props;
    return (
        <p>
            <label htmlFor={name}>{label} </label> <br />
            <input type={type} name={name} id={name} onChange={onChange} value={value} min={0} placeholder={placeholder} required />
        </p>
    )
}

export default Input