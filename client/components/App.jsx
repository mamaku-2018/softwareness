import React from 'react'
import {HashRouter as Router, Route} from 'react-router-dom'

import ErrorMessage from './ErrorMessage'
import WaitIndicator from './WaitIndicator'
import Nav from './Nav'
import Homegraph from './Homegraph'
import Homebuttons from './Homebuttons'
import About from './About'

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
