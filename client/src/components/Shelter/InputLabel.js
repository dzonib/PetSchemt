import React from 'react'

const InputLabel = ({name}) => (
  <div style={{
    display: 'flex',
    justifyContent: 'flex-start', 
    marginLeft: '15px',
    marginTop: '16px', 
    marginBottom: name === 'Select city' || 'Select animal type'? 0: -14
    }}>
    <p style={{
    padding: '0',
    marginBottom: '0'}}>{name}</p>
  </div>
)

export default InputLabel