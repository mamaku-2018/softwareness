import React from 'react'
import {connect} from 'react-redux'
import {getCompanyInfo} from '../actions/companies'

const companiesRoot = 'https://app.companiesoffice.govt.nz/companies/app/ui/pages/companies/'

class CompanyInfo extends React.Component {
  componentDidMount () {
    const id = this.props.match.params.id
    this.props.dispatch(getCompanyInfo(id))
  }

  render () {
    return (
      <div>
        <h2>{this.props.companyInfo.name}</h2>
        <a href={`${this.props.companyInfo.websiteUrl}`}>Website</a>
        <a href={`${companiesRoot}${this.props.companyInfo.countryId}`}>
          NZ Companies Office listing
        </a>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    companyInfo: state.companyInfo
  }
}

export default connect(mapStateToProps)(CompanyInfo)
