import React from 'react'
import {connect} from 'react-redux'
<<<<<<< HEAD
import {getCompanyInfo} from '../actions'
=======
import {getCompanyInfo} from '../actions/companies'
>>>>>>> 51f2b2650a489ca35b3c84a80d215c97758c6fed

const companiesRoot = 'https://app.companiesoffice.govt.nz/companies/app/ui/pages/companies/'

class CompanyInfo extends React.Component {
  componentDidMount () {
<<<<<<< HEAD
    this.props.dispatch(getCompanyInfo())
=======
    const id = this.props.match.params.id
    this.props.dispatch(getCompanyInfo(id))
>>>>>>> 51f2b2650a489ca35b3c84a80d215c97758c6fed
  }

  render () {
    return (
      <div>
<<<<<<< HEAD
        <h2>{this.props.companyProfile.name}</h2>
        <a href="{this.props.companyProfile.website_url}">Website</a>
        <a href={`${companiesRoot}${this.props.companyProfile.country_id}`}>
=======
        <h2>{this.props.companyInfo.name}</h2>
        <a href={`${this.props.companyInfo.websiteUrl}`}>Website</a>
        <a href={`${companiesRoot}${this.props.companyInfo.countryId}`}>
>>>>>>> 51f2b2650a489ca35b3c84a80d215c97758c6fed
          NZ Companies Office listing
        </a>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
<<<<<<< HEAD
    companyProfile: state.companyProfile
=======
    companyInfo: state.companyInfo
>>>>>>> 51f2b2650a489ca35b3c84a80d215c97758c6fed
  }
}

export default connect(mapStateToProps)(CompanyInfo)
