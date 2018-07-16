import React from 'react'
import {connect} from 'react-redux'

import CompanyInfo from '../components/CompanyInfo'
import {getCompanies} from '../actions/companies'

class CompanyList extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      companies: []
    }
  }

  componentDidMount () {
    this.props.dispatch(getCompanies())
  }

  render () {
    return (
      <div>
        <h2>reviewed companies</h2>
        <ul>
          {this.props.companies.map(company => {
            return (
              <CompanyInfo key={this.props.company.id} company={this.props.company} />
            )
          })}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    comapnies: state.companies
  }
}

export default connect(mapStateToProps)(CompanyList)
