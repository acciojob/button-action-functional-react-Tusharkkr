import React, {Component, useState} from "react";
import "./../styles/App.css";

function App() {

  let [visible , setVisible] = useState(false)

  function show(){
    setVisible(true)
  }

  return (
    <div id="main">
      <button id="click" onClick={show}>Click</button>
      {visible? <p id="para">Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy</p> : <p></p>}

    </div>
  );
}


export default App;
