import React, { Component } from 'react'

import Landing from './Landing.js'
import About from './About.js'

import './Right.css'

class Right extends Component {
  constructor (props) {
    super()
    this.state = {
      about: true
    }
    this.showLanding = this.showLanding.bind(this)
    this.showAbout = this.showAbout.bind(this)
  }

  showLanding (e) {
    e.preventDefault()
    this.setState({ about: true })
  }

  showAbout (e) {
    e.preventDefault()
    this.setState({ about: false })
  }

  render () {
    let view = this.state.about ? <Landing /> : <About />
    return (
      <div>
        <ul className='NavList'>
          <button onClick={this.showLanding}>Home</button>
          <button onClick={this.showAbout}>About</button>
        </ul>
        <div className='right'>
          {view}
        </div>
      </div>
    )
  }
}

export default Right
