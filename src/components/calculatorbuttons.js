import React from 'react';

class CalculatorButtons extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="button-div">
        <button className="button" type="button">AC</button>
        <button className="button" type="button">+/-</button>
        <button className="button" type="button">%</button>
        <button className="orange" type="button">/</button>
        <button className="button" type="button">7</button>
        <button className="button" type="button">8</button>
        <button className="button" type="button">9</button>
        <button className="orange" type="button">X</button>
        <button className="button" type="button">4</button>
        <button className="button" type="button">5</button>
        <button className="button" type="button">6</button>
        <button className="orange" type="button">-</button>
        <button className="button" type="button">1</button>
        <button className="button" type="button">2</button>
        <button className="button" type="button">3</button>
        <button className="orange" type="button">+</button>
        <button className="button-o" type="button">0</button>
        <button className="button" type="button">.</button>
        <button className="orange" type="button">=</button>
      </div>
    );
  }
}

export default CalculatorButtons;
