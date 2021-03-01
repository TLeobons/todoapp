import { createContext, useContext, useReducer } from "react"
import {v4} from "uuid"

import {ADD_TODO, REMOVE_TODO} from "types"

const GlobalStateContext = createContext([])
const GlobalDispatchContext = createContext()

const task = {
  id: '',
  name: '',
  done: false,
  collection: ''
}

const reducer = (action, state) => {
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

export const useGlobalStateContext = () => useContext(GlobalStateContext)
export const useGlobalDispatchContext =  () => useContext(GlobalDispatchContext)