import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import MailIcon from '@material-ui/icons/Mail';
// import {Anchor, Box, Heading, Nav} from 'grommet'
// import {Home, Notification, ChatOption} from 'grommet-icons'

const useStyles = makeStyles((theme) => ({
  heading: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    //marginBottom: "2em"
  }
}));

const AppBar = (props) => {
  const classes = useStyles();

  return (
    <div className={classes.heading}>
      <Typography variant="h1" style={{fontFamily: "Modak", color: "rgba(0, 0, 0, 0.54)", fontSize:'3rem'}}>
      Tomashco
      </Typography>
      <div style={{display: "flex", alignItems: "center"}}>
        <GitHubIcon style={{fontSize:"2em"}}/>
        <LinkedInIcon style={{fontSize:"2.5em"}}/>
        <MailIcon style={{fontSize:"2.5em"}}/>
      </div>
    </div>
    )
  };

export default AppBar
