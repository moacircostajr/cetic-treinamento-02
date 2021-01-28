import React from 'react'
import { Todo } from '../models/Todo'
import { TodoListItem } from './TodoListItem'

const TodoList = (todos: Todo[]) => {

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