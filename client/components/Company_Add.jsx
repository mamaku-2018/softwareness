import React from 'react'
import {connect} from 'react-redux'
import {addCompany} from '../actions'

class CompanyName extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      name: '',
      siteUrl: '',
      countryId: 0
    }
    this.fillState = this.fillState.bind(this)
  }

  fillState (e) {
    switch (e.currentTarget.id) {
      case 'name':
        this.setState.name = e.target.value
        break
      case 'siteUrl':
        this.setState.siteUrl = e.target.value
        break
      case 'countryId':
        this.setState.countryId = e.target.value
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
        <input onClick={this.fillState} type='text' id='siteUrl'/>
        <h3>Company #</h3>
        <input onClick={this.fillState} type='text' id='countryId'/>
        <button className='addButt' onClick={this.addInfo}>ADD</button>
      </div>
    )
  }
}

export default connect()(CompanyName)
