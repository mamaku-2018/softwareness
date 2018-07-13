import React from 'react'
import {HashRouter as Router, Route} from 'react-router-dom'

import ErrorMessage from './ErrorMessage'
import WaitIndicator from './WaitIndicator'
import Nav from './Nav'
import Homegraph from './Homegraph'
import About from './About'
import Register from './auth/Register'

const App = () => {
  return (
    <Router>
      <div className='app'>
        <Nav />
        <ErrorMessage />
        <div className='container'>
          <Route path='/register' component={Register} />
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
