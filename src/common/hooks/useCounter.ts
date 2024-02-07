import type { RootState } from '../../store'
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement } from '../../features/counter/counterSlice'

function useCounter() {
  
  const count = useSelector((state: RootState) => state.counter.value)
  
  const dispatch = useDispatch()
  
  const incrementCount = () => dispatch(increment());
  const decrementCount = () => dispatch(decrement());

  return {
    count,
    incrementCount,
    decrementCount,
  }
}

export default useCounter