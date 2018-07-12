import {request} from 'superagent'

export const SHOW_ERROR = 'SHOW_ERROR'

export const REQUEST_COMPANYINFO = 'REQUEST_COMPANYINFO'
export const RECEIVE_COMPANYINFO = 'RECEIVE_COMPANYINFO'

export const showError = (errorMessage) => {
  return {
    type: SHOW_ERROR,
    errorMessage: errorMessage
  }
}

export const requestCompanyInfo = () => {
  return {
    type: 'REQUEST_COMPANYINFO'
  }
}

export const receiveCompanyInfo = (companyInfo) => {
  return {
    type: 'RECEIVE_COMPANYINFO',
    companyInfo
  }
}

export function getCompanyInfo (id) {
  return (dispatch) => {
    dispatch(requestCompanyInfo())
    return request
      .get(`/api/v1/companies/profile/${id}`)
      .then(res => {
        dispatch(receiveCompanyInfo(res.body))
      })
      .catch(err => {
        dispatch(showError(err.message))
      })
  }
}
