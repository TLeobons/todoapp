import { useState, useReducer, useMemo } from "react"
import {v4} from "uuid"

import {ADD_TODO, REMOVE_TODO} from './types'
import './App.css'


  const task = {
    id: '',
    name: '',
    done: false,
    collection: ''
  }


  const onlyReducer = (state, action) => {
    //console.log('state', state)
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
	break;
        case REMOVE_TODO:
          // state.map()
          return state.filter(item=>item.id!==action.payload);
	break;
      default :
        return state
    }
  }



function App() {

	const [todo, setTodo] = useState('');
  const [state, dispatch] = useReducer(onlyReducer, [])

  const handleSubmit = e =>{
    	e.preventDefault()
 	dispatch({type: 'ADD_TODO', payload: todo})
	setTodo('');
  };
	//log state, only when it has changed
	useMemo(()=>console.log('state',state),[state]);

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <input
        value={todo}
        onChange={e=>setTodo(e.target.value)}
	/>

        {state.map(task => (
          <div key={task.id}>
            <span>{task.name}</span>
            <button type="button" onClick={() => dispatch({type: 'REMOVE_TODO', payload: task.id})}>X</button>
          </div>
        ))}
      </form>
    </div>
  );
}

export default App