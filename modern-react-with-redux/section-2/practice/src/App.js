import React, { Component } from 'react';
import './App.css';

const buttonText = 'Click on me!'

class App extends Component {
  render() {
    return (
      <div>
        <label class="label" for="name">
          Enter name:
        </label>
        <input id="name" type="text" />
        <button style={{backgroundColor:'blue', color:'white'}}>
          {buttonText}
        </button>
      </div>
    );
  }
}

export default App;
