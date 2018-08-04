import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Homepage extends Component {
  render() {
    return (
      <div>
        <Link to="/login">Login Page</Link>
        Homepage here!!!!!
      </div>
    )
  }
}

export default Homepage
