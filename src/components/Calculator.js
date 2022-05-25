import React from 'react';
import InputBox from './inputbox';
import CalculatorButtons from './calculatorbuttons';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="calculator-div">
        <InputBox />
        <CalculatorButtons />
      </div>
    );
  }
}

export default Calculator;