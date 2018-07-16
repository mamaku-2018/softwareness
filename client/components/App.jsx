import React from 'react'
import {HashRouter as Router, Route, Switch} from 'react-router-dom'

import Nav from './Nav'
import Home from './Home'
import Stats from './Stats'
import Footer from './Footer'
import CompanyAdd from './CompanyAdd'
import CompanyInfo from './CompanyInfo'
import ErrorMessage from './ErrorMessage'
import WaitIndicator from './WaitIndicator'
import Register from './auth/Register'
import CompanyList from './CompanyList'

const App = () => {
  return (
    <Router>
      <div className='container'>
        <Nav />
        <ErrorMessage />
        <WaitIndicator />
        <div className='container'>
          <Route exact path='/' component={Home} />
          <Route path='/stats' component={Stats} />
          <Route path='/register' component={Register} />
          <Route path='/companies' component={CompanyList} />
          <Switch>
            <Route path='/companies/add' component={CompanyAdd} />
            <Route path='/companies/:id' component={CompanyInfo} />
          </Switch>
        </div>
        <Footer />
      </div>
    </Router>
  )
}

export default App
