import React, { Component } from 'react'
import './Left.css'
import hermes from './hermes.jpg'

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
        <Header as='h1' floated='left'>
          <Image circular src={hermes} />
        Hemzy
        </Header>
        <Container textAlign='center'>
          Connect to our Slack plug-in service!
        </Container>
      </div>
    )
  }
}

export default Left
