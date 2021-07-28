import React from 'react'
import styled from 'styled-components'
import TodoItem from 'components/Todo/TodoItem'

const TodoListBlock = styled.div`
  flex: 1;
  padding: 20px;
  overflow-y: scroll;
  border-radius: 0 0 6px 6px;
  background-color: #CFD8DC;
`

function TodoList({todos, onDelete, onToggle}) {
  return(
    <TodoListBlock>
      {todos.map(todo => 
        <TodoItem 
          key={todo.id} 
          id={todo.id}
          done={todo.done} 
          text={todo.text}
          onDelete={onDelete}
          onToggle={onToggle}
        ></TodoItem>
      )}
    </TodoListBlock>
  )
}

export default TodoList