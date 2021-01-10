// src/config/index.js

import config from 'react-native-config';
import AsyncStorage from '@react-native-community/async-storage';


getToken = async ()=>{
  let token;
  try {
   token =  await AsyncStorage.getItem('token');
  } catch (error) {
  }
 return token
}

setToken = async (tokenValue)=>{
  let token;
  try {
   token =  await AsyncStorage.setItem('token',tokenValue);
   return true
  } catch (error) {
   console.log("error",error)
  }
  return false
}


setType = async (type,value)=>{
  let token;
  try {
   token =  await AsyncStorage.setItem(type,value);
   return true
  } catch (error) {
   console.log("error",error)
  }
  return false
}

deleteType = async (type)=>{
  let token;
  try {
   token =   await AsyncStorage.removeItem(type);
   return true
  } catch (error) {
   console.log("error",error)
  }
  return false
}


deleteUserToken = async ()=>{
  let token;
  try {
   token =   await AsyncStorage.removeItem('token');
   return true
  } catch (error) {
   console.log("error",error)
  }
  return false
}

isLoginFun = async ()=>{
  let token;
  try {
   token =  await AsyncStorage.getItem('token');
   return token
  } catch (error) {
   console.log("error",error)
  }
  return false
}


 let configs =  {
  api: {
    host: config.BASE_URL,
    timeout: 20000,
    baseURL :config.BASE_URL,
    mediaURL :config.MEDIA_URL,
    googleApiKey :config.GOOGLE_API_KEY,
    env :config.env,
    server_key:config.server_key,
    adminToken :   async () =>{
      let takeValue = await getToken()
      return takeValue;
    },
    getToken:   async () =>{
      let takeValue = await getToken();
      return takeValue;
    },
    setToken:   async (token) =>{
     let takeValue = await setToken(token);
     return takeValue;
   },

   isLogin:   async (token) =>{
     let takeValue = await isLoginFun();

     return takeValue;
   },
   deleteUserToken:   async () =>{
     let takeValue = await deleteUserToken();

     return takeValue;
   },
   setType:   async (type,value) =>{
     let takeValue = await setType(type,value);

     return takeValue;
   },

   deleteType:   async (type) =>{
     let takeValue = await deleteType(type);

     return takeValue;
   },
 
   
  }
  
};





const API_HOST = configs.api.host;

export {
  API_HOST
}

export default configs