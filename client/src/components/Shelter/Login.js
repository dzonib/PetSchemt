import React, {Component} from 'react'
import {connect} from 'react-redux'
import login from '../../redux/actions/shelter/login'
import {Link} from 'react-router-dom'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'

class Login extends Component {

  state = {
    email: '',
    password: '',
    errors: {}
  }

  handleChange = (name, e) => {
    this.setState({[name]: e.target.value})
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const {email, password} = this.state
    this.props.login({email, password})
  }

  componentDidMount() {
    if (this.props.auth.isAuthenticated) {
      this.props.history.push('/shelter/dashboard')
    }
  }

  static getDerivedStateFromProps(nextProps, prevState) {

    if (nextProps.auth.isAuthenticated) {
      nextProps.history.push('/shelter/dashboard')
    }

    if (nextProps.errors) {
      return {errors: nextProps.errors}
    }

  }

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
          <form onSubmit={this.handleSubmit}>
            <TextField
              placeholder="Email"
              variant="outlined"
              fullWidth
              onChange={(e) => this.handleChange('email', e)}
              required
              type="email"
              margin="normal"/>

            <TextField
              placeholder="Password"
              variant="outlined"
              fullWidth
              onChange={(e) => this.handleChange('password', e)}
              required
              type="password"
              margin="normal"/>

            <Button
              type="submit"
              style={{
              background: '#DCDCDC',
              marginTop: '20px'
            }}
              size="large"
              color="primary">
              Log In
            </Button>
          </form>
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

const mapStateToProps = state => {
  return {
    auth: state.auth,
    errors: state.errors
  }
}

export default connect(mapStateToProps, {login})(Login)