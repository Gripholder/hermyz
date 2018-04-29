import React, { Component } from 'react'
import './About.css'

import chris from '../images/Chris.jpeg'
import mike from '../images/Mike.jpeg'
import mo from '../images/Mo.jpeg'
import sandro from '../images/Sandro.jpeg'
import zach from '../images/Zach.jpeg'

class About extends Component {
  render () {
    return (
      <div>
        <div className='description'>
          <p>Small businesses face challenges keeping track of their invoices. Late or overdue payments may lead
            to penalties, credit damage, or loss of providers.</p>
          <p>Many small businesses and startups already use Slack for team management. Hermyz Keeps track of
            your invoices, and allows you to list and pay them, without leaving the Slack window.</p>
        </div>
        <div className='team'>
          <h4>Hermyz Team</h4>
          <a href='https://github.com/spiffcs' target='_blanck'><img src={chris} alt='Christopher Phillips' title='Christopher Phillips' /></a>
          <a href='https://github.com/maikelnabil' target='_blanck'><img src={mike} alt='Mike Nabil' title='Mike Nabil' /></a>
          <a href='https://github.com/Gripholder' target='_blanck'><img src={mo} alt='Mohamed Elkarim' title='Mohamed Elkarim' /></a>
          <a href='https://github.com/Gura-San' target='_blanck'><img src={sandro} alt='Sandro Guraspasvili' title='Sandro Guraspasvili' /></a>
          <a href='https://github.com/zbauer91' target='_blanck'><img src={zach} alt='Zach Bauer' title='Zach Bauer' /></a>
        </div>
      </div>
    )
  }
}

export default About
