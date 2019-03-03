import React from 'react';
import './App.css';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';
import SecondRowButtons from './components/ButtonComponents/SecondRowButtons';
import ThirdRowButtons from './components/ButtonComponents/ThirdRowButtons';
import FourthRowButtons from './components/ButtonComponents/FourthRowButtons';
import FifthRowButtons from './components/ButtonComponents/FifthRowButtons';
import ActionButton from './components/ButtonComponents/ActionButton';

const App = () => {
  return (
    <div className="calculatorContainer">
    <CalculatorDisplay/>
    <ActionButton/>
    <SecondRowButtons/>
    <ThirdRowButtons/>
    <FourthRowButtons/>
    <FifthRowButtons/>
    </div>
  );
};

export default App;
