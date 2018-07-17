import request from 'superagent'
import {showError} from '../index'

export const RECEIVE_COMPANY_GENDER_STATS = ' RECEIVE_COMPANY_GENDER_STATS'

const receiveCompanyGenderStats = (stats) => {
  return {
    type: RECEIVE_COMPANY_GENDER_STATS,
    stats
  }
}

export function requestCompanyGenderStats (id) {
  return (dispatch) => {
    return request
      .get(`/api/v1/stats/companies/${id}`)
      .then(stats => {
        dispatch(receiveCompanyGenderStats(stats.body))
      })
      .catch(err => {
        dispatch(showError(err.message))
      })
  }
}
