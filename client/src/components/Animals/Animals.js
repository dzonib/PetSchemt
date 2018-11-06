import React, { Component } from 'react'
import {connect} from 'react-redux'

import getAllAnimals from '../../redux/actions/animals/getAnimals'
import getAnimalById from '../../redux/actions/animals/getAnimalById'


class Animals extends Component {

  state = {
    animals: []
  }

  componentDidMount() {
    this.props.getAllAnimals()
  }

  static getDerivedStateFromProps(nextProps, nextState) {
    return {animals: nextProps.animals}
  }

  handleAnimal = (id) => {
    this.props.getAnimalById(id, this.props.history)
  }

  render() {
    const allAnimals = this.state.animals
    return (
      <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
        gap: '10px',
        margin: '60px'
      }}
    >
    
      {allAnimals.length !== 0 ?
        allAnimals.map(
        ({animalAge, 
      animalBreed, animalImage, animalName, animalType, reserved, shelter, _id }) => {
        return <div key={_id} style={{
          display: 'block',
          textAlign: 'center',
          fontFamily: 'cursive',
          border: '1px solid black',
          borderRadius: '20px',
          width: '100%'
        }}>
          <p onClick={() => this.handleAnimal(_id)}>{animalName}</p>
          <img src={animalImage} alt="animal" 
          style={{width: '150px', height: '150px', borderRadius: '10px'}}/>
          <p>{reserved}</p>
        </div>
      }
      ) : <p>De nada</p>}
    </div>
    )
  }
}


const mapStateToProps = state => {
  return {
    animals: state.animals
  }
}


export default connect(mapStateToProps, {getAllAnimals, getAnimalById})(Animals)