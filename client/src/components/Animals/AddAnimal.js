import React, {Component} from 'react'
import {connect} from 'react-redux'

import addAnimal from '../../redux/actions/animals/addAnimal'
import Paper from '@material-ui/core/Paper'
import FormControl from '@material-ui/core/FormControl'
import Typography from '@material-ui/core/Typography'
import Select from '@material-ui/core/Select'
import Button from '@material-ui/core/Button'
import InputField from '../Shelter/InputField'
import InputLabel from '../Shelter/InputLabel'

class AddAnimal extends Component {

  state = {
    animalTypes: [
      '', 'Dog', 'Cat'
    ],
    animalType: '',
    animalBreed: '',
    animalAge: '',
    animalImage: '',
    animalName: '',
    reserved: false,
    shelter: ''
  }

  handleChange = name => event => {
    this.setState({[name]: event.target.value})
  }

  onInputChange = (name, e) => {
    this.setState({[name]: e.target.value})
  }

  submitHandler = (e) => {
    e.preventDefault()

    const {
      animalAge, 
      animalBreed, 
      animalImage, 
      animalName, 
      animalType, 
      reserved, 
      shelter} = this.state

      const animal = {
        animalAge, 
        animalBreed, 
        animalImage, 
        animalName, 
        animalType, 
        reserved, 
        shelter
      }

      animal.shelter = 'asasdsdasad'

      this.props.addAnimal(animal, this.props.history)
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
              variant="h3">Add Animal</Typography>
            <FormControl fullWidth>
              <InputLabel name='Select animal type'/>
              <Select
                onChange={this.handleChange('animalType')}
                native
                value={this.state.animalType}
                placeholder='Select Animal Type'>
                {this
                  .state
                  .animalTypes
                  .map((animalType) => (
                    <option key={animalType} value={animalType}>{animalType}</option>
                  ))}
              </Select>
            </FormControl>

            <InputLabel name='Animal breed'/>
            <InputField
              placeholder="Animal breed"
              type="text"
              onInputChange={(e) => this.onInputChange('animalBreed', e)}
              // error={this.state.errors.email}
              />

              <InputLabel name='Animal age'/>
              <InputField
              placeholder="Animal age"
              type="text"
              onInputChange={(e) => this.onInputChange('animalAge', e)}
              // error={this.state.errors.email}
              />  

              <InputLabel name='Animal image (URL)'/>
              <InputField
              placeholder="Animal image (URL)"
              type="text"
              onInputChange={(e) => this.onInputChange('animalImage', e)}
              // error={this.state.errors.email}
              />  

              <InputLabel name='Animal name'/>
              <InputField
              placeholder="Animal name"
              type="text"
              onInputChange={(e) => this.onInputChange('animalName', e)}
              // error={this.state.errors.email}
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
              Add Animal
            </Button>
          </form>
        </Paper>
      </div>
    )
  }
}

export default connect(null, {addAnimal})(AddAnimal)