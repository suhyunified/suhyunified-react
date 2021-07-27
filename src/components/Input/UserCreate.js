import React from 'react';
import './UserCreate.scss';

function UserCreate({name, email, nickname}) {
  return (
    <section className="usecreate-wrapper">
      
      <div className="input-wrapper">
        <h3> Add user </h3>
        <div className="input">
          <p className="text">이름</p>
          <input value={name}></input>
        </div>

        <div className="input">
          <p className="text">닉네임</p>
          <input value={nickname}></input>
        </div>

        <div className="input">
          <p className="text">이메일</p>
          <input value={email}></input>
        </div>

        <div className="buttons">
          <button>SUBMIT</button>
          <button>RESET</button>
        </div>
      </div>
    </section>
  )
}

export default UserCreate