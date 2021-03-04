import React from 'react'
import { useReducer } from 'react'

const reducer = (state, action) => {
  switch (action.type) {
    case 'TOGGLE_THEME':
      return {}
    default:
      return state
  }
}

const useGlobalState = () => {
      const [state, dispatch] = useReducer(reducer, {isDark: false})
  
  return {state, dispatch}
}

export default useGlobalState
