import useCounter from '../../hooks/useCounter'
import './Counter.css'

function Counter() {

  const { count, decrementCount, incrementCount } = useCounter();

  return (
    <div className='counter-app'>
      <div className='count-div'>{count}</div>
      <div className='buttons-div'>
        <button className='minus-button' onClick={decrementCount}>-</button>
        <button className='plus-button' onClick={incrementCount}>+</button>
      </div>
    </div>
  )
}

export default Counter