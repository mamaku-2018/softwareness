import request from 'superagent'
import {showError} from './index'

export const GET_COMPANY_FOR_LOC_DATA = 'GET_COMPANY_FOR_LOC_DATA'

export const companyForLocData = (companyId) => {
  return {
    type: 'GET_COMPANY_FOR_LOC_DATA',
    companyId
  }
}

export function GetCompanyForLocStats (id) {
  return (dispatch) => {
    return request
      .get(`api/v1/companies/profile/${id}`)
      .then(res => {
        dispatch(companyForLocData(res.body.local))
      })
      .catch(err => {
        dispatch(showError(err.message))
      })
  }
}
