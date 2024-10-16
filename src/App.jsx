import { useDispatch, useSelector } from 'react-redux'
import './App.css'
import { decrement, increment, incrementByAmount, reset } from './features/Counter/counterSlice';
import { useState } from 'react';

function App() {

  const [ amount, setAmount] = useState(0);

  const count = useSelector((state) => state.counter.value);

  // To dispatch any action
  const dispatch = useDispatch();

  function handleIncrementClick() {
    dispatch(increment());
  }

  function handleDecrementClick() {
    dispatch(decrement());
  }

  function handleReset() {
    dispatch(reset());
  }

  function handleAmountClick() {
    dispatch(incrementByAmount(amount));
  }

  return (
    <div className='container'>
      <button onClick={handleIncrementClick}>+</button>
      <p>Count: {count}</p>
      <button onClick={handleDecrementClick}>-</button> <br /> <br />
      <button onClick={handleReset}>Reset</button>

      <input type='number'
        value={amount}
        placeholder='Enter amount'
        onChange={(e) => setAmount(e.target.value)} />
      <button onClick={handleAmountClick}>Increment by Amount</button>
    </div>
  )
}

export default App
