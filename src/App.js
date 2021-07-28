import React, {useRef, useState, useMemo, useCallback} from 'react'

import './App.scss';
import { Route } from 'react-router-dom'
import Header from './components/Header';
import Counter from './components/Counter';
import Input from './components/Input/Input';
import InputSample from './InputSample'
import CreateUser from './components/CreateUser'
import UserList from './UserList'
import HomeLayout from 'layout/HomeLayout'
import BasicLayout from 'layout/BasicLayout';
import TodoContainer from 'containers/TodoContainer';

function CountActiveUsers(users){
  return users.filter(user => user.active).length
}

function App() {
  const [inputs, setInputs] = useState({
    username: '',
    email: ','
  })
  const { username, email } = inputs

  const [users, setUsers] = useState([
    {
      id: 1,
      username: 'velopert',
      email: 'public.velopert@gmail.com'
    },
    {
      id: 2,
      username: 'tester',
      email: 'tester@example.com'
    },
    {
      id: 3,
      username: 'liz',
      email: 'liz@example.com'
    }
  ]);

  const nextId = useRef(4);
  const onCreate = useCallback(() => {
    // 나중에 구현 할 배열에 항목 추가하는 로직
    // ...

    const user = {
      id: nextId.current,
      username,
      email,
    }
    
    setUsers([ ...users, user])
    setInputs({
      username: '',
      email: ''
    })

    nextId.current += 1;
  }, [users, username, email]) 

  const onRemove = useCallback(id => {
    setUsers(users.filter(user => user.id !== id))
  }, [users])

  const onChange = useCallback(e => {
    const { name, value } = e.target
    setInputs({
      ...inputs,
      [name]: value
    })
  }, [users])

  const onToggle = useCallback(id => {
    setUsers(
      users.map(user => 
        user.id === id 
        ? {...user, active: !user.active} 
        : user
      )
    )
  }, [users]) 

  const count = useMemo(() => CountActiveUsers(users), [users]) 



  return (
    <div className="App">
      <Header name="My React" /> 
      <Route path="/" exact component={HomeLayout}></Route>
      <Route path="/basic" component={BasicLayout}></Route>
      <Route path="/todo" component={TodoContainer}></Route>
      {/* <TodoLayout></TodoLayout> */}
      {/* <Counter></Counter>
      <Input></Input>
      <InputSample />
      <CreateUser
        username={username}
        email={email}
        onChange={onChange}
        onCreate={onCreate}
      ></CreateUser>
      <div>활성 사용자 수: {count}</div>
      <UserList 
        users={users}
        onRemove={onRemove}
        onToggle={onToggle}
      ></UserList> */}
    </div>
  );
}

export default App;
