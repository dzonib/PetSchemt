import React, {Component} from 'react';
import Paper from '@material-ui/core/Paper';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import Typography from '@material-ui/core/Typography';

class ShelterRegistration extends Component {
  render() {
    return (
      <div style={{display: 'flex', justifyContent: 'center'}}>
        <Paper
          style={{
          width: '500px',
          height: '85vh',
          padding: '10px'
        }}>
          <FormControl fullWidth required>
            <InputLabel>City</InputLabel>
            <Input name='City' type='text' id='city'/>
          </FormControl>
        </Paper>
      </div>

    )
  }
}

export default ShelterRegistration;