import React from 'react'
import TodoContext from '../contexts/TodoContext' // chaves retiradas
import Navbar from './Navbar'
import TodoList from './TodoList'

const App = () => {
  return (
    <>
      <TodoContext>
        <Navbar />
        <TodoList />
      </TodoContext>
    </>
  )
}

export default App