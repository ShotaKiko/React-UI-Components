import React from 'react';
import './Button.css';
import Tile from "./Tile";
import ActionButton from './ActionButton';
import CalculatorDisplay from '../DisplayComponents/CalculatorDisplay';
import FifthRowButtons from './FifthRowButtons';

const TileOne = {
  position: 1,
    value: 7,
};
const TileTwo = {
  position: 2,
    value: 8,
};
const TileThree = {
  position: 3,
    value: 9,
};
const TileFour = {
  position: 4,
    value: 4,
};
const TileFive = {
  position: 5,
    value: 5,
};
const TileSix = {
  position: 6,
    value: 6,
};
const TileSeven = {
  position: 7,
    value: 1,
};
const TileEight = {
  position: 8,
    value: 2,
};
const TileNine = {
  position: 9,
    value: 3,
};


function NumberButton(props) {
    return (
      <div className="calculatorContainer">
        <div>
          <CalculatorDisplay/>
        </div>
        
        <div>
          <ActionButton/>
        </div>

        <div className="secondRow">
          <div className="tile 1">
              <Tile tile= {TileOne}/>
          </div>
          
          <div className="tile 2">
              <Tile tile= {TileTwo}/>
          </div>
          
          <div className="tile 3">
              <Tile tile= {TileThree}/>
          </div>
          
          <div className="tileOperator">
            ×
          </div>
        </div>
        
        <div className="thirdRow">
        <div className="tile 4">
              <Tile tile= {TileFour}/>
          </div>
          
          <div className="tile 5">
              <Tile tile= {TileFive}/>
          </div>
          
          <div className="tile 6">
              <Tile tile= {TileSix}/>
          </div>
          
          <div className="tileOperator">
            -
          </div>
        </div>
        
        <div className="fourthRow">
          <div className="tile 7">
              <Tile tile= {TileSeven}/>
          </div>
          
          <div className="tile 8">
              <Tile tile= {TileEight}/>
          </div>
          
          <div className="tile 9">
              <Tile tile= {TileNine}/>
          </div>
          
          <div className="tileOperator">
            +
          </div>
        </div>

        <div>
          <FifthRowButtons/>
        </div>
      
      </div>
    );
  }
  /* 
  Make sure to console.log your props or use React DevTools to see what data is available to you.
  */
  export default NumberButton;
  