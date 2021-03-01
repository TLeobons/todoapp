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
	break;
      case REMOVE_TODO:
        return state.filter(item => item.id !== action.payload)
	break;
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
