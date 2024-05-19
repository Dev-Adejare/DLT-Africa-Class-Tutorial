import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [names, setNames] = useState(["Ade", "Yemi", "Aderayo"]);

  const handleIncrement = () => {
    setCount(count + 1);
  };
  const handleIncrementBy5 = () => {
    for (let i = 0; i < 5; i++) {
      setCount((prev) => prev + 1);
    }
  };
  const handleDecrement = () => {
    setCount(count - 1);
  };
  const handlereset = () => {
    setCount(0);
  };
  return (
    <>
      <h1>Count: {count}</h1>
      <button onClick={handleIncrement}>increment</button>
      <button onClick={handleDecrement}>decrement</button>
      <button onClick={handleIncrementBy5}>handleDecrementBy5</button>
      <button onClick={handlereset}>reset</button>

      {names.map((name, index, arr) => (
       <div><p key={index}>Name: {name}</p>
         <p> Index of {index}</p>
        </div> 
      ))}

      <form action="">
        <input type="text" />
        <button type="submit">Add Name</button>
      </form>
    </>
  );
}
export default App;
