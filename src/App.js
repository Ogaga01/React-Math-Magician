import { React } from 'react';
import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import Calculator from './components/Calculator';
import Home from './components/Home';
import Quotes from './components/Quotes';

function App() {
  return (
    <>
      <div className="navbar">
        <h1 className="header-one">Math magicians</h1>
        <nav>
          <Link className="navlink" to="/">Home</Link>
          <Link className="navlink" to="/calculator">Calculator</Link>
          <Link className="navlinks" to="/Quotes">Quotes</Link>
        </nav>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Calculator" element={<Calculator />} />
        <Route path="/Quotes" element={<Quotes />} />
      </Routes>
    </>
  );
}

export default App;
