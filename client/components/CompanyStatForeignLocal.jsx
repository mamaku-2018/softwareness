import React from 'react'
import {PieChart, Pie, Tooltip, Cell, Legend, Label} from 'recharts'
import {connect} from 'react-redux'
import {getCompanyForLocalStats} from '../actions/getCompanyForLocalStats'

const colors = ['#c0462e', '#7AB0AD']

class CompanyForLocalStats extends React.Component {
  componentDidMount () {
    this.props.dispatch(getCompanyForLocalStats(id))
  }
  render () {
    return (
      <div className='pie'>

        <PieChart width={540} height={400}>
          <Pie
            data={this.props.local}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            innerRadius={60}
            outerRadius={160}
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
    local: state.CompanyForLocalStats
  }
}

export default connect(mapStateToProps)(CompanyForLocalStats)
