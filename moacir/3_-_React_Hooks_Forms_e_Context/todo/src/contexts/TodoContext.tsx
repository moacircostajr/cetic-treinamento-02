import React, { createContext, useState, useEffect } from 'react'
import { Todo } from '../models/Todo'
import { get, save } from '../services/TodoService'
import { TodoContextType } from './TodoContextType'

export const TodoContext = createContext<TodoContextType>(
  {
    todos: [
      { id: 1, title: 'Ir ao supermercado', done: true },
      { id: 1, title: 'Ir à academia', done: false }
    ],
    addTodo: () => { },
    removeTodo: () => { },
    toggle: () => { }
  }
)

const TodoProvider = (props: any) => {
  // const todos: Todo[] = [
  //   { id: 1, title: 'Ir ao supermercado', done: true },
  //   { id: 1, title: 'Ir à academia', done: false }
  // ]

  const [todos, setTodos] = useState<Todo[]>(get)
  // const [todos, setTodos] = useState<Todo[]>([
  //   { id: 1, title: 'a', done: true },
  //   { id: 1, title: 'b', done: false }
  // ])

  useEffect(() => {
    save(todos)
  }, [todos])

  const addTodo = (title: string) => {
    // console.log('Adicionou', title)
    const todo: Todo = { id: todos.length + 1, title: title, done: false }
    setTodos([...todos, todo])
    // save(todos)
  }
  const removeTodo = (todo: Todo) => {
    // console.log('Removeu', title)
    const indexOfTodoToRemove = todos.indexOf(todo)
    setTodos(todos.filter((todoContext: Todo, indexTodoContext: number) => indexTodoContext !== indexOfTodoToRemove))
    // save(todos)
  }
  const toggle = (todo: Todo) => {
    // console.log('Alterou', title)
    const index = todos.indexOf(todo)
    todos[index].done = !todo.done
    setTodos([...todos])
    // save(todos)
  }
  return (
    <TodoContext.Provider value={
      {
        todos, addTodo, removeTodo, toggle
      }
    }>
      {props.children}
    </TodoContext.Provider>
  )
}

export default TodoProvider