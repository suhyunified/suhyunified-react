import React, {useEffect} from 'react'

const User = React.memo(function User ({user, onRemove, onToggle}) {
  const usernameStyle = {
    cursor: 'pointer',
    color: user.active ? 'green' : 'black'
  }

  useEffect(() => {
    console.log('user 값이 설정됨');
    console.log(user);
    return () => {
      console.log('user 가 바뀌기 전..');
      console.log(user);
    };
  }, [user]);

  const {username, email, id} = user
  return (
    <div>
      <div style={usernameStyle} onClick={() => onToggle(user.id)}>
        username: {username}
      </div>
      <div>
        email: {email}
      </div>
      <button onClick={() => onRemove(id)}> 삭제 </button>
      <br />
    </div>

  )
})

function UserList({users, onRemove, onToggle }) {
  return (
    <>
      {
        users.map(user => {
          return <User 
            user={user} 
            key={user.id} 
            onRemove={onRemove}
            onToggle={onToggle} 
          />
        })
      }
    </>

  )
}

export default React.memo(UserList)