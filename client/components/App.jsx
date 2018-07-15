import React from 'react'
import {HashRouter as Router, Route, Switch} from 'react-router-dom'

import Nav from './Nav'
<<<<<<< HEAD
import About from './About'
import Stats from './Stats'
import Homegraph from './Homegraph'
import Homebuttons from './Homebuttons'
import ErrorMessage from './ErrorMessage'
import WaitIndicator from './WaitIndicator'
=======
import Home from './Home'
import Stats from './Stats'
import Footer from './Footer'
import CompanyAdd from './CompanyAdd'
import CompanyInfo from './CompanyInfo'
import ErrorMessage from './ErrorMessage'
import WaitIndicator from './WaitIndicator'
import Register from './auth/Register'
>>>>>>> 51f2b2650a489ca35b3c84a80d215c97758c6fed

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
<<<<<<< HEAD
          <Route exact path='/' component={Homegraph} />
          <Route exact path='/' component={About} />
          <Route path='/' component={Homebuttons} />
          <WaitIndicator />
=======
          <Route path='/register' component={Register} />
          <Switch>
            <Route path='/companies/add' component={CompanyAdd} />
            <Route path='/companies/:id' component={CompanyInfo} />
          </Switch>
>>>>>>> 51f2b2650a489ca35b3c84a80d215c97758c6fed
        </div>
        <Footer />
      </div>
    </Router>
  )
}

export default App
