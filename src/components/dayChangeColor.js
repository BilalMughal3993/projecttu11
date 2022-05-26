import React from 'react'
import "./style.css";

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

const DayChangeColor = () => {
  return (
    <>
  <div className="container">
  <h1>Hello Sir, <span style={cssIn}>{greeting}</span></h1>
  </div>
  </>
  )
}

export default DayChangeColor;