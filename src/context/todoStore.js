import { createContext, useReducer } from "react"
import {v4} from "uuid"

import {ADD_TODO, REMOVE_TODO} from "types"

export const TodosContext = createContext()

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


export const TodoStore = ({children}) => {
  const [state, dispatch] = useReducer(reducer, [])

  return(
    <TodosContext.Provider value={{state, dispatch}}>
        {children}
    </TodosContext.Provider>
  )
}