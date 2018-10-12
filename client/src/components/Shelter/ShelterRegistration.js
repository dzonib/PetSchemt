import React, {Component} from 'react';
import Paper from '@material-ui/core/Paper';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';
import axios from 'axios';

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
    password2: ''

  }

  handleChange = name => event => {
    this.setState({[name]: event.target.value})
  }

  onInputChange = name => e => {
    this.setState({[name]: e.target.value})
  }

  submitHandler = async (e) => {
    e.preventDefault();

    console.log(this.props)

    const {
      name,
      city,
      street,
      email,
      imageUrl,
      password,
      password2
    } = this.state;

    const newShelter = {
      name, city, street, email, imageUrl, password, password2
    }

    try {
      const res = await axios.post('/api/shelter/register', newShelter);

      console.log(res)
      this.props.history.push('/login')
    } catch(e) {
      console.log(e.response.data)
      // e.response.data gets you errors from server
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
            <InputLabel>Select City</InputLabel>
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
          </FormControl>

          <TextField
            placeholder="Email"
            variant="outlined"
            fullWidth
            required
            type="email"
            onChange={this.onInputChange('email')}
            margin="normal"/>

          <TextField
            placeholder="Street"
            variant="outlined"
            fullWidth
            required
            type="text"
            onChange={this.onInputChange('street')}
            margin="normal"/>

          <TextField
            placeholder="Image url"
            variant="outlined"
            fullWidth
            required
            type="text"
            onChange={this.onInputChange('imageUrl')}
            margin="normal"/>

          <TextField
            placeholder="Shelter name"
            variant="outlined"
            fullWidth
            required
            type="text"
            onChange={this.onInputChange('name')}
            margin="normal"/>

          <TextField
            placeholder="Password"
            variant="outlined"
            fullWidth
            required
            type="password"
            onChange={this.onInputChange('password')}
            margin="normal"/>

          <TextField
            placeholder="Password2"
            variant="outlined"
            fullWidth
            required
            type="password"
            onChange={this.onInputChange('password2')}
            margin="normal"/>

          <Button
            style={{
            background: '#DCDCDC',
            marginTop: '20px'
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

export default ShelterRegistration;