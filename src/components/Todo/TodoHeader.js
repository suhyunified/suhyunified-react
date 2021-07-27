import { useTodoState } from 'context/TodoContext';
import React from 'react';
import styled from 'styled-components';

const TodoHeaderBlock = styled.div`
  width: 100%;
  padding: 20px;
  box-sizing: border-box;
  border-bottom: 1px solid #dedede;

  .date {
    margin: 0;
  }

  .day {
    color: #333;
    font-size: 16px;
    font-weight: bold;
    margin-bottom: 30px;
  }

  .lefted-tasks {
    color: #2196F3;
    font-size: 16px;
    font-weight: bold;
  }
`

function TodoHeader() {
  const todos = useTodoState()
  const undoneTasks = todos.filter(todo => !todo.done)

  const today = new Date();
  const dateString = today.toLocaleDateString('ko-KR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })

  const dayName = today.toLocaleDateString('ko-KR', {weekday: 'long'})

  return (
    <TodoHeaderBlock>
      <h1 className="date">{dateString}</h1>
      <div className="day">{dayName}</div>
      <div className="lefted-tasks">할 일 {undoneTasks.length}개 남음</div>
    </TodoHeaderBlock>
  )
}

export default TodoHeader