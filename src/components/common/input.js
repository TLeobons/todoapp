import { useState } from "react";

const Input = ({id, label, type='text', ...inputProps}) => {

  const [value, setValue] = useState('')

  return (
    <>
      <label for={id}>{label}</label>
      <input
        id={id}
        value={value}
        type={type}
        onChange={setValue}
        {...inputProps}
      />
    </>
  )
}

export default Input
