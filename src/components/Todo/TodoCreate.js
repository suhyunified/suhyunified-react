import React, { useState, useCallback } from 'react'
import styled, { css } from 'styled-components'
import { MdAdd } from 'react-icons/md';

const CircleButton = styled.div`
  position: absolute;
  width: 100px;
  height: 100px;

  left: calc(50% - 50px);
  bottom: -50px;
  z-index: 100;

  color: white;
  cursor: pointer;
  opacity: 0.8;
  font-size: 100px;
  border-radius :50%;
  background-color: #4caf50;
  
  &:hover {
    opacity: 1;
  }

  transition: 0.2s all ease-in;

  ${props => props.open &&
    css`
      background-color: #ff6b6b;
      transform:  rotate(45deg);
    `
  }
`

const InsertFormPositioner = styled.div`
  position: absolute;
  width: 100%;
  height: 170px;
  bottom: 0;
  overflow: hidden;
  border-radius: 0 0 6px 6px;
`

const InsertForm =styled.form`
  position: absolute;
  width: 100%;
  height: 100%;
  padding: 30px;
  
  top: 100%;
  box-sizing: border-box;
  background-color: #90a4ae;

  transition: 0.2s all ease-in;
  ${props => props.open &&
    css`
      display: inline-block;
      top: 0;
    `
  }
`

const Input = styled.input`
  width: 100%;
  outline: none;
  padding: 20px;
  border: none;
  font-size: 16px;
  border-radius: 6px;
  box-sizing: border-box;
  background-color: white;
`

function TodoCreate({onCreate}) {

  const [open, setOpen] = useState(false)
  const [value, setValue] = useState('')

  const toggleInput = () => {
    setOpen(prev => !prev)
  }

  const onInput = (e) => setValue(e.target.value)
  const onSubmit = e => {
    e.preventDefault()
    onCreate(value)
    setValue('')
  }

  return(
    <>
      <CircleButton onClick={() => toggleInput()} open={open}>
        <MdAdd />
      </CircleButton>

      <InsertFormPositioner>
        <InsertForm open={open} onSubmit={onSubmit}>
          <Input 
            autoFocus 
            value={value}
            onChange={onInput}
            placeholder="할 일을 입력해주세요"
          ></Input>
        </InsertForm>
      </InsertFormPositioner>
    </>
  )
}

export default TodoCreate