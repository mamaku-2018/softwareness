import request from 'superagent'

import {showError} from './index'

<<<<<<< HEAD
export const RECEIVE_COMPANY_ID = 'RECEIVE_COMPANY_ID'
export const RECEIVE_COMPANY = 'RECEIVE_COMPANY'
export const RECEIVE_COMPANIES = 'RECEIVE_COMPANIES'

export const receiveCompanyId = (id) => {
  return {
    type: RECEIVE_COMPANY_ID,
    id: id
  }
}
=======
export const REQUEST_COMPANIES = 'REQUEST_COMPANIES'
export const RECEIVE_COMPANIES = 'RECEIVE_COMPANIES'
export const REQUEST_COMPANY_INFO = 'REQUEST_COMPANY_INFO'
export const RECEIVE_COMPANY_INFO = 'RECEIVE_COMPANY_INFO'
export const REQUEST_COMPANY_PROFILE = 'REQUEST_COMPANY_PROFILE'
export const RECEIVE_COMPANY_PROFILE = 'RECEIVE_COMPANY_PROFILE'
>>>>>>> 51f2b2650a489ca35b3c84a80d215c97758c6fed

export function addCompany (company) {
  return (dispatch) => {
    return request
      .post('/api/v1/companies/add')
      .send(company)
      .then(res => {
<<<<<<< HEAD
        dispatch(receiveCompanyId(res.body.newId))
=======
        dispatch(requestCompanyInfo(res.body.newId))
>>>>>>> 51f2b2650a489ca35b3c84a80d215c97758c6fed
      })
      .catch(err => {
        dispatch(showError(err.message))
      })
  }
}

<<<<<<< HEAD
export const receiveCompany = (company) => {
  return {
    type: RECEIVE_COMPANY,
    company: company
  }
}

export function getCompany (id) {
=======
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
>>>>>>> 51f2b2650a489ca35b3c84a80d215c97758c6fed
  return (dispatch) => {
    return request
      .get(`/api/v1/companies/${id}`)
      .then(res => {
<<<<<<< HEAD
        dispatch(receiveCompany(res.body))
=======
        dispatch(receiveCompanyInfo(res.body))
>>>>>>> 51f2b2650a489ca35b3c84a80d215c97758c6fed
      })
      .catch(err => {
        dispatch(showError(err.message))
      })
  }
}

<<<<<<< HEAD
=======
export const requestCompanies = () => {
  return {
    type: REQUEST_COMPANIES
  }
}

>>>>>>> 51f2b2650a489ca35b3c84a80d215c97758c6fed
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
<<<<<<< HEAD
=======

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
    dispatch(requestCompanyInfo())
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
>>>>>>> 51f2b2650a489ca35b3c84a80d215c97758c6fed
