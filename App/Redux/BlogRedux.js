import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  blogRequest: ['data'],
  blogSuccess: ['payload'],
  blogFailure: null,

  addBlogRequest: ['data'],
  addBlogSuccess: ['addBlogPayload'],
  addBlogFailure: ['addBlogPayloadFailure']
})

export const BlogTypes = Types
export default Creators

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  data: null,
  blogFetching: null,
  addBlogLoading:null,
  payload: null,
  addBlogPayload:null,
  addBlogPayloadFailure:null,
  error: null
})

/* ------------- Selectors ------------- */

export const BlogSelectors = {
  getData: state => state.data
}

/* ------------- Reducers ------------- */

// request the data from an api
export const request = (state, { data }) =>{
  return state.merge({ blogFetching: true, data, payload: null ,addBlogPayloadFailure:null ,addBlogPayload: null})}

// successful api lookup
export const success = (state, action) => {
  const { payload } = action
  return state.merge({ blogFetching: false, error: null, payload,  })
}

// Something went wrong somewhere.
export const failure = state =>
  state.merge({ blogFetching: false, error: true, payload: null })


  // request the data from an api
export const addBlogRequest = (state, { data }) =>{
  return state.merge({ 
    addBlogFetching: true, data, addBlogPayload: null,

  })}

// successful api lookup
export const addBlogSuccess = (state, action) => {
  const { addBlogPayload } = action
  return state.merge({ addBlogFetching: false, error: null, addBlogPayload,addBlogPayloadFailure:null })
}

// Something went wrong somewhere.
export const addBlogFailure =(state, action) => {
  const { addBlogPayloadFailure } = action
  return state.merge({ addBlogFetching: false, error: true,addBlogPayloadFailure ,addBlogPayload: null })
}
/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.BLOG_REQUEST]: request,
  [Types.BLOG_SUCCESS]: success,
  [Types.BLOG_FAILURE]: failure,

  [Types.ADD_BLOG_REQUEST]: addBlogRequest,
  [Types.ADD_BLOG_SUCCESS]: addBlogSuccess,
  [Types.ADD_BLOG_FAILURE]: addBlogFailure
})
