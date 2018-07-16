import React from 'react'
import {connect} from 'react-redux'

import {getCompanies} from '../actions/companies'

class CompanyList extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      search: '',
      companyNames: []
    }
    this.updateSearch = this.updateSearch.bind(this)
    this.searchBar = this.searchBar.bind(this)
  }
  componentDidMount () {
    this.props.dispatch(getCompanies())
      .then(() => {
        this.setState({
          companyNames: this.props.companyList.map(company => company.name)
        })
      })
  }

  searchBar (e) {
    if (e.target.value === '') {
      this.setState({
        companyNames: this.props.companyList.map(company => company.name)
      })
      this.setState({
        search: e.target.value
      })
    } else {
      let searchList = this.props.companyList.map(company => company.name)
      searchList = searchList.filter(res => {
        return res.toLowerCase().search(e.target.value.toLowerCase()) !== -1
      })
      this.setState({
        search: e.target.value
      })
      this.setState({
        companyNames: searchList
      })
    }
  }

  updateSearch (e) {
    this.setState({
      search: e.target.value
    })
  }

  render () {
    return (
      <div className='companyList'>
        <h1>Reviewed Companies</h1>
        <p>Softwareness is working with forward-thinking companies to improve self-awareness in the software industry.</p>
        <div className="field has-addons">
          <div className="control">
            <input className="search" type="text" placeholder="Find a company" onChange={this.searchBar} value={this.state.search} />
          </div>
          <div className="control">
            <a className="button is-info">Search</a>
          </div>
        </div>
        <ul>
          {this.state.companyNames.map(company => {
            return (
              <li key={company}>
                <a className='companyName' href={company.websiteUrl}>{company}</a>
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
