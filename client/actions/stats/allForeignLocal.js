import request from 'superagent'
import {showError} from '../index'

export const RECEIVE_ALL_FOREIGN_LOCAL_STATS = 'RECEIVE_ALL_FOREIGN_LOCAL_STATS'

export const receiveAllForeignLocalStats = (stats) => {
  return {
    type: RECEIVE_ALL_FOREIGN_LOCAL_STATS,
    stats
  }
}

export function requestAllForeignLocalStats () {
  return (dispatch) => {
    return request
      .get('api/v1/stats')
      .then(res => {
        dispatch(receiveAllForeignLocalStats(res.body.local))
      })
      .catch(err => {
        dispatch(showError(err.message))
      })
  }
}
