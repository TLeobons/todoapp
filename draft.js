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
        let filterArray = state.filter(item => item.id !== action.payload)
        return [...filterArray]
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
            <button onClick={() => dispatch({type: 'REMOVE_TODO', payload: task.id})}>X</button>
          </div>
        ))}
      </form>
    </div>
  );
}

export default App

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

        import { createContext, useReducer } from "react"
        import {v4} from "uuid"
        
        import {ADD_TODO, REMOVE_TODO} from "types"
        
        export const GlobalStateContext = createContext([])
        export const GlobalDispatchContext = createContext()
        
        const task = {
          id: '',
          name: '',
          done: false,
          collection: ''
        }
        
        const reducer = (state,action) => {
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
                return state.filter(item => item.id !== action.payload)
              default :
                return new Error(`Invalid action ${action.type}`)
              }
            }
        
        
        export const GlobalProvider = ({children}) => {
          const [state, dispatch] = useReducer(reducer, [])
        
          return(
            <GlobalDispatchContext.Provider value={dispatch}>
              <GlobalStateContext.Provider value={state}>
                {children}
              </GlobalStateContext.Provider>
            </GlobalDispatchContext.Provider>
          )
        }

        ////////////////////////////////////////////////////////////////

        import React from 'react'
import useGlobalState from 'hooks/useGlobalState'
import Context from './globalContext'

const GlobalStateProvider = ({children}) => {
  return (
    <div>
      <Context.Provider value={useGlobalState}>
        {children}
      </Context.Provider>
    </div>
  )
}

export default GlobalStateProvider
////////////////////////////////////////////////////////////////
