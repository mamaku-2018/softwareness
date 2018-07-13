import React from 'react'
import {HashRouter as Router, Route, Link, Switch} from 'react-router-dom'

import Nav from './Nav'
import Stats from './Stats'
import Home from './Home'
import CompanyAdd from './CompanyAdd'
import CompanyInfo from './CompanyInfo'
import ErrorMessage from './ErrorMessage'
import WaitIndicator from './WaitIndicator'

const App = () => {
  return (
    <Router>
      <div className='app'>
        <Nav />
        <ErrorMessage />
        <Link to='/stats'>Stats</Link>
        <div className='container'>
          <Route path='/stats' component={Stats} />
          <Route exact path='/' component={Home} />
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
