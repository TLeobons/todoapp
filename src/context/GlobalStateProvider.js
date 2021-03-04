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
