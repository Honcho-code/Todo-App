import React from 'react'

const TodoList = ({ tasks, setTasks }) => {
    const deleteTask = (index)=>{
        const updateTask = tasks.filter((tasks, taskIndex) => taskIndex !== index)
        setTasks(updateTask)
    }
  return (
    <div>
        <ol>
            {tasks.map((task, index) => (
                <div key={index} className='task-list'>
                    <li>{task}</li>
                    <button onClick={()=>deleteTask(index)}>Delete</button>
                </div>
            ))}
        </ol>
    </div>
  )
}

export default TodoList