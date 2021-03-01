import { createContext, useReducer } from "react"
import {v4} from "uuid"

import {ADD_TODO, REMOVE_TODO, TOGGLE_COLOR} from "types"

const initialState ={
	tasks:[],
	theme:false
};
export const GlobalStateContext = createContext(initialState)
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
        return Object.assign({},state,{tasks:[
          ...state.tasks,
          {
            ...task,
            id: v4(),
            name: action.payload
          }
        ]})
	break;
      case REMOVE_TODO:
        let tasks = state.tasks.filter(item => item.id !== action.payload)
	return Object.assign({},state,{tasks})
	break;
	case TOGGLE_COLOR:
		return Object.assign({},state,{theme:!state.theme})
      default :
        return new Error(`Invalid action ${action.type}`)
      }
    }


export const GlobalProvider = ({children}) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  return(
    <GlobalDispatchContext.Provider value={dispatch}>
      <GlobalStateContext.Provider value={state}>
        {children}
      </GlobalStateContext.Provider>
    </GlobalDispatchContext.Provider>
  )
}
