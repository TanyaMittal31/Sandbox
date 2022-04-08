//var React = require("react");
// or
import React from "react";
//var ReactDom = require("react-dom");
//or
import ReactDom from "react-dom";

/*
ReactDom.render(<h1>Hello World</h1>,document.getElementById("root"));
// or
const h1 = document.createElement("h1");
h1.innerHTML = "Hello";
document.getElementById("root").appendChild(h1);
*/

//-------------------------
ReactDom.render(
  <div>
    <h1>hey</h1>
    <p>jhdhs</p>
  </div>,
  document.getElementById("root")
);
