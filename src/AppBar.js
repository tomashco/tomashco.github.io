import React from 'react'
import {Anchor, Box, Heading, Nav} from 'grommet'
import {Home, Notification, ChatOption} from 'grommet-icons'

const AppBar = (props) => (
  <Box
    tag='header'
    direction='row'
    align='center'
    justify='between'
    background='brand'
    pad={{ left: 'medium', right: 'small', vertical: 'small' }}
    elevation='medium'
    style={{ zIndex: '1' }}
    {...props}
  >
    <Heading>
      <Anchor hoverIndicator
      color='heading'
      style={{fontFamily: 'modak', textDecoration: 'none'}}>
        Tomashco
      </Anchor>
    </Heading>
    <Nav direction="row" pad="medium">
      <Anchor color='heading' icon={<Home />} hoverIndicator />
      <Anchor color='heading' icon={<Notification />} hoverIndicator />
      <Anchor color='heading' icon={<ChatOption />} hoverIndicator />
    </Nav>
  </Box>
);

export default AppBar
