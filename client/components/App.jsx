import React from 'react'
import {HashRouter as Router, Route} from 'react-router-dom'

import Nav from './Nav'
import About from './About'
import Homegraph from './Homegraph'
import CompanyAdd from './CompanyAdd'
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
          <Route exact path='/' component={Homegraph} />
          <Route exact path='/' component={About} />
          <Route exact path='/' component={Homebuttons} />
          <Route path='/companies/add' component={CompanyAdd} />
          <WaitIndicator />
        </div>
      </div>
    </Router>
  )
}

export default App
