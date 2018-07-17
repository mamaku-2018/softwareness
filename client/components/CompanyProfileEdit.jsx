import React from 'react'
import {connect} from 'react-redux'
import {getCompanyProfile} from '../actions/companies'
// edit component that switches out with info component.

class CompanyProfileEdit extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      name: '',
      count: 0,
      avgYearExp: 0,
      femaleCount: 0,
      maleCount: 0,
      openReqs: 0,
      percentLocal: 0
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange (e) {
    const {name, value} = e.target
    this.setState({
      [name]: value
    })
  }

  handleSubmit (e) {
    const {login} = this.props
    const user = {
      name: this.state.name,
      count: this.state.count,
      avgYearExp: this.state.avgYearExp,
      femaleCount: this.state.femaleCount,
      maleCount: this.state.maleCount,
      openReqs: this.state.openReqs,
      percentLocal: this.state.percentLocal
    }
    // const goHome = () => this.props.history.push('/')
    login(user, goHome)
    e.preventDefault()
  }

  componentDidMount () {
    const id = this.props.match.params.id
    this.props.dispatch(getCompanyProfile(id))
  }

  render () {
    const categories = this.props.companyProfile.categories || []
    return (
      <div>
        <form>
        <fieldset>
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
                  <td><input type="text" onchange={this.handleChange} name="name" value="name" placeholder={role.name}/></td>
                  <td><input type="text" onchange={this.handleChange} name="count" value="count" placeholder={role.count}/></td>
                  <td><input type="text" onchange={this.handleChange} name="avgYearExp" value="avgYearExp" placeholder={role.avgYearExp}/></td>
                  <td><input type="text" onchange={this.handleChange} name="femaleCount" value="femaleCount" placeholder={role.femaleCount}/></td>
                  <td><input type="text" onchange={this.handleChange} name="maleCount" value="maleCount" placeholder={role.maleCount}/></td>
                  <td><input type="text" onchange={this.handleChange} name="openReqs" value="openReqs" placeholder={role.openReqs}/></td>
                  <td><input type="text" onchange={this.handleChange} name="percentLocal" value="percentLocal" placeholder={role.percentLocal}/></td>
                </tr>
              </div>
              )
            })}
            </tbody>
          </table>
          </div>
          )
        })}
         <button type="button" className="button" onClick={this.handleSubmit}>Edit</button>
        </fieldset>
        </form>
        
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
