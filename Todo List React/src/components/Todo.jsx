/* eslint-disable no-unused-vars */
import React, { useContext, useEffect } from 'react'
import { todoContext } from '../context/TodoContext'

// eslint-disable-next-line react/prop-types
const Todo = ({ todo }) => {
  const { todos, setTodos } = useContext(todoContext);
  const handleDone = () => {
    const updatedTodos = todos.map(element => {
      if (element.id == todo.id) {
        element.isCompleted = !element.isCompleted
      }
      return element;
    })
    setTodos(updatedTodos);
  }
  const handleDelete = () => {
    const updatedTodos = todos.filter(element => element.id != todo.id)
    setTodos(updatedTodos);
  }
  return (
    <div className='flex justify-between gap-5 items-center mt-5 bg-zinc-900 px-3 py-3 rounded-lg max-md:max-w-80'>
      <div className={`text-lg md:text-2xl ${todo.isCompleted ? 'line-through' : ''}`}>{todo.content}</div>
      <div className='flex gap-3'>
        <div className='flex gap-1 items-center'>
          <input type='checkbox' onChange={handleDone} defaultChecked={todo.isCompleted}></input>
          {todo.isCompleted ? <span>Unmark</span> : <span>Completed</span>}
        </div>
        <div>
          <button onClick={handleDelete} className='px-2 py-1 transition-all hover:scale-110 bg-red-500 hover:bg-red-600 rounded-lg'>Delete</button>
        </div>
      </div>
    </div>
  )
}

export default Todo
