import React, {useContext} from 'react'
import styled from 'styled-components'
import TodoItem from 'components/Todo/TodoItem'
import { useTodoState } from 'context/TodoContext'

const TodoListBlock = styled.div`
  flex: 1;
  padding: 20px;
  overflow-y: scroll;
  border-radius: 0 0 6px 6px;
  background-color: #CFD8DC;
`

function TodoList() {
  const todos = useTodoState()

  return(
    <TodoListBlock>
      {todos.map(todo => 
        <TodoItem 
          key={todo.id} 
          id={todo.id}
          done={todo.done} 
          text={todo.text}
        ></TodoItem>
      )}
    </TodoListBlock>
  )
}

export default TodoList