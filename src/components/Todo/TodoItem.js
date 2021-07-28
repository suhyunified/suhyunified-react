import React from 'react';
import styled, { css } from 'styled-components';
import { MdDone, MdDelete } from 'react-icons/md';

const Remove = styled.div`
  display: none;
  text-align: center;
  align-items: center;
  justify-contents: center;
  height: 100%;
  cursor: pointer;
  color: gray;
  padding: 0 10px;
  border-radius: 6px;
  &:hover {
    color: white;
    background-color: #ff6b6b;
  }
`

const TodoItemBlock = styled.div`
  display: flex;
  align-items: center;

  width: 100%;
  height: 70px;
  padding: 20px;
  border-radius: 6px;
  margin-bottom: 15px;
  box-sizing: border-box;
  background-color: white;

  &:hover {
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);

    ${Remove} {
      display: flex;
    }
  }
`

const CheckCircle = styled.div`
  display: flex;
  text-align: center;
  align-items: center;
  justify-contents: center;

  width: 20px;
  height: 20px;
  font-size: 20px;
  cursor: pointer;
  color: #2196F3;
  border: 2px solid #dedede;
  border-radius: 50%;
  margin-right: 15px;

  ${props => 
    props.done &&
    css`
      border-color: #2196F3;
    `}
`

const Text = styled.div`
  flex: 1;

  ${props => 
    props.done &&
    css`
      color: gray;
    `
  }
`

function TodoItem({done, text, id, onDelete, onToggle}) {
  
  return (
    <TodoItemBlock>
      <CheckCircle done={done} onClick={() => onToggle(id)}>
        {done && <MdDone />}
      </CheckCircle>
      <Text done={done}>{text}</Text>
      <Remove onClick={() => onDelete(id)}>
        <MdDelete />
      </Remove>
    </TodoItemBlock>
  )
}

export default TodoItem