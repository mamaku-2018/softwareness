import React from 'react'
import {connect} from 'react-redux'
<<<<<<< HEAD
import {addCompany, showError} from '../actions'
=======
import {showError} from '../actions'
import {addCompany} from '../actions/companies'
>>>>>>> 51f2b2650a489ca35b3c84a80d215c97758c6fed

export class CompanyName extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      name: '',
<<<<<<< HEAD
      siteUrl: '',
      countryId: 0
    }
    this.companyHandler = this.companyHandler.bind(this)
    this.addInfo = this.addInfo.bind(this)
  }

  companyHandler (e) {
=======
      websiteUrl: '',
      countryId: 0
    }
    this.submitHandler = this.submitHandler.bind(this)
    this.changeHandler = this.changeHandler.bind(this)
  }

  changeHandler (e) {
>>>>>>> 51f2b2650a489ca35b3c84a80d215c97758c6fed
    this.setState({
      [e.target.name]: e.target.value
    })
  }

<<<<<<< HEAD
  addInfo () {
    if (typeof this.state.countryId === 'number') {
      this.state.dispatch(addCompany(this.state))
    } else {
      this.state.dispatch(showError('Please enter a number for company #'))
=======
  submitHandler () {
    const countryNumber = Number(this.state.countryId)
    if (typeof countryNumber === 'number' && !isNaN(countryNumber)) {
      this.props.dispatch(addCompany(this.state))
    } else {
      this.props.dispatch(showError('Please enter a number for company #'))
>>>>>>> 51f2b2650a489ca35b3c84a80d215c97758c6fed
    }
  }

  render () {
    return (
      <div>
<<<<<<< HEAD
        <h2>Add Company</h2>
        <h3>Name</h3>
        <input onChange={this.fillState} type='text' name='name'/>
        <h3>Site URL</h3>
        <input onChange={this.fillState} type='text' name='siteUrl'/>
        <h3>Company #</h3>
        <input onChange={this.fillState} type='number' name='countryId'/>
        <button className='addButt' onClick={this.addInfo}>ADD</button>
=======
        <h2 className='AddCompTitle'>Add Company</h2>
        <div className='CompanyAddForm'>
          <h3>Name:</h3>
          <input onChange={this.changeHandler} name='name'/>
          <h3>Site URL:</h3>
          <input onChange={this.changeHandler} name='siteUrl'/>
          <h3>Company #:</h3>
          <input onChange={this.changeHandler} name='countryId'/>
          <button className='addButt' onClick={this.submitHandler}>ADD</button>
        </div>
>>>>>>> 51f2b2650a489ca35b3c84a80d215c97758c6fed
      </div>
    )
  }
}
export default connect()(CompanyName)
