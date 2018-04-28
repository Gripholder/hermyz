import React, { Component } from 'react'
import './Left.css'
import hermes from './hermes.jpg'
import slack from './slackIcon.jpg'

import {
  Button,
  Container,
  Divider,
  Grid,
  Header,
  Icon,
  Image,
  List,
  Menu,
  Responsive,
  Segment,
  Sidebar,
  Visibility
} from 'semantic-ui-react'

class Left extends Component {
  render () {
    return (
      <div className='left'>
        <header className="h1">
          <img src={hermes}></img>
          Hermyz
        </header>
        <div className="slack">
          <h4>
            Install on Slack
          </h4>
          <button><img src={slack}></img>Add to Slack</button>
        </div>
      </div>
    )
  }
}

export default Left
