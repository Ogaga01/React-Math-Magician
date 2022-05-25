import React, { useState } from 'react';
import calculate from '../logic/calculate';

function Calculator() {
  const [state, setState] = useState({
    obj: {
      total: null,
      next: null,
      operation: null,
    },
  });

  const handleClick = (buttonName) => {
    const { obj } = state;
    setState({ obj: calculate(obj, buttonName) });
  };

  const { obj } = state;

  return (
    <div className="calculator-div">
      <div className="input">{obj.next || obj.total || 0}</div>
      <div className="button-div">
        <button onClick={() => handleClick('AC')} className="button" type="button">AC</button>
        <button onClick={() => handleClick('+/-')} className="button" type="button">+/-</button>
        <button onClick={() => handleClick('%')} className="button" type="button">%</button>
        <button onClick={() => handleClick('÷')} className="orange" type="button">÷</button>
        <button onClick={() => handleClick('7')} className="button" type="button">7</button>
        <button onClick={() => handleClick('8')} className="button" type="button">8</button>
        <button onClick={() => handleClick('9')} className="button" type="button">9</button>
        <button onClick={() => handleClick('x')} className="orange" type="button">x</button>
        <button onClick={() => handleClick('4')} className="button" type="button">4</button>
        <button onClick={() => handleClick('5')} className="button" type="button">5</button>
        <button onClick={() => handleClick('6')} className="button" type="button">6</button>
        <button onClick={() => handleClick('-')} className="orange" type="button">-</button>
        <button onClick={() => handleClick('1')} className="button" type="button">1</button>
        <button onClick={() => handleClick('2')} className="button" type="button">2</button>
        <button onClick={() => handleClick('3')} className="button" type="button">3</button>
        <button onClick={() => handleClick('+')} className="orange" type="button">+</button>
        <button onClick={() => handleClick('0')} className="button-o" type="button">0</button>
        <button onClick={() => handleClick('.')} className="button" type="button">.</button>
        <button onClick={() => handleClick('=')} className="orange" type="button">=</button>
      </div>
    </div>
  );
}

export default Calculator;
