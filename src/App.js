import React, { Component } from 'react';
import './App.css';

// Importing Left component
import Left from './Left'

// importing Left component
import Right from './Right'


class App extends Component {
  render() {
    return (
      <div className="App">
        <Left />
        {/* <Right /> */}
      </div>
    );
  }
}

export default App;
