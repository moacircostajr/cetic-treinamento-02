import React, { useContext } from 'react'
import { TodoContext } from '../contexts/TodoContext'
import { TodoContextType } from '../contexts/TodoContextType'
import { Todo } from '../models/Todo'
import { TodoListItem } from './TodoListItem'

const TodoList = () => {
  const { todos } = useContext<TodoContextType>(TodoContext)
  return (
    <div className="uk-container">
      <table className="uk-table">
        <caption>Lista de Tarefas</caption>
        <thead>
          <tr>
            <th>#</th>
            <th>Tarefa</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {
            // todos?.map((todo: Todo) => (<div key={todo.id}>{todo.title}</div>))
            todos?.map((todo: Todo) => (<TodoListItem todo={todo} />))
          }
        </tbody>
      </table>
    </div>
  )
}

export default TodoList