import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  getTime() {
    return (
      new Date()
      ).toLocaleTimeString()
  }

  render() {
    return (
      <div>
        <div>Current Time:</div>
          <h3>{this.getTime()}</h3>
        </div>
    );
  }
}

export default App;
