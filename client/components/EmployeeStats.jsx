import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

export const EmployeeStats = (props) => {
  return (
    <div>
      <div>
        <h3>Employee Profile</h3>
        <Link to={`/companies/${props.id}/edit`}>Edit</Link>
      </div>
      <div>
        <table>
          <tbody>
            <tr>
              <th>Job Category</th>
              <th>Total</th>
              <th>Years</th>
              <th>Female</th>
              <th>Male</th>
              <th>Open</th>
              <th>Local</th>
            </tr>
            {props.categories.map(category => (
              <tr key = {category.name}>
                <td>{category.name} </td>
                <td>{category.role.count} </td>
                <td>{category.role.avgYearExp} </td>
                {/* we have a total for each male/female. we now need the % of the company */}
                <td>%{category.role.femaleCount / ((category.role.maleCount + category.role.femaleCount) * 100)} </td>
                <td>%{category.role.maleCount / ((category.role.maleCount + category.role.femaleCount) * 100)} </td>
                <td>{category.role.openReqs} </td>
                <td>%{category.role.percentLocal} </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

function mapStateToProps (state, ownProps) {
  const cats = state.companyProfile.categories || []
  const categories = cats.map((category, categoryNumber) => {
    const runningCount = categoryNumber + 1
    const newRole = {
      count: 0,
      avgYearExp: 0,
      femaleCount: 0,
      maleCount: 0,
      openReqs: 0,
      percentLocal: 0
    }
    category.roles.forEach(role => {
      newRole.count += role.count
      newRole.avgYearExp += role.avgYearExp / runningCount
      newRole.femaleCount += role.femaleCount
      newRole.maleCount += role.maleCount
      newRole.openReqs += role.openReqs
      newRole.percentLocal += role.percentLocal / runningCount
    })
    return {
      name: category.name,
      role: newRole
    }
  })
  return {
    id: ownProps.id,
    categories: categories
  }
}

export default connect(mapStateToProps)(EmployeeStats)
