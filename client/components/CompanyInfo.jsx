import React from 'react'
import {connect} from 'react-redux'
import {getCompanyInfo} from '../actions'

const companiesRoot = 'https://app.companiesoffice.govt.nz/companies/app/ui/pages/companies/'

class CompanyInfo extends React.Component {
  componentDidMount () {
    this.props.dispatch(getCompanyInfo())
  }

  render () {
    return (
      <div>
        <h2>{this.props.companyProfile.name}</h2>
        <a href="{this.props.companyProfile.website_url}">Website</a>
        <a href={`${companiesRoot}${this.props.companyProfile.country_id}`}>
          NZ Companies Office listing
        </a>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    companyProfile: state.companyProfile
  }
}

export default connect(mapStateToProps)(CompanyInfo)
