import React, { Component } from 'react'
import {connect} from 'react-redux'


class Animals extends Component {

  state = {
    animalsByShelter: []
  }

  render() {
    return (
      <div>
        Animals
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  console.log(state)
}

export default connect(mapStateToProps)(Animals)