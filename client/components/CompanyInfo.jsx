import React from 'react'
import {connect} from 'react-redux'
import {getCompanyInfo} from '../actions/companies'

const companiesRoot = 'https://app.companiesoffice.govt.nz/companies/app/ui/pages/companies/'

class CompanyInfo extends React.Component {
  componentDidMount () {
    const {id, dispatch} = this.props
    dispatch(getCompanyInfo(id))
  }

  render () {
    const {websiteUrl, countryId} = this.props.companyInfo
    return (
      <div>
        <h2>{this.props.companyInfo.name}</h2>
        <a href={`${websiteUrl}`}>Website</a>
        <a href={`${companiesRoot}${countryId}`}>
          NZ Companies Office listing
        </a>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    id: ownProps.id,
    companyInfo: state.companyInfo
  }
}

export default connect(mapStateToProps)(CompanyInfo)
