import TodoCreate from 'components/Todo/TodoCreate';
import TodoHeader from 'components/Todo/TodoHeader';
import TodoList from 'components/Todo/TodoList';
import { TodoProvider } from 'context/TodoContext';
import React from 'react';
import styled from 'styled-components';

const TodoLayoutBlock = styled.div`
  display: flex;
  flex-direction: column;

  width: 50%;
  min-width: 400px;
  max-width: 500px;
  height: 80vh;
  min-height: 500px;

  margin: 100px 0;
  position: relative;
  background-color: white;
  border-radius: 6px;
`

function TodoLayout() {
  return (
    <TodoProvider>
      <TodoLayoutBlock>
        <TodoHeader></TodoHeader>
        <TodoList></TodoList>
        <TodoCreate></TodoCreate>
      </TodoLayoutBlock>
    </TodoProvider>
  )
}

export default TodoLayout