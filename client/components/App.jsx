import React from 'react'
import {HashRouter as Router, Route} from 'react-router-dom'

import ErrorMessage from './ErrorMessage'
import WaitIndicator from './WaitIndicator'
import Nav from './Nav'
import Homegraph from './Homegraph'
import About from './About'
import CompanyAdd from './CompanyAdd'

const App = () => {
  return (
    <Router>
      <div className='app'>
        <Nav />
        <ErrorMessage />
        <div className='container'>
          <Route exact path='/' component={Homegraph} />
          <Route exact path='/' component={About} />
          <Route path='/companies/add' component={CompanyAdd} />
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
