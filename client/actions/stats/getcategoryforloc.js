import request from 'superagent'

export const GET_LOCALDATA = 'GET_LOCALDATA'

export const getLocalData = (stats) => {
  return {
    type: GET_LOCALDATA,
    stats
  }
}

export function getlocalForeign () {
  return (dispatch) => {
    return request
      .get('api/v1/stats')
      .then(res => {
        dispatch(getLocalData(res.body.local))
      }
      )
  }
}
