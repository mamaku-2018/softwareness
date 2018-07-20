import React from 'react'
import {connect} from 'react-redux'
import {PieChart, Pie, Tooltip, Cell, Legend, Label} from 'recharts'

import {requestAllForeignLocalStats} from '../../actions/stats/allForeignLocal'

const colors = ['#c0462e', '#7AB0AD']

export class AllForeignLocal extends React.Component {
  componentDidMount () {
    this.props.dispatch(requestAllForeignLocalStats())
  }

  render () {
    return (
      <div className='pie'>
        <h4>Split of Local and Foreign Employees</h4>

        <PieChart width={540} height={400}>
          <Pie
            data={this.props.allForeignLocalStats}
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
              this.props.allForeignLocalStats.map((entry, index) => (
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
    allForeignLocalStats: state.allForeignLocalStats
  }
}

export default connect(mapStateToProps)(AllForeignLocal)
