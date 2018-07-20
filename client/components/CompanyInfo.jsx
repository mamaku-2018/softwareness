import React from 'react'
import {connect} from 'react-redux'
import {Route} from 'react-router'

import {getCompanyInfo} from '../actions/companies'
import CompanyProfileEdit from './CompanyProfileEdit'

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
        <Route path='/companies/profile/:id/edit' component={CompanyProfileEdit} />
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
