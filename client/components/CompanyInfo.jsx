import React from 'react'
import {connect} from 'react-redux'

const companyProfile = ({companyProfile}) => ( // from reducer
  <div>
    {companyProfile.name}
    {companyProfile.website_url}
    {companyProfile.country_id}
  </div>
)

const mapStateToProps = (state) => {
  return {
    companyProfile: state.companyProfile
  }
}

export default connect(
  mapStateToProps
)(companyProfile)
