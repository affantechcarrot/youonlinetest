import 'react-native-gesture-handler'
import { LogBox } from 'react-native';
import { Easing} from '../common'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator,TransitionPresets } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import RegisterScreen from '../Containers/RegisterScreen'
import LoginScreen from '../Containers/LoginScreen'
import AddblogScreen from '../Containers/AddblogScreen'
import BlogScreen from '../Containers/BlogScreen'
import AuthScreen from '../Containers/AuthScreen'
import HomeScreen from '../Containers/HomeScreen'

import SearchScreen from '../Containers/SearchScreen'
import NotificationScreen from '../Containers/NotificationScreen'
import ChatScreen from '../Containers/ChatScreen'
import SettingsScreen from '../Containers/SettingsScreen'


LogBox.ignoreLogs(['Warning: ...']);
// import {
//   HomeScreen, 
//   SearchScreen,
//   LoginScreen,
//   ChatScreen,
//   NotificationScreen,
//   SettingsScreen,
//   AuthScreen,
//   BlogScreen,
//   AddblogScreen,
//   RegisterScreen
// } from '../Containers/'


const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function tabNavigation() {
  return (
    < >
      <Tab.Navigator
       initialRouteName={'BlogScreen'}
       screenOptions={({ route, navigation }) => ({
         gestureDirection: "horizontal",
         ...TransitionPresets.SlideFromRightIOS
       })}
       animation="fade"
       headerMode="none"
      >
        <Tab.Screen name="BlogScreen" component={BlogScreen} />
        <Tab.Screen name="SearchScreen" component={SearchScreen} />
        <Tab.Screen name="ChatScreen" component={ChatScreen} />
        <Tab.Screen name="NotificationScreen" component={NotificationScreen} />
        <Tab.Screen name="SettingsScreen" component={SettingsScreen} />
      </Tab.Navigator>
    </>
  );
}
function MainStackNavigator() {
  const navigationRef = React.useRef();
  return (

    <NavigationContainer 
      ref={navigationRef}
    >
     <Stack.Navigator 
      initialRouteName={'AuthScreen'}
      screenOptions={({ route, navigation }) => ({
        gestureDirection: "horizontal",
        ...TransitionPresets.SlideFromRightIOS
      })}
      animation="fade"
      headerMode="none">
        <Stack.Screen
        name='AuthScreen' component={AuthScreen} />
        <Stack.Screen 
        options={{gestureEnabled: false}}
        name='BlogScreen' component={tabNavigation}
        />
        <Stack.Screen name='HomeScreen' component={HomeScreen} />
        <Stack.Screen name='AddblogScreen' component={AddblogScreen} />
        <Stack.Screen name='RegisterScreen' component={RegisterScreen} />
        <Stack.Screen name='LoginScreen' component={LoginScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
export default MainStackNavigator

