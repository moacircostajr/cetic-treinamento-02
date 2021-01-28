import React, { createContext } from 'react'
import { Todo } from '../models/Todo'
import { get } from '../services/TodoService'
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

  const addTodo = (title: string) => {
    // console.log('Adicionou', title)
    const todo: Todo = { id: todos.length + 1, title: title, done: false }
    setTodos([...todos, todo])
  }
  const removeTodo = (todo: Todo) => {
    const indexOfTodoToRemove = todos.indexOf(todo)
    setTodos(todos.filter((todoContext: Todo, indexTodoContext: number) => indexTodoContext !== indexOfTodoToRemove))
  }
  const toggle = (todo: Todo) => {
    const index = todos.indexOf(todo)
    todos[index].done = !todo.done
    setTodos([...todos])
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