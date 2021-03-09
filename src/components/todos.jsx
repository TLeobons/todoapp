import { useContext } from "react"
import { todo } from "context/todoStore";


const Todos = () => {

  const todos = useContext()
  
  return (
    <div>
      <input
        value={todos}/>
    </div>
  )
}

export default Todos
