import React from "react";
import ReactDom from "react-dom";
import "./index.css"

// import dayChangeColor from "./components/dayChangeColor";
const cssIn = {}
let greeting="";
let curDate = new Date();
curDate=curDate.getHours();
if(curDate>=5&&curDate<=12)
{
  greeting="Good Morning";
  cssIn.color="red";
}
else if(curDate>=12&&curDate<=19)
{
greeting="Good Afternoon";
cssIn.color="green";
}
else{
  greeting="Good Night";
  cssIn.color="blue"
}
// const curTime = new Date().toLocaleTimeString();

ReactDom.render(
 
  
  //  <><h1>Hello World</h1>>


  // <h1>current date is {curDate}</h1> 
  // <h1>current Time is {curTime}</h1>
  // </>
  <>
  <div className="container">
  <h1>Hello Sir, <span style={cssIn}>{greeting}</span></h1>
  </div>
  </>,
  
  document.getElementById("root"))