import React from 'react'
import {connect} from 'react-redux'
import {getCompanyInfo} from '../actions'

class CompanyInfo extends React.Component {
  constructor (props) {
    super(props)
    this.state = {}
  }

  componentDidMount () {
    this.props.dispatch(getCompanyInfo())
  }

  render () {
    return (
      <div>
        {this.props.companyProfile.name}
        {this.props.companyProfile.website_url}
        {this.props.companyProfile.country_id}
      </div>

    )
  }
}

const mapStateToProps = (state) => {
  return {
    companyProfile: state.companyProfile
  }
}

export default connect(
  mapStateToProps
)(CompanyInfo)
