import React from 'react';
import { Link } from 'react-router-dom';
import Calculator from './Calculator';

function Navbar() {
  return (
    <div>
      <div>
        <h1>Math Magicians</h1>
      </div>
      <nav>
        <ul>
            <li><Link to={<Home/>}/>Hope</li>
            <li><Link to={<Calculator/>}/>Calculator</li>
            <li><Link to={<Quotes/>}/>Quotes</li>
        </ul>
      </nav>
    </div>
  );
}
