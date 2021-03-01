import {useState} from 'react'

import { Input } from "./input"

const Form = () => {

  const [value, setValue] = useState('');

  const handleSubmit = e => {
    e.preventDefault()
    setValuee.target.value
  }

  return (
    <form onSubmit={handleSubmit}>
      <Input/>
    </form>
  )
}

export default Form