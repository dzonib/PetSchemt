import React, {Component} from 'react'
import {connect} from 'react-redux'
import Paper from '@material-ui/core/Paper';

class Animal extends Component {

  state = {
    animal: {}
  }

  static getDerivedStateFromProps(nextProps, nextState) {
    return {animal: nextProps.animal}
  }

  render() {
    const {
      animalAge,
      animalBreed,
      animalImage,
      animalName,
      animalType,
      reserved
    } = this.state.animal
    return (
      <Paper style={{
        width: '85%',
        margin: '30px auto'
      }}>
        <h2 style={{margin: '20px auto', textAlign: 'center'}}>{animalName}</h2>
        <div
          style={{
          width: '100%',
          height: '100%',
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gridTemplateRows: '1fr',
          gridTemplateAreas: "'left' 'right'"
        }}>
          <div>
            <p>Animal Type:</p>
            <p>{animalType}</p>
            <p>Animal Breed:</p>
            <p>{animalBreed}</p>
            <p>Animal Age:</p>
            <p>{animalAge}</p>
          </div>

          <img
            src={animalImage}
            alt="animal"
            style={{
            width: '500px',
            height: '500px',
          }}/>
          <p>{reserved}</p>
        </div>
      </Paper>
    )
  }
}

const mapStateToProps = (state) => {
  return {animal: state.animal.animal}
}

export default connect(mapStateToProps)(Animal)