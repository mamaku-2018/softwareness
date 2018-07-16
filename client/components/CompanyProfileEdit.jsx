import React from 'react'
import {connect} from 'react-redux'
import getCompanyProfile from '../actions/companies'
//edit component that switches out with info component. 
export class CompanyProfileEdit extends React.Component {
  componentDidMount(){
    const id = this.props.match.params.id
    this.props.dispatch(getCompanyProfile(id))
  }

  render() {
    return(
      <div>
        <h3> HELLO FUCKER </h3>
        <h3> HELLO FUCKER </h3>
        <h3> HELLO FUCKER </h3>
        <h3> HELLO FUCKER </h3>
        <h3> HELLO FUCKER </h3>

      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    categories: state.categories
  }
}

export default connect(mapStateToProps)(CompanyProfileEdit)