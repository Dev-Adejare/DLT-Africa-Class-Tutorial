import { useState } from 'react'


function App() {
  const [count, setCount] = useState(0)

    const handleIncrement = () => {
      setCount(count + 1)
    }
    const handleIncrementBy5 = () => {
      for (let i = 0; i < 5; i++) {

        setCount((prev) => prev + 1)
      }
    }
    const handleDecrement = () => {
      setCount(count - 1);
    }
    const handlereset = () => {
      setCount(0);
    }
    return (
      <>
      <h1>Count: {count}</h1>
      <button onClick={handleIncrement}>increment</button>
      <button onClick={handleDecrement}>decrement</button>
      <button onClick={handleIncrementBy5}>handleDecrementBy5</button>
      <button onClick={handlereset}>reset</button>
      </>
    );
}
export default App