import React from 'react'
import useCounter from '../../hooks/useCounter'

function Counter() {

  const { count, decrementCount, incrementCount } = useCounter();

  return (
    <>
      <div>{count}</div>
      <button onClick={decrementCount}>-</button>
      <button onClick={incrementCount}>+</button>
    </>
  )
}

export default Counter