import request from 'superagent'
import {showError} from '../index'
export const GET_LOCALDATA = 'GET_LOCALDATA'

export const getLocalData = (stats) => {
  return {
    type: GET_LOCALDATA,
    stats
  }
}

export function getLocalForeign () {
  return (dispatch) => {
    return request
      .get('api/v1/stats')
      .then(res => {
        dispatch(getLocalData(res.body.local))
      })
      .catch(err => {
        dispatch(showError(err.message))
      })
  }
}
