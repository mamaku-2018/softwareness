import React from 'react'
import {connect} from 'react-redux'
import {getCompanyInfo, getCompanyProfile} from '../actions/companies'
import EmployeeStats from './EmployeeStats'
import CompanyInfo from './CompanyInfo'

class CompanyProfile extends React.Component {
  componentDidMount () {
    const id = this.props.match.params.id
    this.props.dispatch(getCompanyInfo(id))
    this.props.dispatch(getCompanyProfile(id))
  }

  render () {
    return (
      <div>
        <h2>{this.props.companyInfo.name}</h2>
        <CompanyInfo />
        <EmployeeStats />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    companyInfo: state.companyInfo
  }
}

export default connect(mapStateToProps)(CompanyProfile)
