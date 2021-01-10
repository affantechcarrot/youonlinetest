import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  commonDataRequest: ['data'],
  commonDataSuccess: ['payload'],
  commonDataFailure: null,

  postDataRequest: ['data'],
  postDataSuccess: ['postpayload'],
  postDataFailure: null
})

export const CommonTypes = Types
export default Creators

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  data: null,
  fetching: null,
  fetchingList :null,
  payload: null,
  postpayload: null,
  error: null
})

/* ------------- Selectors ------------- */

export const CommonSelectors = {
  getData: state => state.data
}

/* ------------- Reducers ------------- */

// request the data from an api
export const commonDataRequest = (state, { data }) =>
  state.merge({ fetchingList: true, data, payload: null })

// successful api lookup
export const commonDataSuccess = (state, action) => {
  const { payload } = action
  return state.merge({ fetchingList: false, error: false, payload })
}

// Something went wrong somewhere.
export const commonDataFailure = state =>
  state.merge({ fetchingList: false, error: true, payload: null })


  // request the data from an api
export const postDataRequest = (state, { data }) => {
return state.merge({ fetching: true, data, postpayload: null })
}

// successful api lookup
export const postDataSuccess = (state, action) => {
const { postpayload } = action
return state.merge({ fetching: false, error: false, postpayload })
}

// Something went wrong somewhere.
export const postDataFailure = state =>
state.merge({ fetching: false, error: true, postpayload: null })

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.COMMON_DATA_REQUEST]: commonDataRequest,
  [Types.COMMON_DATA_SUCCESS]: commonDataSuccess,
  [Types.COMMON_DATA_FAILURE]: commonDataFailure,

  [Types.POST_DATA_REQUEST]: postDataRequest,
  [Types.POST_DATA_SUCCESS]: postDataSuccess,
  [Types.POST_DATA_FAILURE]: postDataFailure
})
