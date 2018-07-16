import React from 'react'
import {connect} from 'react-redux'

import {getCompanies} from '../actions/companies'

class CompanyList extends React.Component {
  constructor (props) {
    super(props)
    this.state = {}
  }

  componentDidMount () {
    this.props.dispatch(getCompanies())
  }

  render () {
    return (
      <div>
        <h1>reviewed companies</h1>
        <ul>
          {this.props.companies.map(company => {
            return (
              <li key={this.props.company.id}> {this.props.company} </li>
            )
          })}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    companies: state.companies
  }
}

export default connect(mapStateToProps)(CompanyList)
