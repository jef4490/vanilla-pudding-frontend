import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui-icons/Menu';
import {Link} from 'react-router-dom'
import Menu, { MenuItem } from 'material-ui/Menu';



const styles = theme => ({
  root: {
    width: '100%',
  },
  flex: {
    flex: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
});

function Navbar(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton className={classes.menuButton} color="contrast" aria-label="Menu">
            <MenuIcon onClick={props.togglePopover}/>
          </IconButton>
          <Menu
            id="simple-menu"
            open={props.showMenu}
            onClose={props.togglePopover}
          >
            <MenuItem onClick={props.togglePopover}>Profile</MenuItem>
            <MenuItem onClick={props.togglePopover}>My account</MenuItem>
            <MenuItem onClick={props.togglePopover}>Logout</MenuItem>
          </Menu>
          <Typography type="title" color="inherit" className={classes.flex}>
            Vanilla Pudding
          </Typography>
          <Link to={'/'}><Button color="contrast">Home</Button></Link>
          <Link to={'/clients'}><Button color="contrast">Clients</Button></Link>
          <Link to={'/orders'}><Button color="contrast">Orders</Button></Link>
        </Toolbar>
      </AppBar>
    </div>
  );
}

Navbar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Navbar);
