import request from 'superagent'
import {showError} from '../index'

export const RECEIVE_ALL_GENDER_STATS = 'RECEIVE_ALL_GENDER_STATS'

const receiveAllGenderStats = (stats) => {
  return {
    type: RECEIVE_ALL_GENDER_STATS,
    stats
  }
}

export function requestAllGenderStats () {
  return (dispatch) => {
    return request
      .get('/api/v1/stats')
      .then(stats => {
        dispatch(receiveAllGenderStats(stats.body.gender))
      })
      .catch(err => {
        dispatch(showError(err.message))
      })
  }
}
