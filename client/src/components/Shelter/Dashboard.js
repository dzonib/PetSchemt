import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

class Dashboard extends Component {
  state = {
    shelter: {}
  }

  static getDerivedStateFromProps(nextProps, nextState) {


    if (nextProps.auth.shelter) {
      return {shelter: nextProps.auth.shelter}
    }
  }

  render() {
    return (
      <div>
        {Object
          .keys(this.state.shelter)
          .length !== 0
          ? <div
              style={{
              display: 'flex',
              justifyContent: 'center'
            }}>
              <div>
                <h1>Wellcome to the {this.state.shelter.name} dashboard</h1>
                <h3>We are stationed in {this.state.shelter.city}</h3>
                <h3>Our address is - {this.state.shelter.street}</h3>
                <h5>We have (number) animals in our shelter. See them 
                &#8594; <span> <Link to='/shelter/animals'>here</Link>&#8592;</span></h5>
              </div>

            </div>
          : null
}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {auth: state.auth}
}

export default connect(mapStateToProps)(Dashboard)