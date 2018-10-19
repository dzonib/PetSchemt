import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Typography from '@material-ui/core/Typography';
import AccountCircle from '@material-ui/icons/AccountCircle';
import SideDrawer from './SideDrawer';
import Pets from '@material-ui/icons/Pets'
import logout from '../../redux/actions/shelter/logout'
import PersonAdd from '@material-ui/icons/PersonAdd'
import RemoveCircle from '@material-ui/icons/RemoveCircleOutline'
import './Header.css';

class Header extends Component {

  state = {
    open: false,
    isLoggedIn: false
  }

  drawerHandler = (value) => {
    this.setState({open: value})
  }

  static getDerivedStateFromProps(nextProps, nextState) {
    return {
      isLoggedIn: nextProps.auth.isAuthenticated
    }
  }

  render() {
    return (
      <>
        {!this.state.isLoggedIn ? 
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

          <Link className="header__link" to='/shelter/dashboard'>
          <Typography variant="h6" style={{
            color: 'white'
          }}>
            <Pets/>
            PetSchmet
          </Typography>
          </Link>

          <div style={{
            display: 'flex',
            justifyContent: 'flex-end'
          }}>

            <Link className="header__link" to='/shelter/login'>
              <div className="header__authArea__container">
                <div className="header__auth__area  mali__font">
                  <AccountCircle/>
                  Log In
                </div>
              </div>
            </Link>


            <Link className="header__link" to='/shelter/register'>
            <div className="header__authArea__container">
              <div className="header__auth__area mali__font" style={{width:'95px'}}>
                <PersonAdd/>
                Register
              </div>
            </div>
            </Link>
          </div>

        </Toolbar>
      </AppBar> :  
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

          <Link className="header__link" to='/shelter/dashboard'>
          <Typography variant="h6" style={{
            color: 'white'
          }}>
            <Pets/>
            PetSchmet
          </Typography>
          </Link>

          <div style={{
            display: 'flex',
            justifyContent: 'flex-end'
          }}>
          
            <Link className="header__link" to='/shelter/login'>
              <div className="header__authArea__container">
                <div className="header__auth__area  mali__font"  style={{width: '95px'}}>
                  <Pets style={{width: '20px'}}/>
                  Animals
                </div>
              </div>
            </Link>

            <Link className="header__link" to='#'
            onClick={() => this.props.logout(this.props.history)}>
              <div className="header__authArea__container">
                <div className="header__auth__area mali__font" style={{width:'95px'}}>
                  <RemoveCircle/>
                  Log Out
                </div>
              </div>
            </Link>

          </div>

           

        </Toolbar>
      </AppBar>}
      </>
      
    )
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.auth
  }
}

export default connect(mapStateToProps, {logout})(Header);