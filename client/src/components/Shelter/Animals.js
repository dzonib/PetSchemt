import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'

import setAnimals from '../../redux/actions/shelter/getAnimals'


class Animals extends Component {

  state = {
    animalsByShelter: []
  }

  componentDidMount() {
    this.props.setAnimals()
  }

  static getDerivedStateFromProps(nextProps, nextState) {
    // if (this.state.animalsByShelter.length !== nextProps.animalsByShelter.length) {
      return {animalsByShelter: nextProps.animalsByShelter}
    // }
  }

  render() {
    const {animalsByShelter} = this.state
    return (
      <div>
      
      <Link to="/animals/add"><button>Add Animal</button></Link>
        {animalsByShelter.length !== 0 ?
        animalsByShelter.map(({animalAge, 
        animalBreed, animalImage, animalName, animalType, reserved, shelter, _id }) => {
          return <div key={_id}>
            <p>Animal Type:</p>
            <p>{animalType}</p>
            <p>Animal Breed:</p>
            <p>{animalBreed}</p>
            <p>Animal Name:</p>
            <p>{animalName}</p>
            <p>Animal Age:</p>
            <p>{animalAge}</p>
            <img src={animalImage} alt="animal" style={{maxWidth: '100px', maxHeight: '100px'}}/>
            <p>{reserved}</p>
            <hr></hr>
          </div>
        }) : <p>De nada</p>}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    animalsByShelter: state.animalsByShelter
  }
}

export default connect(mapStateToProps, {setAnimals})(Animals)