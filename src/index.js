import React from "react";
import ReactDOM from "react-dom";

var fname = "Alok";
var lName = "Kumar";
var number = 4;

ReactDOM.render(
  <div>
    <h1>Hello {fname + " " + lName}!</h1>
    <p>My lucky number is {Math.floor(Math.random() * 100) + 1}</p>
  </div>,
  document.getElementById("root")
);
