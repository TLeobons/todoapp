import React from "react";

const Input = ({id, label, handleChange, value='', type='text', ...inputProps}) => {


  return (
    <>
      <label htmlFor={id}>{label}</label>
      <input
        id={id}
        value={value}
        type={type}
        onChange={e=>handleChange(e.target.value)}
        {...inputProps}
      />
    </>
  )
}

export default Input
