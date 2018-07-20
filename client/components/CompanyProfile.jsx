import React from 'react'
import {connect} from 'react-redux'

import CompanyInfo from './CompanyInfo'
import EmployeeStats from './EmployeeStats'
import CompanyGenderStats from './stats/CompanyGender'
// import CompanyForeignLocalStats from './stats/CompanyForeignLocal'
import {getCompanyInfo, getCompanyProfile} from '../actions/companies'

class CompanyProfile extends React.Component {
  componentDidMount () {
    const id = this.props.match.params.id
    this.props.dispatch(getCompanyInfo(id))
    this.props.dispatch(getCompanyProfile(id))
  }

  render () {
    const {id} = this.props.match.params
    return (
      <div>
        <h2>{this.props.companyInfo.name}</h2>
        <CompanyInfo id={id} />
        <EmployeeStats id={id} />
        <CompanyGenderStats id={id} />
        {/* <CompanyForeignLocalStats id={id} /> */}
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    match: ownProps.match,
    companyInfo: state.companyInfo
  }
}

export default connect(mapStateToProps)(CompanyProfile)
