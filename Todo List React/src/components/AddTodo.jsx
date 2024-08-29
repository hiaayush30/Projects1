/* eslint-disable no-unused-vars */
import React, { useContext, useRef, useState } from 'react'
import { todoContext } from '../context/TodoContext';
const AddTodo = () => {
  const count = useRef(0);
  const { todos, setTodos } = useContext(todoContext);
  const [error, setError] = useState('');
  const [inputVal, setInputVal] = useState('');
  const handleChange = (e) => {
    setInputVal(e.target.value)
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputVal.trim() === '' || inputVal.trim().length <= 3) {
      console.log('too short!')
      setError('Todo must not be empty or of less than 3 characters!');
      return;
    }
    count.current++;
    setTodos(todos => {
      return [...todos, {
        id: count.current,
        content: inputVal,
        isCompleted: false
      }]
    })
    setInputVal('');
    setError('');
  }
  return (
    <div>
      <div className='flex flex-col flex-wrap justify-center items-center'>
        <div className='text-xl md:text-3xl'>Add a Todo</div>
        <form onSubmit={handleSubmit} className='flex gap-5 flex-wrap mt-5'>
          <input type='text' onChange={handleChange} value={inputVal} className='text-black rounded-md outline-none px-2 py-1'></input>
          <button type='submit' className='px-2 py-1 rounded-md bg-red-500 text-black hover:scale-110 transition-all duration-150 hover:bg-red-600'>Add</button>
        </form>
        <div className='text-red-500 h-4'>
          {error && `${error}`}
        </div>
      </div>
    </div>
  )
}

export default AddTodo
