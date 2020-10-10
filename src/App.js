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
import AuctionService from './img/AuctionServiceArch.png';
import colorsAppImg from './img/colorsApp.png';

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
                I am an automation engineer and over the last year I’ve
                increased my skill towards web programming, deepening my
                knowledge both in backend (REST API, AWS Serverless, Node.Js)
                and frontend (HTML5, CSS3, Javascript, React). Currently, I'm
                working as Functional Safety Engineer at Yape, an Italian
                startup developing an autonomous mobile robot for last mile
                delivery (
                <Link href="www.yapemobility.it">www.yapemobility.it</Link>).
                Welcome to my Portfolio!
              </Typography>
              <Button
                href="https://drive.google.com/file/d/1-7TM-lMCr4PzcOX0Wniy-kULW6eOHJGg/view?usp=sharing"
                color="primary"
              >
                Get Resume
              </Button>
              <Button href="mailto:tommaso.maioli@gmail.com" color="secondary">
                Contact Me
              </Button>
            </Paper>
          </Grid>
          {/* PERSONAL PROJECTS */}

          <Grid item xs={12}>
            <Paper className={classes.paper} elevation={0}>
              <Typography variant="h2">My personal projects:</Typography>
            </Paper>
          </Grid>

          {/* Mamakitchen */}
          <Grid item xs={12} sm={3}>
            <Paper className={classes.paper} elevation={0}>
              <img
                className={classes.projectImg}
                src={mamaKitchenImg}
                alt="Mamakitchen"
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
                Mamakitchen
              </Typography>
              <Typography variant="body1" align="left" gutterBottom>
                Mamakitchen aims to be the first marketplace to sell homemade
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

          {/* BOOTCAMP PROJECTS */}
          <Grid item xs={12}>
            <Paper className={classes.paper} elevation={0}>
              <Typography variant="h3">Bootcamp projects:</Typography>
            </Paper>
          </Grid>

          {/* Serverless Auction Service */}
          <Grid container spacing={0}>
            <Grid item xs={12} sm={3}>
              <Paper className={classes.paper} elevation={0}>
                <img
                  className={classes.projectImg}
                  src={AuctionService}
                  alt="ServerlessBootcamp"
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
                  Serverless Auctions Platform
                </Typography>
                <Typography variant="body1" align="left" gutterBottom>
                  Project developed following the course{' '}
                  <b>
                    Serverless Framework Bootcamp: Node.js, AWS & Microservices
                  </b>{' '}
                  by <i>Ariel Weinberger</i>. Aim of the course has been to
                  develop a reliable and scalable Serverless application,
                  following the microservices architecture.
                  <br />
                  This application has been deployed on AWS using the Serverless
                  framework to build the CloudFormation infrastructure
                  (infrastructure by code).
                </Typography>
                <Typography variant="body2" align="left">
                  <b>Tech stack:</b>
                  <i>Node.js, Serverless, AWS</i>
                  <br />
                  <Typography style={{ paddingTop: '1em' }}>
                    <Button
                      href="https://github.com/tomashco/serverless-bootcamp"
                      color="secondary"
                    >
                      view code
                    </Button>
                  </Typography>
                </Typography>
              </Paper>
            </Grid>
          </Grid>

          {/* YelpCamp */}
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

          {/* colorsApp */}
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
