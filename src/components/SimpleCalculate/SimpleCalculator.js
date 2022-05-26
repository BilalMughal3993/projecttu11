import React from 'react';
import add,{subt,multi,divi} from "./CalculateFunction"
import "./cul.css"
const SimpleCalculator = () => {
  return (
    <>
    <div className='container'>
    <ul className='ok'>
      <li><h1> Adding of 2 and 3 : {add(2,3)}</h1></li>
      <li><h1>subtration of 10 and 3 : {subt(10,3)}</h1></li>
      <li><h1>division of 24 and 3 : {divi(24,3)}</h1></li>
      <li><h1> multiply of 2 and 3 : {multi(2,3)}</h1></li>
    </ul>
    </div>
    </>
  )
}

export default SimpleCalculator