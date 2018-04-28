import React, { Component } from 'react'

import Landing from './Landing.js'
import About from './About.js'

import './Right.css'

class Right extends Component {
  constructor (props) {
    super()
    this.state = { about: false }
    this.showLanding = this.showLanding.bind(this)
    this.showAbout = this.showAbout.bind(this)
  }

  showLanding (e) {
    e.preventDefault()
    this.setState({ about: false })
  }

  showAbout (e) {
    e.preventDefault()
    this.setState({ about: true })
  }

  render () {
    let view = this.state.about ? <About /> : <Landing />
    return (
      <div className='right'>
        <ul className='NavList'>
          <button onClick={this.showAbout}>About</button>
          <button onClick={this.showLanding}>Home</button>
        </ul>
        <div className='right-main'>
          {view}
        </div>
      </div>
    )
  }
}

export default Right
