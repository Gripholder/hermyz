import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

// importing NavBar component
import Nav from './Nav';

// importing FirstSection Component
import FirstSection from './FirstSection'

class App extends Component {
  render() {
    return (
      <div className="App">
      <Nav />
      <FirstSection />
      </div>
    );
  }
}

export default App;
