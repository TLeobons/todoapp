import { useState, useReducer } from "react"
import {v4} from "uuid"

import {ADD_TODO, REMOVE_TODO} from './types'
import './App.css'

function App() {

  const task = {
    id: '',
    name: '',
    done: false,
    collection: ''
  }

  const [todo, setTodo] = useState('')

  const onlyReducer = (state, action) => {
    switch (action.type){
      case ADD_TODO:
        return [
          ...state,
          {
            ...task,
            id: v4(),
            name: action.payload
          }
        ]
      case REMOVE_TODO:
        return { state.filter(item => item.id !== payload)}
      default :
        return new Error(`Invalid action ${action.type}`)
      }
    }
      
  const [state, dispatch] = useReducer(onlyReducer, [])
  
  const handleSubmit = e => {
    e.preventDefault()
    dispatch({type: 'ADD_TODO', payload: todo})
    setTodo('')
  }
  
  return (
    <div className="App">
    {console.log('state', state)}
      <form onSubmit={handleSubmit}>
        <input
        value={todo}
        onChange={e=>setTodo(e.target.value)}/>

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
    </div>
  );
}

export default App