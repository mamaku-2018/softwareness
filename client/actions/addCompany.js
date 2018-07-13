import request from 'superagent'

import {showError} from './index'

export const RECEIVE_COMPANY_ID = 'RECEIVE_COMPANY_ID'

export const receiveCompanyId = (id) => {
  return {
    type: RECEIVE_COMPANY_ID,
    id: id
  }
}

export function addCompany (company) {
  return (dispatch) => {
    return request
      .post('/api/v1/companies/add')
      .send(company)
      .then(res => {
        dispatch(receiveCompanyId(res.body.newId))
      })
      .catch(err => {
        dispatch(showError(err.message))
      })
  }
}
