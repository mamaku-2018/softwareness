import React from 'react'
import {connect} from 'react-redux'

import {getCompanies} from '../actions/companies'

class CompanyList extends React.Component {
  componentDidMount () {
    this.props.dispatch(getCompanies())
  }

  render () {
    return (
      <div className='companyList'>
        <h1>reviewed companies</h1>
        <ul>
          {this.props.companyList.map(company => {
            return (
              <li key={company.id}> {company.name} </li>
            )
          })}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    companyList: state.companyList
  }
}

export default connect(mapStateToProps)(CompanyList)
