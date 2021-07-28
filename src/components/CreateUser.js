import React from 'react'

function CreateUser({username, email, onChange, onCreate}) {

  const wrapperStyle = {
    display: 'flex',
    flexDirection: 'column'
  }

  return(

    <div style={wrapperStyle}>
      <input 
        name="username"
        value={username}
        onChange={onChange}
        placeholder="username"
      ></input>
      <input 
        name="email"
        value={email}
        onChange={onChange}
        
        placeholder="email"
      ></input>
      <button onClick={() => onCreate}>CREATE</button>
    </div>
  )
}

export default React.memo(CreateUser)