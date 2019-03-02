import React from 'react';
import './Button.css';

function NumberButton(props) {
    return (
      <div className="calculator">
        <img src={props.student.img} alt={props.student.name} />
        <div className="firstRow">
          
        </div>
      </div>
    );
  }
  /* 
  Make sure to console.log your props or use React DevTools to see what data is available to you.
  */
  export default NumberButton;
  