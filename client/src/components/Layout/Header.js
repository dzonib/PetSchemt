import React, {Component} from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Typography from '@material-ui/core/Typography';
import AccountCircle from '@material-ui/icons/AccountCircle';
import SideDrawer from './SideDrawer';
import Pets from '@material-ui/icons/Pets'
import HowToReg from '@material-ui/icons/HowToReg'; 
import './Header.css';

class Header extends Component {

  state = {
    open: false
  }

  drawerHandler = (value) => {
    this.setState({open: value})
  }

  render() {
    return (
      <AppBar
        position="static"
        style={{
        backgroundColor: '#2f2f2f',
        boxShadow: 'none',
        padding: '10px 0'
      }}>

        <Toolbar className="header__container">
          <div className="header__menuButton__container">
            <IconButton
              color="inherit"
              aria-label="Menu"
              onClick={() => this.drawerHandler(true)}>
              <MenuIcon/>
            </IconButton>
            <SideDrawer
              open={this.state.open}
              onClose={(value) => this.drawerHandler(value)}/>
          </div>

          <Typography variant="h6" style={{
            color: 'white'
          }}>
            <Pets/>
            PetSchmet
          </Typography>

          <div style={{
            display: 'flex',
            justifyContent: 'flex-end'
          }}>
            <div className="header__authArea__container">
              <div className="header__auth__area">
                <AccountCircle/>
                Login
              </div>
            </div>

            <div className="header__authArea__container">
              <div className="header__auth__area" style={{width:'90px'}}>
                <HowToReg/>
                Register
              </div>
            </div>
          </div>

        </Toolbar>
      </AppBar>
    )
  }
}

export default Header;