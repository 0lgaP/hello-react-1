import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const Button = (props) => {
  const{word, reset} = props;
  return (
    // <input 
    // value={word}
    // onChange={(event) => setWord(event.target.value)}
    // placeholder="reset"
    // />
    <button onClick={reset}>
      {word}
    </button>
  );
};

const Application = () => {
  
  const [name, setName] = useState("");



  // your code here

  const reset = () => {
    setName("");
    console.log("reset");
    // your code here
  };
  const emptyCheck = (name === "") ? "" : `Hello ${name}`;
  return (
    <main>
      <input 
      value={name}
      onChange={(event) => setName(event.target.value)}
      placeholder="Type your name"
      />
      <Button word="Reset" reset={reset} />
      <h1>{emptyCheck}</h1>
    </main>
  );
};

ReactDOM.render(<Application />, document.getElementById("root"));
