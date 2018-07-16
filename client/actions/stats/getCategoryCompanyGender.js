import request from 'superagent'
import {showError} from '../index'

export const GET_COMPANY_GENDER = 'GET_COMPANY_GENDER'

const getCompanyGender = (stats) => {
  return {
    type: GET_COMPANY_GENDER,
    stats
  }
}

export function getCompanyGenderStats () {
  return (dispatch) => {
    return request
      .get('/api/v1/stats/companies/:id')
      .then(stats => {
        // console.log(stats.body)
        dispatch(getCompanyGender(stats.body))
      })
      .catch(err => {
        dispatch(showError(err.message))
      })
  }
}
