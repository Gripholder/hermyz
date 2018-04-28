import React, { Component } from 'react'
import './Left.css'
import hermes from './hermes.jpg'
import slack from './slackIcon.jpg'

class Left extends Component {
  render () {
    return (
      <div className='left'>
        <header className='h1'>
          <img src={hermes} alt='logo' />
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
