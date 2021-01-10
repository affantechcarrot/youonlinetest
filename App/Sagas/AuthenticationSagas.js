
import { call, put } from 'redux-saga/effects'
import AuthenticationActions from '../Redux/AuthenticationRedux'
import Config from '../Config/index';

async function setTokenFunc(token) {
  try {
    let data = await Config.api.setToken(token);
    return data;
  } catch (error) {
    console.log('AsyncStorage error during token store:', error);
  }
}

async function getUserInfo() {
  try {
    let data = await Config.api.getToken();
    return JSON.parse(data);
  } catch (error) {
    console.log('AsyncStorage error during token store:', error);
  }
}


export function* signIn(api, action) {
  const { data } = action;
  //yield put(AuthenticationActions.signInFailure(null))
  const formData = new FormData();
  Object.keys(data).forEach(key => formData.append(key, data[key]));
  formData.append('server_key', Config.api.server_key);
  const response = yield call(api.signIn, formData)
  console.log(response, "api_status")


  // success?
  if (response.status === 200 && response.data.api_status === 200) {
    const setToken = yield call(setTokenFunc, JSON.stringify(response.data))
    yield put(AuthenticationActions.signInSuccess(response.data))
  } else {
    yield put(AuthenticationActions.signInFailure(response.data))
  }

}

export function* getUserToken(api, action) {
  const { data } = action;
  //yield put(AuthenticationActions.signInFailure(null))
  const formData = new FormData();
  Object.keys(data).forEach(key => formData.append(key, data[key]));
  formData.append('server_key', Config.api.server_key);
  const response = yield call(api.signIn, formData)

  // success?
  if (response.data.api_status === 200) {
    const setToken = yield call(setTokenFunc, JSON.stringify(response.data))

    yield put(AuthenticationActions.signInSuccess(response.data))
  } else {
    yield put(AuthenticationActions.signInFailure(response.data))
  }
}

export function* getUserInfoAction(api, action) {
  const { data } = action;
  const userInfo = yield call(getUserInfo)

  if (userInfo !== undefined && userInfo !== null) {
    yield put(AuthenticationActions.signInUserInfoSuccess(userInfo))
  } else {
    yield put(AuthenticationActions.signInUserInfoFailure('fail'))
  }
}