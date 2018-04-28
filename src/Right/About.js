import React, { Component } from 'react'
import './About.css'

class About extends Component {
  render () {
    return (
      <div>
        <div className='description'>
          <p>Small businesses face challenges keeping track of their invoices. Late or overdue payments may lead
            to penalties, credit damage, or loss of providers.</p>
          <p>Many small businesses and startups already use Slack for team management. Hermez Keeps track of
            your invoices, and allows you to list and pay them, without leaving the Slack window.</p>
        </div>
        {/* <div className='team'>
          Team
        </div> */}
      </div>
    )
  }
}

export default About
