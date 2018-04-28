import React, { Component } from 'react'

import Right from './Right/Right'
import Left from './Left/Left'

import './App.css'

class App extends Component {
  render () {
    return (
      <div className='App'>
        <Left />
        <Right />
      </div>
    )
  }
}

export default App
