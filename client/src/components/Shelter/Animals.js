import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'

import getAnimalById from '../../redux/actions/animals/getAnimalById'
import setAnimals from '../../redux/actions/shelter/getAnimals'


class Animals extends Component {

  state = {
    animalsByShelter: [],
  }

  componentDidMount() {
    this.props.setAnimals()
  }

  static getDerivedStateFromProps(nextProps, nextState) {
    // if (this.state.animalsByShelter.length !== nextProps.animalsByShelter.length) {
      return {animalsByShelter: nextProps.animalsByShelter}
    // }
  }

  handleAnimal = (id) => {
    this.props.getAnimalById(id, this.props.history)
  }

  render() {
    const {animalsByShelter} = this.state
    return (
      <div>

      <Link to="/animals/add"><button>Add Animal</button></Link>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '10px',
          margin: '60px'
        }}
      >
      
        {animalsByShelter.length !== 0 ?
        animalsByShelter.map(
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
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    animalsByShelter: state.animalsByShelter,
  }
}

export default connect(mapStateToProps, {setAnimals, getAnimalById})(Animals)