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
    console.log('state', state)
    switch (action.type){
      case ADD_TODO:
        return [
          state,
          {
            ...task,
            id: v4(),
            name: action.payload
          }
        ]
        case REMOVE_TODO:
          // state.map()
          return {
          }
      default :
        return state
    }
  }

  const [state, dispatch] = useReducer(onlyReducer, [])

  const handleSubmit = e => {
    e.preventDefault()
    dispatch({type: 'ADD_TODO', payload: todo})
  }

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <input
        value={todo}
        onChange={e=>setTodo(e.target.value)}/>
        {state.map(task => (
          <div key={task.id}>
            <span>{task.name}</span>
            <button onClick={() => dispatch({type: 'REMOVE_TODO', payload: task.id})}>X</button>
          </div>
        ))}
      </form>
    </div>
  );
}

export default App