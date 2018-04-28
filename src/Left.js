import PropTypes from 'prop-types'
import React, { Component } from 'react'
import './hermes.jpg';

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
  <Header as='h2'>
    <Image circular src='./hermes.jpg' />
    {' '}Hemzy
  </Header>
)

export default HeaderExampleImage
