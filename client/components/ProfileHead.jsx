import React from 'react'
import {connect} from 'react-redux'
import {getCompanyInfo} from '../apiClient'
//import Item from './Item'

class ProfileHead extends React.Component {
  constructor (props) {
    super(props)
    this.state = {}
  }

  componentDidMount () {
    this.props.dispatch(getCompanyInfo())
  }

  render () {
    return (
      <div className='profileheader'>
        <h2>Profile of company</h2>
        <h3>Website: {this.props.profileHeader.website} </h3>
        <h3>registration No: : {this.props.profileHeader.regNo}</h3>      
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    items: state.items
  }
}

export default connect(mapStateToProps)(ProfileHead)
