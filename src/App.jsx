import React, { useState } from "react";
import "./App.css";

function App() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");

  const handleButtonClick = (value) => {
    if (value === "=") {
      try {
        setOutput(eval(input));
      } catch (error) {
        setOutput("Error");
      }
    } else if (value === "C") {
      setInput("");
      setOutput("");
    } else {
      setInput(input + value);
    }
  };

  return (
    <>
    
      <div className="container">
      <h1 className="cal">Simple Calculator</h1>
        <div className="input-Output">
          <div className="dis">
            <h1>{input}</h1>
          </div>
          <div className="dis">
            <h1>{output}</h1>
          </div>
        </div>
        <div className="buttons">
          <button onClick={() => handleButtonClick("9")}>
            <h1>9</h1>
          </button>
          <button onClick={() => handleButtonClick("8")}>
            <h1>8</h1>
          </button>
          <button onClick={() => handleButtonClick("7")}>
            <h1>7</h1>
          </button>
          <button onClick={() => handleButtonClick("6")}>
            <h1>6</h1>
          </button>
          <button onClick={() => handleButtonClick("5")}>
            <h1>5</h1>
          </button>
          <button onClick={() => handleButtonClick("4")}>
            <h1>4</h1>
          </button>
          <button onClick={() => handleButtonClick("3")}>
            <h1>3</h1>
          </button>
          <button onClick={() => handleButtonClick("2")}>
            <h1>2</h1>
          </button>
          <button onClick={() => handleButtonClick("1")}>
            <h1>1</h1>
          </button>
          <button onClick={() => handleButtonClick("0")}>
            <h1>0</h1>
          </button>
          <button onClick={() => handleButtonClick("+")}>
            <h1>+</h1>
          </button>
          <button onClick={() => handleButtonClick("-")}>
            <h1>-</h1>
          </button>
          <button onClick={() => handleButtonClick("*")}>
            <h1>*</h1>
          </button>
          <button onClick={() => handleButtonClick("/")}>
            <h1>/</h1>
          </button>
          <button onClick={() => handleButtonClick(".")}>
            <h1>.</h1>
          </button>
          <button onClick={() => handleButtonClick("=")}>
            <h1>=</h1>
          </button>
          <button onClick={() => handleButtonClick("C")}>
            <h1>C</h1>
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
