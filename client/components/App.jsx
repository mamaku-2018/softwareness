import React from 'react'
import {HashRouter as Router, Route} from 'react-router-dom'

import ErrorMessage from './ErrorMessage'
import WaitIndicator from './WaitIndicator'
import Nav from './Nav'
import Homegraph from './Homegraph'
import About from './About'

const App = () => {
  return (
    <Router>
      <div className='container'>
        <Nav />
        <ErrorMessage />
        <div className='main-container'>
          <div className='columns'>
            <div className='column' id='homegraph'>
              <Route path='/' component={Homegraph} />
            </div>
            <div className='column' id='about'>
              <Route path='/' component={About} />
              <a className='button' href='/companies/add'>ADD COMPANY</a>
              <br />
              <a className='button' href='/companies'>VIEW COMPANIES</a>
              <WaitIndicator />
            </div>
          </div>
        </div>
      </div>
    </Router>
  )
}

export default App
