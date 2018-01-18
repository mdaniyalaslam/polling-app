import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
// import MyRoutes from './Routes';

class App extends Component {
  render() {
    return (
      <div className="">
        <header className="App-header">
          <h1 className="App-title">Welcome to The Poll</h1>
          <button type="button" className="green-button btn btn-success">Create Poll</button>
        </header>
        <div className="App">
          <img src={logo} className="App-logo" alt="logo" />
        </div>

      </div>
    );
  }
}

export default App;
