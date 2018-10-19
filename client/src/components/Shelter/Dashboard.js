import React, { Component } from 'react'
import {connect} from 'react-redux'

class Dashboard extends Component {
  state = {
    shelter: ''
  }

  static getDerivedStateFromProps(nextProps, nextState) {
    if (nextProps.shelter) {
      return {
        shelter: nextProps.shelter
      }
    }
  }

  render() {
    console.log(this.state.shelter)
    return ( 
      <div>
        {
          Object.keys(this.state.shelter).length !== 0 ?
          <div>
            <h1>Wellcome to the {this.state.shelter.name} dashboard</h1>
            <h3>We are stationed in {this.state.shelter.city}</h3>
            <h3>Our address is - {this.state.shelter.street}</h3>
            <h5>We have (number) animals sheltered</h5>
          </div> :
          null
        }
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    shelter: state.auth.shelter
  }
}

export default connect(mapStateToProps)(Dashboard)