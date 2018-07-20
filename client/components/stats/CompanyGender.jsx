import React from 'react'
import {connect} from 'react-redux'
import {PieChart, Pie, Tooltip, Cell, Legend, Label} from 'recharts'

import {requestCompanyGenderStats} from '../../actions/stats/companyGender'

const colors = ['#3fb1c8', '#c84e4e']

export class CompanyGender extends React.Component {
  componentDidMount () {
    const {id, dispatch} = this.props
    dispatch(requestCompanyGenderStats(id))
  }

  render () {
    return (
      <div>
        <h2>Gender Split</h2>

        <PieChart width={540} height={400}>
          <Pie
            data={this.props.companyGenderStats}
            nameKey="name"
            dataKey="value"
            innerRadius={60}
            outerRadius={160}
            fill="#70ffc3"
            cx="50%"
            cy="50%"
          >
            <Label position="center" />
            {
              this.props.companyGenderStats.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={colors[index]}/>
              ))
            }
          </Pie>
          <Legend iconType="square"/>
          <Tooltip />
        </PieChart>
      </div>
    )
  }
}

function mapStateToProps (state, ownProps) {
  const {companyGenderStats: stats} = state
  return {
    id: ownProps.id,
    companyGenderStats: [{
      name: 'Male',
      value: stats[0] && stats[0].Male
    }, {
      name: 'Female',
      value: stats[0] && stats[0].Female
    }]
  }
}

export default connect(mapStateToProps)(CompanyGender)
