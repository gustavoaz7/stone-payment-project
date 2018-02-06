import React, { Component } from 'react'

import './App.css'
import mockedData from './mockedData'
import ImageTitle from './components/ImageTitle/'
import Tables from './components/Tables/'

class App extends Component {

  render() {
    return (
      <div className="App">
        <ImageTitle />
        <Tables tables={mockedData} />
      </div>
    )
  }
}

export default App
