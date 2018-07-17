import request from 'superagent'

import {showError} from './index'

export const REQUEST_COMPANIES = 'REQUEST_COMPANIES'
export const RECEIVE_COMPANIES = 'RECEIVE_COMPANIES'
export const REQUEST_COMPANY_INFO = 'REQUEST_COMPANY_INFO'
export const RECEIVE_COMPANY_INFO = 'RECEIVE_COMPANY_INFO'
export const REQUEST_COMPANY_PROFILE = 'REQUEST_COMPANY_PROFILE'
export const RECEIVE_COMPANY_PROFILE = 'RECEIVE_COMPANY_PROFILE'

export function addCompany (company) {
  return (dispatch) => {
    return request
      .post('/api/v1/companies/add')
      .send(company)
      .then(res => {
        dispatch(requestCompanyInfo(res.body.newId))
      })
      .catch(err => {
        dispatch(showError(err.message))
      })
  }
}

export const requestCompanyInfo = () => {
  return {
    type: REQUEST_COMPANY_INFO
  }
}

export const receiveCompanyInfo = (companyInfo) => {
  return {
    type: RECEIVE_COMPANY_INFO,
    companyInfo
  }
}

export function getCompanyInfo (id) {
  return (dispatch) => {
    return request
      .get(`/api/v1/companies/${id}`)
      .then(res => {
        dispatch(receiveCompanyInfo(res.body))
      })
      .catch(err => {
        dispatch(showError(err.message))
      })
  }
}

export const requestCompanies = () => {
  return {
    type: REQUEST_COMPANIES
  }
}

export const receiveCompanies = (companies) => {
  return {
    type: RECEIVE_COMPANIES,
    company: companies.map(company => company)
  }
}

export function getCompanies () {
  return (dispatch) => {
    return request
      .get(`/api/v1/companies`)
      .then(res => {
        dispatch(receiveCompanies(res.body))
      })
      .catch(err => {
        dispatch(showError(err.message))
      })
  }
}

export const requestCompanyProfile = () => {
  return {
    type: REQUEST_COMPANY_PROFILE
  }
}

export const receiveCompanyProfile = (companyProfile) => {
  return {
    type: RECEIVE_COMPANY_PROFILE,
    companyProfile
  }
}

export function getCompanyProfile (id) {
  return (dispatch) => {
    dispatch(requestCompanyProfile())
    return request
      .get(`/api/v1/companies/profile/${id}`)
      .then(res => {
        dispatch(receiveCompanyProfile(res.body))
      })
      .catch(err => {
        dispatch(showError(err.message))
      })
  }
}
