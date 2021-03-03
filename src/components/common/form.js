import {useState, useContext, useMemo} from 'react'

import Input  from "./input";
import {GlobalStateContext, GlobalDispatchContext} from 'context/globalContext'

const Form = () => {
	
  const [todo, setTodo] = useState('')
	const dispatch = useContext(GlobalDispatchContext);
	const state = useContext(GlobalStateContext);
  const handleSubmit = e => {
    e.preventDefault()
    dispatch({type: 'ADD_TODO', payload: todo})
    setTodo('')
  }

	useMemo(()=>console.log(state),[state]);

	return (
		<form onSubmit={handleSubmit}>
			<Input
				value={todo}
				handleChange={setTodo}
			/>
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
		</form>
	);

}


	//So based on useContext I decided to comment out the below code, but left it for you to play with
/**
const Form = () => {
	
  const [todo, setTodo] = useState('')


  const handleSubmit = (e,dispatch) => {
    e.preventDefault()
    dispatch({type: 'ADD_TODO', payload: todo})
    // setTodo('')
  }


	return (
		<GlobalDispatchContext.Consumer>
			{dispatch=>(
			<GlobalStateContext.Consumer>
				{state=>(
					<form onSubmit={e=>handleSubmit(e.dispatch)}>
						<Input
							value={todo}
							handleChange={setTodo}/>
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
				    </form>
				)}
				
			</GlobalStateContext.Consumer>
			)}
		</GlobalDispatchContext.Consumer>
	);

}

**/
export default Form;