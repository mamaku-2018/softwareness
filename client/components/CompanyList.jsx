import React from 'react'
import {connect} from 'react-redux'

import {getCompanies} from '../actions/companies'

class CompanyList extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      search: ''
    }
    this.searchCompany = this.searchCompany.bind(this)
  }
  componentDidMount () {
    this.props.dispatch(getCompanies())
  }

  searchCompany () {
    this.props.companyList.filter(companies => {
      console.log(companies = this.state.search)
    }
    )
  }

  render () {
    this.searchCompany()

    return (
      <div className='companyList'>
        <h1>Reviewed Companies</h1>
        <p>Softwareness is working with forward-thinking companies to improve self-awareness in the software industry.</p>
        <div className="field has-addons">
          <div className="control">
            <input className="search" type="text" placeholder="Find a company" onChange={this.handleChange} value={this.state.search} />
          </div>
          <div className="control">
            <a className="button is-info">Search</a>
          </div>
        </div>
        <ul>
          {this.props.companyList.map(company => {
            return (

              <li key={company.id}>
                <a className='companyName' href={company.websiteUrl}>{company.name}</a>
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
