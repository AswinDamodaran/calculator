import "./App.css";
import { useState } from "react";

function App() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");

  const handleResult = () => {
    if(!input){
      setResult("Error")
    }
    if (input == "0/0") {
      setResult("NaN");
    } else {
      try {
        setResult(eval(input));
      } catch (err) {
        console.log(err);
      }
    }
  };

  const hndleClick = (e) => {
    if (e === "=") {
      setResult("");
      handleResult();
    } else if (e === "C") {
      setInput("");
      setResult("");
    } else {
      setInput(input + e);
    }
  };

  return (
    <div className="App">
      <div>
        <h1>React Calculator</h1>
      </div>
      <input value={input} readOnly />

      {result ? <div className="result">{result}</div> : ""}
      <div className="buttons">
        <div className="row1">
          <button onClick={() => hndleClick("7")}>7</button>
          <button onClick={() => hndleClick("8")}>8</button>
          <button onClick={() => hndleClick("9")}>9</button>
          <button onClick={() => hndleClick("+")}>+</button>
        </div>
        <div className="row2">
          <button onClick={() => hndleClick("4")}>4</button>
          <button onClick={() => hndleClick("5")}>5</button>
          <button onClick={() => hndleClick("6")}>6</button>
          <button onClick={() => hndleClick("-")}>-</button>
        </div>
        <div className="row3">
          <button onClick={() => hndleClick("1")}>1</button>
          <button onClick={() => hndleClick("2")}>2</button>
          <button onClick={() => hndleClick("3")}>3</button>
          <button onClick={() => hndleClick("*")}>*</button>
        </div>
        <div className="row4">
          <button onClick={() => hndleClick("C")}>C</button>
          <button onClick={() => hndleClick("0")}>0</button>
          <button onClick={() => hndleClick("=")}>=</button>
          <button onClick={() => hndleClick("/")}>/</button>
        </div>
      </div>
    </div>
  );
}

export default App;
