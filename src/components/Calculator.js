import React from 'react';
import calculate from '../logic/calculate';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      obj: {
        total: null,
        next: null,
        operation: null,
      },
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick = (buttonName) => {
    const { obj } = this.state;
    this.setState({ obj: calculate(obj, buttonName) });
  };

  render() {
    const { obj } = this.state;
    return (
      <div className="calculator-div">
        <div className="input">{obj.next || obj.total || 0}</div>
        <div className="button-div">
          <button onClick={() => this.handleClick('AC')} className="button" type="button">AC</button>
          <button onClick={() => this.handleClick('+/-')} className="button" type="button">+/-</button>
          <button onClick={() => this.handleClick('%')} className="button" type="button">%</button>
          <button onClick={() => this.handleClick('÷')} className="orange" type="button">÷</button>
          <button onClick={() => this.handleClick('7')} className="button" type="button">7</button>
          <button onClick={() => this.handleClick('8')} className="button" type="button">8</button>
          <button onClick={() => this.handleClick('9')} className="button" type="button">9</button>
          <button onClick={() => this.handleClick('x')} className="orange" type="button">x</button>
          <button onClick={() => this.handleClick('4')} className="button" type="button">4</button>
          <button onClick={() => this.handleClick('5')} className="button" type="button">5</button>
          <button onClick={() => this.handleClick('6')} className="button" type="button">6</button>
          <button onClick={() => this.handleClick('-')} className="orange" type="button">-</button>
          <button onClick={() => this.handleClick('1')} className="button" type="button">1</button>
          <button onClick={() => this.handleClick('2')} className="button" type="button">2</button>
          <button onClick={() => this.handleClick('3')} className="button" type="button">3</button>
          <button onClick={() => this.handleClick('+')} className="orange" type="button">+</button>
          <button onClick={() => this.handleClick('0')} className="button-o" type="button">0</button>
          <button onClick={() => this.handleClick('.')} className="button" type="button">.</button>
          <button onClick={() => this.handleClick('=')} className="orange" type="button">=</button>
        </div>
      </div>
    );
  }
}

export default Calculator;
