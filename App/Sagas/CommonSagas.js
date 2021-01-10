/* ***********************************************************
* A short word on how to use this automagically generated file.
* We're often asked in the Infinite Red Slack channel how to connect
* to a to a third party api, so we thought we'd demonstrate - but
* you should know you can use sagas for other flow control too.
*
* Other points:
*  - You'll need to add this saga to sagas/index.js
*  - This template uses the api declared in sagas/index.js, so
*    you'll need to define a constant in that file.
*************************************************************/

import { call, put } from 'redux-saga/effects'
import CommonActions from '../Redux/CommonRedux'
// import { CommonSelectors } from '../Redux/CommonRedux'



export function * getList (api, action) {
  const { data } = action
  // get current data from Store
  // const currentData = yield select(CommonSelectors.getData)
  // make the call to the api
  const response = yield call(api.getList, data)
  // success?
  if (response.ok) {
    // You might need to change the response here - do this with a 'transform',
    // located in ../Transforms/. Otherwise, just pass the data back from the api.
    yield put(CommonActions.commonDataSuccess(response.data))
  } else {
    yield put(CommonActions.commonDataFailure())
  }
}

export function * postData (api, action) {
  const { data } = action
  // get current data from Store
  // const currentData = yield select(CommonSelectors.getData)
  // make the call to the api
  const response = yield call(api.postData, data)
  // success?
  if (response.ok) {
    // You might need to change the response here - do this with a 'transform',
    // located in ../Transforms/. Otherwise, just pass the data back from the api.
    yield put(CommonActions.postDataSuccess(response.data))
  } else {
    yield put(CommonActions.postDataFailure())
  }
}