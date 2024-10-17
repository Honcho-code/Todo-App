import { useState } from 'react'
import TodoList from './TodoList';

const TodoForm = () => {
    const [tasks, setTasks] = useState([])
    const [input, setInput] = useState('')
    const addTask = (e)=>{
        e.preventDefault();
        if(input.trim()){
            setTasks([...tasks, input])
            setInput('')
        }
    }
  return (
    <div>
        <form action="" onSubmit={addTask} className='task-form'>
            <input type="text" placeholder='Enter task...' value={input} onChange={(e)=>setInput(e.target.value)}/>
            <button type='submit'>Add task</button>
        </form>
        <TodoList tasks = {tasks} setTasks={setTasks}/>
    </div>
  )
}

export default TodoForm