import {useState} from 'react'

import { Input } from "./input"

const Form = () => {

  const [value, setValue] = useState('')

  const handleSubmit = e => {
    e.preventDefault()
    dispatch({type: 'ADD_TODO', payload: todo})
    setTodo('')
  }


  return (
    <form onSubmit={handleSubmit}>
      <Input/>
      <form onSubmit={handleSubmit}>
        <Input
        value={todo}
        handleChange={e=>setTodo(e.target.value)}/>

        {state.map(task => (
          <div key={task.id}>
            <span>{task.name}</span>
            <button
              type='button'
              onClick={() => dispatch({type: 'REMOVE_TODO', payload: task.id})}>
              X
            </button>
          </div>
        ))}
      </form>
    </form>
  )
}

export default Form