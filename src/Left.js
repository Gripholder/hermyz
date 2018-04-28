import PropTypes from 'prop-types'
import React, { Component } from 'react'
import './Left.css';
import hermes from './hermes.jpg';

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
  Visibility,
} from 'semantic-ui-react'


const HeaderExampleImage = () => (
  <div>
   <Header as='h1' floated="left">
    <Image circular src={hermes} />
    Hemzy
  </Header>
  <ContainerExampleAlignment />
</div>
)

const ContainerExampleAlignment = () => (
  <div>
    <Container textAlign='center'>
      Connect to our Slack plug-in service!
    </Container>
  </div>
)

class Left extends Component {
  render(){
    return(
    <div className="Left">
      <HeaderExampleImage />
      <br></br>
      <ContainerExampleAlignment />
    </div>
    )
  }
}


export default HeaderExampleImage
