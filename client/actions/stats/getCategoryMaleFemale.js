import request from 'superagent'
import {showError} from '../index'

export const GET_CATEGORY_MALEFEMALE = 'GET_CATEGORY_MALEFEMALE'

const getCategoryMaleFemale = (stats) => {
  return {
    type: GET_CATEGORY_MALEFEMALE,
    stats
  }
}

export function getGenderStats () {
  return (dispatch) => {
    return request
      .get('/api/v1/stats')
      .then(stats => {
        dispatch(getCategoryMaleFemale(stats.body.gender))
      })
      .catch(err => {
        dispatch(showError(err.message))
      })
  }
}
