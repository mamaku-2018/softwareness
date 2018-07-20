import React from 'react'
import {connect} from 'react-redux'
import {showError} from '../actions'
import {addCompany} from '../actions/companies'
import {Redirect} from 'react-router-dom'

export class CompanyAdd extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      name: '',
      websiteUrl: '',
      countryId: 0,
      redirect: false
    }
    this.submitHandler = this.submitHandler.bind(this)
    this.changeHandler = this.changeHandler.bind(this)
  }

  changeHandler (e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  submitHandler () {
    const countryNumber = Number(this.state.countryId)
    if (typeof countryNumber === 'number' && !isNaN(countryNumber)) {
      this.props.dispatch(addCompany(this.state))
      this.setState({redirect: true})
    } else {
      this.props.dispatch(showError('Please enter a number for company #'))
    }
  }

  render () {
    if (this.state.redirect) {
      return (
        <Redirect to='/companies' />
      )
    } else {
      return (
        <div className='companyAdd'>
          <h3>Add Company</h3>
          <div className='CompanyAddForm'>
            <label>Name:</label>
            <input onChange={this.changeHandler} name='name' placeholder='Name'/>
            <label>Website URL:</label>
            <input onChange={this.changeHandler} name='siteUrl' placeholder='Website URL'/>
            <label>NZ Companies Number:</label>
            <input onChange={this.changeHandler} name='countryId' placeholder='NZ Companies Number'/>
            <button className='button' onClick={this.submitHandler}>ADD</button>
          </div>
        </div>
      )
    }
  }
}

export default connect()(CompanyAdd)
