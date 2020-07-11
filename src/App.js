import React from 'react';
import profileImg from './img/profileImg.png'
import mamaKitchenImg from './img/mamaKitchenImg.png'

import { createMuiTheme, makeStyles, ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';

import AddIcon from '@material-ui/icons/Add';

import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';

import AppBar from './AppBar'
import Emoji from './Emoji'


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    paddingTop: "3em",
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'left',
    color: theme.palette.text.secondary,
    '& .MuiAccordion-root': {
      padding: 0
    },
    '& .MuiAccordion-root::before': {
      backgroundColor: '#FFFFFF'
    },
  },
  paragraph: {
    fontSize: "1.5em"
  },
  projectImg: {
    width: "100%",
    [theme.breakpoints.down('xs')]: {
      width: "50%",
    },
  }
}));

function App() {

  const classes = useStyles();

  return (
    <Container maxWidth="md" >
    <CssBaseline />
      <div className={classes.root}>
        <Grid container spacing={1} style={{backgroundColor: "#FFFFFF"}}>

          <Grid item xs={12} >
            <Paper className={classes.paper} elevation={3} style={{backgroundColor: "#ff4545"}}>
              <AppBar/>
            </Paper>
          </Grid>

          <Grid item xs={12} sm={6}>
            <Paper className={classes.paper} elevation={0}style={{height: "100%"}}>
              <img src={profileImg} alt="profile" style={{width: "70%"}}/>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Paper className={classes.paper} elevation={0} style={{height: "100%", display:"flex", alignItems: 'center'}}>
            <Typography variant='h1'>
            Hello!
            <Emoji symbol="👋🏻" label="hello" />
            <br/>I'm Tommaso Maioli
            </Typography>
            {/* <p className={classes.paragraph}>And this is my portfolio page</p> */}
            </Paper>
          </Grid>

          <Grid item xs={12} >
            <Paper className={classes.paper} elevation={0}>
            <Typography gutterBottom>
            Since january I've started learning as <b>Frontend developer</b>, and I've succesfully completed the following courses:
            </Typography>

            <Accordion elevation={0} className={classes.paper}>
              <AccordionSummary expandIcon={<AddIcon />}>
                <Typography variant='h6'>
                  The Web Developer Bootcamp
                  </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                  sit amet blandit leo lobortis eget.
                <Button href="https://www.udemy.com/share/101W9CAEMZeFtTQXgI/" color="primary">visit course</Button>
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion elevation={0} className={classes.paper}>
              <AccordionSummary expandIcon={<AddIcon />}>
                <Typography variant='h6'>The Advanced Web Developer Bootcamp</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                  sit amet blandit leo lobortis eget.
                  <Button href="https://www.udemy.com/share/101XvUAEMZeFtTQXgI/" color="primary">visit course</Button>
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion elevation={0} className={classes.paper}>
              <AccordionSummary expandIcon={<AddIcon />}>
                <Typography variant='h6'>The Modern React Bootcamp (Hooks, Context, NextJS, Router)</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                React Hooks! (My favorite part of React!)
                The new Context API
                State management w/ useReducer + use Context (Redux Lite)
                The basics of React (props, state, etc)
                Master React Router
                Build tons of projects, each with a beautiful interface
                React State Management Patterns
                Drag and Drop With React
                Writing dynamically styled components w/ JSS
                Common React Router Patterns
                Work with tons of libraries and tools
                Integrate UI libraries like Material UI and Bootstrap into your React apps
                React Design Patterns and Strategies
                Learn the ins and outs of JSS!
                Learn how to easily use React to build responsive apps
                Add complex animations to React projects
                Debug and Fix buggy React code
                Optimize React components
                Integrate React with APIs
                Learn the basics of Webpack in a free mini-course!
                DOM events in React
                Forms and complex validations in React
                Using Context API w/ Hooks
                  <Button href="https://www.udemy.com/share/101WbGAEMZeFtTQXgI/" color="primary">visit course</Button>
                </Typography>
              </AccordionDetails>
            </Accordion>

            <Divider style={{margin:'2em 0 3em'}} />

              <Typography variant='h2'>My personal projects:</Typography>
            </Paper>
          </Grid>

          <Grid item xs={12} sm={3}>
            <Paper className={classes.paper} elevation={0}>
              <img className={classes.projectImg} src={mamaKitchenImg} alt="mamaKitchen"/>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={9}>
            <Paper className={classes.paper} elevation={0} style={{height: "100%"}}>
            <Typography variant="h3" align="left" gutterBottom>mamaKitchen</Typography>
              <Typography variant="body1" align="left" gutterBottom>
              MamaKitchen aims to be the first marketplace to sell homemade food, connecting the chef with the customer.<br/>
              </Typography>
              <Typography variant="body2" align="left">
              <b>Tech stack:</b> <i>React, Redux, AntDesign, Firebase (Auth, Database, Deploy).</i><br/>
                <Typography style={{paddingTop: "1em"}}>
                  <Button href="https://mamakitchen-989f4.firebaseapp.com/" color="primary">visit site</Button>
                  <Button href="https://github.com/tomashco/" color="secondary">view code</Button>
                </Typography>
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </div>
    </Container>
  )
}


const theme = createMuiTheme();

theme.typography.h1 = {
  fontSize: '2rem',
};

theme.typography.h2 = {
  fontSize: '1.7rem',
};

theme.typography.h3 = {
  fontSize: '1.5rem',
};

export default function CustomStyles() {
  return (
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  );
}
