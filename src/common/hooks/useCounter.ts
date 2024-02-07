import type { RootState } from '../../store'
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement, incrementByAmount } from '../../features/counter/counterSlice'

function useCounter() {
  
  const count = useSelector((state: RootState) => state.counter.value)
  
  const dispatch = useDispatch()
  
  const incrementCount = () => dispatch(increment());
  const decrementCount = () => dispatch(decrement());
  const incrementCountByAmount = (amount: number) => dispatch(incrementByAmount(amount));

  return {
    count,
    incrementCount,
    decrementCount,
    incrementCountByAmount,
  }
}

export default useCounter