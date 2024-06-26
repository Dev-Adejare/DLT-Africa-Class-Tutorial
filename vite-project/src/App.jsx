import { useEffect, useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [names, setNames] = useState([]);
  const [player, setPlayer] = useState({ name: "", age: "", country: "" });
  const [user, setUser] = useState("");

  // useEffect(() => {}, []);  useeffect syntax

  useEffect(() => {
    setTimeout(() => {
      setNames((prev) => [...prev, "Ade", "Yemi", "Aderayo"]);
    }, 2000);
    console.log("running the useeffect");
  }, []);

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
    e.preventDefault();
    setNames((prev) => [...prev, user]);
  };

  const handleInputChange = (e) => {
    // console.log(object)
    const inputName = e.target.name;
    const inputValue = e.target.value;
    setPlayer((prev) => ({ ...prev, [inputName]: inputValue }));
  };

  if (names.length === 0) {
    return <h1>Loading...</h1>;
  }

  return (
    <>
      <h1>Count: {count}</h1>
      <button onClick={handleIncrement}>increment</button>
      <button onClick={handleDecrement}>decrement</button>
      <button onClick={handleIncrementBy5}>handleDecrementBy5</button>
      <button onClick={handlereset}>reset</button>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={user}
          onChange={(e) => setUser(e.target.value)}
        />

        <button type="submit">Add Name</button>
        <button type="reset">Reset Input</button>
      </form>

      {names.map((name, index) => (
        <div key={index}>
          <p>Name: {name}</p>
          <p> Index of {index}</p>
        </div>
      ))}

      <form>
        Name: <input onChange={handleInputChange} name="name" type="text" />
        <br />
        Age: <input onChange={handleInputChange} name="age" type="text" />
        <br />
        Country:{" "}
        <input onChange={handleInputChange} name="country" type="text" />
        <br />
        {/* <button type="submit"> Edit Player</button> */}
      </form>

      <div>
        <h2>Player</h2>
        <p>Name: {player.name}</p>
        <p>Age: {player.age}</p>
        <p>Country: {player.country}</p>
      </div>
    </>
  );
}
export default App;
