import React, { Component } from 'react'
import loading from './loading-waiting.gif'

export class Spinner extends Component {
  render() {
    return (
      <div className='d-flex justify-content-center '>
        <img src={loading} alt='loading' height='200px' style={{mixBlendMode:'multiply'}} />
      </div>
    )
  }
}

export default Spinner
