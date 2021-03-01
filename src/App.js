import { useState, useReducer } from "react"
import uuid from "uudid"
import './App.css'

function App() {

  const task = {
    name: '',
    done: false,
    collection: ''
  }

  const [tasks, setTasks] = useState([])

  const onlyReducer = (state, action) => {
    switch (action.type){
      case 'ADD_TODO':
        return {
          state,
          id: uuid.v4(),
        }
      default :
        return state
    }
  }

  const [state, dispatch] = useReducer(onlyReducer, task)

  return (
    <div className="App">
      <input onChange={e => dispatch({type: 'ADD_TODO', payload: e.target.value})}/>
      {tasks.map(task => (
        <div key={task.id}>
          <span>{task.name}</span>
          <button onClick={dispatch({type: 'ADD_TODO', payload: task.id})}>X</button>
        </div>
      ))}
    </div>
  );
}

export default App