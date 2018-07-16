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
        <h1>Reviewed Companies</h1>
        <p>Softwareness is working with forward-thinking companies to improve self-awareness in the software industry.</p>
        <ul>
          {this.props.companyList.map(company => {
            return (

              <li key={company.id}>
                <a href={company.websiteUrl}>{company.name}</a>
              </li>

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
