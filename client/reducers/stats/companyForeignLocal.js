import {RECEIVE_COMPANY_FOREIGN_LOCAL_STATS} from '../../actions/stats/companyForeignLocal'

function companyForeignLocalStats (state = [], action) {
  switch (action.type) {
    case RECEIVE_COMPANY_FOREIGN_LOCAL_STATS:
      return action.local

    default:
      return state
  }
}

export default companyForeignLocalStats
