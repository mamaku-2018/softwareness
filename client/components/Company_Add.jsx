import React from 'react'
import {Route, Router} from 'react-router'
import {connect} from 'react-redux'
import {addCompany} from '../actions'

class CompanyName extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      name: '',
      siteURL: '',
      nzCompany: 0
    }
    this.fillState = this.fillState.bind(this)
  }

  fillState (e) {
    switch (e.currentTarget.id) {
      case 'name':
        this.setState.name = e.target.value
        break
      case 'site-url':
        this.setState.siteURL = e.target.value
        break
      case 'nz-company':
        this.setState.nzCompany = e.target.value
        break
    }
  }

  addInfo () {
    this.props.dispatch(addCompany(this.state))
  }

  render () {
    return (
      <div>
        <h2>Add Company</h2>
        <h3>Name</h3>
        <input onClick={this.fillState} type='text' id='name'/>
        <h3>Site URL</h3>
        <input onClick={this.fillState} type='text' id='site-url'/>
        <h3>NZ Company #</h3>
        <input onClick={this.fillState} type='text' id='nz-company'/>
        <button className='addButt' onClick={this.addInfo}>ADD</button>
      </div>
    )
  }
}

export default connect()(CompanyName)
