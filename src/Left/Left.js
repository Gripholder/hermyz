import React, { Component } from 'react'
import './Left.css'
import hermyz from '../images/favicon.png'
import slack from '../images/slackIcon.jpg'

class Left extends Component {
  render () {
    return (
      <div className='left'>
        <header className='h1'>
          <img src={hermyz} alt='logo' />
          Hermyz
        </header>
        <div className='slack'>
          <h4>
            Install on Slack
          </h4>
          <button><img src={slack} alt='slack' />Add to Slack</button>
        </div>
      </div>
    )
  }
}

export default Left
