import React from 'react'
import {connect} from 'react-redux'
import {addCompany, showError} from '../actions'

export class CompanyName extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      name: '',
      siteUrl: '',
      countryId: 0
    }
    this.companyHandler = this.companyHandler.bind(this)
    this.addInfo = this.addInfo.bind(this)
  }

  companyHandler (e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  addInfo () {
    if (typeof this.state.countryId === 'number') {
      this.state.dispatch(addCompany(this.state))
    } else {
      this.state.dispatch(showError('Please enter a number for company #'))
    }
  }

  render () {
    return (
      <div>
        <h2 className='AddCompTitle'>Add Company</h2>
        <div className='CompanyAddForm'>
          <h3>Name:</h3>
          <input onChange={this.fillState} type='text' name='name'/>
          <h3>Site URL:</h3>
          <input onChange={this.fillState} type='text' name='siteUrl'/>
          <h3>Company #:</h3>
          <input onChange={this.fillState} type='number' name='countryId'/>
          <button className='addButt' onClick={this.addInfo}>ADD</button>
        </div>
      </div>
    )
  }
}
export default connect()(CompanyName)
