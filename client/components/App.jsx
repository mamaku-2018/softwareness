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
      <div className='app'>
        <h1>Softwareness</h1>
        <Nav />
        <div className='container'>
          <Route path='/' component={Homegraph} />
          <Route path='/' component={About} />
          <a className="button" href='/companies/add'>
          ADD COMPANY
          </a>
          <a className="button" href='/companies'>
          VIEW COMPANIES
          </a>
          <ErrorMessage />
          <WaitIndicator />
        </div>
      </div>
    </Router>
  )
}

export default App
