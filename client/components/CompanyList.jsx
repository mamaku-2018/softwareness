import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

import {getCompanies} from '../actions/companies'

class CompanyList extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      search: '',
      companies: []
    }
    this.searchBar = this.searchBar.bind(this)
  }

  componentDidMount () {
    this.props.dispatch(getCompanies())
      .then(() => {
        this.setState({
          companies: this.props.companyList
        })
      })
  }

  searchBar (e) {
    const search = e.target.value
    const companies = search === ''
      ? this.props.companyList
      : this.props.companyList.filter(company => (
        company.name.toLowerCase().search(search.toLowerCase()) !== -1
      ))

    this.setState({
      search,
      companies
    })
  }

  render () {
    return (
      <div className='companyList'>
        <h3>Reviewed Companies</h3>
        <p>
          Softwareness is working with forward-thinking companies
          to improve self-awareness in the software industry.
        </p>
        <div className="field has-addons">
          <div className="control">
            <input
              className="search"
              type="text"
              placeholder="Find a company"
              onChange={this.searchBar}
              value={this.state.search} />
          </div>
          <div className="control">
            <a className="button is-info">Search</a>
          </div>
        </div>
        <ul>
          {this.state.companies.map(company => {
            return (
              <li key={company.id}>
                <Link to={`/companies/${company.id}`} className='companyName'>
                  {company.name}
                </Link>
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
