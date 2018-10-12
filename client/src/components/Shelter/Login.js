import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

class Login extends Component {

  render() {
    return (
      <div
        style={{
        display: 'flex',
        justifyContent: 'center',
        marginTop: '30px'
      }}>
        <Paper
          style={{
          width: '1000px',
          height: 'auto',
          padding: '10px'
        }}
          align="center">
          <Typography
            style={{
            padding: '0 0 10px 0',
            margin: '10px 0 15px 0',
            borderBottom: '1px solid black',
            fontWeight: '500'
          }}
            variant="h3">Login</Typography>

          <TextField
            placeholder="Email"
            variant="outlined"
            fullWidth
            required
            type="email"
            margin="normal"/>

          <TextField
            placeholder="Password"
            variant="outlined"
            fullWidth
            required
            type="password"
            margin="normal"/>

          <Button
            style={{
            background: '#DCDCDC',
            marginTop: '20px'
          }}
            size="large"
            color="primary">
            Log In
          </Button>

          <small
            style={{
            display: 'block',
            marginTop: '15px'
          }}>
            <i>You do not have registered Shelter?&nbsp;</i>
            <Link
              to='/shelter/register'
              style={{
              textDecoration: 'none',
              fontWeight: '500',
              color: 'purple'
            }}>
               Register here
            </Link>
          </small>

        </Paper>
      </div>
    )
  }
}

export default Login;