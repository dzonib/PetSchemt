import React from 'react'
import TextField from '@material-ui/core/TextField'


const InputField = ({placeholder, type, onInputChange, error}) => (
  <div style={{display: 'grid'}}>
    <TextField
    style={{display:"block"}}
      error={error ? true : false}
      placeholder={placeholder}
      variant="outlined"
      fullWidth
      required
      type={type}
      onChange={onInputChange}
      margin="normal"
    />

    {error && <div style={{display: 'flex', justifyContent: 'flex-strt'}}>
    <p style={{color: 'red'}}>{error}</p></div>}

  </div>
)

export default InputField