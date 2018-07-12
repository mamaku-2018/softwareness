import {request} from 'http'

export const SHOW_ERROR = 'SHOW_ERROR'

export const REQUEST_COMPANYPROFILE = 'REQUEST_COMPANYPROFILE'
export const RECEIVE_COMPANYPROFILE = 'RECEIVE_COMPANYPROFILE'

export const showError = (errorMessage) => {
  return {
    type: SHOW_ERROR,
    errorMessage: errorMessage
  }
}

export const requestCompanyProfile = () => {
  return {
    type: 'REQUEST_COMPANYPROFILE'
  }
}

export const receiveCompanyProfile = (companyProfile) => {
  return {
    type: 'RECEIVE_COMPANYPROFILE',
    companyProfile
  }
}

export function getCompanyInfo (id) {
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
