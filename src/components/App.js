import React, { useState } from "react";
import "../styles/App.css";

const App = () => {
  const [name1, setName1] = useState("");
  const [name2, setName2] = useState("");
  const [result, setResult] = useState("");

  const handleFirstChange = (e) => {
    setName1(e.target.value);
  };
  const handleSecondChange = (e) => {
    setName2(e.target.value);
  };

  const length = () => {
    let input1 = name1;
    let input2 = name2;

    for (let i = 0; i < input1.length; i++) {
      for (let j = 0; j < input2.length; j++) {
        if (input1[i] === input2[j]) {
          input1 = input1.replace(input1[i], "");
          input2 = input2.replace(input2[j], "");
        }
      }
    }
    const totalLength = input1.length + input2.length;
    return totalLength % 6;
  };

  const output = (num) => {
    if (name1 && name2) {
      switch (num) {
        case 0:
          setResult("Siblings");
          break;
        case 1:
          setResult("Friends");
          break;
        case 2:
          setResult("Love");
          break;
        case 3:
          setResult("Affection");
          break;
        case 4:
          setResult("Marriage");
          break;
        case 5:
          setResult("Enemy");
          break;
        default:
          setResult(null);
      }
    } else {
      setResult("Please Enter valid input");
    }
  };

  const clear = () => {
    setName1("");
    setName2("");
    setResult("");
  };

  const test = () => {
    output(length());
  };

  return (
    <div id="main">
      <input
        data-testid="input1"
        placeholder="Enter Name 1"
        value={name1}
        onChange={handleFirstChange}
      />
      <input
        data-testid="input2"
        placeholder="Enter Name 2"
        value={name2}
        onChange={handleSecondChange}
      />
      <button data-testid="calculate_relationship" onClick={test}>
        Calculate Relationship Future
      </button>
      <button data-testid="clear" onClick={clear}>
        Clear
      </button>
      <h3 data-testid="answer">{result}</h3>
    </div>
  );
};

export default App;

