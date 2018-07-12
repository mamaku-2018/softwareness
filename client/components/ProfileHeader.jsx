import React from 'react'
import {connect} from 'react-redux'

const companyHeader = ({profileHeader}) => ( // from reducer
  <div>
    {companyHeader.name}
    {companyHeader.website_url}
    {companyHeader.country_id}
  </div>
)

const mapStateToProps = (state) => {
  return {
    profileHeader: state.profileHeader
  }
}

export default connect(
  mapStateToProps
)(companyHeader)
