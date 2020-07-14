import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Menu } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const styles = (theme) => ({
  buttonCollapse: {
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
    margin: '10px',
    boxShadow: 'none',
  },
  menuPaper: {
    backgroundColor: '#ff4545',
    color: 'rgba(0, 0, 0, 0.54)',
  },
});

class ButtonAppBarCollapse extends Component {
  constructor(props) {
    super(props);
    this.state = {
      anchorEl: null,
    };
    this.handleMenu = this.handleMenu.bind(this);
  }
  handleMenu = (event) => {
    this.setState({ anchorEl: event.currentTarget });
  };
  handleClose = () => {
    this.setState({ anchorEl: null });
  };
  render() {
    const { classes } = this.props;
    const { anchorEl } = this.state;
    const open = Boolean(anchorEl);

    return (
      <div className={classes.buttonCollapse}>
        <IconButton onClick={this.handleMenu}>
          <MenuIcon />
        </IconButton>
        <Menu
          id="menu-appbar"
          anchorEl={anchorEl}
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          open={open}
          onClose={this.handleClose}
          classes={{ paper: classes.menuPaper }}
        >
          <div>{this.props.children}</div>
        </Menu>
      </div>
    );
  }
}
export default withStyles(styles)(ButtonAppBarCollapse);
