import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
// import MyRoutes from './Routes';

class App extends Component {
  routeToCreate(){
    this.props.history.push('/creatingpoll')
  }
  render() {
    return (
      <div className="App-header">
       
          <button onClick={this.routeToCreate.bind(this)} type="button" className="green-button  btn btn-success">Create Poll</button>
        <div className="App">
          <img src={logo} className="App-logo" alt="logo" />
        </div>

      </div>
    );
  }
}

export default App;
