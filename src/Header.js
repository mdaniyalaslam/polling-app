import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
// import MyRoutes from './Routes';

class Header extends Component {
  routeToCreate(){
    this.props.history.push('/creatingpoll')
  }
  render() {
    return (
      <div className="">
        <header className="App-header">
          <h1 className="App-title">Welcome to The Poll</h1>
        </header>
        
      </div>
    );
  }
}

export default Header;
