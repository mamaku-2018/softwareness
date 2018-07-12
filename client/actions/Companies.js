import request from 'superagent'

import {showError} from './index'

export const RECEIVE_COMPANY_ID = 'RECEIVE_COMPANY_ID'
export const RECEIVE_COMPANY = 'RECEIVE_COMPANY'

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

export const receiveCompany = (company) => {
  return {
    type: RECEIVE_COMPANY,
    company: company
  }
}

export function getCompany (id) {
  return (dispatch) => {
    return request
      .get(`/api/v1/companies/${id}`)
      .then(res => {
        dispatch(receiveCompany(res.body))
      })
  }
}
