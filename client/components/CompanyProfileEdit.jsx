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
    return (
      <div>
        <h3>{this.props.companyProfile.categories}</h3>
        <h3> WHHHHYYYYY </h3>
        <h3> WHHHHYYYYY </h3>
        <h3> WHHHHYYYYY </h3>
        <h3> WHHHHYYYYY </h3>
        <h3> WHHHHYYYYY </h3>

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
