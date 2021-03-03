import React from "react";

const Input = ({id, handleChange, label = id, value='', type='text', ...inputProps}) => {


  return (
    <div className='form-group'>
      <label htmlFor={id}>{label}</label>
      <input
        autoFocus
        name={id}
        id={id}
        value={value}
        type={type}
        onChange={e=>handleChange(e.target.value)}
        {...inputProps}
      />
    </div>
  )
}

export default Input
