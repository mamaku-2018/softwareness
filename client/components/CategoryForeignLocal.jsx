import React from 'react'
import {PieChart, Pie, Tooltip, Cell, Legend, Label} from 'recharts'
import {connect} from 'react-redux'
import {getLocalForeign} from '../actions/stats/getCategoryForLocation'

const colors = ['#3fb1c8', '#c84e4e']

class CategoryForeignLocal extends React.Component {
  componentDidMount () {
    this.props.dispatch(getLocalForeign())
  }
  render () {
    return (
      <div className='pie'>
        <h1>Foreign / Local</h1>

        <PieChart width={860} height={300}>
          <Pie
            data={this.props.local}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            innerRadius={40}
            fill="#70ffc3"
          >
            <Label position="center" />
            {
              this.props.local.map((entry, index) => (
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
    local: state.localForeign
  }
}

export default connect(mapStateToProps)(CategoryForeignLocal)
