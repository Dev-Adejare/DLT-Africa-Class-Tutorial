import { useState } from 'react'


function App() {
  const [count, setCount] = useState(0)

    const handleIncrement = () => {
      setCount(count + 1)
    }
    const handleDecrement = () => {
      setCount(count - 1);
    }
    return (
      <>
      <h1>{count}</h1>
      <button onClick={handleIncrement}>increment</button>
      <button onClick={handleDecrement}>increment</button>
      </>
    )
}
export default App