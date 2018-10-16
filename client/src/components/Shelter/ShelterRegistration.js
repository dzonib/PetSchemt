import React, {Component} from 'react'
import {connect} from 'react-redux'
import Paper from '@material-ui/core/Paper'
import FormControl from '@material-ui/core/FormControl'
import Typography from '@material-ui/core/Typography'
import Select from '@material-ui/core/Select'
import Button from '@material-ui/core/Button'
import InputField from './InputField'
import InputLabel from './InputLabel'
import {registerUser} from '../../redux/actions/shelter/register'

class ShelterRegistration extends Component {

  state = {
    cities: [
      '',
      'Banja Luka',
      'Gradiška',
      'Prijedor',
      'Sarajevo',
      'Mostar',
      'Zenica'
    ],
    city: '',
    email: '',
    street: '',
    imageUrl: '',
    name: '',
    password: '',
    password2: '',
    errors: {}

  }

  // LIFECYCLE
  static getDerivedStateFromProps(nextProps, prevState) {
    return nextProps.errors && {errors: nextProps.errors}
  }

  handleChange = name => event => {
    this.setState({[name]: event.target.value})
  }

  onInputChange = (name, e) => {
    this.setState({[name]: e.target.value})
  }

  submitHandler = async (e) => {
    e.preventDefault()

    const {
      name,
      city,
      street,
      email,
      imageUrl,
      password,
      password2
    } = this.state

    const newShelter = {
      name, city, street, email, imageUrl, password, password2
    }

    this.props.registerUser(newShelter, this.props.history)
      .catch(e => console.log(e))
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
          padding: '10px',
          marginBottom: '30px'
        }}
          align="center">

           <form onSubmit={this.submitHandler}>

          <Typography
            style={{
            padding: '0 0 10px 0',
            margin: '10px 0 15px 0',
            borderBottom: '1px solid black',
            fontWeight: '500'
          }}
            variant="h3">Register Shelter</Typography>
          <FormControl fullWidth>
            <InputLabel name='Select city' style={{marginBottom: '14px'}}/>
            <Select
              onChange={this.handleChange('city')}
              native
              value={this.state.city}
              placeholder='Select City'>
              {this
                .state
                .cities
                .map((city) => (
                  <option key={city} value={city}>{city}</option>
                ))}
            </Select>
            {this.state.errors.city && <div
              style={{display: 'flex', justifyContent: 'flex-start'}}
            ><p style={{color: 'red'}}>{this.state.errors.city}</p></div> }
          </FormControl>

          <InputLabel name='Email'/>
          <InputField 
            placeholder="Email"
            type="text"
            onInputChange={(e) => this.onInputChange('email', e)}
            error={this.state.errors.email}
          />

          <InputLabel name='Street'/>
          <InputField 
            placeholder="Street"
            type="text"
            onInputChange={(e) => this.onInputChange('street', e)}
            error={this.state.errors.street}
          />

          <InputLabel name='Image Url'/>
          <InputField 
            placeholder="Image url"
            type="text"
            onInputChange={(e) => this.onInputChange('imageUrl', e)}
            error={this.state.errors.imageUrl}
          />

          <InputLabel name='Shelter name'/>
          <InputField 
            placeholder="Shelter name"
            type="text"
            onInputChange={(e) => this.onInputChange('name', e)}
            error={this.state.errors.name}
          />

          <InputLabel name='Password'/>
          <InputField 
            placeholder="Password"
            type="password"
            onInputChange={(e) => this.onInputChange('password', e)}
            error={this.state.errors.password}
          />

          <InputLabel name='Password 2'/>
          <InputField 
            placeholder="Password2"
            type="password"
            onInputChange={(e) => this.onInputChange('password2', e)}
            error={this.state.errors.password2}
          />
          <Button
            style={{
            background: '#DCDCDC',
            marginTop: '20px',
            display: 'block'
          }}
            type='submit'
            size="large"
            color="primary">
            Register
          </Button>
          </form> 
        </Paper>
      </div>

    )
  }
}

const mapStateToProps = (state) => {
  return {
    errors: state.errors
  }
}

export default connect(mapStateToProps, {registerUser})(ShelterRegistration)