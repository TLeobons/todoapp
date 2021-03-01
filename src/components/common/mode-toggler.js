import {useState, useContext, useMemo} from 'react'
import {GlobalStateContext, GlobalDispatchContext} from '../../context/globalContext';

const Toggler = () => {
	let state = useContext(GlobalStateContext)
	let dispatch = useContext(GlobalDispatchContext)

	return <label> Toggle Mode : <input type='checkbox' checked={state.theme} onChange={e=>dispatch({type:'TOGGLE_COLOR'})} /> </label>
}

export default Toggler;