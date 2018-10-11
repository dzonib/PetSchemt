import React, {Component} from 'react';
import Paper from '@material-ui/core/Paper';
import FormControl from '@material-ui/core/FormControl'; 
// import FormControlLabel from '@material-ui/core/FormControlLabel'; 
// import Input from '@material-ui/core/Input'; 
import InputLabel from '@material-ui/core/InputLabel'; 
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';




class ShelterRegistration extends Component {

  state = {
    cities: [
      '',
      'Banja Luka',
      'Gradiška',
      'Prijedor',
      'Sarajevo',
      'Mostar',
      'Zenica'],
    city: '' 
  }

  handleChange = name => event => {
    this.setState({[name]: event.target.value})
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
            borderBottom: '1px solid black'
          }}
            variant="h3">Register Shelter</Typography>
          <FormControl fullWidth>
            <InputLabel>Select City</InputLabel>
            <Select
              onChange={this.handleChange('city')} 
              native
              value={this.state.city}
              placeholder='Select City'
              
            > 
              {this.state.cities.map( (city) => (
                <option key={city} value={city}>{city}</option>
              ))}
            </Select>
          </FormControl>

          <TextField
            placeholder="Street"
            variant="outlined"
            fullWidth
            required
            type="text"
            margin="normal"/>
          <TextField
            placeholder="Shelter name"
            variant="outlined"
            fullWidth
            required
            type="text"
            margin="normal"/>
          <TextField
            placeholder="Password"
            variant="outlined"
            fullWidth
            required
            type="password"
            margin="normal"/>
          <TextField
            placeholder="Password2"
            variant="outlined"
            fullWidth
            required
            type="password"
            margin="normal"/>
          <Button style={{background: '#DCDCDC', marginTop: '20px'}} size="large" color="primary">
           Register </Button>  
        </Paper>
      </div>

    )
  }
}

export default ShelterRegistration;