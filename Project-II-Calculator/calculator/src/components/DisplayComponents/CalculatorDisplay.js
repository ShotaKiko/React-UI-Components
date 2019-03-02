import React from 'react';
import './Display.css';

function CalculatorDisplay(props) {
    return (
      <div className="calculatorDisplay">
        {/* <img src={props.student.img} alt={props.student.name} /> */}
        {/* {props.tile.value} */}
        <h1>{0}</h1>
      </div>
    );
  }
  /* 
  Make sure to console.log your props or use React DevTools to see what data is available to you.
  */
  export default CalculatorDisplay;
