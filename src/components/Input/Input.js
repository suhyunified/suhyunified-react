import React, { useCallback, useState } from 'react';

import './Input.scss';
import UserCreate from './UserCreate'

function Input() {

  const [inputs, setInputs] = useState({
    name: '',
    email: '',
    nickname: ''
  })

  const onChange = useCallback(e => {
    const {name, value} = e.target
    setInputs({
      ...inputs,
      [name]: value
    })
  })

  const [users, setUsers] = useState([])

  const addUser = useCallback(e => {
    
  })

  return(
    <section className="input-wrapper">
      <div className="input-feature">
        <h1 className="title">
          Input
        </h1>
        <UserCreate onChange={onChange}></UserCreate>
      </div>
    </section>
  )
}

export default Input