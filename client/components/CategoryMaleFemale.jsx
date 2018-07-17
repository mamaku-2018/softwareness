import React from 'react'
import {connect} from 'react-redux'
import {BarChart, Bar, CartesianGrid, YAxis, XAxis, Tooltip, Legend} from 'recharts'
import {getGenderStats} from '../actions/stats/getCategoryMaleFemale'

export class CategoryMaleFemale extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      stats: []
    }
  }

  componentDidMount () {
    this.props.dispatch(getGenderStats())
  }

  render () {
    return (
      <div className="bar">
        <h4>Gender Split per Category</h4>
        <BarChart width={730} height={500} data={this.props.gender} barGap={5} margin={{top: 0, right: 30, left: 20, bottom: 5}} >
          <CartesianGrid strokeDasharray = "4 4" />
          <XAxis dataKey="Category" label={{value: 'Category', fill: '#e8e8e8', offset: -10, position: 'insideBottom'}}/>
          <YAxis label={{value: 'Number Of Employees', angle: -90, position: 'center', padding: 10, fill: '#e8e8e8'}}/>
          <Tooltip offset={20} />
          <Legend align="center" verticalAlign="bottom" height={100} />
          <Bar dataKey="Male" fill="#c0462e" legendType="square" barSize={50} />
          <Bar dataKey="Female" fill="#a6a6a6" legendType="square" barSize={50} />
        </BarChart>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    gender: state.categoryMaleFemale
  }
}

export default connect(mapStateToProps)(CategoryMaleFemale)
