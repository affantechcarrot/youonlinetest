
import { call, put, select } from 'redux-saga/effects'
import BlogActions from '../Redux/BlogRedux'
//import { AuthenticationSelectors } from '../Redux/AuthenticationRedux'
import Config from '../Config/index';

const getUserInfoReducer = (state) => state.AuthenticationReducer.signInUserInfoPayload;

export function* getBlog(api, action) {
  const { data } = action
  const formData = new FormData();
  const getuserInfo = yield select(getUserInfoReducer);
  const { access_token, user_id } = getuserInfo
  formData.append('server_key', Config.api.server_key);
  formData.append('type', `get_user_posts`);
  formData.append('id', parseInt(user_id));
  const response = yield call(api.getblog, formData, access_token);
  console.log(response,"response-")
  if (response.data.api_status === 200) {
    yield put(BlogActions.blogSuccess(response.data.data))
  } else {
    yield put(BlogActions.blogFailure(null))
  }
}

export function* addBlog(api, action) {
  const { data } = action
  const formData = new FormData();
  const getuserInfo = yield select(getUserInfoReducer);
  const { access_token, user_id } = getuserInfo
  Object.keys(data).forEach(key => formData.append(key, data[key]));
  formData.append('server_key', Config.api.server_key);
  formData.append('user_id', parseInt(user_id));

  const response = yield call(api.addblog, formData, access_token);
  if (response.data.api_status === 200) {
    yield put(BlogActions.addBlogSuccess(response.data.data))
  } else {
    yield put(BlogActions.addBlogFailure(response.data.errors))
  }
}
