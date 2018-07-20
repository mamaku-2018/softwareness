import request from 'superagent'

import {showError} from '../index'

export const RECEIVE_COMPANY_FOREIGN_LOCAL_STATS = 'GET_COMPANY_FOR_LOC_DATA'

export const receiveCompanyForeignLocalStats = (stats) => {
  return {
    type: 'RECEIVE_COMPANY_FOREIGN_LOCAL_STATS',
    stats
  }
}

export function requestCompanyForeignLocalStats (id) {
  return (dispatch) => {
    return request
      .get(`api/v1/companies/profile/${id}/stats`)
      .then(res => {
        dispatch(receiveCompanyForeignLocalStats(res.body.local))
      })
      .catch(err => {
        dispatch(showError(err.message))
      })
  }
}
