import React from 'react';
import { Anchor, Box, Grommet, Heading, Image, List, Main, Markdown, Paragraph, ResponsiveContext } from 'grommet';
import {Checkmark} from 'grommet-icons'
import AppBar from './AppBar'
import Emoji from './Emoji'
import profileImg from './img/profileImg.png'
import mamaKitchenImg from './img/mamaKitchenImg.png'

const theme = {
  global: {
    colors: {
      brand: "#FF0000",
      heading: "#FFF",
      list: '#999999'
    },
    font: {
      family: 'Roboto, sans serif',
      size: '18px',
      height: '20px',
    },
  },
};

// {
//   "xxsmall": "48px",
//   "xsmall": "96px",
//   "small": "192px",
//   "medium": "384px",
//   "large": "768px",
//   "xlarge": "1152px",
//   "xxlarge": "1536px",
//   "full": "100%"
// }

function App() {
  return (
    <Grommet theme={theme} >
      <Box
        align='center'
        >
      <ResponsiveContext.Consumer>
      {size => (
        <Box
          direction="column"
          width='xlarge'
          pad="large"

          >
          <AppBar />
          <Box
            background="light-3"
            pad="large"

          >
            <Main >
              <Box
                direction={size === ('small' || 'xsmall') ? 'column' : 'row'}
                justify='between'
                align='center'
              >
                <Box
                  height="medium"
                  width="medium"
                  pad='xsmall'
                  >
                  <Image
                    fit="cover"
                    src={profileImg}
                    />
                </Box>
                <Box pad='small'>
                  <Heading>
                    Hello!
                    <Emoji symbol="👋🏻" label="hello" />
                  </Heading>
                  <Paragraph fill={size === ('small' || 'xsmall') ? true : false}>
                    My name is Tommaso Maioli and this is my portfolio.
                  </Paragraph>
                  <Paragraph fill={size === ('small' || 'xsmall') ? true : false}>
                    Since january I've started learning as <b>Frontend developer</b>, and I've succesfully completed the following courses:
                  </Paragraph>

                  <ul style={{listStyleType: 'none', paddingLeft: 0, marginTop: 0}}>
                    <li><Anchor color='list' href="https://www.udemy.com/course/the-web-developer-bootcamp/" label="The Web Developer Bootcamp" /></li>
                    <li><Anchor color='list' href="https://www.udemy.com/course/the-advanced-web-developer-bootcamp/" label="The Advanced Web Developer Bootcamp" /></li>
                    <li><Anchor color='list' href="https://www.udemy.com/course/modern-react-bootcamp/" label="The Modern React Bootcamp (Hooks, Context, NextJS, Router)" /></li>
                  </ul>
                </Box>
              </Box>
              <Paragraph fill={true} pad='small'>
                During these bootcamps I've gained hands on experience over a broad variety of web development technologies, including basic knowledge regarding backend.
              </Paragraph>
              <Heading level={3}>
                Personal projects
              </Heading>

              <Box
                direction={size === ('small' || 'xsmall') ? 'column' : 'row'}
                justify='start'
                align='start'
              >
                <Box
                  height="small"
                  width="small"
                  pad='xsmall'
                  >
                  <Image
                    fit="cover"
                    src={mamaKitchenImg}
                    />
                </Box>
                <Box pad='small'>
                  <Heading level={4}>
                    MamaKitchen
                  </Heading>
                  <Paragraph fill={size === ('small' || 'xsmall') ? true : false}>
                    It's mamaKitchen folks!
                  </Paragraph>
                </Box>
              </Box>


            </Main>

          </Box>
        </Box>
      )}
      </ResponsiveContext.Consumer>
      </Box>
    </Grommet>
  )
}

export default App;
