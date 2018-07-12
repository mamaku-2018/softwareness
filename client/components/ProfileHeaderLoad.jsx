import React from 'react'
import {connect} from 'react-redux'
import {getCompanyInfo} from '../actions'

class ProfileHeaderLoad extends React.Component {
  constructor (props) {
    super(props)
    this.state = {}
  }

  componentDidMount () {
    this.props.dispatch(getCompanyInfo())
  }
}

export default connect()(ProfileHeaderLoad)
