// a library to wrap and simplify api calls
import apisauce from 'apisauce'
//import Config from 'react-native-config'
// our "constructor"
import {
  Config
} from "../common";
console.log(Config,"Config")
const create = () => {

  const api = apisauce.create({
    baseURL: Config.api.baseURL,
    timeout: 10000,
    headers: {
      'Content-Type': 'application/json;charset=UTF-8',
      },
  })

  const getblog = (data, token) => api.post(`api/posts?access_token=${token}`,
    data)

  const addblog = (data, token) => api.post(`api/posts?access_token=${token}`,
    data)
  const signIn = (data) => api.post(`/api/auth`, data)
  return {
    // a list of the API functions from step 2
    getblog,
    addblog,
    signIn


  }
}

// let's return back our create method as the default.
export default {
  create
}
