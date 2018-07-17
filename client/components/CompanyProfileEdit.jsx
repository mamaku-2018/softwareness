import React from 'react'
import {connect} from 'react-redux'
import {getCompanyProfile} from '../actions/companies'
// edit component that switches out with info component.

class CompanyProfileEdit extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
    }
  }

  componentDidMount () {
    const id = this.props.match.params.id
    this.props.dispatch(getCompanyProfile(id))
  }

  render () {
    const categories = this.props.companyProfile.categories || []
    return (
      <div>
        {categories.map(category => {
          return( 
          <div key ={category.name}>
          <h3>{category.name}</h3>
          <table>
            <tbody>
            <tr>
              <th>Name</th>
              <th>Employees</th>
              <th>Average Year Experience</th>
              <th>Females</th>
              <th>Males</th>
              <th>Open Requirements</th>
              <th>Percent Local</th>
            </tr>
            {category.roles.map(role => {
              return(
              <div key ={role.name}>
                <tr>
                  <td>{role.name}</td>
                  <td><input onchange={this.handleChange} placeholder={role.count}/></td>
                  <td><input onchange={this.handleChange} placeholder={role.avgYearExp}/></td>
                  <td><input onchange={this.handleChange} placeholder={role.femaleCount}/></td>
                  <td><input onchange={this.handleChange} placeholder={role.maleCount}/></td>
                  <td><input onchange={this.handleChange} placeholder={role.openReqs}/></td>
                  <td><input onchange={this.handleChange} placeholder={role.percentLocal}/></td>
                </tr>
              </div>
              )
            })}
            </tbody>
          </table>
          </div>
          )
        })}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    companyProfile: state.companyProfile
  }
}

export default connect(mapStateToProps)(CompanyProfileEdit)
