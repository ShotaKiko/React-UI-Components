import React from 'react';
import './App.css';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';
import SecondRowButtons from './components/ButtonComponents/SecondRowButtons';
import ThirdRowButtons from './components/ButtonComponents/ThirdRowButtons';
import FourthRowButtons from './components/ButtonComponents/FourthRowButtons';
import FifthRowButtons from './components/ButtonComponents/FifthRowButtons';
import ActionButton from './components/ButtonComponents/ActionButton';
import NumberButton from './components/ButtonComponents/NumberButton';

const App = () => {
  return (
    <div className="calculator">
      <NumberButton/>
    </div>
  );
};

export default App;
