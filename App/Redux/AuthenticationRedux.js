import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  signInRequest: ['data'],
  signInSuccess: ['signInPayload'],
  signInFailure: ['signInPayloadError'],

  signInUserInfo: ['signInUserInfo'],
  signInUserInfoSuccess: ['signInUserInfoPayload'],
  signInUserInfoFailure: ['signInUserInfoPayloadError']

})

export const AuthenticationTypes = Types
export default Creators

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  data: null,
  signInLoading: null,
  signInPayload: null,
  error: null,
  signInPayloadError: null,
  signInUserInfo: null,
  signInUserInfoPayload: null,
  signInUserInfoPayloadError: null,
  signInUserInfoLoading: null
})

/* ------------- Selectors ------------- */

export const AuthenticationSelectors = {
  getData: state => state.data
}

/* ------------- Reducers ------------- */

// request the data from an api
export const signInRequest = (state, { data }) => {
  return state.merge({ signInLoading: true, data, signInPayload: null })
}

// successful api lookup
export const signInSuccess = (state, action) => {
  const { signInPayload } = action
  return state.merge({ signInLoading: false, error: null, signInPayload, signInPayloadError: null })
}

// Something went wrong somewhere.
export const signInFailure = (state, action) => {
  const { signInPayloadError } = action
  return state.merge({ signInLoading: false, signInPayloadError, signInPayload: null })
}

export const signInUserInfo = (state, { data }) => {
  return state.merge({ signInUserInfoLoading: true, data, signInUserInfoPayload: null })
}

// successful api lookup
export const signInUserInfoSuccess = (state, action) => {

  const { signInUserInfoPayload } = action
  return state.merge({ signInUserInfoLoading: false, error: null, signInUserInfoPayload })
}

// Something went wrong somewhere.
export const signInUserInfoFailure = (state, action) => {
  const { signInUserInfoPayloadError } = action
  return state.merge({ signInUserInfoLoading: false, signInUserInfoPayloadError, signInUserInfoPayload: null })
}


/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.SIGN_IN_REQUEST]: signInRequest,
  [Types.SIGN_IN_SUCCESS]: signInSuccess,
  [Types.SIGN_IN_FAILURE]: signInFailure,

  [Types.SIGN_IN_USER_INFO]: signInUserInfo,
  [Types.SIGN_IN_USER_INFO_SUCCESS]: signInUserInfoSuccess,
  [Types.SIGN_IN_USER_INFO_FAILURE]: signInUserInfoFailure,
})
