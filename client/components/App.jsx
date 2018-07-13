import React from 'react'
import {HashRouter as Router, Route} from 'react-router-dom'

import Nav from './Nav'
import About from './About'
import Homegraph from './Homegraph'
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
          <a className="button" href='/companies/add'>ADD COMPANY</a>
          <br />
          <a className="button" href='/companies'>VIEW COMPANIES</a>
          <WaitIndicator />
        </div>
      </div>
    </Router>
  )
}

export default App
