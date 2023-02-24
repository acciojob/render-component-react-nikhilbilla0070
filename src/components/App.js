import React, {Component, useState} from "react";
import '../styles/App.css';

const App = () => {
  const [text , setText] =useState("I am learning React. My life is getting better.");
  return (
    <div id="main">
      <p>{text}</p>
    </div>
  )
}


export default App;
