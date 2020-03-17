const covidTrackerRedDefState = {
  locStatsList:[],
  confirmCases:0,
  recoveredCases:0,
  deaths:0
}

const locationStatsReducer = (state = covidTrackerRedDefState, action) => {
  switch (action.type) {
    case 'GET_COVID-19_STATS':
      return {
            ...state,
            locStatsList:[...action.response.locationStatsList],
            confirmCases:action.response.totalConfirmedCases,
            recoveredCases:action.response.totalRecoveredCases,
            deaths:action.response.totalDeaths
      }
    default:
      return state
  }
}

export default locationStatsReducer