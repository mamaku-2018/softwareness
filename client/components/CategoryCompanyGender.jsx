import React from 'react'
import {PieChart, Pie, Tooltip, Cell, Legend, Label} from 'recharts'
import {connect} from 'react-redux'
import {getCompanyGenderStats} from '../actions/stats/getCategoryCompanyGender'

const colors = ['#3fb1c8', '#c84e4e']

export class CategoryCompanyGender extends React.Component {
  componentDidMount (props) {
    this.props.dispatch(getCompanyGenderStats(Number(props.match.params.id)))
  }

  render () {
    return (
      <div>
        <h4>Gender Split for Each Company</h4>

        <PieChart with={860} height={300}>
          <Pie
            data={this.props.categoryCompanyGender}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            innerRadius={40}
            fill="#70ffc3"
          >
            <Label position="center" />
            {
              this.props.categoryCompanyGender.map((entry, index) => (
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
  return {
    categoryCompanyGender: state.categoryCompanyGender,
    match: ownProps.match
  }
}

export default connect(mapStateToProps)(CategoryCompanyGender)
