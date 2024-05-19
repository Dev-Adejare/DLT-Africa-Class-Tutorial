import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [names, setNames] = useState(["Ade", "Yemi", "Aderayo"]);
  const [user, setUser] = useState("");

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

  const handleSubmit = (e) => {
    e.preventDefault()
    setNames(prev => [...prev, user])
  };



  return (
    <>
      <h1>Count: {count}</h1>
      <button onClick={handleIncrement}>increment</button>
      <button onClick={handleDecrement}>decrement</button>
      <button onClick={handleIncrementBy5}>handleDecrementBy5</button>
      <button onClick={handlereset}>reset</button>

      <form onSubmit={handleSubmit}>
        <input type="text" 
        value={user}
        onChange={(e) => setUser(e.target.value)}
        />
        
        <button type="submit">Add Name</button>
        <button type="reset">Reset Input</button>
      </form>
      
      {names.map((name, index, arr) => (
       <div><p key={index}>Name: {name}</p>
         <p> Index of {index}</p>
        </div> 
      ))}

    </>
  );
}
export default App;
