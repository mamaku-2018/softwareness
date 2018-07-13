import React from 'react'
import {HashRouter as Router, Route} from 'react-router-dom'

import Nav from './Nav'
import About from './About'
import Homegraph from './Homegraph'
import Homebuttons from './Homebuttons'
import ErrorMessage from './ErrorMessage'
import WaitIndicator from './WaitIndicator'

const App = () => {
  return (
    <Router>
      <div className='app'>
        <Nav />
        <ErrorMessage />
        <div className='container'>
          <Route path='/' component={Homegraph} />
          <Route path='/' component={About} />
          <Route path='/' component={Homebuttons} />
          <WaitIndicator />
        </div>
      </div>
    </Router>
  )
}

export default App
