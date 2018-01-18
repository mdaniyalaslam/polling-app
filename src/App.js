import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="">
        <header className="App-header">
          <h1 className="App-title">Welcome to The Poll</h1>
          <button type="button" class="btn btn-success">Success</button>
          <div className="App">
            <img src={logo} className="App-logo" alt="logo" />
          </div>
        </header>

      </div>
    );
  }
}

export default App;
