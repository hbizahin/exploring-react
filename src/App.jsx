import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Actor from "./Actor";
import Counter from "./Counter";
function App() {
  const actors = ["Sakib", "Musfique", "Mashrafi", "Rubel"];
  function handleClick() {
    alert("button clicked");
  }
  const handleClick2 = () => {
    alert("button clicked2");
  };
  return (
    <>
      <h3>React Core Concepts 2</h3>
      <Counter></Counter>
      <button onClick={handleClick}> Click me </button>
      <button onClick={handleClick2}> Click2</button>
      <h3>Replit added</h3>
      <h3>Replit added and will be pulled now!</h3>
      <h4>This one is from VS code! successfully completed! pulling </h4>
    </>
  );
}

export default App;
