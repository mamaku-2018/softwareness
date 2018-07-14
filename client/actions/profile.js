import request from 'superagent'

import {showError} from './index'

export const RECEIVE_PROFILE_ID = 'RECEIVE_PROFILE_ID'

export const receiveProfileId = (id) => {
  return {
    type: RECEIVE_PROFILE_ID,
    id: id
  }
}

export function addProfile (id) {
  return (dispatch) => {
    return request
      .post('/api/v1/profile/add')
      .send(id)
      .then(res => {
        dispatch(receiveProfileId(res.body.newId))
      })
      .catch(err => {
        dispatch(showError(err.message))
      })
  }
}
