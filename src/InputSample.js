import React, {useState} from 'react'

function InputSample () {
  const [inputs, setInputs] = useState({
    name: '',
    nickname: ''
  })

  const { name, nickname } = inputs

  const onInput = e => {
    const { name, value } = e.target
    setInputs({
      ...inputs,
      [name]: value
    })
  }

  const onReset = () => {
    setInputs({
      name: '',
      nickname: ''
    })
  }

  return (
    <>
      <div>
        <input 
          placeholder="이름" 
          name="name" 
          value={name}
          onChange={onInput}
        ></input>
        <input 
          placeholder="닉네임" 
          name="nickname" 
          value={nickname}
          onChange={onInput}
        ></input>
        <button onClick={onReset}> 초기화 </button>

      </div>
      <div>{name}({nickname})</div>
    </>
  )
}

export default InputSample