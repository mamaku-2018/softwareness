import request from 'superagent'

import {showError} from './index'

export const SEND_COMPANY = 'SEND_COMPANY'
export const RECEIVE_COMPANY_ID = 'RECEIVE_COMPANY_ID'

export const sendCompany = (company) => {
  return {
    type: SEND_COMPANY,
    company: company
  }
}

export const receiveCompanyId = (id) => {
  return {
    type: RECEIVE_COMPANY_ID,
    id: id
  }
}

export function addCompany (company) {
  return (dispatch) => {
    dispatch(sendCompany(company))
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
