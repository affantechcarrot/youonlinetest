import { takeLatest, all } from 'redux-saga/effects'
import API from '../Services/Api'
import FixtureAPI from '../Services/FixtureApi'
import DebugConfig from '../Config/DebugConfig'

/* ------------- Types ------------- */

import { BlogTypes } from '../Redux/BlogRedux'
import { AuthenticationTypes } from '../Redux/AuthenticationRedux'

/* ------------- Sagas ------------- */


import {getBlog , addBlog} from './BlogSagas'
import {signIn,getUserInfoAction} from './AuthenticationSagas'

/* ------------- API ------------- */

// The API we use is only used from Sagas, so we create it here and pass along
// to the sagas which need it.
const api = DebugConfig.useFixtures ? FixtureAPI : API.create()

/* ------------- Connect Types To Sagas ------------- */

export default function * root () {
  yield all([
    // some sagas only receive an 
    takeLatest(BlogTypes.BLOG_REQUEST,  getBlog, api),
    takeLatest(BlogTypes.ADD_BLOG_REQUEST,  addBlog, api),
    takeLatest(AuthenticationTypes.SIGN_IN_REQUEST,  signIn, api),
    takeLatest(AuthenticationTypes.SIGN_IN_USER_INFO,  getUserInfoAction, api),
  ])
}
