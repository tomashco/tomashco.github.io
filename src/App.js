/* eslint-disable react/no-unescaped-entities */
import React from 'react';

import {
  createMuiTheme,
  makeStyles,
  ThemeProvider,
} from '@material-ui/core/styles';
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

import { Link } from '@material-ui/core';
import profileImg from './img/profileImg.png';
import mamaKitchenImg from './img/mamaKitchenImg.png';
import yelpCampImg from './img/yelpCamp.png';
import colorsAppImg from './img/colorsApp.png';
import CVTommasoMaioli2020 from './doc/2020CVTommasoMaioli.pdf';

import AppBar from './AppBar';
import Emoji from './Emoji';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    paddingTop: '3em',
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'left',
    color: theme.palette.text.secondary,
    '& .MuiAccordion-root': {
      padding: 0,
    },
    '& .MuiAccordion-root::before': {
      backgroundColor: '#FFFFFF',
    },
  },
  paragraph: {
    fontSize: '1.5em',
  },
  projectImg: {
    width: '100%',
    [theme.breakpoints.down('xs')]: {
      width: '100%',
    },
  },
}));

function App() {
  const classes = useStyles();

  return (
    // eslint-disable-next-line react/jsx-filename-extension
    <Container maxWidth="md">
      <CssBaseline />
      <div className={classes.root}>
        <Grid container spacing={1} style={{ backgroundColor: '#FFFFFF' }}>
          <Grid item xs={12}>
            <Paper
              className={classes.paper}
              elevation={3}
              style={{ backgroundColor: '#ff4545' }}
            >
              <AppBar />
            </Paper>
          </Grid>

          <Grid item xs={12} sm={6}>
            <Paper
              className={classes.paper}
              elevation={0}
              style={{ height: '100%' }}
            >
              <img src={profileImg} alt="profile" style={{ width: '70%' }} />
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Paper
              className={classes.paper}
              elevation={0}
              style={{ height: '100%', display: 'flex', alignItems: 'center' }}
            >
              <Typography variant="h1">
                Hello!
                <Emoji symbol="👋🏻" label="hello" />
                <br />
                I'm Tommaso Maioli
              </Typography>
            </Paper>
          </Grid>

          <Grid item xs={12}>
            <Paper className={classes.paper} elevation={0}>
              <Typography gutterBottom>
                Since january I've started learning as <b>Frontend developer</b>
                , and I've succesfully completed the following courses:
              </Typography>

              <Accordion elevation={0} className={classes.paper}>
                <AccordionSummary expandIcon={<AddIcon />}>
                  <Typography variant="h6">
                    The Web Developer Bootcamp
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    This course has been an introduction regarding current web
                    development tools, from styling (html, css, bootstrap) to
                    some basic javascript, up to Create full-stack web
                    applications from scratch (Express and MongoDb).
                    <br />
                    <br />
                    {/* <b>Technologies used during the course:</b> */}
                    <br />
                    <i>
                      <b>HTML5, CSS3</b>, JavaScript,
                      <b>Bootstrap 4</b>, SemanticUI, DOM Manipulation,
                      <b>jQuery</b>, Unix(Command Line) Commands, NodeJS, NPM,
                      <b>ExpressJS, REST, MongoDB</b>, Database Associations,
                      Authentication, PassportJS, Authorization
                    </i>
                    <br />
                    <Button
                      href="https://www.udemy.com/share/101W9CAEMZeFtTQXgI/"
                      color="primary"
                      style={{
                        display: 'flex',
                        justifyContent: 'flex-start',
                        marginTop: '2em',
                        marginBottom: '2em',
                      }}
                    >
                      view course
                    </Button>
                    {/* COURSE FINAL PROJECT */}
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion elevation={0} className={classes.paper}>
                <AccordionSummary expandIcon={<AddIcon />}>
                  <Typography variant="h6">
                    The Advanced Web Developer Bootcamp
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    The Advanced Developer Bootcamp gave me the possibility to
                    learn with more depth some advanced topics such as:
                    <ul>
                      <li>
                        <b>Advanced CSS:</b>
                        Flexbox, Transitions, Transforms and Animations
                      </li>
                      <li>
                        <b>D3:</b>
                        Building charts, force graphs and data visualizations
                      </li>
                      <li>
                        <b>ES2015, ES2016, ES2017:</b>
                        keywords, arrow functions, class syntax, Callbacks,
                        Promises, Generators and Async Functions
                      </li>
                      <li>
                        <b>Building Node.js APIs</b>
                      </li>
                      <li>
                        <b>React, React-Router, Redux:</b>
                        building Single Page Applications, Authentication and
                        Authorization, Asynchronous Code with javascript
                      </li>
                      <li>
                        Object Oriented Programming in Javascript, Closures and
                        the keyword 'this', functional programming
                      </li>
                    </ul>
                    <br />
                    <Button
                      href="https://www.udemy.com/share/101XvUAEMZeFtTQXgI/"
                      color="primary"
                      style={{ display: 'flex', justifyContent: 'flex-start' }}
                    >
                      view course
                    </Button>
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion elevation={0} className={classes.paper}>
                <AccordionSummary expandIcon={<AddIcon />}>
                  <Typography variant="h6">
                    The Modern React Bootcamp (Hooks, Context, NextJS, Router)
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    <ul>
                      <li>
                        <b>React</b>, from the very basics up to advanced topics
                        like Next JS, React Router, Higher Order Components and
                        Hooks and the Context API.
                      </li>
                      <li>
                        <b>Hooks</b>, including multiple custom hooks.
                      </li>
                      <li>
                        <b>State management</b>, using the useContext and
                        useReducer hooks, to mimic some of the functionality of
                        Redux.
                      </li>
                    </ul>
                    <br />
                    <Button
                      href="https://www.udemy.com/share/101WbGAEMZeFtTQXgI/"
                      color="primary"
                      style={{ display: 'flex', justifyContent: 'flex-start' }}
                    >
                      view course
                    </Button>
                    {/* BOOTCamp Projects */}
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </Paper>
          </Grid>

          <Grid item xs={12}>
            <Paper className={classes.paper} elevation={0}>
              <Typography variant="h2">My personal projects:</Typography>
            </Paper>
          </Grid>

          <Grid item xs={12} sm={3}>
            <Paper className={classes.paper} elevation={0}>
              <img
                className={classes.projectImg}
                src={mamaKitchenImg}
                alt="mamaKitchen"
              />
            </Paper>
          </Grid>
          <Grid item xs={12} sm={9}>
            <Paper
              className={classes.paper}
              elevation={0}
              style={{ height: '100%' }}
            >
              <Typography variant="h3" align="left" gutterBottom>
                mamaKitchen
              </Typography>
              <Typography variant="body1" align="left" gutterBottom>
                MamaKitchen aims to be the first marketplace to sell homemade
                food, connecting the chef with the customer.
                <br />
                The idea is that every person could be able to sell his own food
                in his neightborhood and start a small business, as a way to
                overcome the constraints related to the restaurants that arise
                during this critical times.
              </Typography>
              <Typography variant="body2" align="left">
                <b>Tech stack:</b>
                <i>
                  React, Redux, AntDesign, Firebase (Auth, Database, Deploy).
                </i>
                <br />
                <Typography style={{ paddingTop: '1em' }}>
                  <Button
                    href="https://mamakitchen-989f4.firebaseapp.com/"
                    color="primary"
                  >
                    visit site
                  </Button>
                  <Button
                    href="https://github.com/tomashco/mamakitchen"
                    color="secondary"
                  >
                    view code
                  </Button>
                </Typography>
              </Typography>
            </Paper>
          </Grid>

          <Grid item xs={12}>
            <Paper className={classes.paper} elevation={0}>
              <Typography variant="h3">Bootcamp projects:</Typography>
            </Paper>
          </Grid>

          <Grid container spacing={0}>
            <Grid item xs={12} sm={3}>
              <Paper className={classes.paper} elevation={0}>
                <img
                  className={classes.projectImg}
                  src={yelpCampImg}
                  alt="yelpCamp"
                />
              </Paper>
            </Grid>
            <Grid item xs={12} sm={9}>
              <Paper
                className={classes.paper}
                elevation={0}
                style={{ height: '100%' }}
              >
                <Typography variant="h3" align="left" gutterBottom>
                  YelpCamp
                </Typography>
                <Typography variant="body1" align="left" gutterBottom>
                  Yelpcamp is a campground rating app, where users can create
                  their own campgrounds, view and comment on others'
                  campgrounds.
                  <br />
                  It is a full stack app developed using Express and MongoDb and
                  deployed on Heroku.
                </Typography>
                <Typography variant="body2" align="left">
                  <b>Tech stack:</b>
                  <i>Node.js, Express.js, Passport.js, jQuery and MongoDB</i>
                  <br />
                  <Typography style={{ paddingTop: '1em' }}>
                    <Button
                      href="https://obscure-falls-44780.herokuapp.com/"
                      color="primary"
                    >
                      visit site
                    </Button>
                    <Button
                      href="https://github.com/tomashco/yelpCamp"
                      color="secondary"
                    >
                      view code
                    </Button>
                  </Typography>
                </Typography>
              </Paper>
            </Grid>
          </Grid>

          <Grid container spacing={0}>
            <Grid item xs={12} sm={3}>
              <Paper className={classes.paper} elevation={0}>
                <img
                  className={classes.projectImg}
                  src={colorsAppImg}
                  alt="colorsApp"
                />
              </Paper>
            </Grid>
            <Grid item xs={12} sm={9}>
              <Paper
                className={classes.paper}
                elevation={0}
                style={{ height: '100%' }}
              >
                <Typography variant="h3" align="left" gutterBottom>
                  The React Colors App
                </Typography>
                <Typography variant="body1" align="left" gutterBottom>
                  This application has a lot of features, i.e. drag and drop,
                  animations, route transitions, complex form validations, and
                  more.
                </Typography>
                <Typography variant="body2" align="left">
                  <b>Tech stack:</b>
                  <i>
                    React Context, Hooks (including custom hooks), Router, JSS,
                    Material UI
                  </i>
                  <Typography style={{ paddingTop: '1em' }}>
                    <Button
                      href="https://tomashco.github.io/colorApp/"
                      color="primary"
                    >
                      visit site
                    </Button>
                    <Button
                      href="https://github.com/tomashco/colorApp"
                      color="secondary"
                    >
                      view code
                    </Button>
                  </Typography>
                </Typography>
              </Paper>
            </Grid>
          </Grid>

          <Grid item xs={12} style={{ paddingBottom: '3em' }}>
            <Paper className={classes.paper} elevation={0}>
              <Typography variant="h3">About me:</Typography>
              <Typography gutterBottom>
                Currently, I'm working as Functional Safety Engineer at Yape, an
                Italian startup developing an autonomous mobile robot for last
                mile delivery (
                <Link href="https://www.yapemobility.it">
                  www.yapemobility.it
                </Link>
                ).
              </Typography>
              <Typography gutterBottom>
                Previously for the same company I’ve worked as control system
                engineer and general system engineer using a model based
                approach, from Matlab/Simulink up to implementation on embedded
                platform. I’ve developed the control strategies needed to
                control the vehicle dynamics and defined strategies to manage
                power inside the vehicle, from requirements definition to
                performance evaluation on working prototypes.
              </Typography>
              <Button
                href={CVTommasoMaioli2020}
                color="primary"
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                }}
              >
                get resume
              </Button>
              <Typography>
                In my spare time I practice Judo (Black belt, 2nd Dan,
                professional level) and I'm a cycling enthusiast.
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </div>
    </Container>
  );
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
