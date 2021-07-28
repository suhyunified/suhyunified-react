import React, { useCallback, useState } from 'react'
import './Counter.scss';

function Counter({ number, diff, onIncrease, onDecrease, onSetDiff }) {
  const onChange = e => {
    onSetDiff(+e.target.value)
  }

  return (
    <section className="counter-wrapper">
      <div className="counter-feature">
        <h1 className="title">Counter</h1>
        <div className="contents">
          <h1 className="result"> {number} </h1>
          <div className="button-wrapper">
            <input value={diff} onChange={onChange}></input>
            <button onClick={onIncrease}> INCERASE </button>
            <button onClick={onDecrease}> DECREASE </button>
          </div>
        </div>
      </div>
      <div className="counter-dev">
        <div>
          <h3>useCallback</h3>
          <p>특정 함수를 새로 만들지 않고 재사용하고싶을 때 사용한다.</p>
        </div>
      </div>
    </section>
  )
}

export default Counter