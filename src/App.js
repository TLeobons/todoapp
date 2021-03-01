import {useState, useReducer} from "react"
import {v4} from "uuid"

import {ADD_TODO, REMOVE_TODO} from './types'
import './App.css'

const initialState = [];
const task = {
    id: '',
    name: '',
    done: false,
    collection: ''
}

function reducer(state, action) {
    console.log(action)
    switch (action.type) {
        case ADD_TODO:
            return [...state, {...action.payload}]
        default:
            throw new Error();
    }
}

function App() {

    const [todo, setTodo] = useState('')
    const [state, dispatch] = useReducer(reducer, initialState);
    const item = state;
    const  handleSubmit = e => {
        e.preventDefault()
        let todoIten = {
            ...task,
            id: v4(),
            name: todo
        }
        dispatch({type: ADD_TODO, payload: todoIten})
        console.log(state)
    }

    return (
        <div className="App">
            <form onSubmit={handleSubmit}>
                <input
                    value={todo}
                    onChange={e => setTodo(e.target.value)}/>

                {item && item.map(task => (
                    <div key={task.id}>
                        <span>{task.name}</span>

                    </div>
                ))}
            </form>
        </div>
    );
}

export default App
