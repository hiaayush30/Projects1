/* eslint-disable no-unused-vars */
import { useContext, useState } from 'react'
import './App.css'
import Header from './components/Header'
import AddTodo from './components/AddTodo'
import ShowTodos from './components/ShowTodos'


function App() {

  return (
    <div className='gap-10 bg-zinc-800 min-h-screen text-white flex flex-col justify-start items-center'>
      <Header />
      <AddTodo />
      <ShowTodos />
    </div>
  )
}

export default App
