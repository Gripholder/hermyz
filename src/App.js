import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

// importing NavBar component
import Nav from './Nav';

// importing FirstSection Component
import FirstSection from './FirstSection';

import Home from './Home';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Home />
      </div>
    );
  }
}

export default App;
