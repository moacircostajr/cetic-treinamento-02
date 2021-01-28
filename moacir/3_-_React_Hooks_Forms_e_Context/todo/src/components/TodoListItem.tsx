import React from 'react'
import { Todo } from '../models/Todo'

interface Props {
  todo: Todo
}

export const TodoListItem = (props: Props) => {

  const onRemove = (todo: Todo) => {
    console.log('removendo', todo)
  }

  const handleChange = () => {
    console.log("mudou")
  }

  return (
    <tr className="uk-animation-slide-bottom-medium">
      <td className="uk-width-auto">
        <label><input className="uk-checkbox" type="checkbox" checked={props.todo.done} onChange={handleChange} /></label>
      </td>
      <td className="uk-width-expand">{props.todo.title}</td>
      <td className="uk-width-auto">
        <button className="uk-icon-button uk-button-danger" uk-icon="trash" onClick={() => onRemove(props.todo)}></button>
      </td>
    </tr>
  )
}
