import React from "react";
import ReactDom from "react-dom";

const curDate = new Date().toLocaleDateString();
const curTime = new Date().toLocaleTimeString();
ReactDom.render(
 
  <><h1>Hello World</h1>


  <h1>current date is {curDate}</h1> 
  <h1>current Time is {curTime}</h1>

  </>,document.getElementById("root"))