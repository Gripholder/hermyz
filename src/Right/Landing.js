import React, { Component } from 'react'

import './Landing.css'

class Landing extends Component {
  render () {
    return (
      <div className='landing'>
        <h1>Ya Invoices Are Due Mon!</h1>
        <p>Hermyz helps you keep track of your invoices and pay them</p>
        <p>Without leaving Slack!!!</p>
      </div>
    )
  }
}

export default Landing
