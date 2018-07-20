import React from 'react'
import {connect} from 'react-redux'
import {PieChart, Pie, Tooltip, Cell, Legend, Label} from 'recharts'

import {requestCompanyForeignLocalStats} from '../../actions/stats/companyForeignLocal'

const colors = ['#c0462e', '#7AB0AD']

class CompanyForeignLocal extends React.Component {
  componentDidMount () {
    const {id, dispatch} = this.props
    dispatch(requestCompanyForeignLocalStats(id))
  }

  render () {
    return (
      <div className='pie'>

        <PieChart width={540} height={400}>
          <Pie
            data={this.props.companyForLoc}
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
              this.props.companyForeignLocal.map((entry, index) => (
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
    id: ownProps.id,
    companyForeignLocal: state.companyForeignLocalStats
  }
}

export default connect(mapStateToProps)(CompanyForeignLocal)
