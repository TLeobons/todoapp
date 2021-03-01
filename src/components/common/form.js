import {useState} from 'react'

import { useGlobalDispatchContext } from '../../context/globalContext'

const Form = ({children}) => {

  const dispatch = useGlobalDispatchContext()

  const [value, setValue] = useState('')

  const handleSubmit = e => {
    e.preventDefault()
    dispatch({type: 'ADD_TODO', payload: todo})
    // setTodo('')
  }

  return (
    <form onSubmit={handleSubmit}>
      {children}    
    </form>
  )
}

export default Form