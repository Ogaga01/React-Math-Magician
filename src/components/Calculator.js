import React from 'react';
import CalculatorButtons from './calculatorbuttons';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="calculator-div">
        <CalculatorButtons />
      </div>
    );
  }
}

export default Calculator;
