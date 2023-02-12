import React from 'react'

const Input = props => {
    const { label, type, onChange, value, name, placeholder } = props;
    return (
        <div>
            <label htmlFor={name}>{label} </label>
            <input type={type} name={name} id={name} onChange={onChange} value={value} min={0} placeholder={placeholder} required />
        </div>
    )
}

export default Input