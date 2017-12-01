import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import logo from './money_box1600.png';
import './App.css';
import Budget from './category/budget';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to Mr Hog's Budget</h1>
          </header>
          <Budget/>
        </div>
      </Router>
    );
  }
}

export default App;