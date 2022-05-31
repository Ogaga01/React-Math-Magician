import { React, Component } from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Calculator from './components/Calculator';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Routes>
        <Route path="/Calculator" element={<Calculator />} />
      </Routes>
    );
  }
}

export default App;
