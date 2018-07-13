import React from 'react'
import {HashRouter as Router, Route, Switch} from 'react-router-dom'

import Nav from './Nav'
import Home from './Home'
import CompanyAdd from './CompanyAdd'
import CompanyInfo from './CompanyInfo'
import ErrorMessage from './ErrorMessage'
import WaitIndicator from './WaitIndicator'
import Register from './auth/Register'

const App = () => {
  return (
    <Router>
      <div className='app'>
        <Nav />
        <ErrorMessage />
        <div className='container'>
          <Route exact path='/' component={Home} />
          <Route path='/register' component={Register} />
          <Switch>
            <Route path='/companies/add' component={CompanyAdd} />
            <Route path='/companies/:id' component={CompanyInfo} />
          </Switch>
          <WaitIndicator />
        </div>
      </div>
    </Router>
  )
}

export default App
