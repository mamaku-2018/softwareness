import React from 'react'
import {PieChart, Pie, Tooltip, Cell, Legend, Label} from 'recharts'
import {connect} from 'react-redux'
import {getCompanyGender} from '../actions/stats/getCategoryCompanyGender'

const colors = ['#3fb1c8', '#c84e4e']

export class CategoryCompanyGender extends React.Component {
  componentDidMount () {
    this.props.dispatch(getCompanyGender())
  }

  render () {
    return (
      <div>
        <h2>Gender Split for Each Company</h2>

        <PieChart with={860} height={300}>
          <Pie
            data={this.props.gender}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            innerRadius={40}
            fill="#70ffc3"
          >
            <Label position="center" />
            {
              this.props.gender((entry, index) => (
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

function mapStateToProps (state) {
  return {
    local: state.companyGender
  }
}

export default connect(mapStateToProps)(CategoryCompanyGender)
