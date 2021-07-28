import React from 'react'
import TodoLayout from 'layout/TodoLayout'
import { useDispatch, useSelector } from 'react-redux'
import * as todoModule from 'modules/todo'

function TodoContainer() {
  const todos = useSelector(state => state.todo)
  
  const dispatch = useDispatch()

  const onCreate = text => dispatch(todoModule.addTodo(text))
  const onDelete = id => dispatch(todoModule.deleteTodo(id))
  const onToggle = id => dispatch(todoModule.toggleTodo(id))

  return(
    <TodoLayout
      todos={todos}
      onCreate={onCreate}
      onDelete={onDelete}
      onToggle={onToggle}
    ></TodoLayout>
  )
}

export default TodoContainer