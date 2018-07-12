import {request} from 'superagent'

export const SHOW_ERROR = 'SHOW_ERROR'

export const REQUEST_PROFILEHEADER = 'REQUEST_PROFILEHEADER'
export const RECEIVE_PROFILEHEADER = 'RECEIVE_PROFILEHEADER'

export const showError = (errorMessage) => {
  return {
    type: SHOW_ERROR,
    errorMessage: errorMessage
  }
}

export const requestProfileHeader = () => {
  return {
    type: 'REQUEST_PROFILEHEADER'
  }
}

export const receiveProfileHeader = (profileHeader) => {
  return {
    type: 'RECEIVE_PROFILEHEADER',
    profileHeader
  }
}

export function getCompanyInfo (id) {
  return (dispatch) => {
    dispatch(requestProfileHeader())
    return request
      .get(`/api/v1/companies/profile/${id}`)
      .then(res => {
        dispatch(receiveProfileHeader(res.body))
      })
      .catch(err => {
        dispatch(showError(err.message))
      })
  }
}
